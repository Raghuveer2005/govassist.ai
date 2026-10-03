const fs = require('fs');
const path = require('path');

// 300 Comprehensive Indian Government Schemes
const schemes = [
  // --- 1. HEALTHCARE & MEDICAL (1-25) ---
  {
    scheme_name: 'Ayushman Bharat – PM-JAY',
    category: 'Healthcare',
    description: 'Provides health insurance coverage of up to Rs. 5 lakh per family per year for secondary and tertiary care hospitalization to poor and vulnerable families across empaneled hospitals nationwide.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 500000, education: ['All'] }
  },
  {
    scheme_name: 'Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)',
    category: 'Healthcare',
    description: 'Provides quality generic medicines at 50% to 90% lesser prices than branded equivalents through dedicated Jan Aushadhi Kendras across India.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'National Health Mission (NHM) Free Diagnostic Service',
    category: 'Healthcare',
    description: 'Provides essential diagnostic laboratory and radiology tests free of cost in government healthcare facilities across rural and urban districts.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 600000, education: ['All'] }
  },
  {
    scheme_name: 'Pradhan Mantri National Dialysis Programme (PMNDP)',
    category: 'Healthcare',
    description: 'Provides free hemodialysis care to Below Poverty Line (BPL) renal patients and subsidized dialysis to non-BPL patients at district hospitals.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 300000, education: ['All'] }
  },
  {
    scheme_name: 'Rashtriya Arogya Nidhi (RAN)',
    category: 'Healthcare',
    description: 'Financial assistance up to Rs. 15 lakh for patients living below the poverty line suffering from major life-threatening diseases receiving treatment at super-specialty government hospitals.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 250000, education: ['All'] }
  },
  {
    scheme_name: 'Health Minister\'s Cancer Patient Fund (HMCPF)',
    category: 'Healthcare',
    description: 'Offers financial support up to Rs. 5 lakh for poor cancer patients undergoing treatment at 27 Regional Cancer Centres across India.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 300000, education: ['All'] }
  },
  {
    scheme_name: 'National Programme for Prevention and Control of Cancer, Diabetes, CVD and Stroke (NPCDCS)',
    category: 'Healthcare',
    description: 'Opportunistic screening, diagnosis, and subsidized treatment for chronic non-communicable lifestyle diseases for adults aged 30 and above.',
    eligibility_criteria: { min_age: 30, max_age: 100, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 5000000, education: ['All'] }
  },
  {
    scheme_name: 'National Tuberculosis Elimination Programme (NTEP) – Ni-kshay Poshan Yojana',
    category: 'Healthcare',
    description: 'Monthly direct cash benefit of Rs. 500 deposited into bank accounts of tuberculosis patients for nutritional support throughout the treatment duration.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 800000, education: ['All'] }
  },
  {
    scheme_name: 'Mission Indradhanush (Universal Immunization)',
    category: 'Healthcare',
    description: 'Full immunization coverage against 12 vaccine-preventable life-threatening diseases for pregnant women and children under two years of age.',
    eligibility_criteria: { min_age: 0, max_age: 45, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'Janani Shishu Suraksha Karyakaram (JSSK)',
    category: 'Healthcare',
    description: 'Guarantees completely free, cashless institutional deliveries, C-sections, drugs, diagnostics, diet, and emergency transport for pregnant women and sick neonates.',
    eligibility_criteria: { min_age: 18, max_age: 45, genders: ['Female'], states: ['All'], occupations: ['All'], max_income: 600000, education: ['All'] }
  },
  {
    scheme_name: 'Janani Suraksha Yojana (JSY)',
    category: 'Healthcare',
    description: 'Safe motherhood intervention providing direct cash assistance of Rs. 1,400 to rural mothers and Rs. 1,000 to urban mothers delivering in institutional healthcare centres.',
    eligibility_criteria: { min_age: 19, max_age: 45, genders: ['Female'], states: ['All'], occupations: ['All'], max_income: 400000, education: ['All'] }
  },
  {
    scheme_name: 'Ayushman Bharat Digital Mission (ABHA)',
    category: 'Healthcare',
    description: 'Creates unified digital health accounts (ABHA IDs) allowing citizens to securely store, access, and share electronic health records and lab reports nationwide.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'Chief Minister Comprehensive Health Insurance Scheme (CMCHIS – Tamil Nadu)',
    category: 'Healthcare',
    description: 'Provides cashless hospital coverage up to Rs. 5 lakh per family per year for secondary and tertiary care in Tamil Nadu empaneled hospitals.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['Tamil Nadu'], occupations: ['All'], max_income: 120000, education: ['All'] }
  },
  {
    scheme_name: 'Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY – Maharashtra)',
    category: 'Healthcare',
    description: 'Cashless healthcare cover up to Rs. 5 lakh per family annually for 996 identified medical procedures and surgeries across Maharashtra.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['Maharashtra'], occupations: ['All'], max_income: 400000, education: ['All'] }
  },
  {
    scheme_name: 'Mukhyamantri Amrutum Yojana (MAA – Gujarat)',
    category: 'Healthcare',
    description: 'Offers cashless medical treatment up to Rs. 5 lakh per family annually for critical illnesses, cardiac surgeries, and neurosurgeries in Gujarat.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['Gujarat'], occupations: ['All'], max_income: 400000, education: ['All'] }
  },
  {
    scheme_name: 'Dr. YSR Aarogyasri Scheme (Andhra Pradesh)',
    category: 'Healthcare',
    description: 'Provides cashless treatment up to Rs. 25 lakh per family per year for catastrophic illnesses to BPL families in Andhra Pradesh.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['Andhra Pradesh'], occupations: ['All'], max_income: 500000, education: ['All'] }
  },
  {
    scheme_name: 'Arogya Karnataka Scheme',
    category: 'Healthcare',
    description: 'Universal health coverage offering financial protection of up to Rs. 5 lakh per family annually for complex medical and surgical treatments in Karnataka.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['Karnataka'], occupations: ['All'], max_income: 500000, education: ['All'] }
  },
  {
    scheme_name: 'Swasthya Sathi Scheme (West Bengal)',
    category: 'Healthcare',
    description: 'Smart-card based cashless health insurance of Rs. 5 lakh per family per year issued in the name of the woman head of the family in West Bengal.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['West Bengal'], occupations: ['All'], max_income: 600000, education: ['All'] }
  },
  {
    scheme_name: 'Biju Swasthya Kalyan Yojana (BSKY – Odisha)',
    category: 'Healthcare',
    description: 'Health safety net giving cashless hospital treatment up to Rs. 5 lakh per family and Rs. 10 lakh for women members annually in Odisha.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['Odisha'], occupations: ['All'], max_income: 500000, education: ['All'] }
  },
  {
    scheme_name: 'Mukhyamantri Chiranjeevi Swasthya Bima Yojana (Rajasthan)',
    category: 'Healthcare',
    description: 'Universal health insurance giving cashless hospitalization cover up to Rs. 25 lakh per family for critical and general surgeries in Rajasthan.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['Rajasthan'], occupations: ['All'], max_income: 800000, education: ['All'] }
  },
  {
    scheme_name: 'Karunya Health Scheme (KASP – Kerala)',
    category: 'Healthcare',
    description: 'Provides cashless medical benefit package up to Rs. 5 lakh per poor family per year across government and empanelled private hospitals in Kerala.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['Kerala'], occupations: ['All'], max_income: 300000, education: ['All'] }
  },
  {
    scheme_name: 'Chief Minister Health Insurance Scheme (CMHIS – Nagaland)',
    category: 'Healthcare',
    description: 'Provides health insurance protection up to Rs. 5 lakh per family per year for indigenous citizens of Nagaland.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['Nagaland'], occupations: ['All'], max_income: 800000, education: ['All'] }
  },
  {
    scheme_name: 'Ayushman Bharat Senior Citizen Health Coverage (Top-Up)',
    category: 'Healthcare',
    description: 'Dedicated distinct health insurance top-up of Rs. 5 lakh per year exclusively for senior citizens aged 70 and above, regardless of income.',
    eligibility_criteria: { min_age: 70, max_age: 100, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'PM Poshan Abhiyaan – Adolescent Anaemia Control',
    category: 'Healthcare',
    description: 'Weekly Iron and Folic Acid Supplementation (WIFS) and bi-annual deworming tablets distributed through schools and Anganwadis to curb anaemia in adolescents.',
    eligibility_criteria: { min_age: 10, max_age: 19, genders: ['All'], states: ['All'], occupations: ['Student', 'Unemployed'], max_income: 600000, education: ['All'] }
  },
  {
    scheme_name: 'National Leprosy Eradication Programme (Disability Prevention)',
    category: 'Healthcare',
    description: 'Free multi-drug therapy treatment, reconstructive surgery reimbursement up to Rs. 12,000, and supportive footwear/aids for leprosy-cured patients.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 400000, education: ['All'] }
  }
];

// Helper to push schemes programmatically
function addSchemes(list) {
  for (const item of list) {
    schemes.push(item);
  }
}

// --- 2. AGRICULTURE, FARMING & ALLIED SECTORS (26-65) ---
addSchemes([
  {
    scheme_name: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    category: 'Agriculture',
    description: 'Direct income support of Rs. 6,000 per year in three equal installments of Rs. 2,000 directly transferred to bank accounts of all landholding farmer families.',
    eligibility_criteria: { min_age: 18, max_age: 100, genders: ['All'], states: ['All'], occupations: ['Farmer'], max_income: 1500000, education: ['All'] }
  },
  {
    scheme_name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    category: 'Agriculture',
    description: 'Comprehensive crop insurance policy protecting farmers against non-preventable natural risks (drought, flood, pests) at low premium rates (1.5%-2%).',
    eligibility_criteria: { min_age: 18, max_age: 85, genders: ['All'], states: ['All'], occupations: ['Farmer'], max_income: 2500000, education: ['All'] }
  },
  {
    scheme_name: 'Kisan Credit Card (KCC) Scheme',
    category: 'Agriculture',
    description: 'Subsidized institutional credit up to Rs. 3 lakh at 4% effective interest rate for crop cultivation expenses, farm maintenance, and harvest storage.',
    eligibility_criteria: { min_age: 18, max_age: 75, genders: ['All'], states: ['All'], occupations: ['Farmer'], max_income: 3000000, education: ['All'] }
  },
  {
    scheme_name: 'Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)',
    category: 'Agriculture',
    description: 'Financial subsidy up to 55% for small/marginal farmers to adopt micro-irrigation (drip and sprinkler systems) for efficient on-farm water management.',
    eligibility_criteria: { min_age: 18, max_age: 80, genders: ['All'], states: ['All'], occupations: ['Farmer'], max_income: 2500000, education: ['All'] }
  },
  {
    scheme_name: 'Soil Health Card Scheme',
    category: 'Agriculture',
    description: 'Free soil testing and customized crop-wise fertilizer recommendations issued every 2 years to enhance soil nutrient balance and farm productivity.',
    eligibility_criteria: { min_age: 18, max_age: 90, genders: ['All'], states: ['All'], occupations: ['Farmer'], max_income: 3000000, education: ['All'] }
  },
  {
    scheme_name: 'Paramparagat Krishi Vikas Yojana (PKVY)',
    category: 'Agriculture',
    description: 'Financial assistance of Rs. 50,000 per hectare for 3 years to support farmers adopting certified chemical-free organic farming practices and PGS certification.',
    eligibility_criteria: { min_age: 18, max_age: 75, genders: ['All'], states: ['All'], occupations: ['Farmer'], max_income: 2000000, education: ['All'] }
  },
  {
    scheme_name: 'Sub-Mission on Agricultural Mechanization (SMAM)',
    category: 'Agriculture',
    description: 'Provides 40% to 50% capital subsidy to small and marginal farmers for purchasing modern tractors, power tillers, seed drills, and harvesters.',
    eligibility_criteria: { min_age: 18, max_age: 75, genders: ['All'], states: ['All'], occupations: ['Farmer'], max_income: 2500000, education: ['All'] }
  },
  {
    scheme_name: 'National Agriculture Market (e-NAM)',
    category: 'Agriculture',
    description: 'Pan-India electronic trading portal networking existing APMC mandis to create a unified national market for agricultural commodities with transparent online price bidding.',
    eligibility_criteria: { min_age: 18, max_age: 85, genders: ['All'], states: ['All'], occupations: ['Farmer', 'Business Owner', 'Self-Employed'], max_income: 5000000, education: ['All'] }
  },
  {
    scheme_name: 'Agriculture Infrastructure Fund (AIF)',
    category: 'Agriculture',
    description: 'Medium-long term debt financing facility with 3% interest subvention for post-harvest management infrastructure, cold chains, silos, and primary processing units.',
    eligibility_criteria: { min_age: 21, max_age: 70, genders: ['All'], states: ['All'], occupations: ['Farmer', 'Entrepreneur', 'Business Owner'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'PM-KUSUM Component A & B (Solar Agriculture Pumps)',
    category: 'Renewable Energy',
    description: 'Offers up to 60% subsidy for farmers to install standalone solar water pumps or solarize existing grid-connected tube wells to reduce electricity bills.',
    eligibility_criteria: { min_age: 18, max_age: 80, genders: ['All'], states: ['All'], occupations: ['Farmer', 'Self-Employed'], max_income: 3000000, education: ['All'] }
  },
  {
    scheme_name: 'Pradhan Mantri Matsya Sampada Yojana (PMMSY)',
    category: 'Fisheries',
    description: 'Subsidies up to 40% for general beneficiaries and 60% for SC/ST/women for fish farming ponds, biofloc units, cages, feed mills, and refrigerated transport.',
    eligibility_criteria: { min_age: 18, max_age: 70, genders: ['All'], states: ['All'], occupations: ['Farmer', 'Self-Employed', 'Entrepreneur'], max_income: 2000000, education: ['All'] }
  },
  {
    scheme_name: 'Rashtriya Gokul Mission (RGM)',
    category: 'Animal Husbandry',
    description: 'Enhances milk production and indigenous bovine genetics by providing subsidized sex-sorted semen, artificial insemination, and breed development grants.',
    eligibility_criteria: { min_age: 18, max_age: 75, genders: ['All'], states: ['All'], occupations: ['Farmer', 'Self-Employed'], max_income: 2000000, education: ['All'] }
  },
  {
    scheme_name: 'National Livestock Mission (NLM)',
    category: 'Animal Husbandry',
    description: 'Offers 50% capital subsidy up to Rs. 50 lakh for setting up sheep, goat, piggery, and poultry breeding farms and feed/fodder processing units.',
    eligibility_criteria: { min_age: 18, max_age: 70, genders: ['All'], states: ['All'], occupations: ['Farmer', 'Self-Employed', 'Entrepreneur'], max_income: 5000000, education: ['All'] }
  },
  {
    scheme_name: 'Dairy Processing and Infrastructure Development Fund (DIDF)',
    category: 'Animal Husbandry',
    description: 'Concessional loan assistance through NABARD for modernization of dairy plants, milk chilling centers, and bulk milk coolers in rural cooperatives.',
    eligibility_criteria: { min_age: 21, max_age: 70, genders: ['All'], states: ['All'], occupations: ['Farmer', 'Business Owner', 'Entrepreneur'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'National Beekeeping and Honey Mission (NBHM)',
    category: 'Agriculture',
    description: 'Provides 80% subsidy on beehives, bee colonies, and honey extraction equipment for small farmers to promote Sweet Revolution and secondary farm income.',
    eligibility_criteria: { min_age: 18, max_age: 70, genders: ['All'], states: ['All'], occupations: ['Farmer', 'Self-Employed', 'Unemployed'], max_income: 1500000, education: ['All'] }
  },
  {
    scheme_name: 'Rythu Bandhu Scheme (Telangana)',
    category: 'Agriculture',
    description: 'Investment support of Rs. 10,000 per acre per year (Rs. 5,000 per season) to all landowning farmers in Telangana for purchase of seeds, fertilizers, and inputs.',
    eligibility_criteria: { min_age: 18, max_age: 100, genders: ['All'], states: ['Telangana'], occupations: ['Farmer'], max_income: 2000000, education: ['All'] }
  },
  {
    scheme_name: 'Dr. YSR Rythu Bharosa (Andhra Pradesh)',
    category: 'Agriculture',
    description: 'Provides financial assistance of Rs. 13,500 per year to landholding and tenant farmer families in Andhra Pradesh to meet agricultural expenses.',
    eligibility_criteria: { min_age: 18, max_age: 90, genders: ['All'], states: ['Andhra Pradesh'], occupations: ['Farmer'], max_income: 1500000, education: ['All'] }
  },
  {
    scheme_name: 'Krushak Assistance for Livelihood and Income Augmentation (KALIA – Odisha)',
    category: 'Agriculture',
    description: 'Financial aid of Rs. 10,000 per family per year for small and marginal farmers and Rs. 12,500 for landless agricultural laborers in Odisha.',
    eligibility_criteria: { min_age: 18, max_age: 80, genders: ['All'], states: ['Odisha'], occupations: ['Farmer', 'Unemployed'], max_income: 400000, education: ['All'] }
  },
  {
    scheme_name: 'Krishi Bhagya Scheme (Karnataka)',
    category: 'Agriculture',
    description: 'Subsidies up to 80% for constructing on-farm farm ponds (Krishi Honda), polythene lining, diesel pumps, and micro-irrigation systems in dryland areas of Karnataka.',
    eligibility_criteria: { min_age: 18, max_age: 75, genders: ['All'], states: ['Karnataka'], occupations: ['Farmer'], max_income: 1000000, education: ['All'] }
  },
  {
    scheme_name: 'Bhavantar Bhugtan Yojana (Madhya Pradesh)',
    category: 'Agriculture',
    description: 'Price deficiency relief scheme reimbursing farmers the gap between Minimum Support Price (MSP) and actual market selling price in MP mandis.',
    eligibility_criteria: { min_age: 18, max_age: 85, genders: ['All'], states: ['Madhya Pradesh'], occupations: ['Farmer'], max_income: 2000000, education: ['All'] }
  },
  {
    scheme_name: 'Chief Minister Solar Pump Scheme (Maharashtra)',
    category: 'Agriculture',
    description: 'Provides subsidized off-grid solar agriculture pumps with 90% to 95% government subsidy for farmers without conventional electric grid connections.',
    eligibility_criteria: { min_age: 18, max_age: 80, genders: ['All'], states: ['Maharashtra'], occupations: ['Farmer'], max_income: 1500000, education: ['All'] }
  },
  {
    scheme_name: 'Mukhyamantri Krishi Ashirwad Yojana (Jharkhand)',
    category: 'Agriculture',
    description: 'Financial assistance between Rs. 5,000 to Rs. 25,000 per year per beneficiary depending on farm size to support input costs for Jharkhand farmers.',
    eligibility_criteria: { min_age: 18, max_age: 80, genders: ['All'], states: ['Jharkhand'], occupations: ['Farmer'], max_income: 800000, education: ['All'] }
  },
  {
    scheme_name: 'Kisan Kalyan Mission (Uttar Pradesh)',
    category: 'Agriculture',
    description: 'Comprehensive agricultural transformation program providing free technical training, certified high-yield seed kits, and micro-loan linkage in UP.',
    eligibility_criteria: { min_age: 18, max_age: 75, genders: ['All'], states: ['Uttar Pradesh'], occupations: ['Farmer'], max_income: 1200000, education: ['All'] }
  },
  {
    scheme_name: 'Punjab Free Electricity for Agriculture Tube Wells',
    category: 'Agriculture',
    description: 'Provides 100% subsidized free agricultural electricity supply to registered farming tube wells and motors across Punjab.',
    eligibility_criteria: { min_age: 18, max_age: 90, genders: ['All'], states: ['Punjab'], occupations: ['Farmer'], max_income: 3000000, education: ['All'] }
  },
  {
    scheme_name: 'Pashu Kisan Credit Card (Haryana)',
    category: 'Animal Husbandry',
    description: 'Low-interest short-term credit cards offering up to Rs. 1.60 lakh collateral-free loans for cattle, buffalo, sheep, and goat maintenance in Haryana.',
    eligibility_criteria: { min_age: 18, max_age: 75, genders: ['All'], states: ['Haryana'], occupations: ['Farmer', 'Self-Employed'], max_income: 1500000, education: ['All'] }
  },
  {
    scheme_name: 'Mission Organic Value Chain Development for NE Region (MOVCDNER)',
    category: 'Agriculture',
    description: 'Dedicated financial and technical support for developing end-to-end organic farming, collection centres, processing units, and marketing brands in North-East states.',
    eligibility_criteria: { min_age: 18, max_age: 70, genders: ['All'], states: ['Assam', 'Arunachal Pradesh', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Sikkim', 'Tripura'], occupations: ['Farmer', 'Entrepreneur'], max_income: 2000000, education: ['All'] }
  },
  {
    scheme_name: 'Sub-Mission on Seeds and Planting Material (SMSP)',
    category: 'Agriculture',
    description: 'Distributes certified foundation and hybrid seed minikits at subsidized prices to boost crop yield and replace degraded seed varieties.',
    eligibility_criteria: { min_age: 18, max_age: 80, genders: ['All'], states: ['All'], occupations: ['Farmer'], max_income: 1500000, education: ['All'] }
  },
  {
    scheme_name: 'Agri-Clinics and Agri-Business Centres Scheme (ACABC)',
    category: 'Agriculture',
    description: 'Offers 36% to 44% composite subsidy and bank loans up to Rs. 20 lakh to agriculture graduates setting up agri-consultancies, seed testing labs, and farm clinics.',
    eligibility_criteria: { min_age: 21, max_age: 50, genders: ['All'], states: ['All'], occupations: ['Student', 'Self-Employed', 'Entrepreneur'], max_income: 1500000, education: ['Graduate', 'Post Graduate', 'Doctorate'] }
  },
  {
    scheme_name: 'National Mission for Sustainable Agriculture (NMSA – Rainfed Area Development)',
    category: 'Agriculture',
    description: 'Grants up to 50% for farmers adopting integrated farming systems (IFS) combining horticulture, livestock, agroforestry, and crop rotation in rainfed zones.',
    eligibility_criteria: { min_age: 18, max_age: 75, genders: ['All'], states: ['All'], occupations: ['Farmer'], max_income: 1200000, education: ['All'] }
  },
  {
    scheme_name: 'Mission for Integrated Development of Horticulture (MIDH)',
    category: 'Agriculture',
    description: 'Capital subsidy of 40% to 50% for establishing commercial fruit orchards, polyhouse greenhouses, tissue culture units, and mushroom farming.',
    eligibility_criteria: { min_age: 18, max_age: 70, genders: ['All'], states: ['All'], occupations: ['Farmer', 'Self-Employed', 'Entrepreneur'], max_income: 3000000, education: ['All'] }
  }
]);

// Helper to add categories dynamically
console.log(`Generated first ${schemes.length} schemes...`);

// --- 3. EDUCATION & SCHOLARSHIPS (66-125) ---
const educationSchemes = [
  {
    scheme_name: 'National Means-cum-Merit Scholarship Scheme (NMMSS)',
    category: 'Education',
    description: 'Awards scholarships of Rs. 12,000 per annum to meritorious students of economically weaker sections studying in classes IX to XII in government schools.',
    eligibility_criteria: { min_age: 12, max_age: 20, genders: ['All'], states: ['All'], occupations: ['Student'], max_income: 350000, education: ['8th Pass', '9th Pass', '10th Pass', '12th Pass'] }
  },
  {
    scheme_name: 'Central Sector Scheme of Scholarship for College and University Students',
    category: 'Education',
    description: 'Financial aid of Rs. 12,000 to Rs. 20,000 per annum to meritorious students above 80th percentile in Class 12 pursuing regular degree courses.',
    eligibility_criteria: { min_age: 17, max_age: 28, genders: ['All'], states: ['All'], occupations: ['Student'], max_income: 450000, education: ['12th Pass', 'Graduate', 'Post Graduate'] }
  },
  {
    scheme_name: 'Post-Matric Scholarship for SC Students',
    category: 'Education',
    description: '100% tuition fee reimbursement and monthly maintenance allowances up to Rs. 13,500/yr for Scheduled Caste students pursuing post-secondary higher education.',
    eligibility_criteria: { min_age: 15, max_age: 35, genders: ['All'], states: ['All'], occupations: ['Student'], max_income: 250000, education: ['10th Pass', '12th Pass', 'Graduate', 'Post Graduate'], social_categories: ['SC'] }
  },
  {
    scheme_name: 'Post-Matric Scholarship for ST Students',
    category: 'Education',
    description: 'Complete fee waiver and living allowance for Scheduled Tribe students studying in recognized colleges, polytechnics, and universities across India.',
    eligibility_criteria: { min_age: 15, max_age: 35, genders: ['All'], states: ['All'], occupations: ['Student'], max_income: 250000, education: ['10th Pass', '12th Pass', 'Graduate', 'Post Graduate'], social_categories: ['ST'] }
  },
  {
    scheme_name: 'Post-Matric Scholarship for OBC Students',
    category: 'Education',
    description: 'Provides non-refundable fee grants and academic maintenance stipends for Other Backward Class students pursuing post-matriculation courses.',
    eligibility_criteria: { min_age: 15, max_age: 35, genders: ['All'], states: ['All'], occupations: ['Student'], max_income: 250000, education: ['10th Pass', '12th Pass', 'Graduate'], social_categories: ['OBC'] }
  },
  {
    scheme_name: 'Top Class Education Scheme for SC Students',
    category: 'Education',
    description: 'Full tuition fee reimbursement, living allowance of Rs. 3,000/month, and computer grant of Rs. 45,000 for SC students admitted to premier notified institutes (IITs, IIMs, AIIMS).',
    eligibility_criteria: { min_age: 17, max_age: 32, genders: ['All'], states: ['All'], occupations: ['Student'], max_income: 800000, education: ['12th Pass', 'Graduate'], social_categories: ['SC'] }
  },
  {
    scheme_name: 'Top Class Education Scheme for ST Students',
    category: 'Education',
    description: 'Covers full tuition fees, non-refundable charges, boarding allowance, and laptop purchase grant for meritorious ST students in premier national institutions.',
    eligibility_criteria: { min_age: 17, max_age: 32, genders: ['All'], states: ['All'], occupations: ['Student'], max_income: 600000, education: ['12th Pass', 'Graduate'], social_categories: ['ST'] }
  },
  {
    scheme_name: 'National Overseas Scholarship for SC/ST Candidates',
    category: 'Education',
    description: 'Full tuition fee sponsorship, annual maintenance allowance of USD 15,400, and airfare for underprivileged students pursuing Master\'s and Ph.D degrees abroad.',
    eligibility_criteria: { min_age: 20, max_age: 35, genders: ['All'], states: ['All'], occupations: ['Student', 'Unemployed'], max_income: 800000, education: ['Graduate', 'Post Graduate'], social_categories: ['SC', 'ST'] }
  },
  {
    scheme_name: 'Pragati Scholarship for Girl Students (Technical Degree/Diploma)',
    category: 'Education',
    description: 'AICTE scheme offering Rs. 50,000 per annum for all 4 years of degree/diploma education to meritorious girl students admitted to technical engineering colleges.',
    eligibility_criteria: { min_age: 16, max_age: 26, genders: ['Female'], states: ['All'], occupations: ['Student'], max_income: 800000, education: ['10th Pass', '12th Pass', 'Graduate'] }
  },
  {
    scheme_name: 'Saksham Scholarship for Divyang Students (Technical Education)',
    category: 'Education',
    description: 'AICTE grant of Rs. 50,000 per year towards tuition and college expenses for specially-abled students with disability >= 40% pursuing technical degrees.',
    eligibility_criteria: { min_age: 16, max_age: 30, genders: ['All'], states: ['All'], occupations: ['Student'], max_income: 800000, education: ['10th Pass', '12th Pass', 'Graduate'] }
  },
  {
    scheme_name: 'AICTE Swanath Scholarship Scheme',
    category: 'Education',
    description: 'Financial support of Rs. 50,000 per year for orphaned students, wards of armed forces martyrs, and children of COVID-deceased parents pursuing higher technical education.',
    eligibility_criteria: { min_age: 16, max_age: 30, genders: ['All'], states: ['All'], occupations: ['Student'], max_income: 800000, education: ['10th Pass', '12th Pass', 'Graduate'] }
  },
  {
    scheme_name: 'Prime Minister\'s Research Fellowship (PMRF)',
    category: 'Education',
    description: 'Prestigious fellowship offering Rs. 70,000 to Rs. 80,000 per month stipend and Rs. 2 lakh annual research grant for meritorious doctoral Ph.D scholars in IITs, IISc, and IISERs.',
    eligibility_criteria: { min_age: 21, max_age: 35, genders: ['All'], states: ['All'], occupations: ['Student'], max_income: 10000000, education: ['Graduate', 'Post Graduate', 'Doctorate'] }
  },
  {
    scheme_name: 'INSPIRE Scholarship for Higher Education (SHE)',
    category: 'Education',
    description: 'Department of Science and Technology scholarship offering Rs. 80,000 per annum (Rs. 5,000/month + mentorship grant) for students pursuing natural and basic science degrees.',
    eligibility_criteria: { min_age: 17, max_age: 25, genders: ['All'], states: ['All'], occupations: ['Student'], max_income: 10000000, education: ['12th Pass', 'Graduate', 'Post Graduate'] }
  },
  {
    scheme_name: 'Kishore Vaigyanik Protsahan Yojana (KVPY / IAT Fellowship)',
    category: 'Education',
    description: 'National fellowship providing monthly stipends up to Rs. 7,000 and annual contingency grants to encourage talented students to pursue research careers in basic sciences.',
    eligibility_criteria: { min_age: 16, max_age: 24, genders: ['All'], states: ['All'], occupations: ['Student'], max_income: 10000000, education: ['12th Pass', 'Graduate'] }
  },
  {
    scheme_name: 'Free Coaching Scheme for SC and OBC Students',
    category: 'Education',
    description: 'Free competitive examination coaching and monthly stipend of Rs. 4,000 for UPSC, SSC, Banking, JEE, NEET, and GATE exams for SC and OBC candidates.',
    eligibility_criteria: { min_age: 18, max_age: 35, genders: ['All'], states: ['All'], occupations: ['Student', 'Unemployed'], max_income: 800000, education: ['12th Pass', 'Graduate'], social_categories: ['SC', 'OBC'] }
  },
  {
    scheme_name: 'Begum Hazrat Mahal National Scholarship for Minority Girls',
    category: 'Education',
    description: 'Scholarship of Rs. 5,000 for class IX-X and Rs. 6,000 for class XI-XII for meritorious girl students belonging to national minority communities.',
    eligibility_criteria: { min_age: 13, max_age: 20, genders: ['Female'], states: ['All'], occupations: ['Student'], max_income: 200000, education: ['8th Pass', '9th Pass', '10th Pass', '12th Pass'] }
  },
  {
    scheme_name: 'Pre-Matric Scholarship for SC Students',
    category: 'Education',
    description: 'Provides financial assistance of Rs. 3,500/year to SC children studying in classes IX and X to prevent dropout rates and incentivize high school completion.',
    eligibility_criteria: { min_age: 12, max_age: 18, genders: ['All'], states: ['All'], occupations: ['Student'], max_income: 250000, education: ['8th Pass', '9th Pass', '10th Pass'], social_categories: ['SC'] }
  },
  {
    scheme_name: 'Pre-Matric Scholarship for ST Students',
    category: 'Education',
    description: 'Annual scholarship assistance of Rs. 3,500 for Day Scholars and Rs. 7,000 for Hostellers studying in classes IX and X from Scheduled Tribe communities.',
    eligibility_criteria: { min_age: 12, max_age: 18, genders: ['All'], states: ['All'], occupations: ['Student'], max_income: 250000, education: ['8th Pass', '9th Pass', '10th Pass'], social_categories: ['ST'] }
  },
  {
    scheme_name: 'Padho Pardesh – Education Loan Interest Subsidy',
    category: 'Education',
    description: 'Provides 100% interest subsidy during the moratorium period on overseas education loans for students from minority communities pursuing Master\'s or Ph.D abroad.',
    eligibility_criteria: { min_age: 20, max_age: 35, genders: ['All'], states: ['All'], occupations: ['Student'], max_income: 600000, education: ['Graduate', 'Post Graduate'] }
  },
  {
    scheme_name: 'Central Sector Interest Subsidy (CSIS) on Education Loans',
    category: 'Education',
    description: 'Complete interest subsidy during course study and moratorium period on education loans up to Rs. 10 lakh for professional courses for students from low-income families.',
    eligibility_criteria: { min_age: 17, max_age: 32, genders: ['All'], states: ['All'], occupations: ['Student'], max_income: 450000, education: ['12th Pass', 'Graduate'] }
  },
  {
    scheme_name: 'Kanyashree Prakalpa (K1 & K2 – West Bengal)',
    category: 'Education',
    description: 'Annual scholarship of Rs. 1,000 (K1) and one-time grant of Rs. 25,000 (K2) upon reaching 18 years for unmarried school-going girls in West Bengal.',
    eligibility_criteria: { min_age: 13, max_age: 19, genders: ['Female'], states: ['West Bengal'], occupations: ['Student'], max_income: 120000, education: ['8th Pass', '9th Pass', '10th Pass', '12th Pass'] }
  },
  {
    scheme_name: 'Mukhyamantri Medhavi Vidyarthi Yojana (MMVY – Madhya Pradesh)',
    category: 'Education',
    description: 'Full course fee sponsorship for students scoring 70%+ in MP Board or 85%+ in CBSE Class 12 admitted to Engineering, Medical, Law, or Degree colleges.',
    eligibility_criteria: { min_age: 16, max_age: 26, genders: ['All'], states: ['Madhya Pradesh'], occupations: ['Student'], max_income: 600000, education: ['12th Pass', 'Graduate'] }
  },
  {
    scheme_name: 'Mukhyamantri Kanya Utthan Yojana (Bihar)',
    category: 'Education',
    description: 'Financial incentives up to Rs. 50,000 for girl students passing Class 12 and graduating from recognized universities in Bihar.',
    eligibility_criteria: { min_age: 16, max_age: 26, genders: ['Female'], states: ['Bihar'], occupations: ['Student'], max_income: 400000, education: ['12th Pass', 'Graduate'] }
  },
  {
    scheme_name: 'Jagananna Vidya Deevena (Andhra Pradesh)',
    category: 'Education',
    description: 'Full college tuition fee reimbursement credited directly to the mother\'s bank account for polytechnic, ITI, degree, and engineering students in AP.',
    eligibility_criteria: { min_age: 16, max_age: 28, genders: ['All'], states: ['Andhra Pradesh'], occupations: ['Student'], max_income: 250000, education: ['10th Pass', '12th Pass', 'Graduate'] }
  },
  {
    scheme_name: 'Jagananna Vasathi Deevena (Andhra Pradesh)',
    category: 'Education',
    description: 'Annual hostel food and accommodation assistance of Rs. 20,000 for university and engineering students in Andhra Pradesh.',
    eligibility_criteria: { min_age: 17, max_age: 28, genders: ['All'], states: ['Andhra Pradesh'], occupations: ['Student'], max_income: 250000, education: ['12th Pass', 'Graduate'] }
  },
  {
    scheme_name: 'Moovalur Ramamirtham Ammaiyar Pudhumai Penn Scheme (Tamil Nadu)',
    category: 'Education',
    description: 'Monthly direct financial grant of Rs. 1,000 deposited into bank accounts of girl students who studied in government schools and enrolled in higher education.',
    eligibility_criteria: { min_age: 17, max_age: 25, genders: ['Female'], states: ['Tamil Nadu'], occupations: ['Student'], max_income: 500000, education: ['12th Pass', 'Graduate'] }
  },
  {
    scheme_name: 'Tamil Nadu Naan Mudhalvan Scheme',
    category: 'Education',
    description: 'Free dynamic upskilling courses in AI, Cloud Computing, Robotics, and Foreign Languages for engineering, arts, and science college students across Tamil Nadu.',
    eligibility_criteria: { min_age: 17, max_age: 26, genders: ['All'], states: ['Tamil Nadu'], occupations: ['Student'], max_income: 10000000, education: ['12th Pass', 'Graduate'] }
  },
  {
    scheme_name: 'Gargi Puraskar Yojana (Rajasthan)',
    category: 'Education',
    description: 'Cash prize of Rs. 6,000 and merit certificate awarded to girl students scoring 75% or above marks in Class 10 and Class 12 board exams in Rajasthan.',
    eligibility_criteria: { min_age: 15, max_age: 20, genders: ['Female'], states: ['Rajasthan'], occupations: ['Student'], max_income: 500000, education: ['10th Pass', '12th Pass'] }
  },
  {
    scheme_name: 'Chief Minister\'s Super 100 Scheme (Haryana)',
    category: 'Education',
    description: 'Free residential boarding and specialized 2-year entrance coaching for meritorious government school students preparing for IIT-JEE and NEET in Haryana.',
    eligibility_criteria: { min_age: 14, max_age: 18, genders: ['All'], states: ['Haryana'], occupations: ['Student'], max_income: 300000, education: ['10th Pass'] }
  },
  {
    scheme_name: 'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti (Maharashtra)',
    category: 'Education',
    description: '50% tuition and exam fee reimbursement for Economically Backward Class (EBC) students studying higher professional degrees in Maharashtra.',
    eligibility_criteria: { min_age: 17, max_age: 28, genders: ['All'], states: ['Maharashtra'], occupations: ['Student'], max_income: 800000, education: ['12th Pass', 'Graduate', 'Post Graduate'] }
  }
];

addSchemes(educationSchemes);

// --- 4. WOMEN & CHILD EMPOWERMENT (126-175) ---
const womenSchemes = [
  {
    scheme_name: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
    category: 'Women Welfare',
    description: 'Direct cash maternity incentive of Rs. 5,000 for the first child and Rs. 6,000 for the second child (if girl) to promote adequate nutrition and institutional delivery.',
    eligibility_criteria: { min_age: 18, max_age: 45, genders: ['Female'], states: ['All'], occupations: ['Homemaker', 'Self-Employed', 'Unemployed', 'Farmer', 'Salaried Employee'], max_income: 500000, education: ['All'] }
  },
  {
    scheme_name: 'Beti Bachao Beti Padhao (BBBP)',
    category: 'Women Welfare',
    description: 'National multi-sectoral initiative ensuring survival, protection, and quality higher education for girl children to eliminate gender-biased sex selection.',
    eligibility_criteria: { min_age: 0, max_age: 30, genders: ['Female'], states: ['All'], occupations: ['All'], max_income: 2000000, education: ['All'] }
  },
  {
    scheme_name: 'Sukanya Samriddhi Yojana (SSY)',
    category: 'Women Welfare',
    description: 'Government small savings scheme offering highest tax-free sovereign interest (8.2%) and Section 80C deductions for girl child education and marriage corpus.',
    eligibility_criteria: { min_age: 0, max_age: 50, genders: ['Female'], states: ['All'], occupations: ['All'], max_income: 5000000, education: ['All'] }
  },
  {
    scheme_name: 'Mission Shakti – Sambal (Safety & Security)',
    category: 'Women Welfare',
    description: 'Integrated umbrella scheme supporting One Stop Centres (Sakhi), Women Helpline (181), and Beti Bachao initiatives for women in distress or domestic crises.',
    eligibility_criteria: { min_age: 18, max_age: 90, genders: ['Female'], states: ['All'], occupations: ['All'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'Mission Shakti – Samarthya (Empowerment & Child Care)',
    category: 'Women Welfare',
    description: 'Provides Working Women Hostels (Sakhi Niwas), National Creche Scheme for children of working mothers, and financial micro-credit linkages for women.',
    eligibility_criteria: { min_age: 18, max_age: 60, genders: ['Female'], states: ['All'], occupations: ['Salaried Employee', 'Self-Employed', 'Entrepreneur', 'Homemaker'], max_income: 800000, education: ['All'] }
  },
  {
    scheme_name: 'Pradhan Mantri Ujjwala Yojana (PMUY)',
    category: 'Women Welfare',
    description: 'Deposit-free LPG cylinder connection, free first cylinder refill, and subsidized cookstove issued in the name of adult women from poor and BPL households.',
    eligibility_criteria: { min_age: 18, max_age: 80, genders: ['Female'], states: ['All'], occupations: ['Homemaker', 'Self-Employed', 'Farmer', 'Unemployed'], max_income: 250000, education: ['All'] }
  },
  {
    scheme_name: 'Mahila E-Haat (Digital Entrepreneurship)',
    category: 'Women Welfare',
    description: 'Direct bilingual online marketing platform for women entrepreneurs, SHGs, and NGOs to sell handmade products, textiles, and organic groceries without middleman cuts.',
    eligibility_criteria: { min_age: 18, max_age: 65, genders: ['Female'], states: ['All'], occupations: ['Entrepreneur', 'Self-Employed', 'Homemaker'], max_income: 2500000, education: ['All'] }
  },
  {
    scheme_name: 'Support to Training and Employment Programme for Women (STEP)',
    category: 'Women Welfare',
    description: 'Provides employability and entrepreneurial skill training in agriculture, horticulture, handlooms, IT, and food processing to marginalized women.',
    eligibility_criteria: { min_age: 16, max_age: 55, genders: ['Female'], states: ['All'], occupations: ['Unemployed', 'Homemaker', 'Self-Employed'], max_income: 300000, education: ['Below 8th', '8th Pass', '10th Pass', '12th Pass'] }
  },
  {
    scheme_name: 'Ladli Behna Yojana (Madhya Pradesh)',
    category: 'Women Welfare',
    description: 'Direct monthly financial assistance of Rs. 1,250 deposited into the bank accounts of married, widowed, and divorced women aged 21 to 60 in MP.',
    eligibility_criteria: { min_age: 21, max_age: 60, genders: ['Female'], states: ['Madhya Pradesh'], occupations: ['Homemaker', 'Self-Employed', 'Unemployed', 'Farmer'], max_income: 250000, education: ['All'] }
  },
  {
    scheme_name: 'Mukhyamantri Majhi Ladki Bahin Yojana (Maharashtra)',
    category: 'Women Welfare',
    description: 'Monthly direct cash transfer of Rs. 1,500 transferred to women from low-income families aged 21 to 65 across Maharashtra.',
    eligibility_criteria: { min_age: 21, max_age: 65, genders: ['Female'], states: ['Maharashtra'], occupations: ['Homemaker', 'Self-Employed', 'Unemployed', 'Farmer'], max_income: 250000, education: ['All'] }
  },
  {
    scheme_name: 'Gruha Lakshmi Scheme (Karnataka)',
    category: 'Women Welfare',
    description: 'Monthly financial assistance of Rs. 2,000 transferred to women heads of Antyodaya and BPL households across Karnataka.',
    eligibility_criteria: { min_age: 18, max_age: 80, genders: ['Female'], states: ['Karnataka'], occupations: ['Homemaker', 'Self-Employed', 'Farmer', 'Unemployed'], max_income: 300000, education: ['All'] }
  },
  {
    scheme_name: 'Gruha Lakshmi Scheme (Telangana)',
    category: 'Housing',
    description: 'One-time financial grant of Rs. 3 lakh provided to women head of poor families owning house plots to construct pucca homes in Telangana.',
    eligibility_criteria: { min_age: 21, max_age: 65, genders: ['Female'], states: ['Telangana'], occupations: ['Homemaker', 'Self-Employed', 'Unemployed'], max_income: 250000, education: ['All'] }
  },
  {
    scheme_name: 'Lakshmir Bhandar Scheme (West Bengal)',
    category: 'Women Welfare',
    description: 'Monthly direct basic income support of Rs. 1,200 for SC/ST women and Rs. 1,000 for general category women aged 25 to 60 in West Bengal.',
    eligibility_criteria: { min_age: 25, max_age: 60, genders: ['Female'], states: ['West Bengal'], occupations: ['Homemaker', 'Self-Employed', 'Farmer', 'Unemployed'], max_income: 300000, education: ['All'] }
  },
  {
    scheme_name: 'Mukhyamantri Kanya Sumangala Yojana (Uttar Pradesh)',
    category: 'Women Welfare',
    description: 'Conditional monetary grants totaling Rs. 25,000 transferred across 6 life milestones from girl child birth through college admission in UP.',
    eligibility_criteria: { min_age: 0, max_age: 25, genders: ['Female'], states: ['Uttar Pradesh'], occupations: ['All'], max_income: 300000, education: ['All'] }
  },
  {
    scheme_name: 'Mahila Samman Savings Certificate (MSSC)',
    category: 'Women Welfare',
    description: 'Government small savings investment scheme exclusively for women and girls offering attractive 7.5% fixed interest compounded quarterly for 2 years.',
    eligibility_criteria: { min_age: 0, max_age: 90, genders: ['Female'], states: ['All'], occupations: ['All'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'Mahila Samridhi Yojana (NCFDC / NBCFDC)',
    category: 'Women Welfare',
    description: 'Micro-finance loan up to Rs. 1.40 lakh at 4% subsidized interest rate for backward class women entrepreneurs through state channelizing agencies.',
    eligibility_criteria: { min_age: 18, max_age: 55, genders: ['Female'], states: ['All'], occupations: ['Self-Employed', 'Entrepreneur', 'Homemaker'], max_income: 300000, education: ['All'], social_categories: ['OBC', 'SC', 'ST'] }
  },
  {
    scheme_name: 'Dena Shakti / Cent Kalyani Women Enterprise Loan',
    category: 'Business & Employment',
    description: 'Concessional interest rate enterprise loans up to Rs. 1 crore with 0.50% interest concession and collateral fee waivers for women MSME business owners.',
    eligibility_criteria: { min_age: 18, max_age: 65, genders: ['Female'], states: ['All'], occupations: ['Entrepreneur', 'Business Owner', 'Self-Employed'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'Udyogini Scheme for Women Entrepreneurs (Karnataka)',
    category: 'Business & Employment',
    description: 'Subsidized bank business loans up to Rs. 3 lakh with 30% government capital subsidy for women setting up trade and manufacturing micro-units.',
    eligibility_criteria: { min_age: 18, max_age: 55, genders: ['Female'], states: ['Karnataka'], occupations: ['Entrepreneur', 'Business Owner', 'Self-Employed'], max_income: 150000, education: ['All'] }
  },
  {
    scheme_name: 'Kalyana Lakshmi / Shaadi Mubarak Scheme (Telangana)',
    category: 'Women Welfare',
    description: 'One-time financial assistance of Rs. 1,00,116 for marriage expenses of underprivileged brides aged 18+ from SC/ST/BC/Minority communities in Telangana.',
    eligibility_criteria: { min_age: 18, max_age: 35, genders: ['Female'], states: ['Telangana'], occupations: ['All'], max_income: 200000, education: ['All'] }
  },
  {
    scheme_name: 'Dr. Muthulakshmi Reddy Maternity Benefit Scheme (Tamil Nadu)',
    category: 'Women Welfare',
    description: 'Maternity assistance of Rs. 18,000 (including Rs. 14,000 cash and nutrition kit worth Rs. 4,000) for pregnant women in Tamil Nadu.',
    eligibility_criteria: { min_age: 19, max_age: 45, genders: ['Female'], states: ['Tamil Nadu'], occupations: ['Homemaker', 'Self-Employed', 'Unemployed'], max_income: 200000, education: ['All'] }
  }
];

addSchemes(womenSchemes);

// --- 5. BUSINESS, ENTREPRENEURSHIP, MSME & EMPLOYMENT (176-235) ---
const businessSchemes = [
  {
    scheme_name: 'Pradhan Mantri Mudra Yojana – Shishu Loan',
    category: 'Business & Employment',
    description: 'Collateral-free micro loans up to Rs. 50,000 at low interest rates for starting small grocery shops, tailoring, repair shops, and tiny ventures.',
    eligibility_criteria: { min_age: 18, max_age: 65, genders: ['All'], states: ['All'], occupations: ['Self-Employed', 'Business Owner', 'Unemployed', 'Homemaker'], max_income: 1500000, education: ['All'] }
  },
  {
    scheme_name: 'Pradhan Mantri Mudra Yojana – Kishor Loan',
    category: 'Business & Employment',
    description: 'Collateral-free business loans between Rs. 50,000 and Rs. 5 lakh for purchasing machinery, raw material inventory, and business expansion.',
    eligibility_criteria: { min_age: 18, max_age: 65, genders: ['All'], states: ['All'], occupations: ['Self-Employed', 'Business Owner', 'Entrepreneur'], max_income: 3000000, education: ['All'] }
  },
  {
    scheme_name: 'Pradhan Mantri Mudra Yojana – Tarun Loan',
    category: 'Business & Employment',
    description: 'Collateral-free business growth loans from Rs. 5 lakh up to Rs. 20 lakh for established small enterprises, manufacturers, and trade firms.',
    eligibility_criteria: { min_age: 18, max_age: 65, genders: ['All'], states: ['All'], occupations: ['Business Owner', 'Entrepreneur', 'Self-Employed'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'PM SVANidhi Scheme (Micro-Credit for Street Vendors)',
    category: 'Business & Employment',
    description: 'Working capital collateral-free loans starting at Rs. 10,000, progressing to Rs. 20,000 and Rs. 50,000 with 7% interest subsidy and cashback for digital transactions.',
    eligibility_criteria: { min_age: 18, max_age: 65, genders: ['All'], states: ['All'], occupations: ['Self-Employed', 'Business Owner', 'Unemployed'], max_income: 400000, education: ['All'] }
  },
  {
    scheme_name: 'PM Vishwakarma Scheme',
    category: 'Skills & Business',
    description: 'Holistic support for 18 traditional artisan trades (carpenters, blacksmiths, potters, cobblers) with certificate, Rs. 15k toolkit grant, and 5% interest loans up to Rs. 3 lakh.',
    eligibility_criteria: { min_age: 18, max_age: 70, genders: ['All'], states: ['All'], occupations: ['Self-Employed', 'Business Owner', 'Homemaker', 'Unemployed'], max_income: 600000, education: ['All'] }
  },
  {
    scheme_name: 'Prime Minister\'s Employment Generation Programme (PMEGP)',
    category: 'Business & Employment',
    description: 'Credit-linked capital subsidy of up to 35% on project loans up to Rs. 50 lakh for manufacturing and Rs. 20 lakh for services to generate new self-employment.',
    eligibility_criteria: { min_age: 18, max_age: 65, genders: ['All'], states: ['All'], occupations: ['Unemployed', 'Self-Employed', 'Entrepreneur', 'Business Owner'], max_income: 2500000, education: ['8th Pass', '10th Pass', '12th Pass', 'Graduate'] }
  },
  {
    scheme_name: 'Stand-Up India Scheme',
    category: 'Entrepreneurship',
    description: 'Facilitates bank loans between Rs. 10 lakh and Rs. 1 crore to at least one SC/ST borrower and at least one woman borrower per bank branch for greenfield enterprises.',
    eligibility_criteria: { min_age: 18, max_age: 65, genders: ['All'], states: ['All'], occupations: ['Entrepreneur', 'Business Owner', 'Self-Employed'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'Startup India Initiative',
    category: 'Entrepreneurship',
    description: '3-year 100% income tax exemption, patent fast-tracking with 80% fee rebate, self-certification compliance, and Rs. 10,000 Cr Fund of Funds support for DPIIT-recognized startups.',
    eligibility_criteria: { min_age: 18, max_age: 65, genders: ['All'], states: ['All'], occupations: ['Entrepreneur', 'Business Owner', 'Student', 'Salaried Employee'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'Credit Guarantee Fund Trust for Micro & Small Enterprises (CGTMSE)',
    category: 'Business & Employment',
    description: 'Provides credit guarantee cover up to 85% for collateral-free bank loans up to Rs. 5 crore sanctioned to new and existing micro and small business units.',
    eligibility_criteria: { min_age: 21, max_age: 65, genders: ['All'], states: ['All'], occupations: ['Business Owner', 'Entrepreneur'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'Scheme of Fund for Regeneration of Traditional Industries (SFURTI)',
    category: 'Business & Employment',
    description: 'Financial assistance up to Rs. 2.5 crore to Rs. 5 crore per artisan cluster to setup Common Facility Centres, modern tooling, and design centers for khadi and coir.',
    eligibility_criteria: { min_age: 18, max_age: 70, genders: ['All'], states: ['All'], occupations: ['Self-Employed', 'Business Owner', 'Entrepreneur'], max_income: 1500000, education: ['All'] }
  },
  {
    scheme_name: 'ASPIRE Scheme (Livelihood Business Incubators)',
    category: 'Entrepreneurship',
    description: 'Grants up to Rs. 1 crore for setting up Livelihood Business Incubators (LBIs) and Technology Business Incubators (TBIs) in agro-rural industries.',
    eligibility_criteria: { min_age: 21, max_age: 60, genders: ['All'], states: ['All'], occupations: ['Entrepreneur', 'Business Owner'], max_income: 10000000, education: ['Graduate', 'Post Graduate'] }
  },
  {
    scheme_name: 'MSME Champions (MSME Sustainable ZED Certification)',
    category: 'Business & Employment',
    description: 'Subsidizes up to 80% of testing and certification cost for Zero Defect Zero Effect (ZED) quality and eco-manufacturing standards for MSMEs.',
    eligibility_criteria: { min_age: 21, max_age: 70, genders: ['All'], states: ['All'], occupations: ['Business Owner', 'Entrepreneur'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'Coir Vikas Yojana (CVY)',
    category: 'Business & Employment',
    description: 'Provides 25% capital subsidy for setting up coir spinning and weaving units and 75% subsidy for modern motorized traditional coir ratts for women workers.',
    eligibility_criteria: { min_age: 18, max_age: 65, genders: ['All'], states: ['All'], occupations: ['Self-Employed', 'Business Owner', 'Homemaker'], max_income: 1000000, education: ['All'] }
  },
  {
    scheme_name: 'National Small Industries Corporation (NSIC) Raw Material Assistance',
    category: 'Business & Employment',
    description: 'Finances the procurement of indigenous and imported raw materials (steel, aluminium, polymers) against bank guarantees up to 180 days for MSMEs.',
    eligibility_criteria: { min_age: 21, max_age: 70, genders: ['All'], states: ['All'], occupations: ['Business Owner', 'Entrepreneur'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'National SC-ST Hub (NSSH)',
    category: 'Entrepreneurship',
    description: 'Provides 25% subsidy on equipment purchase, free vendor registration on GeM, and handholding to SC/ST entrepreneurs for government procurement quotas.',
    eligibility_criteria: { min_age: 18, max_age: 65, genders: ['All'], states: ['All'], occupations: ['Entrepreneur', 'Business Owner', 'Self-Employed'], max_income: 5000000, education: ['All'], social_categories: ['SC', 'ST'] }
  },
  {
    scheme_name: 'Chief Minister\'s Employment Generation Programme (CMEGP – Maharashtra)',
    category: 'Business & Employment',
    description: 'Provides capital subsidy up to 35% on project loans up to Rs. 50 lakh for manufacturing and Rs. 20 lakh for service enterprises in Maharashtra.',
    eligibility_criteria: { min_age: 18, max_age: 45, genders: ['All'], states: ['Maharashtra'], occupations: ['Unemployed', 'Self-Employed', 'Entrepreneur'], max_income: 1500000, education: ['8th Pass', '10th Pass', 'Graduate'] }
  },
  {
    scheme_name: 'Mukhyamantri Yuva Swarojgar Yojana (Uttar Pradesh)',
    category: 'Business & Employment',
    description: 'Offers 25% margin money subsidy on bank loans up to Rs. 25 lakh for industry and Rs. 10 lakh for service sector ventures to educated unemployed youth in UP.',
    eligibility_criteria: { min_age: 18, max_age: 40, genders: ['All'], states: ['Uttar Pradesh'], occupations: ['Unemployed', 'Self-Employed', 'Entrepreneur'], max_income: 1000000, education: ['10th Pass', '12th Pass', 'Graduate'] }
  },
  {
    scheme_name: 'Mukhyamantri Yuva Udyami Yojana (Madhya Pradesh)',
    category: 'Business & Employment',
    description: 'Provides 15% margin money subsidy up to Rs. 12 lakh and 5% interest subsidy for 5 years on loans from Rs. 10 lakh to Rs. 2 crore for new industry setups in MP.',
    eligibility_criteria: { min_age: 18, max_age: 40, genders: ['All'], states: ['Madhya Pradesh'], occupations: ['Unemployed', 'Entrepreneur', 'Self-Employed'], max_income: 2000000, education: ['10th Pass', '12th Pass', 'Graduate'] }
  },
  {
    scheme_name: 'T-PRIDE (Telangana Program for SC/ST Entrepreneurship)',
    category: 'Entrepreneurship',
    description: 'Offers 35% investment subsidy up to Rs. 75 lakh, 100% stamp duty reimbursement, and 9% interest subvention for SC/ST entrepreneurs in Telangana.',
    eligibility_criteria: { min_age: 18, max_age: 60, genders: ['All'], states: ['Telangana'], occupations: ['Entrepreneur', 'Business Owner', 'Self-Employed'], max_income: 5000000, education: ['All'], social_categories: ['SC', 'ST'] }
  },
  {
    scheme_name: 'Unemployed Youth Employment Generation Programme (UYEGP – Tamil Nadu)',
    category: 'Business & Employment',
    description: 'Provides 25% government subsidy on bank loans up to Rs. 15 lakh for manufacturing and Rs. 5 lakh for services/trading in Tamil Nadu.',
    eligibility_criteria: { min_age: 18, max_age: 45, genders: ['All'], states: ['Tamil Nadu'], occupations: ['Unemployed', 'Self-Employed', 'Entrepreneur'], max_income: 500000, education: ['8th Pass', '10th Pass', '12th Pass', 'Graduate'] }
  }
];

addSchemes(businessSchemes);

// --- 6. HOUSING, INFRASTRUCTURE & SANITATION (236-265) ---
const housingSchemes = [
  {
    scheme_name: 'Pradhan Mantri Awas Yojana – Gramin (PMAY-G)',
    category: 'Housing',
    description: 'Direct financial assistance of Rs. 1.20 lakh in plain areas and Rs. 1.30 lakh in hilly states for rural houseless families to build pucca houses with clean toilet.',
    eligibility_criteria: { min_age: 18, max_age: 85, genders: ['All'], states: ['All'], occupations: ['Farmer', 'Self-Employed', 'Unemployed', 'Homemaker', 'Salaried Employee'], max_income: 300000, education: ['All'] }
  },
  {
    scheme_name: 'Pradhan Mantri Awas Yojana – Urban (PMAY-U)',
    category: 'Housing',
    description: 'Central grant of Rs. 1.50 lakh to Rs. 2.67 lakh interest subsidy (CLSS) on home loans for urban EWS, LIG, and MIG families buying or building their first pucca home.',
    eligibility_criteria: { min_age: 21, max_age: 70, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 1800000, education: ['All'] }
  },
  {
    scheme_name: 'Swachh Bharat Mission – Gramin (Individual Household Latrine)',
    category: 'Sanitation',
    description: 'Direct incentive grant of Rs. 12,000 for below-poverty-line and eligible rural families to construct individual household flush toilets.',
    eligibility_criteria: { min_age: 18, max_age: 90, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 250000, education: ['All'] }
  },
  {
    scheme_name: 'Jal Jeevan Mission (Har Ghar Jal)',
    category: 'Infrastructure',
    description: 'Government mission providing functional individual household tap connections (FHTC) delivering 55 litres of clean potable drinking water per capita per day to all rural homes.',
    eligibility_criteria: { min_age: 18, max_age: 100, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'PM Surya Ghar – Muft Bijli Yojana (Rooftop Solar)',
    category: 'Renewable Energy',
    description: 'Direct subsidy up to Rs. 78,000 for installing up to 3 kW residential rooftop solar panels, providing up to 300 units of free electricity every month.',
    eligibility_criteria: { min_age: 18, max_age: 85, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 5000000, education: ['All'] }
  },
  {
    scheme_name: 'Pradhan Mantri Gram Sadak Yojana (PMGSY)',
    category: 'Infrastructure',
    description: 'Centrally sponsored infrastructure program constructing all-weather single-lane paved roads connecting unconnected rural habitations to market centers.',
    eligibility_criteria: { min_age: 18, max_age: 100, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 10000000, education: ['All'] }
  },
  {
    scheme_name: 'Affordable Rental Housing Complexes (ARHCs)',
    category: 'Housing',
    description: 'Concessional rental housing units with basic civic amenities near industrial clusters for urban migrants, street vendors, and factory workers.',
    eligibility_criteria: { min_age: 18, max_age: 65, genders: ['All'], states: ['All'], occupations: ['Salaried Employee', 'Self-Employed', 'Unemployed'], max_income: 300000, education: ['All'] }
  },
  {
    scheme_name: 'Kalaignar Kanavu Illam Scheme (Tamil Nadu)',
    category: 'Housing',
    description: 'Financial support of Rs. 3.50 lakh per unit for building pucca houses to transform thatched-roof and kutcha huts in rural Tamil Nadu.',
    eligibility_criteria: { min_age: 21, max_age: 75, genders: ['All'], states: ['Tamil Nadu'], occupations: ['Farmer', 'Self-Employed', 'Unemployed', 'Homemaker'], max_income: 200000, education: ['All'] }
  },
  {
    scheme_name: 'Mukhyamantri Awas Yojana – Gramin (Uttar Pradesh)',
    category: 'Housing',
    description: 'Provides Rs. 1.20 lakh financial assistance for house construction to families displaced by natural disasters, leprosy-affected, and Musahar communities in UP.',
    eligibility_criteria: { min_age: 18, max_age: 80, genders: ['All'], states: ['Uttar Pradesh'], occupations: ['Unemployed', 'Farmer', 'Self-Employed', 'Homemaker'], max_income: 200000, education: ['All'] }
  },
  {
    scheme_name: 'Ghar Kul Yojana – Shabari Awas (Maharashtra)',
    category: 'Housing',
    description: 'Grants up to Rs. 1.30 lakh to Scheduled Tribe beneficiaries in rural Maharashtra to construct earthquake and rain-resistant pucca homes.',
    eligibility_criteria: { min_age: 18, max_age: 75, genders: ['All'], states: ['Maharashtra'], occupations: ['Farmer', 'Unemployed', 'Self-Employed', 'Homemaker'], max_income: 150000, education: ['All'], social_categories: ['ST'] }
  }
];

addSchemes(housingSchemes);

// --- 7. SOCIAL SECURITY, PENSIONS, DISABILITY & SENIOR CITIZENS (266-300) ---
const socialSecuritySchemes = [
  {
    scheme_name: 'Atal Pension Yojana (APY)',
    category: 'Pension & Social Security',
    description: 'Government guaranteed monthly pension from Rs. 1,000 to Rs. 5,000 per month after age 60 for unorganized workers based on monthly savings from age 18 to 40.',
    eligibility_criteria: { min_age: 18, max_age: 40, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 1000000, education: ['All'] }
  },
  {
    scheme_name: 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)',
    category: 'Life Insurance',
    description: 'Annual renewable life insurance providing Rs. 2 lakh death risk coverage due to any reason at an affordable premium of Rs. 436 per year for bank account holders.',
    eligibility_criteria: { min_age: 18, max_age: 50, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 5000000, education: ['All'] }
  },
  {
    scheme_name: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY)',
    category: 'Accident Insurance',
    description: 'Accidental insurance offering Rs. 2 lakh for accidental death or full disability (Rs. 1 lakh for partial disability) for a tiny annual premium of just Rs. 20.',
    eligibility_criteria: { min_age: 18, max_age: 70, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 5000000, education: ['All'] }
  },
  {
    scheme_name: 'Pradhan Mantri Shram Yogi Maandhan (PM-SYM)',
    category: 'Pension & Social Security',
    description: 'Old-age pension scheme assuring Rs. 3,000 monthly pension after attaining 60 years for unorganized workers (rickshaw pullers, domestic maids, street vendors) with matching 50% central contribution.',
    eligibility_criteria: { min_age: 18, max_age: 40, genders: ['All'], states: ['All'], occupations: ['Self-Employed', 'Unemployed', 'Farmer', 'Homemaker'], max_income: 180000, education: ['All'] }
  },
  {
    scheme_name: 'National Social Assistance Programme – IGNOAPS (Senior Pension)',
    category: 'Pension & Social Security',
    description: 'Monthly central pension of Rs. 200 to Rs. 500 (supplemented by state contributions up to Rs. 1,500-3,000/mo) for BPL elderly citizens aged 60 and above.',
    eligibility_criteria: { min_age: 60, max_age: 100, genders: ['All'], states: ['All'], occupations: ['Retired', 'Unemployed', 'Homemaker', 'Farmer'], max_income: 200000, education: ['All'] }
  },
  {
    scheme_name: 'National Social Assistance Programme – IGNWPS (Widow Pension)',
    category: 'Pension & Social Security',
    description: 'Monthly financial assistance and pension support of Rs. 300 to Rs. 2,000 per month for widows living below the poverty line aged 40 to 79.',
    eligibility_criteria: { min_age: 40, max_age: 79, genders: ['Female'], states: ['All'], occupations: ['Homemaker', 'Unemployed', 'Self-Employed'], max_income: 200000, education: ['All'] }
  },
  {
    scheme_name: 'National Social Assistance Programme – IGNDPS (Disability Pension)',
    category: 'Disability Welfare',
    description: 'Monthly pension of Rs. 300 to Rs. 2,500 for persons living below poverty line aged 18+ with severe or multiple disabilities (80% and above benchmark disability).',
    eligibility_criteria: { min_age: 18, max_age: 79, genders: ['All'], states: ['All'], occupations: ['Unemployed', 'Student', 'Homemaker', 'Retired'], max_income: 200000, education: ['All'] }
  },
  {
    scheme_name: 'Atal Vayo Abhyuday Yojana (AVYAY – Senior Assisted Living)',
    category: 'Senior Welfare',
    description: 'Free physical assistive living aids, elderline helpline (14567), and shelter homes for indigent senior citizens aged 60 and above.',
    eligibility_criteria: { min_age: 60, max_age: 100, genders: ['All'], states: ['All'], occupations: ['Retired', 'Homemaker', 'Unemployed', 'Farmer'], max_income: 400000, education: ['All'] }
  },
  {
    scheme_name: 'Rashtriya Vayoshri Yojana',
    category: 'Senior & Disability Welfare',
    description: 'Free provision of assisted-living physical devices (motorized wheelchairs, hearing aids, walkers, dentures, spectacles, crutches) for BPL senior citizens with age-related disabilities.',
    eligibility_criteria: { min_age: 60, max_age: 100, genders: ['All'], states: ['All'], occupations: ['Retired', 'Homemaker', 'Unemployed'], max_income: 300000, education: ['All'] }
  },
  {
    scheme_name: 'Assistance to Persons with Disabilities for Purchase/Fitting of Aids (ADIP)',
    category: 'Disability Welfare',
    description: 'Grants up to 100% financial assistance for procurement of modern durable assistive devices, smart canes, Braille books, hearing aids, and artificial limbs for persons with disabilities.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 360000, education: ['All'] }
  },
  {
    scheme_name: 'National Divyangjan Finance and Development Corporation (NDFDC Loan)',
    category: 'Disability Welfare',
    description: 'Concessional micro-loans at 4% to 8% interest rate up to Rs. 50 lakh for persons with disabilities to set up retail shops, service enterprises, or manufacturing units.',
    eligibility_criteria: { min_age: 18, max_age: 65, genders: ['All'], states: ['All'], occupations: ['Self-Employed', 'Entrepreneur', 'Business Owner', 'Unemployed'], max_income: 600000, education: ['All'] }
  },
  {
    scheme_name: 'Aasara Pension Scheme (Telangana)',
    category: 'Pension & Social Security',
    description: 'Monthly social safety pension of Rs. 2,016 for senior citizens, widows, beedi workers, weavers, and Rs. 3,016 for persons with disabilities in Telangana.',
    eligibility_criteria: { min_age: 57, max_age: 100, genders: ['All'], states: ['Telangana'], occupations: ['Retired', 'Unemployed', 'Homemaker', 'Self-Employed'], max_income: 200000, education: ['All'] }
  },
  {
    scheme_name: 'YSR Pension Kanuka (Andhra Pradesh)',
    category: 'Pension & Social Security',
    description: 'Doorstep monthly pension of Rs. 3,000 for elderly, widows, toddy tappers, and Rs. 6,000 to Rs. 10,000 for chronic kidney disease and disabled citizens in AP.',
    eligibility_criteria: { min_age: 60, max_age: 100, genders: ['All'], states: ['Andhra Pradesh'], occupations: ['Retired', 'Unemployed', 'Homemaker', 'Self-Employed'], max_income: 250000, education: ['All'] }
  },
  {
    scheme_name: 'Sanjay Gandhi Niradhar Anudan Yojana (Maharashtra)',
    category: 'Pension & Social Security',
    description: 'Monthly pension of Rs. 1,500 for destitute elderly, disabled, widows, and orphan beneficiaries living below the poverty line in Maharashtra.',
    eligibility_criteria: { min_age: 18, max_age: 100, genders: ['All'], states: ['Maharashtra'], occupations: ['Unemployed', 'Homemaker', 'Retired'], max_income: 50000, education: ['All'] }
  },
  {
    scheme_name: 'Old Age Samman Allowance (Haryana)',
    category: 'Senior Welfare',
    description: 'Monthly dignity social pension of Rs. 3,000 credited to bank accounts of senior citizens aged 60+ residing in Haryana.',
    eligibility_criteria: { min_age: 60, max_age: 100, genders: ['All'], states: ['Haryana'], occupations: ['Retired', 'Homemaker', 'Unemployed', 'Farmer'], max_income: 300000, education: ['All'] }
  },
  {
    scheme_name: 'Madhu Babu Pension Yojana (Odisha)',
    category: 'Pension & Social Security',
    description: 'Monthly financial assistance of Rs. 1,000 to Rs. 1,200 for destitute elderly, widows, persons with disabilities, and leprosy patients in Odisha.',
    eligibility_criteria: { min_age: 60, max_age: 100, genders: ['All'], states: ['Odisha'], occupations: ['Retired', 'Unemployed', 'Homemaker'], max_income: 100000, education: ['All'] }
  },
  {
    scheme_name: 'Deendayal Disabled Rehabilitation Scheme (DDRS)',
    category: 'Disability Welfare',
    description: 'Grant-in-aid to NGOs providing vocational training centres, special schools, early intervention clinics, and rehabilitation services for children with special needs.',
    eligibility_criteria: { min_age: 5, max_age: 40, genders: ['All'], states: ['All'], occupations: ['Student', 'Unemployed'], max_income: 600000, education: ['All'] }
  },
  {
    scheme_name: 'PM-JANMAN (Pradhan Mantri Janjati Adivasi Nyaya Maha Abhiyan)',
    category: 'Minority & Tribal Welfare',
    description: 'Dedicated Rs. 24,000 Cr mission providing pucca housing, piped drinking water, solar electricity, all-weather roads, and healthcare to Particularly Vulnerable Tribal Groups (PVTGs).',
    eligibility_criteria: { min_age: 18, max_age: 80, genders: ['All'], states: ['All'], occupations: ['Farmer', 'Unemployed', 'Homemaker', 'Self-Employed'], max_income: 250000, education: ['All'], social_categories: ['ST'] }
  },
  {
    scheme_name: 'Pradhan Mantri Anusuchit Jaati Abhyuday Yojana (PM-AJAY)',
    category: 'Social & Economic Development',
    description: 'Grants up to Rs. 50,000 or 50% project cost for skill development, hostel infrastructure, and income-generating self-employment assets for SC households.',
    eligibility_criteria: { min_age: 18, max_age: 60, genders: ['All'], states: ['All'], occupations: ['Unemployed', 'Self-Employed', 'Farmer'], max_income: 250000, education: ['All'], social_categories: ['SC'] }
  },
  {
    scheme_name: 'Pradhan Mantri Virasat Ka Samvardhan (PM VIKAS)',
    category: 'Skills & Livelihood',
    description: 'Holistic scheme integrating modern skill training, literacy, enterprise development, and credit linkages for traditional minority artisan and craft communities.',
    eligibility_criteria: { min_age: 18, max_age: 55, genders: ['All'], states: ['All'], occupations: ['Self-Employed', 'Business Owner', 'Unemployed', 'Homemaker'], max_income: 450000, education: ['All'] }
  },
  {
    scheme_name: 'National Apprenticeship Promotion Scheme (NAPS)',
    category: 'Skill Development',
    description: 'Government reimburses 25% of prescribed stipend up to Rs. 1,500/month per apprentice directly to employers to incentivize on-the-job industrial apprenticeship for freshers.',
    eligibility_criteria: { min_age: 16, max_age: 35, genders: ['All'], states: ['All'], occupations: ['Student', 'Unemployed'], max_income: 1000000, education: ['8th Pass', '10th Pass', '12th Pass', 'Graduate'] }
  },
  {
    scheme_name: 'Pradhan Mantri Kaushal Vikas Yojana 4.0 (PMKVY)',
    category: 'Skill Development',
    description: 'Free short-term industry 4.0 skill certification training in Coding, AI, Robotics, 3D Printing, and Drones with stipends and job placement assistance for Indian youth.',
    eligibility_criteria: { min_age: 15, max_age: 45, genders: ['All'], states: ['All'], occupations: ['Student', 'Unemployed', 'Self-Employed'], max_income: 800000, education: ['All'] }
  },
  {
    scheme_name: 'Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)',
    category: 'Skill Development',
    description: 'Placement-linked residential technical skill training completely free of cost with guaranteed formal private sector jobs for rural poor youth.',
    eligibility_criteria: { min_age: 15, max_age: 35, genders: ['All'], states: ['All'], occupations: ['Unemployed', 'Student', 'Farmer'], max_income: 300000, education: ['8th Pass', '10th Pass', '12th Pass'] }
  },
  {
    scheme_name: 'Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)',
    category: 'Employment',
    description: 'Statutory legal guarantee of 100 days of unskilled wage employment per financial year at statutory wages for every rural adult willing to do public manual work.',
    eligibility_criteria: { min_age: 18, max_age: 75, genders: ['All'], states: ['All'], occupations: ['Unemployed', 'Farmer', 'Homemaker', 'Self-Employed'], max_income: 250000, education: ['All'] }
  },
  {
    scheme_name: 'Deendayal Antyodaya Yojana – NULM (Urban Livelihoods)',
    category: 'Livelihoods',
    description: 'Subsidized bank loans at 7% interest for urban micro-enterprises, formation of Self-Help Groups (SHGs), and construction of permanent shelters for urban homeless.',
    eligibility_criteria: { min_age: 18, max_age: 60, genders: ['All'], states: ['All'], occupations: ['Unemployed', 'Self-Employed', 'Homemaker'], max_income: 300000, education: ['All'] }
  },
  {
    scheme_name: 'National Career Service (NCS Portal)',
    category: 'Employment',
    description: 'Nationwide job-matching employment portal connecting jobseekers with verified private and public recruiters, free career counseling, and job fairs.',
    eligibility_criteria: { min_age: 18, max_age: 60, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 5000000, education: ['All'] }
  },
  {
    scheme_name: 'e-Shram Portal (National Database of Unorganised Workers)',
    category: 'Social Security',
    description: 'Issues a 12-digit Universal Account Number (UAN) card providing accidental insurance cover of Rs. 2 lakh and priority direct benefit transfers during national emergencies.',
    eligibility_criteria: { min_age: 16, max_age: 59, genders: ['All'], states: ['All'], occupations: ['Self-Employed', 'Farmer', 'Unemployed', 'Homemaker'], max_income: 400000, education: ['All'] }
  },
  {
    scheme_name: 'PM-DAKSH (Pradhan Mantri Dakshta Aur Kushalta Sampanna Hitgrahi)',
    category: 'Skill Development',
    description: 'Free upskilling, reskilling, and entrepreneurial training with daily stipends up to Rs. 3,000 for candidates from SC, OBC, EBC, DNT, and sanitation worker backgrounds.',
    eligibility_criteria: { min_age: 18, max_age: 45, genders: ['All'], states: ['All'], occupations: ['Unemployed', 'Student', 'Self-Employed', 'Homemaker'], max_income: 300000, education: ['All'], social_categories: ['SC', 'OBC', 'EWS'] }
  },
  {
    scheme_name: 'Van Dhan Vikas Yojana (TRIFED)',
    category: 'Minority & Tribal Welfare',
    description: 'Equips tribal gatherers in forest districts with value-addition equipment, processing centers, and marketing linkage for Non-Timber Minor Forest Produce (MFP).',
    eligibility_criteria: { min_age: 18, max_age: 65, genders: ['All'], states: ['All'], occupations: ['Farmer', 'Self-Employed', 'Unemployed'], max_income: 250000, education: ['All'], social_categories: ['ST'] }
  },
  {
    scheme_name: 'Unique Disability ID (UDID) Card Welfare Benefits',
    category: 'Disability Welfare',
    description: 'National single-point verified disability identity card granting rail and bus fare concessions, job reservation quotas, free education aids, and tax exemptions.',
    eligibility_criteria: { min_age: 0, max_age: 100, genders: ['All'], states: ['All'], occupations: ['All'], max_income: 10000000, education: ['All'] }
  }
];

addSchemes(socialSecuritySchemes);

console.log(`Curated base has ${schemes.length} schemes.`);

// Write temporary file
fs.writeFileSync(path.join(__dirname, 'baseSchemes.json'), JSON.stringify(schemes, null, 2));
console.log('Base schemes saved.');
