-- GovAssist AI - Master Scheme Seed Data (300 Government Schemes)
-- Run after schema.sql: mysql -u root -p govassist_ai < seed.sql

USE govassist_ai;

-- Clear existing schemes to allow clean re-seeding
DELETE FROM schemes;
ALTER TABLE schemes AUTO_INCREMENT = 1;

INSERT INTO schemes (scheme_name, description, category, eligibility_criteria) VALUES
(
  'Ayushman Bharat – PM-JAY',
  'Provides health insurance coverage of up to Rs. 5 lakh per family per year for secondary and tertiary care hospitalization to poor and vulnerable families across empaneled hospitals nationwide.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 500000, 'education', JSON_ARRAY('All'))
),
(
  'Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)',
  'Provides quality generic medicines at 50% to 90% lesser prices than branded equivalents through dedicated Jan Aushadhi Kendras across India.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'National Health Mission (NHM) Free Diagnostic Service',
  'Provides essential diagnostic laboratory and radiology tests free of cost in government healthcare facilities across rural and urban districts.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 600000, 'education', JSON_ARRAY('All'))
),
(
  'Pradhan Mantri National Dialysis Programme (PMNDP)',
  'Provides free hemodialysis care to Below Poverty Line (BPL) renal patients and subsidized dialysis to non-BPL patients at district hospitals.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Rashtriya Arogya Nidhi (RAN)',
  'Financial assistance up to Rs. 15 lakh for patients living below the poverty line suffering from major life-threatening diseases receiving treatment at super-specialty government hospitals.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 250000, 'education', JSON_ARRAY('All'))
),
(
  'Health Minister\'s Cancer Patient Fund (HMCPF)',
  'Offers financial support up to Rs. 5 lakh for poor cancer patients undergoing treatment at 27 Regional Cancer Centres across India.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'National Programme for Prevention and Control of Cancer, Diabetes, CVD and Stroke (NPCDCS)',
  'Opportunistic screening, diagnosis, and subsidized treatment for chronic non-communicable lifestyle diseases for adults aged 30 and above.',
  'Healthcare',
  JSON_OBJECT('min_age', 30, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 5000000, 'education', JSON_ARRAY('All'))
),
(
  'National Tuberculosis Elimination Programme (NTEP) – Ni-kshay Poshan Yojana',
  'Monthly direct cash benefit of Rs. 500 deposited into bank accounts of tuberculosis patients for nutritional support throughout the treatment duration.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 800000, 'education', JSON_ARRAY('All'))
),
(
  'Mission Indradhanush (Universal Immunization)',
  'Full immunization coverage against 12 vaccine-preventable life-threatening diseases for pregnant women and children under two years of age.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 45, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Janani Shishu Suraksha Karyakaram (JSSK)',
  'Guarantees completely free, cashless institutional deliveries, C-sections, drugs, diagnostics, diet, and emergency transport for pregnant women and sick neonates.',
  'Healthcare',
  JSON_OBJECT('min_age', 18, 'max_age', 45, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 600000, 'education', JSON_ARRAY('All'))
),
(
  'Janani Suraksha Yojana (JSY)',
  'Safe motherhood intervention providing direct cash assistance of Rs. 1,400 to rural mothers and Rs. 1,000 to urban mothers delivering in institutional healthcare centres.',
  'Healthcare',
  JSON_OBJECT('min_age', 19, 'max_age', 45, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 400000, 'education', JSON_ARRAY('All'))
),
(
  'Ayushman Bharat Digital Mission (ABHA)',
  'Creates unified digital health accounts (ABHA IDs) allowing citizens to securely store, access, and share electronic health records and lab reports nationwide.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Chief Minister Comprehensive Health Insurance Scheme (CMCHIS – Tamil Nadu)',
  'Provides cashless hospital coverage up to Rs. 5 lakh per family per year for secondary and tertiary care in Tamil Nadu empaneled hospitals.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Tamil Nadu'), 'occupations', JSON_ARRAY('All'), 'max_income', 120000, 'education', JSON_ARRAY('All'))
),
(
  'Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY – Maharashtra)',
  'Cashless healthcare cover up to Rs. 5 lakh per family annually for 996 identified medical procedures and surgeries across Maharashtra.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Maharashtra'), 'occupations', JSON_ARRAY('All'), 'max_income', 400000, 'education', JSON_ARRAY('All'))
),
(
  'Mukhyamantri Amrutum Yojana (MAA – Gujarat)',
  'Offers cashless medical treatment up to Rs. 5 lakh per family annually for critical illnesses, cardiac surgeries, and neurosurgeries in Gujarat.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Gujarat'), 'occupations', JSON_ARRAY('All'), 'max_income', 400000, 'education', JSON_ARRAY('All'))
),
(
  'Dr. YSR Aarogyasri Scheme (Andhra Pradesh)',
  'Provides cashless treatment up to Rs. 25 lakh per family per year for catastrophic illnesses to BPL families in Andhra Pradesh.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Andhra Pradesh'), 'occupations', JSON_ARRAY('All'), 'max_income', 500000, 'education', JSON_ARRAY('All'))
),
(
  'Arogya Karnataka Scheme',
  'Universal health coverage offering financial protection of up to Rs. 5 lakh per family annually for complex medical and surgical treatments in Karnataka.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Karnataka'), 'occupations', JSON_ARRAY('All'), 'max_income', 500000, 'education', JSON_ARRAY('All'))
),
(
  'Swasthya Sathi Scheme (West Bengal)',
  'Smart-card based cashless health insurance of Rs. 5 lakh per family per year issued in the name of the woman head of the family in West Bengal.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('West Bengal'), 'occupations', JSON_ARRAY('All'), 'max_income', 600000, 'education', JSON_ARRAY('All'))
),
(
  'Biju Swasthya Kalyan Yojana (BSKY – Odisha)',
  'Health safety net giving cashless hospital treatment up to Rs. 5 lakh per family and Rs. 10 lakh for women members annually in Odisha.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Odisha'), 'occupations', JSON_ARRAY('All'), 'max_income', 500000, 'education', JSON_ARRAY('All'))
),
(
  'Mukhyamantri Chiranjeevi Swasthya Bima Yojana (Rajasthan)',
  'Universal health insurance giving cashless hospitalization cover up to Rs. 25 lakh per family for critical and general surgeries in Rajasthan.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Rajasthan'), 'occupations', JSON_ARRAY('All'), 'max_income', 800000, 'education', JSON_ARRAY('All'))
),
(
  'Karunya Health Scheme (KASP – Kerala)',
  'Provides cashless medical benefit package up to Rs. 5 lakh per poor family per year across government and empanelled private hospitals in Kerala.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Kerala'), 'occupations', JSON_ARRAY('All'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Chief Minister Health Insurance Scheme (CMHIS – Nagaland)',
  'Provides health insurance protection up to Rs. 5 lakh per family per year for indigenous citizens of Nagaland.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Nagaland'), 'occupations', JSON_ARRAY('All'), 'max_income', 800000, 'education', JSON_ARRAY('All'))
),
(
  'Ayushman Bharat Senior Citizen Health Coverage (Top-Up)',
  'Dedicated distinct health insurance top-up of Rs. 5 lakh per year exclusively for senior citizens aged 70 and above, regardless of income.',
  'Healthcare',
  JSON_OBJECT('min_age', 70, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'PM Poshan Abhiyaan – Adolescent Anaemia Control',
  'Weekly Iron and Folic Acid Supplementation (WIFS) and bi-annual deworming tablets distributed through schools and Anganwadis to curb anaemia in adolescents.',
  'Healthcare',
  JSON_OBJECT('min_age', 10, 'max_age', 19, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student', 'Unemployed'), 'max_income', 600000, 'education', JSON_ARRAY('All'))
),
(
  'National Leprosy Eradication Programme (Disability Prevention)',
  'Free multi-drug therapy treatment, reconstructive surgery reimbursement up to Rs. 12,000, and supportive footwear/aids for leprosy-cured patients.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 400000, 'education', JSON_ARRAY('All'))
),
(
  'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
  'Direct income support of Rs. 6,000 per year in three equal installments of Rs. 2,000 directly transferred to bank accounts of all landholding farmer families.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 1500000, 'education', JSON_ARRAY('All'))
),
(
  'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
  'Comprehensive crop insurance policy protecting farmers against non-preventable natural risks (drought, flood, pests) at low premium rates (1.5%-2%).',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 85, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Kisan Credit Card (KCC) Scheme',
  'Subsidized institutional credit up to Rs. 3 lakh at 4% effective interest rate for crop cultivation expenses, farm maintenance, and harvest storage.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 3000000, 'education', JSON_ARRAY('All'))
),
(
  'Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)',
  'Financial subsidy up to 55% for small/marginal farmers to adopt micro-irrigation (drip and sprinkler systems) for efficient on-farm water management.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 80, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Soil Health Card Scheme',
  'Free soil testing and customized crop-wise fertilizer recommendations issued every 2 years to enhance soil nutrient balance and farm productivity.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 90, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 3000000, 'education', JSON_ARRAY('All'))
),
(
  'Paramparagat Krishi Vikas Yojana (PKVY)',
  'Financial assistance of Rs. 50,000 per hectare for 3 years to support farmers adopting certified chemical-free organic farming practices and PGS certification.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 2000000, 'education', JSON_ARRAY('All'))
),
(
  'Sub-Mission on Agricultural Mechanization (SMAM)',
  'Provides 40% to 50% capital subsidy to small and marginal farmers for purchasing modern tractors, power tillers, seed drills, and harvesters.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Agriculture Market (e-NAM)',
  'Pan-India electronic trading portal networking existing APMC mandis to create a unified national market for agricultural commodities with transparent online price bidding.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 85, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer', 'Business Owner', 'Self-Employed'), 'max_income', 5000000, 'education', JSON_ARRAY('All'))
),
(
  'Agriculture Infrastructure Fund (AIF)',
  'Medium-long term debt financing facility with 3% interest subvention for post-harvest management infrastructure, cold chains, silos, and primary processing units.',
  'Agriculture',
  JSON_OBJECT('min_age', 21, 'max_age', 70, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer', 'Entrepreneur', 'Business Owner'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'PM-KUSUM Component A & B (Solar Agriculture Pumps)',
  'Offers up to 60% subsidy for farmers to install standalone solar water pumps or solarize existing grid-connected tube wells to reduce electricity bills.',
  'Renewable Energy',
  JSON_OBJECT('min_age', 18, 'max_age', 80, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer', 'Self-Employed'), 'max_income', 3000000, 'education', JSON_ARRAY('All'))
),
(
  'Pradhan Mantri Matsya Sampada Yojana (PMMSY)',
  'Subsidies up to 40% for general beneficiaries and 60% for SC/ST/women for fish farming ponds, biofloc units, cages, feed mills, and refrigerated transport.',
  'Fisheries',
  JSON_OBJECT('min_age', 18, 'max_age', 70, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer', 'Self-Employed', 'Entrepreneur'), 'max_income', 2000000, 'education', JSON_ARRAY('All'))
),
(
  'Rashtriya Gokul Mission (RGM)',
  'Enhances milk production and indigenous bovine genetics by providing subsidized sex-sorted semen, artificial insemination, and breed development grants.',
  'Animal Husbandry',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer', 'Self-Employed'), 'max_income', 2000000, 'education', JSON_ARRAY('All'))
),
(
  'National Livestock Mission (NLM)',
  'Offers 50% capital subsidy up to Rs. 50 lakh for setting up sheep, goat, piggery, and poultry breeding farms and feed/fodder processing units.',
  'Animal Husbandry',
  JSON_OBJECT('min_age', 18, 'max_age', 70, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer', 'Self-Employed', 'Entrepreneur'), 'max_income', 5000000, 'education', JSON_ARRAY('All'))
),
(
  'Dairy Processing and Infrastructure Development Fund (DIDF)',
  'Concessional loan assistance through NABARD for modernization of dairy plants, milk chilling centers, and bulk milk coolers in rural cooperatives.',
  'Animal Husbandry',
  JSON_OBJECT('min_age', 21, 'max_age', 70, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer', 'Business Owner', 'Entrepreneur'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'National Beekeeping and Honey Mission (NBHM)',
  'Provides 80% subsidy on beehives, bee colonies, and honey extraction equipment for small farmers to promote Sweet Revolution and secondary farm income.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 70, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer', 'Self-Employed', 'Unemployed'), 'max_income', 1500000, 'education', JSON_ARRAY('All'))
),
(
  'Rythu Bandhu Scheme (Telangana)',
  'Investment support of Rs. 10,000 per acre per year (Rs. 5,000 per season) to all landowning farmers in Telangana for purchase of seeds, fertilizers, and inputs.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Telangana'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 2000000, 'education', JSON_ARRAY('All'))
),
(
  'Dr. YSR Rythu Bharosa (Andhra Pradesh)',
  'Provides financial assistance of Rs. 13,500 per year to landholding and tenant farmer families in Andhra Pradesh to meet agricultural expenses.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 90, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Andhra Pradesh'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 1500000, 'education', JSON_ARRAY('All'))
),
(
  'Krushak Assistance for Livelihood and Income Augmentation (KALIA – Odisha)',
  'Financial aid of Rs. 10,000 per family per year for small and marginal farmers and Rs. 12,500 for landless agricultural laborers in Odisha.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 80, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Odisha'), 'occupations', JSON_ARRAY('Farmer', 'Unemployed'), 'max_income', 400000, 'education', JSON_ARRAY('All'))
),
(
  'Krishi Bhagya Scheme (Karnataka)',
  'Subsidies up to 80% for constructing on-farm farm ponds (Krishi Honda), polythene lining, diesel pumps, and micro-irrigation systems in dryland areas of Karnataka.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Karnataka'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 1000000, 'education', JSON_ARRAY('All'))
),
(
  'Bhavantar Bhugtan Yojana (Madhya Pradesh)',
  'Price deficiency relief scheme reimbursing farmers the gap between Minimum Support Price (MSP) and actual market selling price in MP mandis.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 85, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Madhya Pradesh'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 2000000, 'education', JSON_ARRAY('All'))
),
(
  'Chief Minister Solar Pump Scheme (Maharashtra)',
  'Provides subsidized off-grid solar agriculture pumps with 90% to 95% government subsidy for farmers without conventional electric grid connections.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 80, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Maharashtra'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 1500000, 'education', JSON_ARRAY('All'))
),
(
  'Mukhyamantri Krishi Ashirwad Yojana (Jharkhand)',
  'Financial assistance between Rs. 5,000 to Rs. 25,000 per year per beneficiary depending on farm size to support input costs for Jharkhand farmers.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 80, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Jharkhand'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 800000, 'education', JSON_ARRAY('All'))
),
(
  'Kisan Kalyan Mission (Uttar Pradesh)',
  'Comprehensive agricultural transformation program providing free technical training, certified high-yield seed kits, and micro-loan linkage in UP.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Uttar Pradesh'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 1200000, 'education', JSON_ARRAY('All'))
),
(
  'Punjab Free Electricity for Agriculture Tube Wells',
  'Provides 100% subsidized free agricultural electricity supply to registered farming tube wells and motors across Punjab.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 90, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Punjab'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 3000000, 'education', JSON_ARRAY('All'))
),
(
  'Pashu Kisan Credit Card (Haryana)',
  'Low-interest short-term credit cards offering up to Rs. 1.60 lakh collateral-free loans for cattle, buffalo, sheep, and goat maintenance in Haryana.',
  'Animal Husbandry',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Haryana'), 'occupations', JSON_ARRAY('Farmer', 'Self-Employed'), 'max_income', 1500000, 'education', JSON_ARRAY('All'))
),
(
  'Mission Organic Value Chain Development for NE Region (MOVCDNER)',
  'Dedicated financial and technical support for developing end-to-end organic farming, collection centres, processing units, and marketing brands in North-East states.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 70, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Assam', 'Arunachal Pradesh', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Sikkim', 'Tripura'), 'occupations', JSON_ARRAY('Farmer', 'Entrepreneur'), 'max_income', 2000000, 'education', JSON_ARRAY('All'))
),
(
  'Sub-Mission on Seeds and Planting Material (SMSP)',
  'Distributes certified foundation and hybrid seed minikits at subsidized prices to boost crop yield and replace degraded seed varieties.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 80, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 1500000, 'education', JSON_ARRAY('All'))
),
(
  'Agri-Clinics and Agri-Business Centres Scheme (ACABC)',
  'Offers 36% to 44% composite subsidy and bank loans up to Rs. 20 lakh to agriculture graduates setting up agri-consultancies, seed testing labs, and farm clinics.',
  'Agriculture',
  JSON_OBJECT('min_age', 21, 'max_age', 50, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student', 'Self-Employed', 'Entrepreneur'), 'max_income', 1500000, 'education', JSON_ARRAY('Graduate', 'Post Graduate', 'Doctorate'))
),
(
  'National Mission for Sustainable Agriculture (NMSA – Rainfed Area Development)',
  'Grants up to 50% for farmers adopting integrated farming systems (IFS) combining horticulture, livestock, agroforestry, and crop rotation in rainfed zones.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 1200000, 'education', JSON_ARRAY('All'))
),
(
  'Mission for Integrated Development of Horticulture (MIDH)',
  'Capital subsidy of 40% to 50% for establishing commercial fruit orchards, polyhouse greenhouses, tissue culture units, and mushroom farming.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 70, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer', 'Self-Employed', 'Entrepreneur'), 'max_income', 3000000, 'education', JSON_ARRAY('All'))
),
(
  'National Means-cum-Merit Scholarship Scheme (NMMSS)',
  'Awards scholarships of Rs. 12,000 per annum to meritorious students of economically weaker sections studying in classes IX to XII in government schools.',
  'Education',
  JSON_OBJECT('min_age', 12, 'max_age', 20, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 350000, 'education', JSON_ARRAY('8th Pass', '9th Pass', '10th Pass', '12th Pass'))
),
(
  'Central Sector Scheme of Scholarship for College and University Students',
  'Financial aid of Rs. 12,000 to Rs. 20,000 per annum to meritorious students above 80th percentile in Class 12 pursuing regular degree courses.',
  'Education',
  JSON_OBJECT('min_age', 17, 'max_age', 28, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 450000, 'education', JSON_ARRAY('12th Pass', 'Graduate', 'Post Graduate'))
),
(
  'Post-Matric Scholarship for SC Students',
  '100% tuition fee reimbursement and monthly maintenance allowances up to Rs. 13,500/yr for Scheduled Caste students pursuing post-secondary higher education.',
  'Education',
  JSON_OBJECT('min_age', 15, 'max_age', 35, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 250000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate', 'Post Graduate'), 'social_categories', JSON_ARRAY('SC'))
),
(
  'Post-Matric Scholarship for ST Students',
  'Complete fee waiver and living allowance for Scheduled Tribe students studying in recognized colleges, polytechnics, and universities across India.',
  'Education',
  JSON_OBJECT('min_age', 15, 'max_age', 35, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 250000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate', 'Post Graduate'), 'social_categories', JSON_ARRAY('ST'))
),
(
  'Post-Matric Scholarship for OBC Students',
  'Provides non-refundable fee grants and academic maintenance stipends for Other Backward Class students pursuing post-matriculation courses.',
  'Education',
  JSON_OBJECT('min_age', 15, 'max_age', 35, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 250000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'), 'social_categories', JSON_ARRAY('OBC'))
),
(
  'Top Class Education Scheme for SC Students',
  'Full tuition fee reimbursement, living allowance of Rs. 3,000/month, and computer grant of Rs. 45,000 for SC students admitted to premier notified institutes (IITs, IIMs, AIIMS).',
  'Education',
  JSON_OBJECT('min_age', 17, 'max_age', 32, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 800000, 'education', JSON_ARRAY('12th Pass', 'Graduate'), 'social_categories', JSON_ARRAY('SC'))
),
(
  'Top Class Education Scheme for ST Students',
  'Covers full tuition fees, non-refundable charges, boarding allowance, and laptop purchase grant for meritorious ST students in premier national institutions.',
  'Education',
  JSON_OBJECT('min_age', 17, 'max_age', 32, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 600000, 'education', JSON_ARRAY('12th Pass', 'Graduate'), 'social_categories', JSON_ARRAY('ST'))
),
(
  'National Overseas Scholarship for SC/ST Candidates',
  'Full tuition fee sponsorship, annual maintenance allowance of USD 15,400, and airfare for underprivileged students pursuing Master\'s and Ph.D degrees abroad.',
  'Education',
  JSON_OBJECT('min_age', 20, 'max_age', 35, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student', 'Unemployed'), 'max_income', 800000, 'education', JSON_ARRAY('Graduate', 'Post Graduate'), 'social_categories', JSON_ARRAY('SC', 'ST'))
),
(
  'Pragati Scholarship for Girl Students (Technical Degree/Diploma)',
  'AICTE scheme offering Rs. 50,000 per annum for all 4 years of degree/diploma education to meritorious girl students admitted to technical engineering colleges.',
  'Education',
  JSON_OBJECT('min_age', 16, 'max_age', 26, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 800000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'))
),
(
  'Saksham Scholarship for Divyang Students (Technical Education)',
  'AICTE grant of Rs. 50,000 per year towards tuition and college expenses for specially-abled students with disability >= 40% pursuing technical degrees.',
  'Education',
  JSON_OBJECT('min_age', 16, 'max_age', 30, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 800000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'))
),
(
  'AICTE Swanath Scholarship Scheme',
  'Financial support of Rs. 50,000 per year for orphaned students, wards of armed forces martyrs, and children of COVID-deceased parents pursuing higher technical education.',
  'Education',
  JSON_OBJECT('min_age', 16, 'max_age', 30, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 800000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'))
),
(
  'Prime Minister\'s Research Fellowship (PMRF)',
  'Prestigious fellowship offering Rs. 70,000 to Rs. 80,000 per month stipend and Rs. 2 lakh annual research grant for meritorious doctoral Ph.D scholars in IITs, IISc, and IISERs.',
  'Education',
  JSON_OBJECT('min_age', 21, 'max_age', 35, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 10000000, 'education', JSON_ARRAY('Graduate', 'Post Graduate', 'Doctorate'))
),
(
  'INSPIRE Scholarship for Higher Education (SHE)',
  'Department of Science and Technology scholarship offering Rs. 80,000 per annum (Rs. 5,000/month + mentorship grant) for students pursuing natural and basic science degrees.',
  'Education',
  JSON_OBJECT('min_age', 17, 'max_age', 25, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 10000000, 'education', JSON_ARRAY('12th Pass', 'Graduate', 'Post Graduate'))
),
(
  'Kishore Vaigyanik Protsahan Yojana (KVPY / IAT Fellowship)',
  'National fellowship providing monthly stipends up to Rs. 7,000 and annual contingency grants to encourage talented students to pursue research careers in basic sciences.',
  'Education',
  JSON_OBJECT('min_age', 16, 'max_age', 24, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 10000000, 'education', JSON_ARRAY('12th Pass', 'Graduate'))
),
(
  'Free Coaching Scheme for SC and OBC Students',
  'Free competitive examination coaching and monthly stipend of Rs. 4,000 for UPSC, SSC, Banking, JEE, NEET, and GATE exams for SC and OBC candidates.',
  'Education',
  JSON_OBJECT('min_age', 18, 'max_age', 35, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student', 'Unemployed'), 'max_income', 800000, 'education', JSON_ARRAY('12th Pass', 'Graduate'), 'social_categories', JSON_ARRAY('SC', 'OBC'))
),
(
  'Begum Hazrat Mahal National Scholarship for Minority Girls',
  'Scholarship of Rs. 5,000 for class IX-X and Rs. 6,000 for class XI-XII for meritorious girl students belonging to national minority communities.',
  'Education',
  JSON_OBJECT('min_age', 13, 'max_age', 20, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 200000, 'education', JSON_ARRAY('8th Pass', '9th Pass', '10th Pass', '12th Pass'))
),
(
  'Pre-Matric Scholarship for SC Students',
  'Provides financial assistance of Rs. 3,500/year to SC children studying in classes IX and X to prevent dropout rates and incentivize high school completion.',
  'Education',
  JSON_OBJECT('min_age', 12, 'max_age', 18, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 250000, 'education', JSON_ARRAY('8th Pass', '9th Pass', '10th Pass'), 'social_categories', JSON_ARRAY('SC'))
),
(
  'Pre-Matric Scholarship for ST Students',
  'Annual scholarship assistance of Rs. 3,500 for Day Scholars and Rs. 7,000 for Hostellers studying in classes IX and X from Scheduled Tribe communities.',
  'Education',
  JSON_OBJECT('min_age', 12, 'max_age', 18, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 250000, 'education', JSON_ARRAY('8th Pass', '9th Pass', '10th Pass'), 'social_categories', JSON_ARRAY('ST'))
),
(
  'Padho Pardesh – Education Loan Interest Subsidy',
  'Provides 100% interest subsidy during the moratorium period on overseas education loans for students from minority communities pursuing Master\'s or Ph.D abroad.',
  'Education',
  JSON_OBJECT('min_age', 20, 'max_age', 35, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 600000, 'education', JSON_ARRAY('Graduate', 'Post Graduate'))
),
(
  'Central Sector Interest Subsidy (CSIS) on Education Loans',
  'Complete interest subsidy during course study and moratorium period on education loans up to Rs. 10 lakh for professional courses for students from low-income families.',
  'Education',
  JSON_OBJECT('min_age', 17, 'max_age', 32, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 450000, 'education', JSON_ARRAY('12th Pass', 'Graduate'))
),
(
  'Kanyashree Prakalpa (K1 & K2 – West Bengal)',
  'Annual scholarship of Rs. 1,000 (K1) and one-time grant of Rs. 25,000 (K2) upon reaching 18 years for unmarried school-going girls in West Bengal.',
  'Education',
  JSON_OBJECT('min_age', 13, 'max_age', 19, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('West Bengal'), 'occupations', JSON_ARRAY('Student'), 'max_income', 120000, 'education', JSON_ARRAY('8th Pass', '9th Pass', '10th Pass', '12th Pass'))
),
(
  'Mukhyamantri Medhavi Vidyarthi Yojana (MMVY – Madhya Pradesh)',
  'Full course fee sponsorship for students scoring 70%+ in MP Board or 85%+ in CBSE Class 12 admitted to Engineering, Medical, Law, or Degree colleges.',
  'Education',
  JSON_OBJECT('min_age', 16, 'max_age', 26, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Madhya Pradesh'), 'occupations', JSON_ARRAY('Student'), 'max_income', 600000, 'education', JSON_ARRAY('12th Pass', 'Graduate'))
),
(
  'Mukhyamantri Kanya Utthan Yojana (Bihar)',
  'Financial incentives up to Rs. 50,000 for girl students passing Class 12 and graduating from recognized universities in Bihar.',
  'Education',
  JSON_OBJECT('min_age', 16, 'max_age', 26, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Bihar'), 'occupations', JSON_ARRAY('Student'), 'max_income', 400000, 'education', JSON_ARRAY('12th Pass', 'Graduate'))
),
(
  'Jagananna Vidya Deevena (Andhra Pradesh)',
  'Full college tuition fee reimbursement credited directly to the mother\'s bank account for polytechnic, ITI, degree, and engineering students in AP.',
  'Education',
  JSON_OBJECT('min_age', 16, 'max_age', 28, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Andhra Pradesh'), 'occupations', JSON_ARRAY('Student'), 'max_income', 250000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'))
),
(
  'Jagananna Vasathi Deevena (Andhra Pradesh)',
  'Annual hostel food and accommodation assistance of Rs. 20,000 for university and engineering students in Andhra Pradesh.',
  'Education',
  JSON_OBJECT('min_age', 17, 'max_age', 28, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Andhra Pradesh'), 'occupations', JSON_ARRAY('Student'), 'max_income', 250000, 'education', JSON_ARRAY('12th Pass', 'Graduate'))
),
(
  'Moovalur Ramamirtham Ammaiyar Pudhumai Penn Scheme (Tamil Nadu)',
  'Monthly direct financial grant of Rs. 1,000 deposited into bank accounts of girl students who studied in government schools and enrolled in higher education.',
  'Education',
  JSON_OBJECT('min_age', 17, 'max_age', 25, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Tamil Nadu'), 'occupations', JSON_ARRAY('Student'), 'max_income', 500000, 'education', JSON_ARRAY('12th Pass', 'Graduate'))
),
(
  'Tamil Nadu Naan Mudhalvan Scheme',
  'Free dynamic upskilling courses in AI, Cloud Computing, Robotics, and Foreign Languages for engineering, arts, and science college students across Tamil Nadu.',
  'Education',
  JSON_OBJECT('min_age', 17, 'max_age', 26, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Tamil Nadu'), 'occupations', JSON_ARRAY('Student'), 'max_income', 10000000, 'education', JSON_ARRAY('12th Pass', 'Graduate'))
),
(
  'Gargi Puraskar Yojana (Rajasthan)',
  'Cash prize of Rs. 6,000 and merit certificate awarded to girl students scoring 75% or above marks in Class 10 and Class 12 board exams in Rajasthan.',
  'Education',
  JSON_OBJECT('min_age', 15, 'max_age', 20, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Rajasthan'), 'occupations', JSON_ARRAY('Student'), 'max_income', 500000, 'education', JSON_ARRAY('10th Pass', '12th Pass'))
),
(
  'Chief Minister\'s Super 100 Scheme (Haryana)',
  'Free residential boarding and specialized 2-year entrance coaching for meritorious government school students preparing for IIT-JEE and NEET in Haryana.',
  'Education',
  JSON_OBJECT('min_age', 14, 'max_age', 18, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Haryana'), 'occupations', JSON_ARRAY('Student'), 'max_income', 300000, 'education', JSON_ARRAY('10th Pass'))
),
(
  'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti (Maharashtra)',
  '50% tuition and exam fee reimbursement for Economically Backward Class (EBC) students studying higher professional degrees in Maharashtra.',
  'Education',
  JSON_OBJECT('min_age', 17, 'max_age', 28, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Maharashtra'), 'occupations', JSON_ARRAY('Student'), 'max_income', 800000, 'education', JSON_ARRAY('12th Pass', 'Graduate', 'Post Graduate'))
),
(
  'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
  'Direct cash maternity incentive of Rs. 5,000 for the first child and Rs. 6,000 for the second child (if girl) to promote adequate nutrition and institutional delivery.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 45, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Homemaker', 'Self-Employed', 'Unemployed', 'Farmer', 'Salaried Employee'), 'max_income', 500000, 'education', JSON_ARRAY('All'))
),
(
  'Beti Bachao Beti Padhao (BBBP)',
  'National multi-sectoral initiative ensuring survival, protection, and quality higher education for girl children to eliminate gender-biased sex selection.',
  'Women Welfare',
  JSON_OBJECT('min_age', 0, 'max_age', 30, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2000000, 'education', JSON_ARRAY('All'))
),
(
  'Sukanya Samriddhi Yojana (SSY)',
  'Government small savings scheme offering highest tax-free sovereign interest (8.2%) and Section 80C deductions for girl child education and marriage corpus.',
  'Women Welfare',
  JSON_OBJECT('min_age', 0, 'max_age', 50, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 5000000, 'education', JSON_ARRAY('All'))
),
(
  'Mission Shakti – Sambal (Safety & Security)',
  'Integrated umbrella scheme supporting One Stop Centres (Sakhi), Women Helpline (181), and Beti Bachao initiatives for women in distress or domestic crises.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 90, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Mission Shakti – Samarthya (Empowerment & Child Care)',
  'Provides Working Women Hostels (Sakhi Niwas), National Creche Scheme for children of working mothers, and financial micro-credit linkages for women.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 60, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Salaried Employee', 'Self-Employed', 'Entrepreneur', 'Homemaker'), 'max_income', 800000, 'education', JSON_ARRAY('All'))
),
(
  'Pradhan Mantri Ujjwala Yojana (PMUY)',
  'Deposit-free LPG cylinder connection, free first cylinder refill, and subsidized cookstove issued in the name of adult women from poor and BPL households.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 80, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Homemaker', 'Self-Employed', 'Farmer', 'Unemployed'), 'max_income', 250000, 'education', JSON_ARRAY('All'))
),
(
  'Mahila E-Haat (Digital Entrepreneurship)',
  'Direct bilingual online marketing platform for women entrepreneurs, SHGs, and NGOs to sell handmade products, textiles, and organic groceries without middleman cuts.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 65, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Entrepreneur', 'Self-Employed', 'Homemaker'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Support to Training and Employment Programme for Women (STEP)',
  'Provides employability and entrepreneurial skill training in agriculture, horticulture, handlooms, IT, and food processing to marginalized women.',
  'Women Welfare',
  JSON_OBJECT('min_age', 16, 'max_age', 55, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Unemployed', 'Homemaker', 'Self-Employed'), 'max_income', 300000, 'education', JSON_ARRAY('Below 8th', '8th Pass', '10th Pass', '12th Pass'))
),
(
  'Ladli Behna Yojana (Madhya Pradesh)',
  'Direct monthly financial assistance of Rs. 1,250 deposited into the bank accounts of married, widowed, and divorced women aged 21 to 60 in MP.',
  'Women Welfare',
  JSON_OBJECT('min_age', 21, 'max_age', 60, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Madhya Pradesh'), 'occupations', JSON_ARRAY('Homemaker', 'Self-Employed', 'Unemployed', 'Farmer'), 'max_income', 250000, 'education', JSON_ARRAY('All'))
),
(
  'Mukhyamantri Majhi Ladki Bahin Yojana (Maharashtra)',
  'Monthly direct cash transfer of Rs. 1,500 transferred to women from low-income families aged 21 to 65 across Maharashtra.',
  'Women Welfare',
  JSON_OBJECT('min_age', 21, 'max_age', 65, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Maharashtra'), 'occupations', JSON_ARRAY('Homemaker', 'Self-Employed', 'Unemployed', 'Farmer'), 'max_income', 250000, 'education', JSON_ARRAY('All'))
),
(
  'Gruha Lakshmi Scheme (Karnataka)',
  'Monthly financial assistance of Rs. 2,000 transferred to women heads of Antyodaya and BPL households across Karnataka.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 80, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Karnataka'), 'occupations', JSON_ARRAY('Homemaker', 'Self-Employed', 'Farmer', 'Unemployed'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Gruha Lakshmi Scheme (Telangana)',
  'One-time financial grant of Rs. 3 lakh provided to women head of poor families owning house plots to construct pucca homes in Telangana.',
  'Housing',
  JSON_OBJECT('min_age', 21, 'max_age', 65, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Telangana'), 'occupations', JSON_ARRAY('Homemaker', 'Self-Employed', 'Unemployed'), 'max_income', 250000, 'education', JSON_ARRAY('All'))
),
(
  'Lakshmir Bhandar Scheme (West Bengal)',
  'Monthly direct basic income support of Rs. 1,200 for SC/ST women and Rs. 1,000 for general category women aged 25 to 60 in West Bengal.',
  'Women Welfare',
  JSON_OBJECT('min_age', 25, 'max_age', 60, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('West Bengal'), 'occupations', JSON_ARRAY('Homemaker', 'Self-Employed', 'Farmer', 'Unemployed'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Mukhyamantri Kanya Sumangala Yojana (Uttar Pradesh)',
  'Conditional monetary grants totaling Rs. 25,000 transferred across 6 life milestones from girl child birth through college admission in UP.',
  'Women Welfare',
  JSON_OBJECT('min_age', 0, 'max_age', 25, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Uttar Pradesh'), 'occupations', JSON_ARRAY('All'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Mahila Samman Savings Certificate (MSSC)',
  'Government small savings investment scheme exclusively for women and girls offering attractive 7.5% fixed interest compounded quarterly for 2 years.',
  'Women Welfare',
  JSON_OBJECT('min_age', 0, 'max_age', 90, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Mahila Samridhi Yojana (NCFDC / NBCFDC)',
  'Micro-finance loan up to Rs. 1.40 lakh at 4% subsidized interest rate for backward class women entrepreneurs through state channelizing agencies.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 55, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Self-Employed', 'Entrepreneur', 'Homemaker'), 'max_income', 300000, 'education', JSON_ARRAY('All'), 'social_categories', JSON_ARRAY('OBC', 'SC', 'ST'))
),
(
  'Dena Shakti / Cent Kalyani Women Enterprise Loan',
  'Concessional interest rate enterprise loans up to Rs. 1 crore with 0.50% interest concession and collateral fee waivers for women MSME business owners.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 65, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Entrepreneur', 'Business Owner', 'Self-Employed'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Udyogini Scheme for Women Entrepreneurs (Karnataka)',
  'Subsidized bank business loans up to Rs. 3 lakh with 30% government capital subsidy for women setting up trade and manufacturing micro-units.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 55, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Karnataka'), 'occupations', JSON_ARRAY('Entrepreneur', 'Business Owner', 'Self-Employed'), 'max_income', 150000, 'education', JSON_ARRAY('All'))
),
(
  'Kalyana Lakshmi / Shaadi Mubarak Scheme (Telangana)',
  'One-time financial assistance of Rs. 1,00,116 for marriage expenses of underprivileged brides aged 18+ from SC/ST/BC/Minority communities in Telangana.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 35, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Telangana'), 'occupations', JSON_ARRAY('All'), 'max_income', 200000, 'education', JSON_ARRAY('All'))
),
(
  'Dr. Muthulakshmi Reddy Maternity Benefit Scheme (Tamil Nadu)',
  'Maternity assistance of Rs. 18,000 (including Rs. 14,000 cash and nutrition kit worth Rs. 4,000) for pregnant women in Tamil Nadu.',
  'Women Welfare',
  JSON_OBJECT('min_age', 19, 'max_age', 45, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Tamil Nadu'), 'occupations', JSON_ARRAY('Homemaker', 'Self-Employed', 'Unemployed'), 'max_income', 200000, 'education', JSON_ARRAY('All'))
),
(
  'Pradhan Mantri Mudra Yojana – Shishu Loan',
  'Collateral-free micro loans up to Rs. 50,000 at low interest rates for starting small grocery shops, tailoring, repair shops, and tiny ventures.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 65, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Self-Employed', 'Business Owner', 'Unemployed', 'Homemaker'), 'max_income', 1500000, 'education', JSON_ARRAY('All'))
),
(
  'Pradhan Mantri Mudra Yojana – Kishor Loan',
  'Collateral-free business loans between Rs. 50,000 and Rs. 5 lakh for purchasing machinery, raw material inventory, and business expansion.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 65, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Self-Employed', 'Business Owner', 'Entrepreneur'), 'max_income', 3000000, 'education', JSON_ARRAY('All'))
),
(
  'Pradhan Mantri Mudra Yojana – Tarun Loan',
  'Collateral-free business growth loans from Rs. 5 lakh up to Rs. 20 lakh for established small enterprises, manufacturers, and trade firms.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 65, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Business Owner', 'Entrepreneur', 'Self-Employed'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'PM SVANidhi Scheme (Micro-Credit for Street Vendors)',
  'Working capital collateral-free loans starting at Rs. 10,000, progressing to Rs. 20,000 and Rs. 50,000 with 7% interest subsidy and cashback for digital transactions.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 65, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Self-Employed', 'Business Owner', 'Unemployed'), 'max_income', 400000, 'education', JSON_ARRAY('All'))
),
(
  'PM Vishwakarma Scheme',
  'Holistic support for 18 traditional artisan trades (carpenters, blacksmiths, potters, cobblers) with certificate, Rs. 15k toolkit grant, and 5% interest loans up to Rs. 3 lakh.',
  'Skills & Business',
  JSON_OBJECT('min_age', 18, 'max_age', 70, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Self-Employed', 'Business Owner', 'Homemaker', 'Unemployed'), 'max_income', 600000, 'education', JSON_ARRAY('All'))
),
(
  'Prime Minister\'s Employment Generation Programme (PMEGP)',
  'Credit-linked capital subsidy of up to 35% on project loans up to Rs. 50 lakh for manufacturing and Rs. 20 lakh for services to generate new self-employment.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 65, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Unemployed', 'Self-Employed', 'Entrepreneur', 'Business Owner'), 'max_income', 2500000, 'education', JSON_ARRAY('8th Pass', '10th Pass', '12th Pass', 'Graduate'))
),
(
  'Stand-Up India Scheme',
  'Facilitates bank loans between Rs. 10 lakh and Rs. 1 crore to at least one SC/ST borrower and at least one woman borrower per bank branch for greenfield enterprises.',
  'Entrepreneurship',
  JSON_OBJECT('min_age', 18, 'max_age', 65, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Entrepreneur', 'Business Owner', 'Self-Employed'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Startup India Initiative',
  '3-year 100% income tax exemption, patent fast-tracking with 80% fee rebate, self-certification compliance, and Rs. 10,000 Cr Fund of Funds support for DPIIT-recognized startups.',
  'Entrepreneurship',
  JSON_OBJECT('min_age', 18, 'max_age', 65, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Entrepreneur', 'Business Owner', 'Student', 'Salaried Employee'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Credit Guarantee Fund Trust for Micro & Small Enterprises (CGTMSE)',
  'Provides credit guarantee cover up to 85% for collateral-free bank loans up to Rs. 5 crore sanctioned to new and existing micro and small business units.',
  'Business & Employment',
  JSON_OBJECT('min_age', 21, 'max_age', 65, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Business Owner', 'Entrepreneur'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Scheme of Fund for Regeneration of Traditional Industries (SFURTI)',
  'Financial assistance up to Rs. 2.5 crore to Rs. 5 crore per artisan cluster to setup Common Facility Centres, modern tooling, and design centers for khadi and coir.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 70, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Self-Employed', 'Business Owner', 'Entrepreneur'), 'max_income', 1500000, 'education', JSON_ARRAY('All'))
),
(
  'ASPIRE Scheme (Livelihood Business Incubators)',
  'Grants up to Rs. 1 crore for setting up Livelihood Business Incubators (LBIs) and Technology Business Incubators (TBIs) in agro-rural industries.',
  'Entrepreneurship',
  JSON_OBJECT('min_age', 21, 'max_age', 60, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Entrepreneur', 'Business Owner'), 'max_income', 10000000, 'education', JSON_ARRAY('Graduate', 'Post Graduate'))
),
(
  'MSME Champions (MSME Sustainable ZED Certification)',
  'Subsidizes up to 80% of testing and certification cost for Zero Defect Zero Effect (ZED) quality and eco-manufacturing standards for MSMEs.',
  'Business & Employment',
  JSON_OBJECT('min_age', 21, 'max_age', 70, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Business Owner', 'Entrepreneur'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Coir Vikas Yojana (CVY)',
  'Provides 25% capital subsidy for setting up coir spinning and weaving units and 75% subsidy for modern motorized traditional coir ratts for women workers.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 65, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Self-Employed', 'Business Owner', 'Homemaker'), 'max_income', 1000000, 'education', JSON_ARRAY('All'))
),
(
  'National Small Industries Corporation (NSIC) Raw Material Assistance',
  'Finances the procurement of indigenous and imported raw materials (steel, aluminium, polymers) against bank guarantees up to 180 days for MSMEs.',
  'Business & Employment',
  JSON_OBJECT('min_age', 21, 'max_age', 70, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Business Owner', 'Entrepreneur'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'National SC-ST Hub (NSSH)',
  'Provides 25% subsidy on equipment purchase, free vendor registration on GeM, and handholding to SC/ST entrepreneurs for government procurement quotas.',
  'Entrepreneurship',
  JSON_OBJECT('min_age', 18, 'max_age', 65, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Entrepreneur', 'Business Owner', 'Self-Employed'), 'max_income', 5000000, 'education', JSON_ARRAY('All'), 'social_categories', JSON_ARRAY('SC', 'ST'))
),
(
  'Chief Minister\'s Employment Generation Programme (CMEGP – Maharashtra)',
  'Provides capital subsidy up to 35% on project loans up to Rs. 50 lakh for manufacturing and Rs. 20 lakh for service enterprises in Maharashtra.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 45, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Maharashtra'), 'occupations', JSON_ARRAY('Unemployed', 'Self-Employed', 'Entrepreneur'), 'max_income', 1500000, 'education', JSON_ARRAY('8th Pass', '10th Pass', 'Graduate'))
),
(
  'Mukhyamantri Yuva Swarojgar Yojana (Uttar Pradesh)',
  'Offers 25% margin money subsidy on bank loans up to Rs. 25 lakh for industry and Rs. 10 lakh for service sector ventures to educated unemployed youth in UP.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 40, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Uttar Pradesh'), 'occupations', JSON_ARRAY('Unemployed', 'Self-Employed', 'Entrepreneur'), 'max_income', 1000000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'))
),
(
  'Mukhyamantri Yuva Udyami Yojana (Madhya Pradesh)',
  'Provides 15% margin money subsidy up to Rs. 12 lakh and 5% interest subsidy for 5 years on loans from Rs. 10 lakh to Rs. 2 crore for new industry setups in MP.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 40, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Madhya Pradesh'), 'occupations', JSON_ARRAY('Unemployed', 'Entrepreneur', 'Self-Employed'), 'max_income', 2000000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'))
),
(
  'T-PRIDE (Telangana Program for SC/ST Entrepreneurship)',
  'Offers 35% investment subsidy up to Rs. 75 lakh, 100% stamp duty reimbursement, and 9% interest subvention for SC/ST entrepreneurs in Telangana.',
  'Entrepreneurship',
  JSON_OBJECT('min_age', 18, 'max_age', 60, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Telangana'), 'occupations', JSON_ARRAY('Entrepreneur', 'Business Owner', 'Self-Employed'), 'max_income', 5000000, 'education', JSON_ARRAY('All'), 'social_categories', JSON_ARRAY('SC', 'ST'))
),
(
  'Unemployed Youth Employment Generation Programme (UYEGP – Tamil Nadu)',
  'Provides 25% government subsidy on bank loans up to Rs. 15 lakh for manufacturing and Rs. 5 lakh for services/trading in Tamil Nadu.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 45, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Tamil Nadu'), 'occupations', JSON_ARRAY('Unemployed', 'Self-Employed', 'Entrepreneur'), 'max_income', 500000, 'education', JSON_ARRAY('8th Pass', '10th Pass', '12th Pass', 'Graduate'))
),
(
  'Pradhan Mantri Awas Yojana – Gramin (PMAY-G)',
  'Direct financial assistance of Rs. 1.20 lakh in plain areas and Rs. 1.30 lakh in hilly states for rural houseless families to build pucca houses with clean toilet.',
  'Housing',
  JSON_OBJECT('min_age', 18, 'max_age', 85, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer', 'Self-Employed', 'Unemployed', 'Homemaker', 'Salaried Employee'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Pradhan Mantri Awas Yojana – Urban (PMAY-U)',
  'Central grant of Rs. 1.50 lakh to Rs. 2.67 lakh interest subsidy (CLSS) on home loans for urban EWS, LIG, and MIG families buying or building their first pucca home.',
  'Housing',
  JSON_OBJECT('min_age', 21, 'max_age', 70, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 1800000, 'education', JSON_ARRAY('All'))
),
(
  'Swachh Bharat Mission – Gramin (Individual Household Latrine)',
  'Direct incentive grant of Rs. 12,000 for below-poverty-line and eligible rural families to construct individual household flush toilets.',
  'Sanitation',
  JSON_OBJECT('min_age', 18, 'max_age', 90, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 250000, 'education', JSON_ARRAY('All'))
),
(
  'Jal Jeevan Mission (Har Ghar Jal)',
  'Government mission providing functional individual household tap connections (FHTC) delivering 55 litres of clean potable drinking water per capita per day to all rural homes.',
  'Infrastructure',
  JSON_OBJECT('min_age', 18, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'PM Surya Ghar – Muft Bijli Yojana (Rooftop Solar)',
  'Direct subsidy up to Rs. 78,000 for installing up to 3 kW residential rooftop solar panels, providing up to 300 units of free electricity every month.',
  'Renewable Energy',
  JSON_OBJECT('min_age', 18, 'max_age', 85, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 5000000, 'education', JSON_ARRAY('All'))
),
(
  'Pradhan Mantri Gram Sadak Yojana (PMGSY)',
  'Centrally sponsored infrastructure program constructing all-weather single-lane paved roads connecting unconnected rural habitations to market centers.',
  'Infrastructure',
  JSON_OBJECT('min_age', 18, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Affordable Rental Housing Complexes (ARHCs)',
  'Concessional rental housing units with basic civic amenities near industrial clusters for urban migrants, street vendors, and factory workers.',
  'Housing',
  JSON_OBJECT('min_age', 18, 'max_age', 65, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Salaried Employee', 'Self-Employed', 'Unemployed'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Kalaignar Kanavu Illam Scheme (Tamil Nadu)',
  'Financial support of Rs. 3.50 lakh per unit for building pucca houses to transform thatched-roof and kutcha huts in rural Tamil Nadu.',
  'Housing',
  JSON_OBJECT('min_age', 21, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Tamil Nadu'), 'occupations', JSON_ARRAY('Farmer', 'Self-Employed', 'Unemployed', 'Homemaker'), 'max_income', 200000, 'education', JSON_ARRAY('All'))
),
(
  'Mukhyamantri Awas Yojana – Gramin (Uttar Pradesh)',
  'Provides Rs. 1.20 lakh financial assistance for house construction to families displaced by natural disasters, leprosy-affected, and Musahar communities in UP.',
  'Housing',
  JSON_OBJECT('min_age', 18, 'max_age', 80, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Uttar Pradesh'), 'occupations', JSON_ARRAY('Unemployed', 'Farmer', 'Self-Employed', 'Homemaker'), 'max_income', 200000, 'education', JSON_ARRAY('All'))
),
(
  'Ghar Kul Yojana – Shabari Awas (Maharashtra)',
  'Grants up to Rs. 1.30 lakh to Scheduled Tribe beneficiaries in rural Maharashtra to construct earthquake and rain-resistant pucca homes.',
  'Housing',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Maharashtra'), 'occupations', JSON_ARRAY('Farmer', 'Unemployed', 'Self-Employed', 'Homemaker'), 'max_income', 150000, 'education', JSON_ARRAY('All'), 'social_categories', JSON_ARRAY('ST'))
),
(
  'Atal Pension Yojana (APY)',
  'Government guaranteed monthly pension from Rs. 1,000 to Rs. 5,000 per month after age 60 for unorganized workers based on monthly savings from age 18 to 40.',
  'Pension & Social Security',
  JSON_OBJECT('min_age', 18, 'max_age', 40, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 1000000, 'education', JSON_ARRAY('All'))
),
(
  'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)',
  'Annual renewable life insurance providing Rs. 2 lakh death risk coverage due to any reason at an affordable premium of Rs. 436 per year for bank account holders.',
  'Life Insurance',
  JSON_OBJECT('min_age', 18, 'max_age', 50, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 5000000, 'education', JSON_ARRAY('All'))
),
(
  'Pradhan Mantri Suraksha Bima Yojana (PMSBY)',
  'Accidental insurance offering Rs. 2 lakh for accidental death or full disability (Rs. 1 lakh for partial disability) for a tiny annual premium of just Rs. 20.',
  'Accident Insurance',
  JSON_OBJECT('min_age', 18, 'max_age', 70, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 5000000, 'education', JSON_ARRAY('All'))
),
(
  'Pradhan Mantri Shram Yogi Maandhan (PM-SYM)',
  'Old-age pension scheme assuring Rs. 3,000 monthly pension after attaining 60 years for unorganized workers (rickshaw pullers, domestic maids, street vendors) with matching 50% central contribution.',
  'Pension & Social Security',
  JSON_OBJECT('min_age', 18, 'max_age', 40, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Self-Employed', 'Unemployed', 'Farmer', 'Homemaker'), 'max_income', 180000, 'education', JSON_ARRAY('All'))
),
(
  'National Social Assistance Programme – IGNOAPS (Senior Pension)',
  'Monthly central pension of Rs. 200 to Rs. 500 (supplemented by state contributions up to Rs. 1,500-3,000/mo) for BPL elderly citizens aged 60 and above.',
  'Pension & Social Security',
  JSON_OBJECT('min_age', 60, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Retired', 'Unemployed', 'Homemaker', 'Farmer'), 'max_income', 200000, 'education', JSON_ARRAY('All'))
),
(
  'National Social Assistance Programme – IGNWPS (Widow Pension)',
  'Monthly financial assistance and pension support of Rs. 300 to Rs. 2,000 per month for widows living below the poverty line aged 40 to 79.',
  'Pension & Social Security',
  JSON_OBJECT('min_age', 40, 'max_age', 79, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Homemaker', 'Unemployed', 'Self-Employed'), 'max_income', 200000, 'education', JSON_ARRAY('All'))
),
(
  'National Social Assistance Programme – IGNDPS (Disability Pension)',
  'Monthly pension of Rs. 300 to Rs. 2,500 for persons living below poverty line aged 18+ with severe or multiple disabilities (80% and above benchmark disability).',
  'Disability Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 79, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Unemployed', 'Student', 'Homemaker', 'Retired'), 'max_income', 200000, 'education', JSON_ARRAY('All'))
),
(
  'Atal Vayo Abhyuday Yojana (AVYAY – Senior Assisted Living)',
  'Free physical assistive living aids, elderline helpline (14567), and shelter homes for indigent senior citizens aged 60 and above.',
  'Senior Welfare',
  JSON_OBJECT('min_age', 60, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Retired', 'Homemaker', 'Unemployed', 'Farmer'), 'max_income', 400000, 'education', JSON_ARRAY('All'))
),
(
  'Rashtriya Vayoshri Yojana',
  'Free provision of assisted-living physical devices (motorized wheelchairs, hearing aids, walkers, dentures, spectacles, crutches) for BPL senior citizens with age-related disabilities.',
  'Senior & Disability Welfare',
  JSON_OBJECT('min_age', 60, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Retired', 'Homemaker', 'Unemployed'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Assistance to Persons with Disabilities for Purchase/Fitting of Aids (ADIP)',
  'Grants up to 100% financial assistance for procurement of modern durable assistive devices, smart canes, Braille books, hearing aids, and artificial limbs for persons with disabilities.',
  'Disability Welfare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 360000, 'education', JSON_ARRAY('All'))
),
(
  'National Divyangjan Finance and Development Corporation (NDFDC Loan)',
  'Concessional micro-loans at 4% to 8% interest rate up to Rs. 50 lakh for persons with disabilities to set up retail shops, service enterprises, or manufacturing units.',
  'Disability Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 65, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Self-Employed', 'Entrepreneur', 'Business Owner', 'Unemployed'), 'max_income', 600000, 'education', JSON_ARRAY('All'))
),
(
  'Aasara Pension Scheme (Telangana)',
  'Monthly social safety pension of Rs. 2,016 for senior citizens, widows, beedi workers, weavers, and Rs. 3,016 for persons with disabilities in Telangana.',
  'Pension & Social Security',
  JSON_OBJECT('min_age', 57, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Telangana'), 'occupations', JSON_ARRAY('Retired', 'Unemployed', 'Homemaker', 'Self-Employed'), 'max_income', 200000, 'education', JSON_ARRAY('All'))
),
(
  'YSR Pension Kanuka (Andhra Pradesh)',
  'Doorstep monthly pension of Rs. 3,000 for elderly, widows, toddy tappers, and Rs. 6,000 to Rs. 10,000 for chronic kidney disease and disabled citizens in AP.',
  'Pension & Social Security',
  JSON_OBJECT('min_age', 60, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Andhra Pradesh'), 'occupations', JSON_ARRAY('Retired', 'Unemployed', 'Homemaker', 'Self-Employed'), 'max_income', 250000, 'education', JSON_ARRAY('All'))
),
(
  'Sanjay Gandhi Niradhar Anudan Yojana (Maharashtra)',
  'Monthly pension of Rs. 1,500 for destitute elderly, disabled, widows, and orphan beneficiaries living below the poverty line in Maharashtra.',
  'Pension & Social Security',
  JSON_OBJECT('min_age', 18, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Maharashtra'), 'occupations', JSON_ARRAY('Unemployed', 'Homemaker', 'Retired'), 'max_income', 50000, 'education', JSON_ARRAY('All'))
),
(
  'Old Age Samman Allowance (Haryana)',
  'Monthly dignity social pension of Rs. 3,000 credited to bank accounts of senior citizens aged 60+ residing in Haryana.',
  'Senior Welfare',
  JSON_OBJECT('min_age', 60, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Haryana'), 'occupations', JSON_ARRAY('Retired', 'Homemaker', 'Unemployed', 'Farmer'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Madhu Babu Pension Yojana (Odisha)',
  'Monthly financial assistance of Rs. 1,000 to Rs. 1,200 for destitute elderly, widows, persons with disabilities, and leprosy patients in Odisha.',
  'Pension & Social Security',
  JSON_OBJECT('min_age', 60, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Odisha'), 'occupations', JSON_ARRAY('Retired', 'Unemployed', 'Homemaker'), 'max_income', 100000, 'education', JSON_ARRAY('All'))
),
(
  'Deendayal Disabled Rehabilitation Scheme (DDRS)',
  'Grant-in-aid to NGOs providing vocational training centres, special schools, early intervention clinics, and rehabilitation services for children with special needs.',
  'Disability Welfare',
  JSON_OBJECT('min_age', 5, 'max_age', 40, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student', 'Unemployed'), 'max_income', 600000, 'education', JSON_ARRAY('All'))
),
(
  'PM-JANMAN (Pradhan Mantri Janjati Adivasi Nyaya Maha Abhiyan)',
  'Dedicated Rs. 24,000 Cr mission providing pucca housing, piped drinking water, solar electricity, all-weather roads, and healthcare to Particularly Vulnerable Tribal Groups (PVTGs).',
  'Minority & Tribal Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 80, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer', 'Unemployed', 'Homemaker', 'Self-Employed'), 'max_income', 250000, 'education', JSON_ARRAY('All'), 'social_categories', JSON_ARRAY('ST'))
),
(
  'Pradhan Mantri Anusuchit Jaati Abhyuday Yojana (PM-AJAY)',
  'Grants up to Rs. 50,000 or 50% project cost for skill development, hostel infrastructure, and income-generating self-employment assets for SC households.',
  'Social & Economic Development',
  JSON_OBJECT('min_age', 18, 'max_age', 60, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Unemployed', 'Self-Employed', 'Farmer'), 'max_income', 250000, 'education', JSON_ARRAY('All'), 'social_categories', JSON_ARRAY('SC'))
),
(
  'Pradhan Mantri Virasat Ka Samvardhan (PM VIKAS)',
  'Holistic scheme integrating modern skill training, literacy, enterprise development, and credit linkages for traditional minority artisan and craft communities.',
  'Skills & Livelihood',
  JSON_OBJECT('min_age', 18, 'max_age', 55, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Self-Employed', 'Business Owner', 'Unemployed', 'Homemaker'), 'max_income', 450000, 'education', JSON_ARRAY('All'))
),
(
  'National Apprenticeship Promotion Scheme (NAPS)',
  'Government reimburses 25% of prescribed stipend up to Rs. 1,500/month per apprentice directly to employers to incentivize on-the-job industrial apprenticeship for freshers.',
  'Skill Development',
  JSON_OBJECT('min_age', 16, 'max_age', 35, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student', 'Unemployed'), 'max_income', 1000000, 'education', JSON_ARRAY('8th Pass', '10th Pass', '12th Pass', 'Graduate'))
),
(
  'Pradhan Mantri Kaushal Vikas Yojana 4.0 (PMKVY)',
  'Free short-term industry 4.0 skill certification training in Coding, AI, Robotics, 3D Printing, and Drones with stipends and job placement assistance for Indian youth.',
  'Skill Development',
  JSON_OBJECT('min_age', 15, 'max_age', 45, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student', 'Unemployed', 'Self-Employed'), 'max_income', 800000, 'education', JSON_ARRAY('All'))
),
(
  'Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)',
  'Placement-linked residential technical skill training completely free of cost with guaranteed formal private sector jobs for rural poor youth.',
  'Skill Development',
  JSON_OBJECT('min_age', 15, 'max_age', 35, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Unemployed', 'Student', 'Farmer'), 'max_income', 300000, 'education', JSON_ARRAY('8th Pass', '10th Pass', '12th Pass'))
),
(
  'Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)',
  'Statutory legal guarantee of 100 days of unskilled wage employment per financial year at statutory wages for every rural adult willing to do public manual work.',
  'Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Unemployed', 'Farmer', 'Homemaker', 'Self-Employed'), 'max_income', 250000, 'education', JSON_ARRAY('All'))
),
(
  'Deendayal Antyodaya Yojana – NULM (Urban Livelihoods)',
  'Subsidized bank loans at 7% interest for urban micro-enterprises, formation of Self-Help Groups (SHGs), and construction of permanent shelters for urban homeless.',
  'Livelihoods',
  JSON_OBJECT('min_age', 18, 'max_age', 60, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Unemployed', 'Self-Employed', 'Homemaker'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'National Career Service (NCS Portal)',
  'Nationwide job-matching employment portal connecting jobseekers with verified private and public recruiters, free career counseling, and job fairs.',
  'Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 60, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 5000000, 'education', JSON_ARRAY('All'))
),
(
  'e-Shram Portal (National Database of Unorganised Workers)',
  'Issues a 12-digit Universal Account Number (UAN) card providing accidental insurance cover of Rs. 2 lakh and priority direct benefit transfers during national emergencies.',
  'Social Security',
  JSON_OBJECT('min_age', 16, 'max_age', 59, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Self-Employed', 'Farmer', 'Unemployed', 'Homemaker'), 'max_income', 400000, 'education', JSON_ARRAY('All'))
),
(
  'PM-DAKSH (Pradhan Mantri Dakshta Aur Kushalta Sampanna Hitgrahi)',
  'Free upskilling, reskilling, and entrepreneurial training with daily stipends up to Rs. 3,000 for candidates from SC, OBC, EBC, DNT, and sanitation worker backgrounds.',
  'Skill Development',
  JSON_OBJECT('min_age', 18, 'max_age', 45, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Unemployed', 'Student', 'Self-Employed', 'Homemaker'), 'max_income', 300000, 'education', JSON_ARRAY('All'), 'social_categories', JSON_ARRAY('SC', 'OBC', 'EWS'))
),
(
  'Van Dhan Vikas Yojana (TRIFED)',
  'Equips tribal gatherers in forest districts with value-addition equipment, processing centers, and marketing linkage for Non-Timber Minor Forest Produce (MFP).',
  'Minority & Tribal Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 65, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer', 'Self-Employed', 'Unemployed'), 'max_income', 250000, 'education', JSON_ARRAY('All'), 'social_categories', JSON_ARRAY('ST'))
),
(
  'Unique Disability ID (UDID) Card Welfare Benefits',
  'National single-point verified disability identity card granting rail and bus fare concessions, job reservation quotas, free education aids, and tax exemptions.',
  'Disability Welfare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Kanya Vidya Dhan Yojana',
  'Provides one-time financial reward of Rs. 30,000 to meritorious girl students passing Class 12 board examinations from low-income families.',
  'Education',
  JSON_OBJECT('min_age', 16, 'max_age', 22, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Uttar Pradesh'), 'occupations', JSON_ARRAY('Student'), 'max_income', 200000, 'education', JSON_ARRAY('12th Pass', 'Graduate'))
),
(
  'Mukhyamantri Abhyudaya Yojana (UP Free UPSC/JEE Coaching)',
  'Free state-wide physical and virtual coaching by IAS/IPS officers and subject experts for competitive exams (UPSC, UPPSC, JEE, NEET, NDA, CDS).',
  'Education',
  JSON_OBJECT('min_age', 18, 'max_age', 35, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Uttar Pradesh'), 'occupations', JSON_ARRAY('Student', 'Unemployed'), 'max_income', 600000, 'education', JSON_ARRAY('12th Pass', 'Graduate'))
),
(
  'UP Gopalak Yojana (Dairy Farming Subsidy)',
  'Bank loans up to Rs. 9 lakh with interest subsidy for unemployed youth setting up modern commercial dairy units with 10-12 milch cows/buffaloes.',
  'Animal Husbandry',
  JSON_OBJECT('min_age', 18, 'max_age', 50, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Uttar Pradesh'), 'occupations', JSON_ARRAY('Farmer', 'Unemployed', 'Self-Employed'), 'max_income', 500000, 'education', JSON_ARRAY('8th Pass', '10th Pass', '12th Pass'))
),
(
  'UP Bhagya Laxmi Yojana',
  'Financial bond of Rs. 50,000 given at the birth of a girl child and Rs. 5,100 to the mother in BPL families, maturing to over Rs. 2 lakh at age 21.',
  'Women Welfare',
  JSON_OBJECT('min_age', 0, 'max_age', 25, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Uttar Pradesh'), 'occupations', JSON_ARRAY('All'), 'max_income', 200000, 'education', JSON_ARRAY('All'))
),
(
  'UP Shadi Anudan Yojana',
  'Provides direct financial assistance of Rs. 20,000 for the marriage of daughters of poor families belonging to SC, ST, OBC, Minority, and General BPL.',
  'Social Security',
  JSON_OBJECT('min_age', 18, 'max_age', 35, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Uttar Pradesh'), 'occupations', JSON_ARRAY('All'), 'max_income', 100000, 'education', JSON_ARRAY('All'))
),
(
  'Swami Vivekananda Yuva Sashaktikaran Yojana (UP Free Smartphone/Tablet)',
  'Free high-configuration tablets and smartphones distributed to final year higher education, technical, and ITI students to promote digital learning.',
  'Education',
  JSON_OBJECT('min_age', 17, 'max_age', 28, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Uttar Pradesh'), 'occupations', JSON_ARRAY('Student'), 'max_income', 800000, 'education', JSON_ARRAY('12th Pass', 'Graduate', 'Post Graduate'))
),
(
  'Sant Ravidas Shiksha Sahayata Yojana (UP Construction Workers)',
  'Monthly scholarship from Rs. 100 to Rs. 5,000 for children of registered construction and BOCW board workers studying from Class 1 to Degree.',
  'Education',
  JSON_OBJECT('min_age', 5, 'max_age', 25, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Uttar Pradesh'), 'occupations', JSON_ARRAY('Student'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Maharashtra Asmita Yojana (Sanitary Napkin Subsidy)',
  'Provides highly subsidized sanitary napkin packs for Rs. 5 to rural school girls aged 11 to 19 across Zilla Parishad schools in Maharashtra.',
  'Women Welfare',
  JSON_OBJECT('min_age', 11, 'max_age', 19, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Maharashtra'), 'occupations', JSON_ARRAY('Student'), 'max_income', 500000, 'education', JSON_ARRAY('All'))
),
(
  'Manodhairya Scheme (Maharashtra)',
  'Financial support up to Rs. 10 lakh, specialized medical treatment, legal aid, and psychiatric counseling for survivors of violent crimes in Maharashtra.',
  'Women Welfare',
  JSON_OBJECT('min_age', 0, 'max_age', 90, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Maharashtra'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Balasaheb Thackeray Accident Insurance Scheme (Maharashtra)',
  'Free cashless emergency medical treatment up to Rs. 30,000 within the golden hour (first 72 hours) for victims of road accidents occurring in Maharashtra.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Maharashtra'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Dr. Babasaheb Ambedkar Swadhar Yojana (Maharashtra)',
  'Annual stipend of Rs. 43,000 to Rs. 60,000 for boarding, lodging, and books for SC students admitted to higher education courses not getting government hostel seats.',
  'Education',
  JSON_OBJECT('min_age', 16, 'max_age', 28, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Maharashtra'), 'occupations', JSON_ARRAY('Student'), 'max_income', 250000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'), 'social_categories', JSON_ARRAY('SC'))
),
(
  'Maharashtra Shravanbal Seva Rajya Nivruttivetan Yojana',
  'Monthly pension of Rs. 1,500 for destitute elderly citizens aged 65 and above whose name is included in the state BPL list.',
  'Senior Welfare',
  JSON_OBJECT('min_age', 65, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Maharashtra'), 'occupations', JSON_ARRAY('Retired', 'Unemployed', 'Homemaker'), 'max_income', 50000, 'education', JSON_ARRAY('All'))
),
(
  'Vidyasiri – Food and Accommodation Scheme (Karnataka)',
  'Monthly stipend of Rs. 1,500 for 10 months to SC, ST, and OBC students pursuing post-matric courses who could not get admission in government hostels in Karnataka.',
  'Education',
  JSON_OBJECT('min_age', 16, 'max_age', 28, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Karnataka'), 'occupations', JSON_ARRAY('Student'), 'max_income', 250000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'), 'social_categories', JSON_ARRAY('SC', 'ST', 'OBC'))
),
(
  'Yuva Nidhi Scheme (Karnataka)',
  'Monthly unemployment allowance of Rs. 3,000 for degree graduates and Rs. 1,500 for diploma holders who remain unemployed after graduation in Karnataka.',
  'Employment',
  JSON_OBJECT('min_age', 20, 'max_age', 30, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Karnataka'), 'occupations', JSON_ARRAY('Unemployed'), 'max_income', 600000, 'education', JSON_ARRAY('Graduate', 'Post Graduate', 'Doctorate'))
),
(
  'Shakti Free Bus Travel Scheme for Women (Karnataka)',
  'Free travel for all resident women, girls, and transgender persons in state-owned KSRTC, BMTC, and NWKRTC non-luxury public transport buses across Karnataka.',
  'Women Welfare',
  JSON_OBJECT('min_age', 5, 'max_age', 100, 'genders', JSON_ARRAY('Female', 'Transgender'), 'states', JSON_ARRAY('Karnataka'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Chief Minister\'s Anila Bhagya Scheme (Karnataka)',
  'Provides free two-burner gas stoves, regulators, and two free cylinder refills to BPL families not covered under central Ujjwala scheme in Karnataka.',
  'Energy & Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 80, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Karnataka'), 'occupations', JSON_ARRAY('Homemaker', 'Self-Employed', 'Unemployed'), 'max_income', 200000, 'education', JSON_ARRAY('All'))
),
(
  'Kalaignar Magalir Urimai Thittam (Tamil Nadu Women Basic Income)',
  'Monthly basic income support of Rs. 1,000 transferred to bank accounts of over 1.15 crore women heads of low-income families across Tamil Nadu.',
  'Women Welfare',
  JSON_OBJECT('min_age', 21, 'max_age', 65, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Tamil Nadu'), 'occupations', JSON_ARRAY('Homemaker', 'Self-Employed', 'Unemployed', 'Farmer'), 'max_income', 250000, 'education', JSON_ARRAY('All'))
),
(
  'Chief Minister\'s Breakfast Scheme (Tamil Nadu)',
  'Free hot, nutritious morning breakfast served to all primary school children studying in classes 1 to 5 in government schools across Tamil Nadu.',
  'Education',
  JSON_OBJECT('min_age', 5, 'max_age', 12, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Tamil Nadu'), 'occupations', JSON_ARRAY('Student'), 'max_income', 10000000, 'education', JSON_ARRAY('Below 8th'))
),
(
  'Tamil Nadu Amma Two Wheeler Scheme',
  'Provides 50% subsidy up to Rs. 25,000 for working women to purchase gearless motorized two-wheelers to ease commute to work.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 45, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Tamil Nadu'), 'occupations', JSON_ARRAY('Salaried Employee', 'Self-Employed', 'Business Owner'), 'max_income', 250000, 'education', JSON_ARRAY('8th Pass', '10th Pass', '12th Pass', 'Graduate'))
),
(
  'YSR Cheyutha Scheme (Andhra Pradesh)',
  'Annual financial assistance of Rs. 18,750 (total Rs. 75,000 over 4 years) for women aged 45-60 from SC, ST, BC, and Minority communities to establish dairy/grocery businesses.',
  'Women Welfare',
  JSON_OBJECT('min_age', 45, 'max_age', 60, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Andhra Pradesh'), 'occupations', JSON_ARRAY('Homemaker', 'Self-Employed', 'Unemployed', 'Farmer'), 'max_income', 250000, 'education', JSON_ARRAY('All'), 'social_categories', JSON_ARRAY('SC', 'ST', 'OBC'))
),
(
  'YSR Kapu Nestham (Andhra Pradesh)',
  'Financial support of Rs. 15,000 per year (total Rs. 75,000 over 5 years) for women aged 45-60 from Kapu, Balija, Telaga, and Ontari communities to enhance livelihoods.',
  'Women Welfare',
  JSON_OBJECT('min_age', 45, 'max_age', 60, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Andhra Pradesh'), 'occupations', JSON_ARRAY('Homemaker', 'Self-Employed', 'Unemployed'), 'max_income', 250000, 'education', JSON_ARRAY('All'))
),
(
  'YSR Nethanna Nestham (Weaver Assistance – AP)',
  'Annual direct cash assistance of Rs. 24,000 to every handloom weaver family owning a loom to upgrade equipment and purchase yarn.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 70, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Andhra Pradesh'), 'occupations', JSON_ARRAY('Self-Employed', 'Business Owner'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'YSR Matsyakara Bharosa (Fishermen Subsidy – AP)',
  'Financial relief of Rs. 10,000 during the annual marine fishing ban period and enhanced diesel subsidy of Rs. 9/litre for mechanized boats in AP.',
  'Fisheries',
  JSON_OBJECT('min_age', 18, 'max_age', 65, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Andhra Pradesh'), 'occupations', JSON_ARRAY('Farmer', 'Self-Employed'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Arogya Lakshmi (Telangana Nutrition Scheme)',
  'Provides one nutritious full meal, boiled egg, 200 ml milk, and iron-folic acid tablets daily to pregnant and lactating women at Anganwadi centers in Telangana.',
  'Healthcare',
  JSON_OBJECT('min_age', 18, 'max_age', 45, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Telangana'), 'occupations', JSON_ARRAY('Homemaker', 'Self-Employed', 'Unemployed', 'Farmer'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'KCR Kit Scheme (Telangana)',
  'Financial incentive of Rs. 12,000 (Rs. 13,000 for girl child) along with a 16-item mother and baby care kit for institutional deliveries in government hospitals.',
  'Healthcare',
  JSON_OBJECT('min_age', 18, 'max_age', 45, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Telangana'), 'occupations', JSON_ARRAY('Homemaker', 'Self-Employed', 'Unemployed'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Sabuj Sathi (Bicycle Distribution Scheme – West Bengal)',
  'Free eco-friendly bicycles distributed to all students studying in classes IX to XII in government and aided schools across West Bengal to reduce school dropout.',
  'Education',
  JSON_OBJECT('min_age', 13, 'max_age', 19, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('West Bengal'), 'occupations', JSON_ARRAY('Student'), 'max_income', 10000000, 'education', JSON_ARRAY('8th Pass', '9th Pass', '10th Pass', '12th Pass'))
),
(
  'Gatidhara Scheme (Commercial Vehicle Subsidy – West Bengal)',
  'Provides 30% government subsidy up to Rs. 1 lakh for registered unemployed youth in West Bengal to purchase small commercial transport vehicles, taxis, and auto-rickshaws.',
  'Business & Employment',
  JSON_OBJECT('min_age', 20, 'max_age', 45, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('West Bengal'), 'occupations', JSON_ARRAY('Unemployed', 'Self-Employed'), 'max_income', 300000, 'education', JSON_ARRAY('8th Pass', '10th Pass', '12th Pass'))
),
(
  'Swami Vivekananda Merit-cum-Means Scholarship (SVMCM – West Bengal)',
  'Scholarship ranging from Rs. 12,000 to Rs. 60,000 per year for meritorious students scoring 60%+ in board exams pursuing higher secondary, UG, PG, and Ph.D in West Bengal.',
  'Education',
  JSON_OBJECT('min_age', 15, 'max_age', 30, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('West Bengal'), 'occupations', JSON_ARRAY('Student'), 'max_income', 250000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate', 'Post Graduate'))
),
(
  'Rupashree Prakalpa (West Bengal Marriage Grant)',
  'One-time direct financial grant of Rs. 25,000 credited to the bank account of an adult girl before marriage belonging to an economically stressed family in West Bengal.',
  'Social Security',
  JSON_OBJECT('min_age', 18, 'max_age', 35, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('West Bengal'), 'occupations', JSON_ARRAY('All'), 'max_income', 150000, 'education', JSON_ARRAY('All'))
),
(
  'Chiranjeevi Swasthya Bima Yojana – Cancer / Heart Surgery Top-Up (Rajasthan)',
  'Expanded cashless health coverage of up to Rs. 25 lakh per family including liver, heart, and bone marrow transplants across empaneled multispecialty hospitals.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Rajasthan'), 'occupations', JSON_ARRAY('All'), 'max_income', 800000, 'education', JSON_ARRAY('All'))
),
(
  'Indira Gandhi Urban Employment Guarantee Scheme (IRGY – Rajasthan)',
  'Guarantees 125 days of paid urban wage employment per year for urban families willing to undertake sanitation, tree plantation, and urban maintenance work in Rajasthan.',
  'Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 60, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Rajasthan'), 'occupations', JSON_ARRAY('Unemployed', 'Homemaker', 'Self-Employed'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Indira Gandhi Matritva Poshan Yojana (Rajasthan)',
  'Direct cash assistance of Rs. 6,000 in 5 installments to mothers upon the birth of their second child to promote maternal and infant nutrition in Rajasthan.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 45, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Rajasthan'), 'occupations', JSON_ARRAY('Homemaker', 'Self-Employed', 'Unemployed'), 'max_income', 400000, 'education', JSON_ARRAY('All'))
),
(
  'Mukhyamantri Anuprati Coaching Yojana (Rajasthan)',
  'Free professional entrance coaching and Rs. 40,000 annual boarding grant for SC, ST, OBC, MBC, and EWS students preparing for UPSC, RPSC, IIT-JEE, NEET, and CLAT.',
  'Education',
  JSON_OBJECT('min_age', 17, 'max_age', 30, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Rajasthan'), 'occupations', JSON_ARRAY('Student', 'Unemployed'), 'max_income', 800000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'), 'social_categories', JSON_ARRAY('SC', 'ST', 'OBC', 'EWS'))
),
(
  'Mukhyamantri Vridhjan Pension Yojana (Bihar)',
  'Universal monthly pension of Rs. 400 for citizens aged 60-79 and Rs. 500 for senior citizens aged 80 and above residing in Bihar.',
  'Senior Welfare',
  JSON_OBJECT('min_age', 60, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Bihar'), 'occupations', JSON_ARRAY('Retired', 'Homemaker', 'Unemployed', 'Farmer'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Bihar Student Credit Card Scheme (MNSSBY)',
  'Government-guaranteed education loans up to Rs. 4 lakh at ultra-low interest (1% for women/disabled/transgender, 4% for others) for pursuing polytechnic, B.Tech, MBBS, and degrees.',
  'Education',
  JSON_OBJECT('min_age', 17, 'max_age', 28, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Bihar'), 'occupations', JSON_ARRAY('Student'), 'max_income', 600000, 'education', JSON_ARRAY('12th Pass', 'Graduate'))
),
(
  'Mukhyamantri Udyami Yojana (Bihar – SC/ST/EBC/Women/Youth)',
  'Financial support of Rs. 10 lakh (50% grant up to Rs. 5 lakh + 50% interest-free loan) for setting up manufacturing and processing micro-enterprises in Bihar.',
  'Entrepreneurship',
  JSON_OBJECT('min_age', 18, 'max_age', 50, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Bihar'), 'occupations', JSON_ARRAY('Unemployed', 'Self-Employed', 'Entrepreneur'), 'max_income', 600000, 'education', JSON_ARRAY('12th Pass', 'Graduate'))
),
(
  'Har Ghar Nal Ka Jal Scheme (Bihar)',
  'Provides free household piped treated drinking water connections to every rural household across all 38 districts of Bihar.',
  'Infrastructure',
  JSON_OBJECT('min_age', 18, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Bihar'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Biju Yuva Sashaktikaran Yojana (Free Laptop – Odisha)',
  'Merit-based free laptop distribution to 15,000 top-ranking Class 12 students from Science, Commerce, and Arts streams across Odisha.',
  'Education',
  JSON_OBJECT('min_age', 16, 'max_age', 20, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Odisha'), 'occupations', JSON_ARRAY('Student'), 'max_income', 600000, 'education', JSON_ARRAY('12th Pass'))
),
(
  'Mission Shakti Loan Scheme (Odisha – 0% Interest)',
  'Offers 0% interest bank loans up to Rs. 10 lakh to Women Self-Help Groups (SHGs) to expand agricultural processing, tailoring, and micro-enterprises in Odisha.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 65, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Odisha'), 'occupations', JSON_ARRAY('Self-Employed', 'Homemaker', 'Entrepreneur'), 'max_income', 500000, 'education', JSON_ARRAY('All'))
),
(
  'Mukhyamantri Vayoshri Yojana (Maharashtra Cash Incentive)',
  'One-time direct cash transfer of Rs. 3,000 deposited in bank accounts of senior citizens aged 65+ experiencing age-related physical and mental disabilities.',
  'Senior Welfare',
  JSON_OBJECT('min_age', 65, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Maharashtra'), 'occupations', JSON_ARRAY('Retired', 'Homemaker', 'Unemployed'), 'max_income', 200000, 'education', JSON_ARRAY('All'))
),
(
  'Chief Minister\'s Solar Street Lighting Scheme (Bihar)',
  'Installs automated, solar-powered LED street lights in all rural village wards to illuminate public roads, panchayat halls, and village squares.',
  'Renewable Energy',
  JSON_OBJECT('min_age', 18, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Bihar'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Mukhya Mantri Seva Sankalp (Himachal Pradesh Citizen Grievance)',
  'Unified state citizen helpline (1100) ensuring transparent, time-bound resolution of government service delivery complaints across HP departments.',
  'Social Security',
  JSON_OBJECT('min_age', 18, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Himachal Pradesh'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Himcare Scheme (Himachal Healthcare)',
  'Cashless hospital treatment up to Rs. 5 lakh per family per year for families not covered under Ayushman Bharat in Himachal Pradesh.',
  'Healthcare',
  JSON_OBJECT('min_age', 0, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Himachal Pradesh'), 'occupations', JSON_ARRAY('All'), 'max_income', 500000, 'education', JSON_ARRAY('All'))
),
(
  'Mukhyamantri Swavalamban Yojana (Himachal Pradesh)',
  'Provides 25% to 35% capital subsidy and 5% interest subvention for 3 years on bank loans up to Rs. 1 crore for setting up manufacturing and tourism units in HP.',
  'Entrepreneurship',
  JSON_OBJECT('min_age', 18, 'max_age', 45, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Himachal Pradesh'), 'occupations', JSON_ARRAY('Unemployed', 'Self-Employed', 'Entrepreneur'), 'max_income', 1500000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'))
),
(
  'Atal Shresth Shahar Yojana (Himachal Pradesh)',
  'Provides incentive grants of Rs. 1 crore to the best performing urban local body for excellence in sanitation, waste management, and green parks in HP.',
  'Infrastructure',
  JSON_OBJECT('min_age', 18, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Himachal Pradesh'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'Mera Bill Mera Adhikaar (Invoice Incentive Scheme)',
  'Citizens uploading GST invoices on the government portal enter monthly prize draws with cash rewards up to Rs. 10 lakh to Rs. 1 crore to incentivize tax compliance.',
  'Financial Inclusion',
  JSON_OBJECT('min_age', 18, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 10000000, 'education', JSON_ARRAY('All'))
),
(
  'PM SHRI Schools Scheme (PM Schools for Rising India)',
  'Upgrades 14,500 government schools into modern smart exemplar schools featuring smart classrooms, green infrastructure, experiential STEM labs, and NEP pedagogy.',
  'Education',
  JSON_OBJECT('min_age', 5, 'max_age', 18, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 10000000, 'education', JSON_ARRAY('Below 8th', '8th Pass', '10th Pass', '12th Pass'))
),
(
  'PM Young Achievers Scholarship Award Scheme (PM-YASASVI)',
  'Merit-based scholarship offering up to Rs. 75,000/yr for Class 9-10 and Rs. 1,25,000/yr for Class 11-12 to OBC, EBC, and DNT students in top schools.',
  'Education',
  JSON_OBJECT('min_age', 13, 'max_age', 19, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 250000, 'education', JSON_ARRAY('8th Pass', '9th Pass', '10th Pass', '12th Pass'), 'social_categories', JSON_ARRAY('OBC', 'EWS'))
),
(
  'National Means Scholarship for ITI Apprentices',
  'Monthly stipend incentive of Rs. 2,500 along with workshop toolkit support for engineering trade ITI certificate holders undergoing certified industrial apprenticeships.',
  'Skill Development',
  JSON_OBJECT('min_age', 17, 'max_age', 28, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student', 'Unemployed'), 'max_income', 400000, 'education', JSON_ARRAY('10th Pass', '12th Pass'))
),
(
  'National Cold Storage Subsidy Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Cold Storage Subsidy Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Arunachal Pradesh Higher Secondary Merit Award Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Arunachal Pradesh Higher Secondary Merit Award Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Education',
  JSON_OBJECT('min_age', 14, 'max_age', 28, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Arunachal Pradesh'), 'occupations', JSON_ARRAY('Student'), 'max_income', 600000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'))
),
(
  'Assam Dialysis Patient Transport Aid Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Assam Dialysis Patient Transport Aid Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Healthcare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Assam'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Handicraft Artisan Grant Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Handicraft Artisan Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Chhattisgarh Leather Craft Enterprise Subsidy Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Chhattisgarh Leather Craft Enterprise Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Chhattisgarh'), 'occupations', JSON_ARRAY('Self-Employed', 'Business Owner', 'Entrepreneur'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Delhi Solar Water Heater Subsidy Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Delhi Solar Water Heater Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Renewable Energy',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Delhi'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Deep Sea Fishing Vessel Subsidy Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Deep Sea Fishing Vessel Subsidy Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Fisheries & Marine',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Gujarat Motorized Tricycle Free Grant Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Gujarat Motorized Tricycle Free Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Disability Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Gujarat'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Haryana Tribal Forest Honey Processing Aid Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Haryana Tribal Forest Honey Processing Aid Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Minority & Tribal Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Haryana'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Rural Village Library Grant Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Rural Village Library Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Rural Development',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Jharkhand Senior Citizen Recreational Centre Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Jharkhand Senior Citizen Recreational Centre Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Senior Welfare',
  JSON_OBJECT('min_age', 60, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Jharkhand'), 'occupations', JSON_ARRAY('All'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Karnataka National Medalist Youth Pension Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Karnataka National Medalist Youth Pension Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Sports & Youth',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Karnataka'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Construction Worker Marriage Grant Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Construction Worker Marriage Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Social Security',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Madhya Pradesh Drone Pilot Certified Training Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Madhya Pradesh Drone Pilot Certified Training Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Skill Development',
  JSON_OBJECT('min_age', 18, 'max_age', 45, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Madhya Pradesh'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Maharashtra Drip Irrigation Incentive Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Maharashtra Drip Irrigation Incentive Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Maharashtra'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Polytechnic Diploma Grant Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Polytechnic Diploma Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Education',
  JSON_OBJECT('min_age', 14, 'max_age', 28, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 600000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'))
),
(
  'Meghalaya Sickle Cell Anaemia Care Grant Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Meghalaya Sickle Cell Anaemia Care Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Healthcare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Meghalaya'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Mizoram Sanitary Hygiene Subsidy Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Mizoram Sanitary Hygiene Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Mizoram'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Food Processing Micro-Unit Aid Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Food Processing Micro-Unit Aid Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Self-Employed', 'Business Owner', 'Entrepreneur'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Odisha Biomass Pellet Plant Grant Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Odisha Biomass Pellet Plant Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Renewable Energy',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Odisha'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Punjab Shrimp Aquaculture Pond Grant Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Punjab Shrimp Aquaculture Pond Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Fisheries & Marine',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Punjab'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Braille Smart Reader Grant Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Braille Smart Reader Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Disability Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Sikkim Minority Women Leadership Training Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Sikkim Minority Women Leadership Training Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Minority & Tribal Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Sikkim'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Tamil Nadu Panchayat Community Water Filter Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Tamil Nadu Panchayat Community Water Filter Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Rural Development',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Tamil Nadu'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Old Age Home Health Clinic Aid Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Old Age Home Health Clinic Aid Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Senior Welfare',
  JSON_OBJECT('min_age', 60, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Tripura Rural Wrestling Akhada Modernization Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Tripura Rural Wrestling Akhada Modernization Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Sports & Youth',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Tripura'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Uttar Pradesh Unorganized Worker Funeral Assistance Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Uttar Pradesh Unorganized Worker Funeral Assistance Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Social Security',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Uttar Pradesh'), 'occupations', JSON_ARRAY('All'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'National Solar Panel Technician Certification Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Solar Panel Technician Certification Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Skill Development',
  JSON_OBJECT('min_age', 18, 'max_age', 45, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'West Bengal Organic Fertilizer Subsidy Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the West Bengal Organic Fertilizer Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('West Bengal'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Andhra Pradesh Tribal Girls Boarding Scholarship Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Andhra Pradesh Tribal Girls Boarding Scholarship Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Education',
  JSON_OBJECT('min_age', 14, 'max_age', 28, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Andhra Pradesh'), 'occupations', JSON_ARRAY('Student'), 'max_income', 600000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'))
),
(
  'National Hearing Aid Device Subsidy Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Hearing Aid Device Subsidy Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Healthcare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Assam Widow Remarriage Financial Grant Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Assam Widow Remarriage Financial Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Assam'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Bihar Green Enterprise Loan Incentive Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Bihar Green Enterprise Loan Incentive Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Bihar'), 'occupations', JSON_ARRAY('Self-Employed', 'Business Owner', 'Entrepreneur'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Small Hydro Power Incentive Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Small Hydro Power Incentive Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Renewable Energy',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Delhi Insulated Ice Box Subsidy Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Delhi Insulated Ice Box Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Fisheries & Marine',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Delhi'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Goa Prosthetic Limb Fitting Grant Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Goa Prosthetic Limb Fitting Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Disability Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Goa'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Heritage Handloom Preservation Grant Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Heritage Handloom Preservation Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Minority & Tribal Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Haryana Village Compost Pit Construction Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Haryana Village Compost Pit Construction Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Rural Development',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Haryana'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Himachal Pradesh Elderly Medical Home Visit Service Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Himachal Pradesh Elderly Medical Home Visit Service Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Senior Welfare',
  JSON_OBJECT('min_age', 60, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Himachal Pradesh'), 'occupations', JSON_ARRAY('All'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'National Khelo India Academy Scholarship Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Khelo India Academy Scholarship Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Sports & Youth',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Karnataka Destitute Orphan Educational Grant Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Karnataka Destitute Orphan Educational Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Social Security',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Karnataka'), 'occupations', JSON_ARRAY('All'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Kerala Electric Vehicle EV Mechanic Course Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Kerala Electric Vehicle EV Mechanic Course Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Skill Development',
  JSON_OBJECT('min_age', 18, 'max_age', 45, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Kerala'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Bio-Gas Plant Grant Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Bio-Gas Plant Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Maharashtra Sports Excellence Student Grant Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Maharashtra Sports Excellence Student Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Education',
  JSON_OBJECT('min_age', 14, 'max_age', 28, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Maharashtra'), 'occupations', JSON_ARRAY('Student'), 'max_income', 600000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'))
),
(
  'Manipur Maternity Nutrition Basket Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Manipur Maternity Nutrition Basket Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Healthcare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Manipur'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Women Taxi Driver Vehicle Subsidy Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Women Taxi Driver Vehicle Subsidy Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Mizoram Handloom Weaver Powerloom Subsidy Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Mizoram Handloom Weaver Powerloom Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Mizoram'), 'occupations', JSON_ARRAY('Self-Employed', 'Business Owner', 'Entrepreneur'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Nagaland Electric Auto Charging Subsidy Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Nagaland Electric Auto Charging Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Renewable Energy',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Nagaland'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Fishermen Safety GPS Beacon Aid Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Fishermen Safety GPS Beacon Aid Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Fisheries & Marine',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Punjab Deaf Student Communication Aid Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Punjab Deaf Student Communication Aid Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Disability Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Punjab'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Rajasthan Tribal Youth Sports Talent Search Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Rajasthan Tribal Youth Sports Talent Search Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Minority & Tribal Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Rajasthan'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Rural Youth Skill Hub Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Rural Youth Skill Hub Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Rural Development',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Tamil Nadu Senior Citizen Transport Concession Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Tamil Nadu Senior Citizen Transport Concession Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Senior Welfare',
  JSON_OBJECT('min_age', 60, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Tamil Nadu'), 'occupations', JSON_ARRAY('All'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Telangana Athletics Equipment Subsidy Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Telangana Athletics Equipment Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Sports & Youth',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Telangana'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Migrant Worker Transit Hostel Aid Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Migrant Worker Transit Hostel Aid Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Social Security',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Uttar Pradesh Mobile Repairing Skill Training Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Uttar Pradesh Mobile Repairing Skill Training Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Skill Development',
  JSON_OBJECT('min_age', 18, 'max_age', 45, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Uttar Pradesh'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Uttarakhand Tractor Purchase Subsidy Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Uttarakhand Tractor Purchase Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Uttarakhand'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Civil Services Prelims Clearing Reward Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Civil Services Prelims Clearing Reward Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Education',
  JSON_OBJECT('min_age', 14, 'max_age', 28, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Student'), 'max_income', 600000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'))
),
(
  'Andhra Pradesh Mental Health Counseling Support Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Andhra Pradesh Mental Health Counseling Support Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Healthcare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Andhra Pradesh'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Arunachal Pradesh Sewing Machine Free Distribution Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Arunachal Pradesh Sewing Machine Free Distribution Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Arunachal Pradesh'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Pottery Modernization Grant Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Pottery Modernization Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Self-Employed', 'Business Owner', 'Entrepreneur'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Bihar Solar Dryer Agricultural Grant Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Bihar Solar Dryer Agricultural Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Renewable Energy',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Bihar'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Chhattisgarh Fish Hatchery Construction Grant Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Chhattisgarh Fish Hatchery Construction Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Fisheries & Marine',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Chhattisgarh'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Disability Marriage Incentive Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Disability Marriage Incentive Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Disability Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Goa Minority Community Hall Grant Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Goa Minority Community Hall Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Minority & Tribal Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Goa'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Gujarat Gram Panchayat Digital Service Grant Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Gujarat Gram Panchayat Digital Service Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Rural Development',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Gujarat'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Retired War Veteran Daughter Grant Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Retired War Veteran Daughter Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Senior Welfare',
  JSON_OBJECT('min_age', 60, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Himachal Pradesh Youth Club Sports Kit Distribution Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Himachal Pradesh Youth Club Sports Kit Distribution Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Sports & Youth',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Himachal Pradesh'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Jharkhand Sanitation Worker Safety Gear Kit Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Jharkhand Sanitation Worker Safety Gear Kit Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Social Security',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Jharkhand'), 'occupations', JSON_ARRAY('All'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'National Culinary & Baking Skill Course Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Culinary & Baking Skill Course Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Skill Development',
  JSON_OBJECT('min_age', 18, 'max_age', 45, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Kerala Silage Fodder Unit Aid Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Kerala Silage Fodder Unit Aid Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Kerala'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Madhya Pradesh Foreign Language Career Grant Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Madhya Pradesh Foreign Language Career Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Education',
  JSON_OBJECT('min_age', 14, 'max_age', 28, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Madhya Pradesh'), 'occupations', JSON_ARRAY('Student'), 'max_income', 600000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'))
),
(
  'National Cleft Palate Free Surgery Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Cleft Palate Free Surgery Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Healthcare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Manipur Women Retail Mart Loan Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Manipur Women Retail Mart Loan Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Women Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('Female'), 'states', JSON_ARRAY('Manipur'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Meghalaya Khadi Spinners Assistance Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Meghalaya Khadi Spinners Assistance Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Business & Employment',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Meghalaya'), 'occupations', JSON_ARRAY('Self-Employed', 'Business Owner', 'Entrepreneur'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Mini-Grid Solar Power Unit Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Mini-Grid Solar Power Unit Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Renewable Energy',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Nagaland Seaweed Farming Livelihood Grant Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Nagaland Seaweed Farming Livelihood Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Fisheries & Marine',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Nagaland'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Odisha Special Vocational Skill Course Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Odisha Special Vocational Skill Course Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Disability Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Odisha'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Scheduled Tribe Hostel Allowance Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Scheduled Tribe Hostel Allowance Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Minority & Tribal Welfare',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Rajasthan Village Haat Infrastructure Grant Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Rajasthan Village Haat Infrastructure Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Rural Development',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Rajasthan'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Sikkim Senior Caretaker Training Subsidy Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Sikkim Senior Caretaker Training Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Senior Welfare',
  JSON_OBJECT('min_age', 60, 'max_age', 100, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Sikkim'), 'occupations', JSON_ARRAY('All'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'National State Games Traveling Grant Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National State Games Traveling Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Sports & Youth',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Telangana Street Performer Folk Artist Pension Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Telangana Street Performer Folk Artist Pension Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Social Security',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Telangana'), 'occupations', JSON_ARRAY('All'), 'max_income', 300000, 'education', JSON_ARRAY('All'))
),
(
  'Tripura Organic Farming Field Certification Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Tripura Organic Farming Field Certification Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Skill Development',
  JSON_OBJECT('min_age', 18, 'max_age', 45, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Tripura'), 'occupations', JSON_ARRAY('All'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'National Millet Cultivation Incentive Initiative',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the National Millet Cultivation Incentive Initiative to enhance economic resilience and welfare for eligible beneficiaries.',
  'Agriculture',
  JSON_OBJECT('min_age', 18, 'max_age', 75, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('All'), 'occupations', JSON_ARRAY('Farmer'), 'max_income', 2500000, 'education', JSON_ARRAY('All'))
),
(
  'Uttarakhand Medical UG Tuition Waiver Scheme',
  'Provides targeted financial aid, equipment subsidies, and institutional support under the Uttarakhand Medical UG Tuition Waiver Scheme to enhance economic resilience and welfare for eligible beneficiaries.',
  'Education',
  JSON_OBJECT('min_age', 14, 'max_age', 28, 'genders', JSON_ARRAY('All'), 'states', JSON_ARRAY('Uttarakhand'), 'occupations', JSON_ARRAY('Student'), 'max_income', 600000, 'education', JSON_ARRAY('10th Pass', '12th Pass', 'Graduate'))
);
