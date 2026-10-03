import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

function SchemeCard({ scheme }) {
  const [explanation, setExplanation] = useState('');
  const [simplified, setSimplified] = useState('');
  const [loadingExplain, setLoadingExplain] = useState(false);
  const [loadingSimplify, setLoadingSimplify] = useState(false);
  const [error, setError] = useState('');

  let criteria = scheme.eligibility_criteria;
  if (typeof criteria === 'string') {
    try {
      criteria = JSON.parse(criteria);
    } catch {
      criteria = {};
    }
  }

  const isFemaleSpecific = criteria?.genders?.some(
    (g) => String(g).toLowerCase() === 'female'
  ) && !criteria?.genders?.some((g) => String(g).toLowerCase() === 'all');

  async function handleExplain() {
    setError('');
    setLoadingExplain(true);

    try {
      const { data } = await api.post(`/schemes/${scheme.id}/explain`);
      setExplanation(data.explanation);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Could not generate explanation.'
      );
    } finally {
      setLoadingExplain(false);
    }
  }

  async function handleSimplify() {
    setError('');
    setLoadingSimplify(true);

    try {
      const { data } = await api.post(`/schemes/${scheme.id}/simplify`);
      setSimplified(data.simplified);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Could not simplify description.'
      );
    } finally {
      setLoadingSimplify(false);
    }
  }

  return (
    <div className="card transition-all hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            {scheme.scheme_name}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="shrink-0 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {scheme.category}
            </span>
            {isFemaleSpecific ? (
              <span className="shrink-0 rounded-full bg-pink-50 border border-pink-200 px-3 py-1 text-xs font-semibold text-pink-700">
                👩 Female Only
              </span>
            ) : (
              <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                👥 All Genders
              </span>
            )}
            {criteria?.max_income && (
              <span className="shrink-0 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-medium text-emerald-700">
                💰 Max ₹{(Number(criteria.max_income) / 100000).toFixed(criteria.max_income % 100000 === 0 ? 0 : 1)}L/yr
              </span>
            )}
            {criteria?.min_age !== undefined && criteria?.max_age !== undefined && (
              <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                🎂 Age {criteria.min_age}–{criteria.max_age}
              </span>
            )}
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {simplified || scheme.description}
      </p>

      {error && (
        <p className="mt-3 text-sm text-red-600">
          {error}
        </p>
      )}

      {explanation && (
        <div className="mt-4 rounded-lg border border-accent-100 bg-accent-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
            Why this matches you
          </p>

          <p className="mt-1 text-sm text-slate-700">
            {explanation}
          </p>
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          onClick={handleExplain}
          disabled={loadingExplain || !!explanation}
          className="btn-primary !px-4 !py-2 text-sm"
        >
          {loadingExplain
            ? 'Thinking...'
            : explanation
            ? 'Explained ✓'
            : 'Why does this match me?'}
        </button>

        <button
          onClick={handleSimplify}
          disabled={loadingSimplify || !!simplified}
          className="btn-secondary !px-4 !py-2 text-sm"
        >
          {loadingSimplify
            ? 'Simplifying...'
            : simplified
            ? 'Simplified ✓'
            : 'Simplify description'}
        </button>

        <a
          href={
            scheme.application_url && scheme.application_url.trim()
              ? scheme.application_url.trim()
              : `https://www.myscheme.gov.in/search?q=${encodeURIComponent(scheme.scheme_name)}`
          }
          target="_blank"
          rel="noopener noreferrer"
          className="btn-apply !px-4 !py-2 text-sm group"
          title={
            scheme.application_url && scheme.application_url.trim()
              ? `Apply for ${scheme.scheme_name}`
              : `Search & apply for ${scheme.scheme_name} on the official national portal`
          }
        >
          <span>Apply Now</span>
          <svg
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Recommendations() {
  const [profile, setProfile] = useState(null);
  const [schemes, setSchemes] = useState([]);
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGenderFilter, setSelectedGenderFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  /*
   * Recommendations page background
   */
  useEffect(() => {
    const originalBackground = document.body.style.background;
    const originalBackgroundImage = document.body.style.backgroundImage;
    const originalBackgroundAttachment = document.body.style.backgroundAttachment;
    const originalBackgroundSize = document.body.style.backgroundSize;

    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';

    return () => {
      document.body.style.background = originalBackground;
      document.body.style.backgroundImage = originalBackgroundImage;
      document.body.style.backgroundAttachment = originalBackgroundAttachment;
      document.body.style.backgroundSize = originalBackgroundSize;
    };
  }, []);

  /*
   * Fetch user profile and recommended schemes
   */
  useEffect(() => {
    async function loadData() {
      try {
        const [profileRes, recRes] = await Promise.all([
          api.get('/profile').catch(() => null),
          api.get('/recommendations'),
        ]);

        if (profileRes?.data?.profile) {
          setProfile(profileRes.data.profile);
        }
        setSchemes(recRes.data.schemes || []);
        setFilteredSchemes(recRes.data.schemes || []);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            'Could not load recommendations. Please complete your profile.'
        );
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  /*
   * Dynamic frontend filter on already-eligible schemes
   */
  useEffect(() => {
    let result = schemes;

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (s) =>
          s.scheme_name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter((s) => s.category === selectedCategory);
    }

    if (selectedGenderFilter !== 'All') {
      result = result.filter((s) => {
        let crit = s.eligibility_criteria;
        if (typeof crit === 'string') {
          try {
            crit = JSON.parse(crit);
          } catch {
            crit = {};
          }
        }
        const isFemale = crit?.genders?.some((g) => String(g).toLowerCase() === 'female') &&
          !crit?.genders?.some((g) => String(g).toLowerCase() === 'all');

        if (selectedGenderFilter === 'Female') return isFemale;
        if (selectedGenderFilter === 'Open') return !isFemale;
        return true;
      });
    }

    setFilteredSchemes(result);
  }, [searchTerm, selectedCategory, selectedGenderFilter, schemes]);

  const categories = ['All', ...new Set(schemes.map((s) => s.category))];

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Your Recommended Schemes
            </h1>
            <p className="mt-1 text-slate-600">
              Schemes matched against your profile using deterministic eligibility rules.
            </p>
          </div>
          <Link to="/profile" className="btn-secondary text-sm">
            ⚙️ Edit Profile &amp; Filters
          </Link>
        </div>

        {/* Active Profile Filter Segment Display */}
        {profile && (
          <div className="mt-6 rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Active Profile Matching Filters
              </span>
              <span className="text-xs font-medium text-brand-600">
                {schemes.length} schemes qualified
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 border border-indigo-200 px-3 py-1 text-xs font-medium text-indigo-700">
                👤 Gender: <strong className="font-semibold">{profile.gender || 'Not specified'}</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700">
                🎂 Age: <strong className="font-semibold">{profile.age}</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-medium text-amber-800">
                💼 Occupation: <strong className="font-semibold">{profile.occupation}</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-medium text-emerald-700">
                💰 Income: <strong className="font-semibold">₹{Number(profile.annual_income).toLocaleString('en-IN')}/yr</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-sky-50 border border-sky-200 px-3 py-1 text-xs font-medium text-sky-700">
                📍 State: <strong className="font-semibold">{profile.state}</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-purple-50 border border-purple-200 px-3 py-1 text-xs font-medium text-purple-700">
                🏷️ Category: <strong className="font-semibold">{profile.social_category || 'General'}</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-teal-50 border border-teal-200 px-3 py-1 text-xs font-medium text-teal-700">
                🎓 Education: <strong className="font-semibold">{profile.education}</strong>
              </span>
            </div>
          </div>
        )}

        {/* Quick Search & Filter Controls */}
        {!loading && !error && schemes.length > 0 && (
          <div className="mt-6 space-y-3">
            <div className="grid gap-3 sm:grid-cols-3">
              <input
                type="text"
                placeholder="Search matching schemes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field col-span-1 sm:col-span-1 text-sm"
              />

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field text-sm"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c === 'All' ? 'All Categories' : c}
                  </option>
                ))}
              </select>

              <select
                value={selectedGenderFilter}
                onChange={(e) => setSelectedGenderFilter(e.target.value)}
                className="input-field text-sm"
              >
                <option value="All">All Gender Eligibility</option>
                <option value="Female">Female-Targeted Schemes</option>
                <option value="Open">Universal / General Schemes</option>
              </select>
            </div>
          </div>
        )}

        {loading && (
          <p className="mt-8 text-slate-500">
            Finding your matches...
          </p>
        )}

        {!loading && error && (
          <div className="card mt-8 text-center">
            <p className="text-slate-700">
              {error}
            </p>

            <Link
              to="/profile"
              className="btn-primary mt-4 inline-flex"
            >
              Complete Your Profile
            </Link>
          </div>
        )}

        {!loading && !error && schemes.length === 0 && (
          <div className="card mt-8 text-center">
            <p className="text-slate-700">
              No matching schemes found yet for your current profile. Try updating your details — new schemes are added regularly.
            </p>

            <Link
              to="/profile"
              className="btn-secondary mt-4 inline-flex"
            >
              Update Profile
            </Link>
          </div>
        )}

        {!loading && !error && schemes.length > 0 && filteredSchemes.length === 0 && (
          <div className="card mt-8 text-center">
            <p className="text-slate-700">
              No schemes match your current search/filter combination.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedGenderFilter('All');
              }}
              className="btn-secondary mt-3 inline-flex text-xs"
            >
              Clear Filters
            </button>
          </div>
        )}

        {!loading && !error && filteredSchemes.length > 0 && (
          <div className="mt-6 space-y-6">
            {filteredSchemes.map((scheme) => (
              <SchemeCard
                key={scheme.id}
                scheme={scheme}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}