/**
 * Deterministic eligibility filtering logic.
 * This is intentionally simple and rule-based — Gemini is NEVER used
 * to decide eligibility. It only explains matches after the fact.
 *
 * criteria shape (parsed JSON from schemes.eligibility_criteria):
 * {
 *   min_age, max_age,
 *   states: ["All"] | [...],
 *   occupations: ["All"] | [...],
 *   max_income,
 *   education: ["All"] | [...]
 * }
 */

function normalize(value) {
  return String(value || '').trim().toLowerCase();
}

function matchesList(userValue, list) {
  if (!list || !Array.isArray(list) || list.length === 0) return true;
  if (list.some((item) => normalize(item) === 'all')) return true;
  if (!userValue) return false;
  return list.some((item) => normalize(item) === normalize(userValue));
}

function isEligible(profile, criteriaRaw) {
  if (!profile) return false;
  if (!criteriaRaw) return true;

  let criteria = criteriaRaw;
  if (typeof criteriaRaw === 'string') {
    try {
      criteria = JSON.parse(criteriaRaw);
    } catch {
      return true;
    }
  }

  const userAge = Number(profile.age);
  const userGender = profile.gender;
  const userIncome = Number(profile.annual_income);
  const userState = profile.state;
  const userOccupation = profile.occupation;
  const userEducation = profile.education;
  const userSocialCategory = profile.social_category || 'General';

  // Gender check (e.g. ['All'], ['Female'], ['Male'], ['Transgender'])
  if (criteria.genders && !matchesList(userGender, criteria.genders)) {
    return false;
  }
  if (criteria.gender && typeof criteria.gender === 'string') {
    if (normalize(criteria.gender) !== 'all' && normalize(userGender) !== normalize(criteria.gender)) {
      return false;
    }
  }

  // Age check
  if (
    criteria.min_age !== undefined &&
    criteria.min_age !== null &&
    !isNaN(userAge) &&
    userAge < Number(criteria.min_age)
  ) {
    return false;
  }

  if (
    criteria.max_age !== undefined &&
    criteria.max_age !== null &&
    !isNaN(userAge) &&
    userAge > Number(criteria.max_age)
  ) {
    return false;
  }

  // State check
  if (criteria.states && !matchesList(userState, criteria.states)) {
    return false;
  }

  // Occupation check
  if (criteria.occupations && !matchesList(userOccupation, criteria.occupations)) {
    return false;
  }

  // Income check (scheme sets a maximum eligible income)
  if (
    criteria.max_income !== undefined &&
    criteria.max_income !== null &&
    !isNaN(userIncome) &&
    userIncome > Number(criteria.max_income)
  ) {
    return false;
  }

  // Education check
  if (criteria.education && !matchesList(userEducation, criteria.education)) {
    return false;
  }

  // Social Category check (SC, ST, OBC, General, EWS)
  if (criteria.social_categories && !matchesList(userSocialCategory, criteria.social_categories)) {
    return false;
  }

  return true;
}

/**
 * Filters an array of schemes against a user profile.
 * Returns only the schemes the user is eligible for.
 */
function filterEligibleSchemes(profile, schemes) {
  if (!schemes || !Array.isArray(schemes)) return [];
  return schemes.filter((scheme) =>
    isEligible(profile, scheme.eligibility_criteria)
  );
}

module.exports = { isEligible, filterEligibleSchemes };
