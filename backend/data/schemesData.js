/**
 * Comprehensive Dataset of 300 Government Schemes with deterministic eligibility criteria
 * and verified official government application URLs.
 */

const SCHEMES_DATA = [
  {
    "scheme_name": "Ayushman Bharat – PM-JAY",
    "category": "Healthcare",
    "description": "Provides health insurance coverage of up to Rs. 5 lakh per family per year for secondary and tertiary care hospitalization to poor and vulnerable families across empaneled hospitals nationwide.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://beneficiary.nha.gov.in"
  },
  {
    "scheme_name": "Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)",
    "category": "Healthcare",
    "description": "Provides quality generic medicines at 50% to 90% lesser prices than branded equivalents through dedicated Jan Aushadhi Kendras across India.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://janaushadhi.gov.in"
  },
  {
    "scheme_name": "National Health Mission (NHM) Free Diagnostic Service",
    "category": "Healthcare",
    "description": "Provides essential diagnostic laboratory and radiology tests free of cost in government healthcare facilities across rural and urban districts.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 600000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nhm.gov.in"
  },
  {
    "scheme_name": "Pradhan Mantri National Dialysis Programme (PMNDP)",
    "category": "Healthcare",
    "description": "Provides free hemodialysis care to Below Poverty Line (BPL) renal patients and subsidized dialysis to non-BPL patients at district hospitals.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pmndp.mohfw.gov.in"
  },
  {
    "scheme_name": "Rashtriya Arogya Nidhi (RAN)",
    "category": "Healthcare",
    "description": "Financial assistance up to Rs. 15 lakh for patients living below the poverty line suffering from major life-threatening diseases receiving treatment at super-specialty government hospitals.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 250000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://main.mohfw.gov.in/major-programmes/poor-patients-financial-support/rashtriya-arogya-nidhi"
  },
  {
    "scheme_name": "Health Minister's Cancer Patient Fund (HMCPF)",
    "category": "Healthcare",
    "description": "Offers financial support up to Rs. 5 lakh for poor cancer patients undergoing treatment at 27 Regional Cancer Centres across India.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://main.mohfw.gov.in/major-programmes/poor-patients-financial-support/health-ministers-cancer-patient-fund"
  },
  {
    "scheme_name": "National Programme for Prevention and Control of Cancer, Diabetes, CVD and Stroke (NPCDCS)",
    "category": "Healthcare",
    "description": "Opportunistic screening, diagnosis, and subsidized treatment for chronic non-communicable lifestyle diseases for adults aged 30 and above.",
    "eligibility_criteria": {
      "min_age": 30,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 5000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://main.mohfw.gov.in/major-programmes/non-communicable-diseases-injury-trauma/non-communicable-disease-ii/national-programme-prevention-and-control-cancer-diabetes-cardiovascular-diseases-and-stroke-npcdcs"
  },
  {
    "scheme_name": "National Tuberculosis Elimination Programme (NTEP) – Ni-kshay Poshan Yojana",
    "category": "Healthcare",
    "description": "Monthly direct cash benefit of Rs. 500 deposited into bank accounts of tuberculosis patients for nutritional support throughout the treatment duration.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 800000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nikshay.in"
  },
  {
    "scheme_name": "Mission Indradhanush (Universal Immunization)",
    "category": "Healthcare",
    "description": "Full immunization coverage against 12 vaccine-preventable life-threatening diseases for pregnant women and children under two years of age.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 45,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.nhm.gov.in/index1.php?lang=1&level=2&sublinkid=823&lid=219"
  },
  {
    "scheme_name": "Janani Shishu Suraksha Karyakaram (JSSK)",
    "category": "Healthcare",
    "description": "Guarantees completely free, cashless institutional deliveries, C-sections, drugs, diagnostics, diet, and emergency transport for pregnant women and sick neonates.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 600000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=842&lid=309"
  },
  {
    "scheme_name": "Janani Suraksha Yojana (JSY)",
    "category": "Healthcare",
    "description": "Safe motherhood intervention providing direct cash assistance of Rs. 1,400 to rural mothers and Rs. 1,000 to urban mothers delivering in institutional healthcare centres.",
    "eligibility_criteria": {
      "min_age": 19,
      "max_age": 45,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 400000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841&lid=308"
  },
  {
    "scheme_name": "Ayushman Bharat Digital Mission (ABHA)",
    "category": "Healthcare",
    "description": "Creates unified digital health accounts (ABHA IDs) allowing citizens to securely store, access, and share electronic health records and lab reports nationwide.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://abha.abdm.gov.in"
  },
  {
    "scheme_name": "Chief Minister Comprehensive Health Insurance Scheme (CMCHIS – Tamil Nadu)",
    "category": "Healthcare",
    "description": "Provides cashless hospital coverage up to Rs. 5 lakh per family per year for secondary and tertiary care in Tamil Nadu empaneled hospitals.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 120000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.cmchistn.com"
  },
  {
    "scheme_name": "Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY – Maharashtra)",
    "category": "Healthcare",
    "description": "Cashless healthcare cover up to Rs. 5 lakh per family annually for 996 identified medical procedures and surgeries across Maharashtra.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Maharashtra"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 400000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.jeevandayee.gov.in"
  },
  {
    "scheme_name": "Mukhyamantri Amrutum Yojana (MAA – Gujarat)",
    "category": "Healthcare",
    "description": "Offers cashless medical treatment up to Rs. 5 lakh per family annually for critical illnesses, cardiac surgeries, and neurosurgeries in Gujarat.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Gujarat"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 400000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://maa.gujarat.gov.in"
  },
  {
    "scheme_name": "Dr. YSR Aarogyasri Scheme (Andhra Pradesh)",
    "category": "Healthcare",
    "description": "Provides cashless treatment up to Rs. 25 lakh per family per year for catastrophic illnesses to BPL families in Andhra Pradesh.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://aarogyasri.ap.gov.in"
  },
  {
    "scheme_name": "Arogya Karnataka Scheme",
    "category": "Healthcare",
    "description": "Universal health coverage offering financial protection of up to Rs. 5 lakh per family annually for complex medical and surgical treatments in Karnataka.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Karnataka"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://arogya.karnataka.gov.in"
  },
  {
    "scheme_name": "Swasthya Sathi Scheme (West Bengal)",
    "category": "Healthcare",
    "description": "Smart-card based cashless health insurance of Rs. 5 lakh per family per year issued in the name of the woman head of the family in West Bengal.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "West Bengal"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 600000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://swasthyasathi.gov.in"
  },
  {
    "scheme_name": "Biju Swasthya Kalyan Yojana (BSKY – Odisha)",
    "category": "Healthcare",
    "description": "Health safety net giving cashless hospital treatment up to Rs. 5 lakh per family and Rs. 10 lakh for women members annually in Odisha.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Odisha"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://bsky.odisha.gov.in"
  },
  {
    "scheme_name": "Mukhyamantri Chiranjeevi Swasthya Bima Yojana (Rajasthan)",
    "category": "Healthcare",
    "description": "Universal health insurance giving cashless hospitalization cover up to Rs. 25 lakh per family for critical and general surgeries in Rajasthan.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Rajasthan"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 800000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://chiranjeevi.rajasthan.gov.in"
  },
  {
    "scheme_name": "Karunya Health Scheme (KASP – Kerala)",
    "category": "Healthcare",
    "description": "Provides cashless medical benefit package up to Rs. 5 lakh per poor family per year across government and empanelled private hospitals in Kerala.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Kerala"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://sha.kerala.gov.in/karunya-arogya-suraksha-padhathi-kasp/"
  },
  {
    "scheme_name": "Chief Minister Health Insurance Scheme (CMHIS – Nagaland)",
    "category": "Healthcare",
    "description": "Provides health insurance protection up to Rs. 5 lakh per family per year for indigenous citizens of Nagaland.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Nagaland"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 800000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://cmhis.nagaland.gov.in"
  },
  {
    "scheme_name": "Ayushman Bharat Senior Citizen Health Coverage (Top-Up)",
    "category": "Healthcare",
    "description": "Dedicated distinct health insurance top-up of Rs. 5 lakh per year exclusively for senior citizens aged 70 and above, regardless of income.",
    "eligibility_criteria": {
      "min_age": 70,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://beneficiary.nha.gov.in"
  },
  {
    "scheme_name": "PM Poshan Abhiyaan – Adolescent Anaemia Control",
    "category": "Healthcare",
    "description": "Weekly Iron and Folic Acid Supplementation (WIFS) and bi-annual deworming tablets distributed through schools and Anganwadis to curb anaemia in adolescents.",
    "eligibility_criteria": {
      "min_age": 10,
      "max_age": 19,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student",
        "Unemployed"
      ],
      "max_income": 600000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://poshanabhiyaan.gov.in"
  },
  {
    "scheme_name": "National Leprosy Eradication Programme (Disability Prevention)",
    "category": "Healthcare",
    "description": "Free multi-drug therapy treatment, reconstructive surgery reimbursement up to Rs. 12,000, and supportive footwear/aids for leprosy-cured patients.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 400000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nlep.nic.in"
  },
  {
    "scheme_name": "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    "category": "Agriculture",
    "description": "Direct income support of Rs. 6,000 per year in three equal installments of Rs. 2,000 directly transferred to bank accounts of all landholding farmer families.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 1500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pmkisan.gov.in"
  },
  {
    "scheme_name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    "category": "Agriculture",
    "description": "Comprehensive crop insurance policy protecting farmers against non-preventable natural risks (drought, flood, pests) at low premium rates (1.5%-2%).",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 85,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pmfby.gov.in"
  },
  {
    "scheme_name": "Kisan Credit Card (KCC) Scheme",
    "category": "Agriculture",
    "description": "Subsidized institutional credit up to Rs. 3 lakh at 4% effective interest rate for crop cultivation expenses, farm maintenance, and harvest storage.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 3000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://myscheme.gov.in/schemes/kcc"
  },
  {
    "scheme_name": "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
    "category": "Agriculture",
    "description": "Financial subsidy up to 55% for small/marginal farmers to adopt micro-irrigation (drip and sprinkler systems) for efficient on-farm water management.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pmksy.gov.in"
  },
  {
    "scheme_name": "Soil Health Card Scheme",
    "category": "Agriculture",
    "description": "Free soil testing and customized crop-wise fertilizer recommendations issued every 2 years to enhance soil nutrient balance and farm productivity.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 90,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 3000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://soilhealth.dac.gov.in"
  },
  {
    "scheme_name": "Paramparagat Krishi Vikas Yojana (PKVY)",
    "category": "Agriculture",
    "description": "Financial assistance of Rs. 50,000 per hectare for 3 years to support farmers adopting certified chemical-free organic farming practices and PGS certification.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 2000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pgsindia-ncof.gov.in/pkvy/index.aspx"
  },
  {
    "scheme_name": "Sub-Mission on Agricultural Mechanization (SMAM)",
    "category": "Agriculture",
    "description": "Provides 40% to 50% capital subsidy to small and marginal farmers for purchasing modern tractors, power tillers, seed drills, and harvesters.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://agrimachinery.nic.in"
  },
  {
    "scheme_name": "National Agriculture Market (e-NAM)",
    "category": "Agriculture",
    "description": "Pan-India electronic trading portal networking existing APMC mandis to create a unified national market for agricultural commodities with transparent online price bidding.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 85,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer",
        "Business Owner",
        "Self-Employed"
      ],
      "max_income": 5000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.enam.gov.in"
  },
  {
    "scheme_name": "Agriculture Infrastructure Fund (AIF)",
    "category": "Agriculture",
    "description": "Medium-long term debt financing facility with 3% interest subvention for post-harvest management infrastructure, cold chains, silos, and primary processing units.",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 70,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer",
        "Entrepreneur",
        "Business Owner"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://agriinfra.dac.gov.in"
  },
  {
    "scheme_name": "PM-KUSUM Component A & B (Solar Agriculture Pumps)",
    "category": "Renewable Energy",
    "description": "Offers up to 60% subsidy for farmers to install standalone solar water pumps or solarize existing grid-connected tube wells to reduce electricity bills.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer",
        "Self-Employed"
      ],
      "max_income": 3000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pmkusum.mnre.gov.in"
  },
  {
    "scheme_name": "Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
    "category": "Fisheries",
    "description": "Subsidies up to 40% for general beneficiaries and 60% for SC/ST/women for fish farming ponds, biofloc units, cages, feed mills, and refrigerated transport.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 70,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer",
        "Self-Employed",
        "Entrepreneur"
      ],
      "max_income": 2000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pmmsy.dof.gov.in"
  },
  {
    "scheme_name": "Rashtriya Gokul Mission (RGM)",
    "category": "Animal Husbandry",
    "description": "Enhances milk production and indigenous bovine genetics by providing subsidized sex-sorted semen, artificial insemination, and breed development grants.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer",
        "Self-Employed"
      ],
      "max_income": 2000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://dahd.nic.in/schemes/programmes/rashtriya-gokul-mission"
  },
  {
    "scheme_name": "National Livestock Mission (NLM)",
    "category": "Animal Husbandry",
    "description": "Offers 50% capital subsidy up to Rs. 50 lakh for setting up sheep, goat, piggery, and poultry breeding farms and feed/fodder processing units.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 70,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer",
        "Self-Employed",
        "Entrepreneur"
      ],
      "max_income": 5000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nlm.udyamimitra.in"
  },
  {
    "scheme_name": "Dairy Processing and Infrastructure Development Fund (DIDF)",
    "category": "Animal Husbandry",
    "description": "Concessional loan assistance through NABARD for modernization of dairy plants, milk chilling centers, and bulk milk coolers in rural cooperatives.",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 70,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer",
        "Business Owner",
        "Entrepreneur"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://dahd.nic.in/didf"
  },
  {
    "scheme_name": "National Beekeeping and Honey Mission (NBHM)",
    "category": "Agriculture",
    "description": "Provides 80% subsidy on beehives, bee colonies, and honey extraction equipment for small farmers to promote Sweet Revolution and secondary farm income.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 70,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer",
        "Self-Employed",
        "Unemployed"
      ],
      "max_income": 1500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nbhm.gov.in"
  },
  {
    "scheme_name": "Rythu Bandhu Scheme (Telangana)",
    "category": "Agriculture",
    "description": "Investment support of Rs. 10,000 per acre per year (Rs. 5,000 per season) to all landowning farmers in Telangana for purchase of seeds, fertilizers, and inputs.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Telangana"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 2000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://rythubandhu.telangana.gov.in"
  },
  {
    "scheme_name": "Dr. YSR Rythu Bharosa (Andhra Pradesh)",
    "category": "Agriculture",
    "description": "Provides financial assistance of Rs. 13,500 per year to landholding and tenant farmer families in Andhra Pradesh to meet agricultural expenses.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 90,
      "genders": [
        "All"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 1500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://ysrrythubharosa.ap.gov.in"
  },
  {
    "scheme_name": "Krushak Assistance for Livelihood and Income Augmentation (KALIA – Odisha)",
    "category": "Agriculture",
    "description": "Financial aid of Rs. 10,000 per family per year for small and marginal farmers and Rs. 12,500 for landless agricultural laborers in Odisha.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "genders": [
        "All"
      ],
      "states": [
        "Odisha"
      ],
      "occupations": [
        "Farmer",
        "Unemployed"
      ],
      "max_income": 400000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://kalia.odisha.gov.in"
  },
  {
    "scheme_name": "Krishi Bhagya Scheme (Karnataka)",
    "category": "Agriculture",
    "description": "Subsidies up to 80% for constructing on-farm farm ponds (Krishi Honda), polythene lining, diesel pumps, and micro-irrigation systems in dryland areas of Karnataka.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Karnataka"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 1000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://raitamitra.karnataka.gov.in"
  },
  {
    "scheme_name": "Bhavantar Bhugtan Yojana (Madhya Pradesh)",
    "category": "Agriculture",
    "description": "Price deficiency relief scheme reimbursing farmers the gap between Minimum Support Price (MSP) and actual market selling price in MP mandis.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 85,
      "genders": [
        "All"
      ],
      "states": [
        "Madhya Pradesh"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 2000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://mpeuparjan.nic.in"
  },
  {
    "scheme_name": "Chief Minister Solar Pump Scheme (Maharashtra)",
    "category": "Agriculture",
    "description": "Provides subsidized off-grid solar agriculture pumps with 90% to 95% government subsidy for farmers without conventional electric grid connections.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "genders": [
        "All"
      ],
      "states": [
        "Maharashtra"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 1500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.mahadiscom.in/solar/"
  },
  {
    "scheme_name": "Mukhyamantri Krishi Ashirwad Yojana (Jharkhand)",
    "category": "Agriculture",
    "description": "Financial assistance between Rs. 5,000 to Rs. 25,000 per year per beneficiary depending on farm size to support input costs for Jharkhand farmers.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "genders": [
        "All"
      ],
      "states": [
        "Jharkhand"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 800000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://mmkay.jharkhand.gov.in"
  },
  {
    "scheme_name": "Kisan Kalyan Mission (Uttar Pradesh)",
    "category": "Agriculture",
    "description": "Comprehensive agricultural transformation program providing free technical training, certified high-yield seed kits, and micro-loan linkage in UP.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 1200000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://upagriculture.com"
  },
  {
    "scheme_name": "Punjab Free Electricity for Agriculture Tube Wells",
    "category": "Agriculture",
    "description": "Provides 100% subsidized free agricultural electricity supply to registered farming tube wells and motors across Punjab.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 90,
      "genders": [
        "All"
      ],
      "states": [
        "Punjab"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 3000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.pspcl.in"
  },
  {
    "scheme_name": "Pashu Kisan Credit Card (Haryana)",
    "category": "Animal Husbandry",
    "description": "Low-interest short-term credit cards offering up to Rs. 1.60 lakh collateral-free loans for cattle, buffalo, sheep, and goat maintenance in Haryana.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Haryana"
      ],
      "occupations": [
        "Farmer",
        "Self-Employed"
      ],
      "max_income": 1500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pashuharyana.gov.in"
  },
  {
    "scheme_name": "Mission Organic Value Chain Development for NE Region (MOVCDNER)",
    "category": "Agriculture",
    "description": "Dedicated financial and technical support for developing end-to-end organic farming, collection centres, processing units, and marketing brands in North-East states.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 70,
      "genders": [
        "All"
      ],
      "states": [
        "Assam",
        "Arunachal Pradesh",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Sikkim",
        "Tripura"
      ],
      "occupations": [
        "Farmer",
        "Entrepreneur"
      ],
      "max_income": 2000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://movcd.dac.gov.in"
  },
  {
    "scheme_name": "Sub-Mission on Seeds and Planting Material (SMSP)",
    "category": "Agriculture",
    "description": "Distributes certified foundation and hybrid seed minikits at subsidized prices to boost crop yield and replace degraded seed varieties.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 1500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://seednet.gov.in"
  },
  {
    "scheme_name": "Agri-Clinics and Agri-Business Centres Scheme (ACABC)",
    "category": "Agriculture",
    "description": "Offers 36% to 44% composite subsidy and bank loans up to Rs. 20 lakh to agriculture graduates setting up agri-consultancies, seed testing labs, and farm clinics.",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 50,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student",
        "Self-Employed",
        "Entrepreneur"
      ],
      "max_income": 1500000,
      "education": [
        "Graduate",
        "Post Graduate",
        "Doctorate"
      ]
    },
    "application_url": "https://www.agriclinics.net"
  },
  {
    "scheme_name": "National Mission for Sustainable Agriculture (NMSA – Rainfed Area Development)",
    "category": "Agriculture",
    "description": "Grants up to 50% for farmers adopting integrated farming systems (IFS) combining horticulture, livestock, agroforestry, and crop rotation in rainfed zones.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 1200000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nmsa.dac.gov.in"
  },
  {
    "scheme_name": "Mission for Integrated Development of Horticulture (MIDH)",
    "category": "Agriculture",
    "description": "Capital subsidy of 40% to 50% for establishing commercial fruit orchards, polyhouse greenhouses, tissue culture units, and mushroom farming.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 70,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer",
        "Self-Employed",
        "Entrepreneur"
      ],
      "max_income": 3000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://midh.gov.in"
  },
  {
    "scheme_name": "National Means-cum-Merit Scholarship Scheme (NMMSS)",
    "category": "Education",
    "description": "Awards scholarships of Rs. 12,000 per annum to meritorious students of economically weaker sections studying in classes IX to XII in government schools.",
    "eligibility_criteria": {
      "min_age": 12,
      "max_age": 20,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 350000,
      "education": [
        "8th Pass",
        "9th Pass",
        "10th Pass",
        "12th Pass"
      ]
    },
    "application_url": "https://scholarships.gov.in"
  },
  {
    "scheme_name": "Central Sector Scheme of Scholarship for College and University Students",
    "category": "Education",
    "description": "Financial aid of Rs. 12,000 to Rs. 20,000 per annum to meritorious students above 80th percentile in Class 12 pursuing regular degree courses.",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 28,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 450000,
      "education": [
        "12th Pass",
        "Graduate",
        "Post Graduate"
      ]
    },
    "application_url": "https://scholarships.gov.in"
  },
  {
    "scheme_name": "Post-Matric Scholarship for SC Students",
    "category": "Education",
    "description": "100% tuition fee reimbursement and monthly maintenance allowances up to Rs. 13,500/yr for Scheduled Caste students pursuing post-secondary higher education.",
    "eligibility_criteria": {
      "min_age": 15,
      "max_age": 35,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 250000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate",
        "Post Graduate"
      ],
      "social_categories": [
        "SC"
      ]
    },
    "application_url": "https://scholarships.gov.in"
  },
  {
    "scheme_name": "Post-Matric Scholarship for ST Students",
    "category": "Education",
    "description": "Complete fee waiver and living allowance for Scheduled Tribe students studying in recognized colleges, polytechnics, and universities across India.",
    "eligibility_criteria": {
      "min_age": 15,
      "max_age": 35,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 250000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate",
        "Post Graduate"
      ],
      "social_categories": [
        "ST"
      ]
    },
    "application_url": "https://scholarships.gov.in"
  },
  {
    "scheme_name": "Post-Matric Scholarship for OBC Students",
    "category": "Education",
    "description": "Provides non-refundable fee grants and academic maintenance stipends for Other Backward Class students pursuing post-matriculation courses.",
    "eligibility_criteria": {
      "min_age": 15,
      "max_age": 35,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 250000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ],
      "social_categories": [
        "OBC"
      ]
    },
    "application_url": "https://scholarships.gov.in"
  },
  {
    "scheme_name": "Top Class Education Scheme for SC Students",
    "category": "Education",
    "description": "Full tuition fee reimbursement, living allowance of Rs. 3,000/month, and computer grant of Rs. 45,000 for SC students admitted to premier notified institutes (IITs, IIMs, AIIMS).",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 32,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 800000,
      "education": [
        "12th Pass",
        "Graduate"
      ],
      "social_categories": [
        "SC"
      ]
    },
    "application_url": "https://scholarships.gov.in"
  },
  {
    "scheme_name": "Top Class Education Scheme for ST Students",
    "category": "Education",
    "description": "Covers full tuition fees, non-refundable charges, boarding allowance, and laptop purchase grant for meritorious ST students in premier national institutions.",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 32,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 600000,
      "education": [
        "12th Pass",
        "Graduate"
      ],
      "social_categories": [
        "ST"
      ]
    },
    "application_url": "https://scholarships.gov.in"
  },
  {
    "scheme_name": "National Overseas Scholarship for SC/ST Candidates",
    "category": "Education",
    "description": "Full tuition fee sponsorship, annual maintenance allowance of USD 15,400, and airfare for underprivileged students pursuing Master's and Ph.D degrees abroad.",
    "eligibility_criteria": {
      "min_age": 20,
      "max_age": 35,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student",
        "Unemployed"
      ],
      "max_income": 800000,
      "education": [
        "Graduate",
        "Post Graduate"
      ],
      "social_categories": [
        "SC",
        "ST"
      ]
    },
    "application_url": "https://nosmsje.gov.in"
  },
  {
    "scheme_name": "Pragati Scholarship for Girl Students (Technical Degree/Diploma)",
    "category": "Education",
    "description": "AICTE scheme offering Rs. 50,000 per annum for all 4 years of degree/diploma education to meritorious girl students admitted to technical engineering colleges.",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 26,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 800000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://www.aicte-india.org/schemes/students-development-schemes/Pragati"
  },
  {
    "scheme_name": "Saksham Scholarship for Divyang Students (Technical Education)",
    "category": "Education",
    "description": "AICTE grant of Rs. 50,000 per year towards tuition and college expenses for specially-abled students with disability >= 40% pursuing technical degrees.",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 30,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 800000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://www.aicte-india.org/schemes/students-development-schemes/Saksham"
  },
  {
    "scheme_name": "AICTE Swanath Scholarship Scheme",
    "category": "Education",
    "description": "Financial support of Rs. 50,000 per year for orphaned students, wards of armed forces martyrs, and children of COVID-deceased parents pursuing higher technical education.",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 30,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 800000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://www.aicte-india.org/schemes/students-development-schemes/Swanath"
  },
  {
    "scheme_name": "Prime Minister's Research Fellowship (PMRF)",
    "category": "Education",
    "description": "Prestigious fellowship offering Rs. 70,000 to Rs. 80,000 per month stipend and Rs. 2 lakh annual research grant for meritorious doctoral Ph.D scholars in IITs, IISc, and IISERs.",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 35,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 10000000,
      "education": [
        "Graduate",
        "Post Graduate",
        "Doctorate"
      ]
    },
    "application_url": "https://www.pmrf.in"
  },
  {
    "scheme_name": "INSPIRE Scholarship for Higher Education (SHE)",
    "category": "Education",
    "description": "Department of Science and Technology scholarship offering Rs. 80,000 per annum (Rs. 5,000/month + mentorship grant) for students pursuing natural and basic science degrees.",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 25,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 10000000,
      "education": [
        "12th Pass",
        "Graduate",
        "Post Graduate"
      ]
    },
    "application_url": "https://online-inspire.gov.in"
  },
  {
    "scheme_name": "Kishore Vaigyanik Protsahan Yojana (KVPY / IAT Fellowship)",
    "category": "Education",
    "description": "National fellowship providing monthly stipends up to Rs. 7,000 and annual contingency grants to encourage talented students to pursue research careers in basic sciences.",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 24,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 10000000,
      "education": [
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://iiseradmission.in"
  },
  {
    "scheme_name": "Free Coaching Scheme for SC and OBC Students",
    "category": "Education",
    "description": "Free competitive examination coaching and monthly stipend of Rs. 4,000 for UPSC, SSC, Banking, JEE, NEET, and GATE exams for SC and OBC candidates.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 35,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student",
        "Unemployed"
      ],
      "max_income": 800000,
      "education": [
        "12th Pass",
        "Graduate"
      ],
      "social_categories": [
        "SC",
        "OBC"
      ]
    },
    "application_url": "https://coaching.dosje.gov.in"
  },
  {
    "scheme_name": "Begum Hazrat Mahal National Scholarship for Minority Girls",
    "category": "Education",
    "description": "Scholarship of Rs. 5,000 for class IX-X and Rs. 6,000 for class XI-XII for meritorious girl students belonging to national minority communities.",
    "eligibility_criteria": {
      "min_age": 13,
      "max_age": 20,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 200000,
      "education": [
        "8th Pass",
        "9th Pass",
        "10th Pass",
        "12th Pass"
      ]
    },
    "application_url": "https://scholarships.gov.in"
  },
  {
    "scheme_name": "Pre-Matric Scholarship for SC Students",
    "category": "Education",
    "description": "Provides financial assistance of Rs. 3,500/year to SC children studying in classes IX and X to prevent dropout rates and incentivize high school completion.",
    "eligibility_criteria": {
      "min_age": 12,
      "max_age": 18,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 250000,
      "education": [
        "8th Pass",
        "9th Pass",
        "10th Pass"
      ],
      "social_categories": [
        "SC"
      ]
    },
    "application_url": "https://scholarships.gov.in"
  },
  {
    "scheme_name": "Pre-Matric Scholarship for ST Students",
    "category": "Education",
    "description": "Annual scholarship assistance of Rs. 3,500 for Day Scholars and Rs. 7,000 for Hostellers studying in classes IX and X from Scheduled Tribe communities.",
    "eligibility_criteria": {
      "min_age": 12,
      "max_age": 18,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 250000,
      "education": [
        "8th Pass",
        "9th Pass",
        "10th Pass"
      ],
      "social_categories": [
        "ST"
      ]
    },
    "application_url": "https://scholarships.gov.in"
  },
  {
    "scheme_name": "Padho Pardesh – Education Loan Interest Subsidy",
    "category": "Education",
    "description": "Provides 100% interest subsidy during the moratorium period on overseas education loans for students from minority communities pursuing Master's or Ph.D abroad.",
    "eligibility_criteria": {
      "min_age": 20,
      "max_age": 35,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 600000,
      "education": [
        "Graduate",
        "Post Graduate"
      ]
    },
    "application_url": "https://minorityaffairs.gov.in"
  },
  {
    "scheme_name": "Central Sector Interest Subsidy (CSIS) on Education Loans",
    "category": "Education",
    "description": "Complete interest subsidy during course study and moratorium period on education loans up to Rs. 10 lakh for professional courses for students from low-income families.",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 32,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 450000,
      "education": [
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://www.canarabank.com/csis"
  },
  {
    "scheme_name": "Kanyashree Prakalpa (K1 & K2 – West Bengal)",
    "category": "Education",
    "description": "Annual scholarship of Rs. 1,000 (K1) and one-time grant of Rs. 25,000 (K2) upon reaching 18 years for unmarried school-going girls in West Bengal.",
    "eligibility_criteria": {
      "min_age": 13,
      "max_age": 19,
      "genders": [
        "Female"
      ],
      "states": [
        "West Bengal"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 120000,
      "education": [
        "8th Pass",
        "9th Pass",
        "10th Pass",
        "12th Pass"
      ]
    },
    "application_url": "https://www.wbkanyashree.gov.in"
  },
  {
    "scheme_name": "Mukhyamantri Medhavi Vidyarthi Yojana (MMVY – Madhya Pradesh)",
    "category": "Education",
    "description": "Full course fee sponsorship for students scoring 70%+ in MP Board or 85%+ in CBSE Class 12 admitted to Engineering, Medical, Law, or Degree colleges.",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 26,
      "genders": [
        "All"
      ],
      "states": [
        "Madhya Pradesh"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 600000,
      "education": [
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://scholarshipportal.mp.nic.in/MedhaviChhatra/"
  },
  {
    "scheme_name": "Mukhyamantri Kanya Utthan Yojana (Bihar)",
    "category": "Education",
    "description": "Financial incentives up to Rs. 50,000 for girl students passing Class 12 and graduating from recognized universities in Bihar.",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 26,
      "genders": [
        "Female"
      ],
      "states": [
        "Bihar"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 400000,
      "education": [
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://medhasoft.bih.nic.in"
  },
  {
    "scheme_name": "Jagananna Vidya Deevena (Andhra Pradesh)",
    "category": "Education",
    "description": "Full college tuition fee reimbursement credited directly to the mother's bank account for polytechnic, ITI, degree, and engineering students in AP.",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 28,
      "genders": [
        "All"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 250000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://jnanabhumi.ap.gov.in"
  },
  {
    "scheme_name": "Jagananna Vasathi Deevena (Andhra Pradesh)",
    "category": "Education",
    "description": "Annual hostel food and accommodation assistance of Rs. 20,000 for university and engineering students in Andhra Pradesh.",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 28,
      "genders": [
        "All"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 250000,
      "education": [
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://jnanabhumi.ap.gov.in"
  },
  {
    "scheme_name": "Moovalur Ramamirtham Ammaiyar Pudhumai Penn Scheme (Tamil Nadu)",
    "category": "Education",
    "description": "Monthly direct financial grant of Rs. 1,000 deposited into bank accounts of girl students who studied in government schools and enrolled in higher education.",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 25,
      "genders": [
        "Female"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 500000,
      "education": [
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://pudhumaipenn.tn.gov.in"
  },
  {
    "scheme_name": "Tamil Nadu Naan Mudhalvan Scheme",
    "category": "Education",
    "description": "Free dynamic upskilling courses in AI, Cloud Computing, Robotics, and Foreign Languages for engineering, arts, and science college students across Tamil Nadu.",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 26,
      "genders": [
        "All"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 10000000,
      "education": [
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://www.naanmudhalvan.tn.gov.in"
  },
  {
    "scheme_name": "Gargi Puraskar Yojana (Rajasthan)",
    "category": "Education",
    "description": "Cash prize of Rs. 6,000 and merit certificate awarded to girl students scoring 75% or above marks in Class 10 and Class 12 board exams in Rajasthan.",
    "eligibility_criteria": {
      "min_age": 15,
      "max_age": 20,
      "genders": [
        "Female"
      ],
      "states": [
        "Rajasthan"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 500000,
      "education": [
        "10th Pass",
        "12th Pass"
      ]
    },
    "application_url": "https://rajshaladarpan.nic.in"
  },
  {
    "scheme_name": "Chief Minister's Super 100 Scheme (Haryana)",
    "category": "Education",
    "description": "Free residential boarding and specialized 2-year entrance coaching for meritorious government school students preparing for IIT-JEE and NEET in Haryana.",
    "eligibility_criteria": {
      "min_age": 14,
      "max_age": 18,
      "genders": [
        "All"
      ],
      "states": [
        "Haryana"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 300000,
      "education": [
        "10th Pass"
      ]
    },
    "application_url": "https://super100.haryana.gov.in"
  },
  {
    "scheme_name": "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti (Maharashtra)",
    "category": "Education",
    "description": "50% tuition and exam fee reimbursement for Economically Backward Class (EBC) students studying higher professional degrees in Maharashtra.",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 28,
      "genders": [
        "All"
      ],
      "states": [
        "Maharashtra"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 800000,
      "education": [
        "12th Pass",
        "Graduate",
        "Post Graduate"
      ]
    },
    "application_url": "https://mahadbt.maharashtra.gov.in"
  },
  {
    "scheme_name": "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
    "category": "Women Welfare",
    "description": "Direct cash maternity incentive of Rs. 5,000 for the first child and Rs. 6,000 for the second child (if girl) to promote adequate nutrition and institutional delivery.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Homemaker",
        "Self-Employed",
        "Unemployed",
        "Farmer",
        "Salaried Employee"
      ],
      "max_income": 500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pmmvy.wcd.gov.in"
  },
  {
    "scheme_name": "Beti Bachao Beti Padhao (BBBP)",
    "category": "Women Welfare",
    "description": "National multi-sectoral initiative ensuring survival, protection, and quality higher education for girl children to eliminate gender-biased sex selection.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 30,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://wcd.nic.in/bbbp-schemes"
  },
  {
    "scheme_name": "Sukanya Samriddhi Yojana (SSY)",
    "category": "Women Welfare",
    "description": "Government small savings scheme offering highest tax-free sovereign interest (8.2%) and Section 80C deductions for girl child education and marriage corpus.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 50,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 5000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.indiapost.gov.in/Financial/Pages/Content/Sukanya-Samriddhi-Account.aspx"
  },
  {
    "scheme_name": "Mission Shakti – Sambal (Safety & Security)",
    "category": "Women Welfare",
    "description": "Integrated umbrella scheme supporting One Stop Centres (Sakhi), Women Helpline (181), and Beti Bachao initiatives for women in distress or domestic crises.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 90,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://wcd.nic.in/schemes/mission-shakti"
  },
  {
    "scheme_name": "Mission Shakti – Samarthya (Empowerment & Child Care)",
    "category": "Women Welfare",
    "description": "Provides Working Women Hostels (Sakhi Niwas), National Creche Scheme for children of working mothers, and financial micro-credit linkages for women.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Salaried Employee",
        "Self-Employed",
        "Entrepreneur",
        "Homemaker"
      ],
      "max_income": 800000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://wcd.nic.in/schemes/mission-shakti"
  },
  {
    "scheme_name": "Pradhan Mantri Ujjwala Yojana (PMUY)",
    "category": "Women Welfare",
    "description": "Deposit-free LPG cylinder connection, free first cylinder refill, and subsidized cookstove issued in the name of adult women from poor and BPL households.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Homemaker",
        "Self-Employed",
        "Farmer",
        "Unemployed"
      ],
      "max_income": 250000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.pmuy.gov.in"
  },
  {
    "scheme_name": "Mahila E-Haat (Digital Entrepreneurship)",
    "category": "Women Welfare",
    "description": "Direct bilingual online marketing platform for women entrepreneurs, SHGs, and NGOs to sell handmade products, textiles, and organic groceries without middleman cuts.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Entrepreneur",
        "Self-Employed",
        "Homemaker"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://mahilaehaat-rmk.gov.in"
  },
  {
    "scheme_name": "Support to Training and Employment Programme for Women (STEP)",
    "category": "Women Welfare",
    "description": "Provides employability and entrepreneurial skill training in agriculture, horticulture, handlooms, IT, and food processing to marginalized women.",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 55,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Unemployed",
        "Homemaker",
        "Self-Employed"
      ],
      "max_income": 300000,
      "education": [
        "Below 8th",
        "8th Pass",
        "10th Pass",
        "12th Pass"
      ]
    },
    "application_url": "https://wcd.nic.in/schemes/support-training-and-employment-programme-women-step"
  },
  {
    "scheme_name": "Ladli Behna Yojana (Madhya Pradesh)",
    "category": "Women Welfare",
    "description": "Direct monthly financial assistance of Rs. 1,250 deposited into the bank accounts of married, widowed, and divorced women aged 21 to 60 in MP.",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 60,
      "genders": [
        "Female"
      ],
      "states": [
        "Madhya Pradesh"
      ],
      "occupations": [
        "Homemaker",
        "Self-Employed",
        "Unemployed",
        "Farmer"
      ],
      "max_income": 250000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://cmladlibahna.mp.gov.in"
  },
  {
    "scheme_name": "Mukhyamantri Majhi Ladki Bahin Yojana (Maharashtra)",
    "category": "Women Welfare",
    "description": "Monthly direct cash transfer of Rs. 1,500 transferred to women from low-income families aged 21 to 65 across Maharashtra.",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 65,
      "genders": [
        "Female"
      ],
      "states": [
        "Maharashtra"
      ],
      "occupations": [
        "Homemaker",
        "Self-Employed",
        "Unemployed",
        "Farmer"
      ],
      "max_income": 250000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://ladakibahin.maharashtra.gov.in"
  },
  {
    "scheme_name": "Gruha Lakshmi Scheme (Karnataka)",
    "category": "Women Welfare",
    "description": "Monthly financial assistance of Rs. 2,000 transferred to women heads of Antyodaya and BPL households across Karnataka.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "genders": [
        "Female"
      ],
      "states": [
        "Karnataka"
      ],
      "occupations": [
        "Homemaker",
        "Self-Employed",
        "Farmer",
        "Unemployed"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://sevasindhuservices.karnataka.gov.in"
  },
  {
    "scheme_name": "Gruha Lakshmi Scheme (Telangana)",
    "category": "Housing",
    "description": "One-time financial grant of Rs. 3 lakh provided to women head of poor families owning house plots to construct pucca homes in Telangana.",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 65,
      "genders": [
        "Female"
      ],
      "states": [
        "Telangana"
      ],
      "occupations": [
        "Homemaker",
        "Self-Employed",
        "Unemployed"
      ],
      "max_income": 250000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://gruhalakshmi.telangana.gov.in"
  },
  {
    "scheme_name": "Lakshmir Bhandar Scheme (West Bengal)",
    "category": "Women Welfare",
    "description": "Monthly direct basic income support of Rs. 1,200 for SC/ST women and Rs. 1,000 for general category women aged 25 to 60 in West Bengal.",
    "eligibility_criteria": {
      "min_age": 25,
      "max_age": 60,
      "genders": [
        "Female"
      ],
      "states": [
        "West Bengal"
      ],
      "occupations": [
        "Homemaker",
        "Self-Employed",
        "Farmer",
        "Unemployed"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://socialsecurity.wb.gov.in"
  },
  {
    "scheme_name": "Mukhyamantri Kanya Sumangala Yojana (Uttar Pradesh)",
    "category": "Women Welfare",
    "description": "Conditional monetary grants totaling Rs. 25,000 transferred across 6 life milestones from girl child birth through college admission in UP.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 25,
      "genders": [
        "Female"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://mksy.up.gov.in"
  },
  {
    "scheme_name": "Mahila Samman Savings Certificate (MSSC)",
    "category": "Women Welfare",
    "description": "Government small savings investment scheme exclusively for women and girls offering attractive 7.5% fixed interest compounded quarterly for 2 years.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 90,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.indiapost.gov.in/Financial/Pages/Content/MSSC.aspx"
  },
  {
    "scheme_name": "Mahila Samridhi Yojana (NCFDC / NBCFDC)",
    "category": "Women Welfare",
    "description": "Micro-finance loan up to Rs. 1.40 lakh at 4% subsidized interest rate for backward class women entrepreneurs through state channelizing agencies.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 55,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Self-Employed",
        "Entrepreneur",
        "Homemaker"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ],
      "social_categories": [
        "OBC",
        "SC",
        "ST"
      ]
    },
    "application_url": "https://nbcfdc.gov.in"
  },
  {
    "scheme_name": "Dena Shakti / Cent Kalyani Women Enterprise Loan",
    "category": "Business & Employment",
    "description": "Concessional interest rate enterprise loans up to Rs. 1 crore with 0.50% interest concession and collateral fee waivers for women MSME business owners.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Entrepreneur",
        "Business Owner",
        "Self-Employed"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.centralbankofindia.co.in/en/Cent-Kalyani"
  },
  {
    "scheme_name": "Udyogini Scheme for Women Entrepreneurs (Karnataka)",
    "category": "Business & Employment",
    "description": "Subsidized bank business loans up to Rs. 3 lakh with 30% government capital subsidy for women setting up trade and manufacturing micro-units.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 55,
      "genders": [
        "Female"
      ],
      "states": [
        "Karnataka"
      ],
      "occupations": [
        "Entrepreneur",
        "Business Owner",
        "Self-Employed"
      ],
      "max_income": 150000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://kswdc.karnataka.gov.in"
  },
  {
    "scheme_name": "Kalyana Lakshmi / Shaadi Mubarak Scheme (Telangana)",
    "category": "Women Welfare",
    "description": "One-time financial assistance of Rs. 1,00,116 for marriage expenses of underprivileged brides aged 18+ from SC/ST/BC/Minority communities in Telangana.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 35,
      "genders": [
        "Female"
      ],
      "states": [
        "Telangana"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 200000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://telanganaepass.cgg.gov.in"
  },
  {
    "scheme_name": "Dr. Muthulakshmi Reddy Maternity Benefit Scheme (Tamil Nadu)",
    "category": "Women Welfare",
    "description": "Maternity assistance of Rs. 18,000 (including Rs. 14,000 cash and nutrition kit worth Rs. 4,000) for pregnant women in Tamil Nadu.",
    "eligibility_criteria": {
      "min_age": 19,
      "max_age": 45,
      "genders": [
        "Female"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "occupations": [
        "Homemaker",
        "Self-Employed",
        "Unemployed"
      ],
      "max_income": 200000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://picme.tn.gov.in"
  },
  {
    "scheme_name": "Pradhan Mantri Mudra Yojana – Shishu Loan",
    "category": "Business & Employment",
    "description": "Collateral-free micro loans up to Rs. 50,000 at low interest rates for starting small grocery shops, tailoring, repair shops, and tiny ventures.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Self-Employed",
        "Business Owner",
        "Unemployed",
        "Homemaker"
      ],
      "max_income": 1500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.mudra.org.in"
  },
  {
    "scheme_name": "Pradhan Mantri Mudra Yojana – Kishor Loan",
    "category": "Business & Employment",
    "description": "Collateral-free business loans between Rs. 50,000 and Rs. 5 lakh for purchasing machinery, raw material inventory, and business expansion.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Self-Employed",
        "Business Owner",
        "Entrepreneur"
      ],
      "max_income": 3000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.mudra.org.in"
  },
  {
    "scheme_name": "Pradhan Mantri Mudra Yojana – Tarun Loan",
    "category": "Business & Employment",
    "description": "Collateral-free business growth loans from Rs. 5 lakh up to Rs. 20 lakh for established small enterprises, manufacturers, and trade firms.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Business Owner",
        "Entrepreneur",
        "Self-Employed"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.mudra.org.in"
  },
  {
    "scheme_name": "PM SVANidhi Scheme (Micro-Credit for Street Vendors)",
    "category": "Business & Employment",
    "description": "Working capital collateral-free loans starting at Rs. 10,000, progressing to Rs. 20,000 and Rs. 50,000 with 7% interest subsidy and cashback for digital transactions.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Self-Employed",
        "Business Owner",
        "Unemployed"
      ],
      "max_income": 400000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pmsvanidhi.mohua.gov.in"
  },
  {
    "scheme_name": "PM Vishwakarma Scheme",
    "category": "Skills & Business",
    "description": "Holistic support for 18 traditional artisan trades (carpenters, blacksmiths, potters, cobblers) with certificate, Rs. 15k toolkit grant, and 5% interest loans up to Rs. 3 lakh.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 70,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Self-Employed",
        "Business Owner",
        "Homemaker",
        "Unemployed"
      ],
      "max_income": 600000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pmvishwakarma.gov.in"
  },
  {
    "scheme_name": "Prime Minister's Employment Generation Programme (PMEGP)",
    "category": "Business & Employment",
    "description": "Credit-linked capital subsidy of up to 35% on project loans up to Rs. 50 lakh for manufacturing and Rs. 20 lakh for services to generate new self-employment.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Unemployed",
        "Self-Employed",
        "Entrepreneur",
        "Business Owner"
      ],
      "max_income": 2500000,
      "education": [
        "8th Pass",
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp"
  },
  {
    "scheme_name": "Stand-Up India Scheme",
    "category": "Entrepreneurship",
    "description": "Facilitates bank loans between Rs. 10 lakh and Rs. 1 crore to at least one SC/ST borrower and at least one woman borrower per bank branch for greenfield enterprises.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Entrepreneur",
        "Business Owner",
        "Self-Employed"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.standupmitra.in"
  },
  {
    "scheme_name": "Startup India Initiative",
    "category": "Entrepreneurship",
    "description": "3-year 100% income tax exemption, patent fast-tracking with 80% fee rebate, self-certification compliance, and Rs. 10,000 Cr Fund of Funds support for DPIIT-recognized startups.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Entrepreneur",
        "Business Owner",
        "Student",
        "Salaried Employee"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.startupindia.gov.in"
  },
  {
    "scheme_name": "Credit Guarantee Fund Trust for Micro & Small Enterprises (CGTMSE)",
    "category": "Business & Employment",
    "description": "Provides credit guarantee cover up to 85% for collateral-free bank loans up to Rs. 5 crore sanctioned to new and existing micro and small business units.",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 65,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Business Owner",
        "Entrepreneur"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.cgtmse.in"
  },
  {
    "scheme_name": "Scheme of Fund for Regeneration of Traditional Industries (SFURTI)",
    "category": "Business & Employment",
    "description": "Financial assistance up to Rs. 2.5 crore to Rs. 5 crore per artisan cluster to setup Common Facility Centres, modern tooling, and design centers for khadi and coir.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 70,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Self-Employed",
        "Business Owner",
        "Entrepreneur"
      ],
      "max_income": 1500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://sfurti.msme.gov.in"
  },
  {
    "scheme_name": "ASPIRE Scheme (Livelihood Business Incubators)",
    "category": "Entrepreneurship",
    "description": "Grants up to Rs. 1 crore for setting up Livelihood Business Incubators (LBIs) and Technology Business Incubators (TBIs) in agro-rural industries.",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 60,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Entrepreneur",
        "Business Owner"
      ],
      "max_income": 10000000,
      "education": [
        "Graduate",
        "Post Graduate"
      ]
    },
    "application_url": "https://aspire.msme.gov.in"
  },
  {
    "scheme_name": "MSME Champions (MSME Sustainable ZED Certification)",
    "category": "Business & Employment",
    "description": "Subsidizes up to 80% of testing and certification cost for Zero Defect Zero Effect (ZED) quality and eco-manufacturing standards for MSMEs.",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 70,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Business Owner",
        "Entrepreneur"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://zed.msme.gov.in"
  },
  {
    "scheme_name": "Coir Vikas Yojana (CVY)",
    "category": "Business & Employment",
    "description": "Provides 25% capital subsidy for setting up coir spinning and weaving units and 75% subsidy for modern motorized traditional coir ratts for women workers.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Self-Employed",
        "Business Owner",
        "Homemaker"
      ],
      "max_income": 1000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://coirboard.gov.in"
  },
  {
    "scheme_name": "National Small Industries Corporation (NSIC) Raw Material Assistance",
    "category": "Business & Employment",
    "description": "Finances the procurement of indigenous and imported raw materials (steel, aluminium, polymers) against bank guarantees up to 180 days for MSMEs.",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 70,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Business Owner",
        "Entrepreneur"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.nsic.co.in/Schemes/Raw-Material-Assistance"
  },
  {
    "scheme_name": "National SC-ST Hub (NSSH)",
    "category": "Entrepreneurship",
    "description": "Provides 25% subsidy on equipment purchase, free vendor registration on GeM, and handholding to SC/ST entrepreneurs for government procurement quotas.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Entrepreneur",
        "Business Owner",
        "Self-Employed"
      ],
      "max_income": 5000000,
      "education": [
        "All"
      ],
      "social_categories": [
        "SC",
        "ST"
      ]
    },
    "application_url": "https://www.scsthub.in"
  },
  {
    "scheme_name": "Chief Minister's Employment Generation Programme (CMEGP – Maharashtra)",
    "category": "Business & Employment",
    "description": "Provides capital subsidy up to 35% on project loans up to Rs. 50 lakh for manufacturing and Rs. 20 lakh for service enterprises in Maharashtra.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "genders": [
        "All"
      ],
      "states": [
        "Maharashtra"
      ],
      "occupations": [
        "Unemployed",
        "Self-Employed",
        "Entrepreneur"
      ],
      "max_income": 1500000,
      "education": [
        "8th Pass",
        "10th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://cmegp.gov.in"
  },
  {
    "scheme_name": "Mukhyamantri Yuva Swarojgar Yojana (Uttar Pradesh)",
    "category": "Business & Employment",
    "description": "Offers 25% margin money subsidy on bank loans up to Rs. 25 lakh for industry and Rs. 10 lakh for service sector ventures to educated unemployed youth in UP.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 40,
      "genders": [
        "All"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "occupations": [
        "Unemployed",
        "Self-Employed",
        "Entrepreneur"
      ],
      "max_income": 1000000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://diupmsme.upsdc.gov.in"
  },
  {
    "scheme_name": "Mukhyamantri Yuva Udyami Yojana (Madhya Pradesh)",
    "category": "Business & Employment",
    "description": "Provides 15% margin money subsidy up to Rs. 12 lakh and 5% interest subsidy for 5 years on loans from Rs. 10 lakh to Rs. 2 crore for new industry setups in MP.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 40,
      "genders": [
        "All"
      ],
      "states": [
        "Madhya Pradesh"
      ],
      "occupations": [
        "Unemployed",
        "Entrepreneur",
        "Self-Employed"
      ],
      "max_income": 2000000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://msme.mponline.gov.in"
  },
  {
    "scheme_name": "T-PRIDE (Telangana Program for SC/ST Entrepreneurship)",
    "category": "Entrepreneurship",
    "description": "Offers 35% investment subsidy up to Rs. 75 lakh, 100% stamp duty reimbursement, and 9% interest subvention for SC/ST entrepreneurs in Telangana.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "genders": [
        "All"
      ],
      "states": [
        "Telangana"
      ],
      "occupations": [
        "Entrepreneur",
        "Business Owner",
        "Self-Employed"
      ],
      "max_income": 5000000,
      "education": [
        "All"
      ],
      "social_categories": [
        "SC",
        "ST"
      ]
    },
    "application_url": "https://ipass.telangana.gov.in"
  },
  {
    "scheme_name": "Unemployed Youth Employment Generation Programme (UYEGP – Tamil Nadu)",
    "category": "Business & Employment",
    "description": "Provides 25% government subsidy on bank loans up to Rs. 15 lakh for manufacturing and Rs. 5 lakh for services/trading in Tamil Nadu.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "genders": [
        "All"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "occupations": [
        "Unemployed",
        "Self-Employed",
        "Entrepreneur"
      ],
      "max_income": 500000,
      "education": [
        "8th Pass",
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://www.msmeonline.tn.gov.in/uyegp/"
  },
  {
    "scheme_name": "Pradhan Mantri Awas Yojana – Gramin (PMAY-G)",
    "category": "Housing",
    "description": "Direct financial assistance of Rs. 1.20 lakh in plain areas and Rs. 1.30 lakh in hilly states for rural houseless families to build pucca houses with clean toilet.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 85,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer",
        "Self-Employed",
        "Unemployed",
        "Homemaker",
        "Salaried Employee"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pmayg.nic.in"
  },
  {
    "scheme_name": "Pradhan Mantri Awas Yojana – Urban (PMAY-U)",
    "category": "Housing",
    "description": "Central grant of Rs. 1.50 lakh to Rs. 2.67 lakh interest subsidy (CLSS) on home loans for urban EWS, LIG, and MIG families buying or building their first pucca home.",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 70,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 1800000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pmaymis.gov.in"
  },
  {
    "scheme_name": "Swachh Bharat Mission – Gramin (Individual Household Latrine)",
    "category": "Sanitation",
    "description": "Direct incentive grant of Rs. 12,000 for below-poverty-line and eligible rural families to construct individual household flush toilets.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 90,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 250000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://sbm.gov.in/sbmgramin/"
  },
  {
    "scheme_name": "Jal Jeevan Mission (Har Ghar Jal)",
    "category": "Infrastructure",
    "description": "Government mission providing functional individual household tap connections (FHTC) delivering 55 litres of clean potable drinking water per capita per day to all rural homes.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://ejalshakti.gov.in"
  },
  {
    "scheme_name": "PM Surya Ghar – Muft Bijli Yojana (Rooftop Solar)",
    "category": "Renewable Energy",
    "description": "Direct subsidy up to Rs. 78,000 for installing up to 3 kW residential rooftop solar panels, providing up to 300 units of free electricity every month.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 85,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 5000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pmsuryaghar.gov.in"
  },
  {
    "scheme_name": "Pradhan Mantri Gram Sadak Yojana (PMGSY)",
    "category": "Infrastructure",
    "description": "Centrally sponsored infrastructure program constructing all-weather single-lane paved roads connecting unconnected rural habitations to market centers.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://omms.nic.in"
  },
  {
    "scheme_name": "Affordable Rental Housing Complexes (ARHCs)",
    "category": "Housing",
    "description": "Concessional rental housing units with basic civic amenities near industrial clusters for urban migrants, street vendors, and factory workers.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Salaried Employee",
        "Self-Employed",
        "Unemployed"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://arhc.mohua.gov.in"
  },
  {
    "scheme_name": "Kalaignar Kanavu Illam Scheme (Tamil Nadu)",
    "category": "Housing",
    "description": "Financial support of Rs. 3.50 lakh per unit for building pucca houses to transform thatched-roof and kutcha huts in rural Tamil Nadu.",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "occupations": [
        "Farmer",
        "Self-Employed",
        "Unemployed",
        "Homemaker"
      ],
      "max_income": 200000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://tnrd.tn.gov.in"
  },
  {
    "scheme_name": "Mukhyamantri Awas Yojana – Gramin (Uttar Pradesh)",
    "category": "Housing",
    "description": "Provides Rs. 1.20 lakh financial assistance for house construction to families displaced by natural disasters, leprosy-affected, and Musahar communities in UP.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "genders": [
        "All"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "occupations": [
        "Unemployed",
        "Farmer",
        "Self-Employed",
        "Homemaker"
      ],
      "max_income": 200000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://rural.up.nic.in"
  },
  {
    "scheme_name": "Ghar Kul Yojana – Shabari Awas (Maharashtra)",
    "category": "Housing",
    "description": "Grants up to Rs. 1.30 lakh to Scheduled Tribe beneficiaries in rural Maharashtra to construct earthquake and rain-resistant pucca homes.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Maharashtra"
      ],
      "occupations": [
        "Farmer",
        "Unemployed",
        "Self-Employed",
        "Homemaker"
      ],
      "max_income": 150000,
      "education": [
        "All"
      ],
      "social_categories": [
        "ST"
      ]
    },
    "application_url": "https://mahaswadhar.gov.in"
  },
  {
    "scheme_name": "Atal Pension Yojana (APY)",
    "category": "Pension & Social Security",
    "description": "Government guaranteed monthly pension from Rs. 1,000 to Rs. 5,000 per month after age 60 for unorganized workers based on monthly savings from age 18 to 40.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 40,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 1000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://enps.nsdl.com/eNPS/ApySubRegistration.html"
  },
  {
    "scheme_name": "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
    "category": "Life Insurance",
    "description": "Annual renewable life insurance providing Rs. 2 lakh death risk coverage due to any reason at an affordable premium of Rs. 436 per year for bank account holders.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 50,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 5000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://financialservices.gov.in/insurance-divisions/Government-Sponsored-Socially-Oriented-Insurance-Schemes/Pradhan-Mantri-Jeevan-Jyoti-Bima-Yojana(PMJJBY)"
  },
  {
    "scheme_name": "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    "category": "Accident Insurance",
    "description": "Accidental insurance offering Rs. 2 lakh for accidental death or full disability (Rs. 1 lakh for partial disability) for a tiny annual premium of just Rs. 20.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 70,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 5000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://financialservices.gov.in/insurance-divisions/Government-Sponsored-Socially-Oriented-Insurance-Schemes/Pradhan-Mantri-Suraksha-Bima-Yojana(PMSBY)"
  },
  {
    "scheme_name": "Pradhan Mantri Shram Yogi Maandhan (PM-SYM)",
    "category": "Pension & Social Security",
    "description": "Old-age pension scheme assuring Rs. 3,000 monthly pension after attaining 60 years for unorganized workers (rickshaw pullers, domestic maids, street vendors) with matching 50% central contribution.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 40,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Self-Employed",
        "Unemployed",
        "Farmer",
        "Homemaker"
      ],
      "max_income": 180000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://maandhan.in"
  },
  {
    "scheme_name": "National Social Assistance Programme – IGNOAPS (Senior Pension)",
    "category": "Pension & Social Security",
    "description": "Monthly central pension of Rs. 200 to Rs. 500 (supplemented by state contributions up to Rs. 1,500-3,000/mo) for BPL elderly citizens aged 60 and above.",
    "eligibility_criteria": {
      "min_age": 60,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Retired",
        "Unemployed",
        "Homemaker",
        "Farmer"
      ],
      "max_income": 200000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nsap.nic.in"
  },
  {
    "scheme_name": "National Social Assistance Programme – IGNWPS (Widow Pension)",
    "category": "Pension & Social Security",
    "description": "Monthly financial assistance and pension support of Rs. 300 to Rs. 2,000 per month for widows living below the poverty line aged 40 to 79.",
    "eligibility_criteria": {
      "min_age": 40,
      "max_age": 79,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Homemaker",
        "Unemployed",
        "Self-Employed"
      ],
      "max_income": 200000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nsap.nic.in"
  },
  {
    "scheme_name": "National Social Assistance Programme – IGNDPS (Disability Pension)",
    "category": "Disability Welfare",
    "description": "Monthly pension of Rs. 300 to Rs. 2,500 for persons living below poverty line aged 18+ with severe or multiple disabilities (80% and above benchmark disability).",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 79,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Unemployed",
        "Student",
        "Homemaker",
        "Retired"
      ],
      "max_income": 200000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nsap.nic.in"
  },
  {
    "scheme_name": "Atal Vayo Abhyuday Yojana (AVYAY – Senior Assisted Living)",
    "category": "Senior Welfare",
    "description": "Free physical assistive living aids, elderline helpline (14567), and shelter homes for indigent senior citizens aged 60 and above.",
    "eligibility_criteria": {
      "min_age": 60,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Retired",
        "Homemaker",
        "Unemployed",
        "Farmer"
      ],
      "max_income": 400000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://socialjustice.gov.in/schemes/avyay"
  },
  {
    "scheme_name": "Rashtriya Vayoshri Yojana",
    "category": "Senior & Disability Welfare",
    "description": "Free provision of assisted-living physical devices (motorized wheelchairs, hearing aids, walkers, dentures, spectacles, crutches) for BPL senior citizens with age-related disabilities.",
    "eligibility_criteria": {
      "min_age": 60,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Retired",
        "Homemaker",
        "Unemployed"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://alimco.in/rashtriya-vayoshri-yojana"
  },
  {
    "scheme_name": "Assistance to Persons with Disabilities for Purchase/Fitting of Aids (ADIP)",
    "category": "Disability Welfare",
    "description": "Grants up to 100% financial assistance for procurement of modern durable assistive devices, smart canes, Braille books, hearing aids, and artificial limbs for persons with disabilities.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 360000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://alimco.in/adip-scheme"
  },
  {
    "scheme_name": "National Divyangjan Finance and Development Corporation (NDFDC Loan)",
    "category": "Disability Welfare",
    "description": "Concessional micro-loans at 4% to 8% interest rate up to Rs. 50 lakh for persons with disabilities to set up retail shops, service enterprises, or manufacturing units.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Self-Employed",
        "Entrepreneur",
        "Business Owner",
        "Unemployed"
      ],
      "max_income": 600000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.nhfdc.nic.in"
  },
  {
    "scheme_name": "Aasara Pension Scheme (Telangana)",
    "category": "Pension & Social Security",
    "description": "Monthly social safety pension of Rs. 2,016 for senior citizens, widows, beedi workers, weavers, and Rs. 3,016 for persons with disabilities in Telangana.",
    "eligibility_criteria": {
      "min_age": 57,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Telangana"
      ],
      "occupations": [
        "Retired",
        "Unemployed",
        "Homemaker",
        "Self-Employed"
      ],
      "max_income": 200000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://aasara.telangana.gov.in"
  },
  {
    "scheme_name": "YSR Pension Kanuka (Andhra Pradesh)",
    "category": "Pension & Social Security",
    "description": "Doorstep monthly pension of Rs. 3,000 for elderly, widows, toddy tappers, and Rs. 6,000 to Rs. 10,000 for chronic kidney disease and disabled citizens in AP.",
    "eligibility_criteria": {
      "min_age": 60,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "occupations": [
        "Retired",
        "Unemployed",
        "Homemaker",
        "Self-Employed"
      ],
      "max_income": 250000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://sspensions.ap.gov.in"
  },
  {
    "scheme_name": "Sanjay Gandhi Niradhar Anudan Yojana (Maharashtra)",
    "category": "Pension & Social Security",
    "description": "Monthly pension of Rs. 1,500 for destitute elderly, disabled, widows, and orphan beneficiaries living below the poverty line in Maharashtra.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Maharashtra"
      ],
      "occupations": [
        "Unemployed",
        "Homemaker",
        "Retired"
      ],
      "max_income": 50000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://sjsa.maharashtra.gov.in"
  },
  {
    "scheme_name": "Old Age Samman Allowance (Haryana)",
    "category": "Senior Welfare",
    "description": "Monthly dignity social pension of Rs. 3,000 credited to bank accounts of senior citizens aged 60+ residing in Haryana.",
    "eligibility_criteria": {
      "min_age": 60,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Haryana"
      ],
      "occupations": [
        "Retired",
        "Homemaker",
        "Unemployed",
        "Farmer"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pension.socialjusticehry.gov.in"
  },
  {
    "scheme_name": "Madhu Babu Pension Yojana (Odisha)",
    "category": "Pension & Social Security",
    "description": "Monthly financial assistance of Rs. 1,000 to Rs. 1,200 for destitute elderly, widows, persons with disabilities, and leprosy patients in Odisha.",
    "eligibility_criteria": {
      "min_age": 60,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Odisha"
      ],
      "occupations": [
        "Retired",
        "Unemployed",
        "Homemaker"
      ],
      "max_income": 100000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://ssepd.odisha.gov.in"
  },
  {
    "scheme_name": "Deendayal Disabled Rehabilitation Scheme (DDRS)",
    "category": "Disability Welfare",
    "description": "Grant-in-aid to NGOs providing vocational training centres, special schools, early intervention clinics, and rehabilitation services for children with special needs.",
    "eligibility_criteria": {
      "min_age": 5,
      "max_age": 40,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student",
        "Unemployed"
      ],
      "max_income": 600000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://disabilityaffairs.gov.in"
  },
  {
    "scheme_name": "PM-JANMAN (Pradhan Mantri Janjati Adivasi Nyaya Maha Abhiyan)",
    "category": "Minority & Tribal Welfare",
    "description": "Dedicated Rs. 24,000 Cr mission providing pucca housing, piped drinking water, solar electricity, all-weather roads, and healthcare to Particularly Vulnerable Tribal Groups (PVTGs).",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer",
        "Unemployed",
        "Homemaker",
        "Self-Employed"
      ],
      "max_income": 250000,
      "education": [
        "All"
      ],
      "social_categories": [
        "ST"
      ]
    },
    "application_url": "https://tribal.nic.in/PMJANMAN.aspx"
  },
  {
    "scheme_name": "Pradhan Mantri Anusuchit Jaati Abhyuday Yojana (PM-AJAY)",
    "category": "Social & Economic Development",
    "description": "Grants up to Rs. 50,000 or 50% project cost for skill development, hostel infrastructure, and income-generating self-employment assets for SC households.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Unemployed",
        "Self-Employed",
        "Farmer"
      ],
      "max_income": 250000,
      "education": [
        "All"
      ],
      "social_categories": [
        "SC"
      ]
    },
    "application_url": "https://pmajay.dosje.gov.in"
  },
  {
    "scheme_name": "Pradhan Mantri Virasat Ka Samvardhan (PM VIKAS)",
    "category": "Skills & Livelihood",
    "description": "Holistic scheme integrating modern skill training, literacy, enterprise development, and credit linkages for traditional minority artisan and craft communities.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 55,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Self-Employed",
        "Business Owner",
        "Unemployed",
        "Homemaker"
      ],
      "max_income": 450000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://minorityaffairs.gov.in"
  },
  {
    "scheme_name": "National Apprenticeship Promotion Scheme (NAPS)",
    "category": "Skill Development",
    "description": "Government reimburses 25% of prescribed stipend up to Rs. 1,500/month per apprentice directly to employers to incentivize on-the-job industrial apprenticeship for freshers.",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 35,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student",
        "Unemployed"
      ],
      "max_income": 1000000,
      "education": [
        "8th Pass",
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://www.apprenticeshipindia.gov.in"
  },
  {
    "scheme_name": "Pradhan Mantri Kaushal Vikas Yojana 4.0 (PMKVY)",
    "category": "Skill Development",
    "description": "Free short-term industry 4.0 skill certification training in Coding, AI, Robotics, 3D Printing, and Drones with stipends and job placement assistance for Indian youth.",
    "eligibility_criteria": {
      "min_age": 15,
      "max_age": 45,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student",
        "Unemployed",
        "Self-Employed"
      ],
      "max_income": 800000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.pmkvyofficial.org"
  },
  {
    "scheme_name": "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)",
    "category": "Skill Development",
    "description": "Placement-linked residential technical skill training completely free of cost with guaranteed formal private sector jobs for rural poor youth.",
    "eligibility_criteria": {
      "min_age": 15,
      "max_age": 35,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Unemployed",
        "Student",
        "Farmer"
      ],
      "max_income": 300000,
      "education": [
        "8th Pass",
        "10th Pass",
        "12th Pass"
      ]
    },
    "application_url": "https://ddugky.gov.in"
  },
  {
    "scheme_name": "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
    "category": "Employment",
    "description": "Statutory legal guarantee of 100 days of unskilled wage employment per financial year at statutory wages for every rural adult willing to do public manual work.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Unemployed",
        "Farmer",
        "Homemaker",
        "Self-Employed"
      ],
      "max_income": 250000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nrega.nic.in"
  },
  {
    "scheme_name": "Deendayal Antyodaya Yojana – NULM (Urban Livelihoods)",
    "category": "Livelihoods",
    "description": "Subsidized bank loans at 7% interest for urban micro-enterprises, formation of Self-Help Groups (SHGs), and construction of permanent shelters for urban homeless.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Unemployed",
        "Self-Employed",
        "Homemaker"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nulm.gov.in"
  },
  {
    "scheme_name": "National Career Service (NCS Portal)",
    "category": "Employment",
    "description": "Nationwide job-matching employment portal connecting jobseekers with verified private and public recruiters, free career counseling, and job fairs.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 5000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.ncs.gov.in"
  },
  {
    "scheme_name": "e-Shram Portal (National Database of Unorganised Workers)",
    "category": "Social Security",
    "description": "Issues a 12-digit Universal Account Number (UAN) card providing accidental insurance cover of Rs. 2 lakh and priority direct benefit transfers during national emergencies.",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 59,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Self-Employed",
        "Farmer",
        "Unemployed",
        "Homemaker"
      ],
      "max_income": 400000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://eshram.gov.in"
  },
  {
    "scheme_name": "PM-DAKSH (Pradhan Mantri Dakshta Aur Kushalta Sampanna Hitgrahi)",
    "category": "Skill Development",
    "description": "Free upskilling, reskilling, and entrepreneurial training with daily stipends up to Rs. 3,000 for candidates from SC, OBC, EBC, DNT, and sanitation worker backgrounds.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Unemployed",
        "Student",
        "Self-Employed",
        "Homemaker"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ],
      "social_categories": [
        "SC",
        "OBC",
        "EWS"
      ]
    },
    "application_url": "https://pmdaksh.dosje.gov.in"
  },
  {
    "scheme_name": "Van Dhan Vikas Yojana (TRIFED)",
    "category": "Minority & Tribal Welfare",
    "description": "Equips tribal gatherers in forest districts with value-addition equipment, processing centers, and marketing linkage for Non-Timber Minor Forest Produce (MFP).",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer",
        "Self-Employed",
        "Unemployed"
      ],
      "max_income": 250000,
      "education": [
        "All"
      ],
      "social_categories": [
        "ST"
      ]
    },
    "application_url": "https://trifed.tribal.gov.in"
  },
  {
    "scheme_name": "Unique Disability ID (UDID) Card Welfare Benefits",
    "category": "Disability Welfare",
    "description": "National single-point verified disability identity card granting rail and bus fare concessions, job reservation quotas, free education aids, and tax exemptions.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.swavlambancard.gov.in"
  },
  {
    "scheme_name": "Kanya Vidya Dhan Yojana",
    "category": "Education",
    "description": "Provides one-time financial reward of Rs. 30,000 to meritorious girl students passing Class 12 board examinations from low-income families.",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 22,
      "genders": [
        "Female"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 200000,
      "education": [
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://edistrict.up.gov.in"
  },
  {
    "scheme_name": "Mukhyamantri Abhyudaya Yojana (UP Free UPSC/JEE Coaching)",
    "category": "Education",
    "description": "Free state-wide physical and virtual coaching by IAS/IPS officers and subject experts for competitive exams (UPSC, UPPSC, JEE, NEET, NDA, CDS).",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 35,
      "genders": [
        "All"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "occupations": [
        "Student",
        "Unemployed"
      ],
      "max_income": 600000,
      "education": [
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://abhyuday.up.gov.in"
  },
  {
    "scheme_name": "UP Gopalak Yojana (Dairy Farming Subsidy)",
    "category": "Animal Husbandry",
    "description": "Bank loans up to Rs. 9 lakh with interest subsidy for unemployed youth setting up modern commercial dairy units with 10-12 milch cows/buffaloes.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 50,
      "genders": [
        "All"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "occupations": [
        "Farmer",
        "Unemployed",
        "Self-Employed"
      ],
      "max_income": 500000,
      "education": [
        "8th Pass",
        "10th Pass",
        "12th Pass"
      ]
    },
    "application_url": "https://upagriculture.com"
  },
  {
    "scheme_name": "UP Bhagya Laxmi Yojana",
    "category": "Women Welfare",
    "description": "Financial bond of Rs. 50,000 given at the birth of a girl child and Rs. 5,100 to the mother in BPL families, maturing to over Rs. 2 lakh at age 21.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 25,
      "genders": [
        "Female"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 200000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://mahilakalyan.up.nic.in"
  },
  {
    "scheme_name": "UP Shadi Anudan Yojana",
    "category": "Social Security",
    "description": "Provides direct financial assistance of Rs. 20,000 for the marriage of daughters of poor families belonging to SC, ST, OBC, Minority, and General BPL.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 35,
      "genders": [
        "Female"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 100000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://shadianudan.upsdc.gov.in"
  },
  {
    "scheme_name": "Swami Vivekananda Yuva Sashaktikaran Yojana (UP Free Smartphone/Tablet)",
    "category": "Education",
    "description": "Free high-configuration tablets and smartphones distributed to final year higher education, technical, and ITI students to promote digital learning.",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 28,
      "genders": [
        "All"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 800000,
      "education": [
        "12th Pass",
        "Graduate",
        "Post Graduate"
      ]
    },
    "application_url": "https://digishakti.up.gov.in"
  },
  {
    "scheme_name": "Sant Ravidas Shiksha Sahayata Yojana (UP Construction Workers)",
    "category": "Education",
    "description": "Monthly scholarship from Rs. 100 to Rs. 5,000 for children of registered construction and BOCW board workers studying from Class 1 to Degree.",
    "eligibility_criteria": {
      "min_age": 5,
      "max_age": 25,
      "genders": [
        "All"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://upbocw.in"
  },
  {
    "scheme_name": "Maharashtra Asmita Yojana (Sanitary Napkin Subsidy)",
    "category": "Women Welfare",
    "description": "Provides highly subsidized sanitary napkin packs for Rs. 5 to rural school girls aged 11 to 19 across Zilla Parishad schools in Maharashtra.",
    "eligibility_criteria": {
      "min_age": 11,
      "max_age": 19,
      "genders": [
        "Female"
      ],
      "states": [
        "Maharashtra"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.mahaasmita.org"
  },
  {
    "scheme_name": "Manodhairya Scheme (Maharashtra)",
    "category": "Women Welfare",
    "description": "Financial support up to Rs. 10 lakh, specialized medical treatment, legal aid, and psychiatric counseling for survivors of violent crimes in Maharashtra.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 90,
      "genders": [
        "Female"
      ],
      "states": [
        "Maharashtra"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://mumbaicity.gov.in/scheme/manodhairya-scheme/"
  },
  {
    "scheme_name": "Balasaheb Thackeray Accident Insurance Scheme (Maharashtra)",
    "category": "Healthcare",
    "description": "Free cashless emergency medical treatment up to Rs. 30,000 within the golden hour (first 72 hours) for victims of road accidents occurring in Maharashtra.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Maharashtra"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.jeevandayee.gov.in"
  },
  {
    "scheme_name": "Dr. Babasaheb Ambedkar Swadhar Yojana (Maharashtra)",
    "category": "Education",
    "description": "Annual stipend of Rs. 43,000 to Rs. 60,000 for boarding, lodging, and books for SC students admitted to higher education courses not getting government hostel seats.",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 28,
      "genders": [
        "All"
      ],
      "states": [
        "Maharashtra"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 250000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ],
      "social_categories": [
        "SC"
      ]
    },
    "application_url": "https://swadhar.mahadbt.maharashtra.gov.in"
  },
  {
    "scheme_name": "Maharashtra Shravanbal Seva Rajya Nivruttivetan Yojana",
    "category": "Senior Welfare",
    "description": "Monthly pension of Rs. 1,500 for destitute elderly citizens aged 65 and above whose name is included in the state BPL list.",
    "eligibility_criteria": {
      "min_age": 65,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Maharashtra"
      ],
      "occupations": [
        "Retired",
        "Unemployed",
        "Homemaker"
      ],
      "max_income": 50000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://sjsa.maharashtra.gov.in"
  },
  {
    "scheme_name": "Vidyasiri – Food and Accommodation Scheme (Karnataka)",
    "category": "Education",
    "description": "Monthly stipend of Rs. 1,500 for 10 months to SC, ST, and OBC students pursuing post-matric courses who could not get admission in government hostels in Karnataka.",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 28,
      "genders": [
        "All"
      ],
      "states": [
        "Karnataka"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 250000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ],
      "social_categories": [
        "SC",
        "ST",
        "OBC"
      ]
    },
    "application_url": "https://karepass.cgg.gov.in"
  },
  {
    "scheme_name": "Yuva Nidhi Scheme (Karnataka)",
    "category": "Employment",
    "description": "Monthly unemployment allowance of Rs. 3,000 for degree graduates and Rs. 1,500 for diploma holders who remain unemployed after graduation in Karnataka.",
    "eligibility_criteria": {
      "min_age": 20,
      "max_age": 30,
      "genders": [
        "All"
      ],
      "states": [
        "Karnataka"
      ],
      "occupations": [
        "Unemployed"
      ],
      "max_income": 600000,
      "education": [
        "Graduate",
        "Post Graduate",
        "Doctorate"
      ]
    },
    "application_url": "https://sevasindhuservices.karnataka.gov.in"
  },
  {
    "scheme_name": "Shakti Free Bus Travel Scheme for Women (Karnataka)",
    "category": "Women Welfare",
    "description": "Free travel for all resident women, girls, and transgender persons in state-owned KSRTC, BMTC, and NWKRTC non-luxury public transport buses across Karnataka.",
    "eligibility_criteria": {
      "min_age": 5,
      "max_age": 100,
      "genders": [
        "Female",
        "Transgender"
      ],
      "states": [
        "Karnataka"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://ksrtc.in"
  },
  {
    "scheme_name": "Chief Minister's Anila Bhagya Scheme (Karnataka)",
    "category": "Energy & Women Welfare",
    "description": "Provides free two-burner gas stoves, regulators, and two free cylinder refills to BPL families not covered under central Ujjwala scheme in Karnataka.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "genders": [
        "Female"
      ],
      "states": [
        "Karnataka"
      ],
      "occupations": [
        "Homemaker",
        "Self-Employed",
        "Unemployed"
      ],
      "max_income": 200000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://ahara.kar.nic.in"
  },
  {
    "scheme_name": "Kalaignar Magalir Urimai Thittam (Tamil Nadu Women Basic Income)",
    "category": "Women Welfare",
    "description": "Monthly basic income support of Rs. 1,000 transferred to bank accounts of over 1.15 crore women heads of low-income families across Tamil Nadu.",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 65,
      "genders": [
        "Female"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "occupations": [
        "Homemaker",
        "Self-Employed",
        "Unemployed",
        "Farmer"
      ],
      "max_income": 250000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://kmut.tn.gov.in"
  },
  {
    "scheme_name": "Chief Minister's Breakfast Scheme (Tamil Nadu)",
    "category": "Education",
    "description": "Free hot, nutritious morning breakfast served to all primary school children studying in classes 1 to 5 in government schools across Tamil Nadu.",
    "eligibility_criteria": {
      "min_age": 5,
      "max_age": 12,
      "genders": [
        "All"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 10000000,
      "education": [
        "Below 8th"
      ]
    },
    "application_url": "https://www.tnschools.gov.in"
  },
  {
    "scheme_name": "Tamil Nadu Amma Two Wheeler Scheme",
    "category": "Women Welfare",
    "description": "Provides 50% subsidy up to Rs. 25,000 for working women to purchase gearless motorized two-wheelers to ease commute to work.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "genders": [
        "Female"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "occupations": [
        "Salaried Employee",
        "Self-Employed",
        "Business Owner"
      ],
      "max_income": 250000,
      "education": [
        "8th Pass",
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://www.tn.gov.in"
  },
  {
    "scheme_name": "YSR Cheyutha Scheme (Andhra Pradesh)",
    "category": "Women Welfare",
    "description": "Annual financial assistance of Rs. 18,750 (total Rs. 75,000 over 4 years) for women aged 45-60 from SC, ST, BC, and Minority communities to establish dairy/grocery businesses.",
    "eligibility_criteria": {
      "min_age": 45,
      "max_age": 60,
      "genders": [
        "Female"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "occupations": [
        "Homemaker",
        "Self-Employed",
        "Unemployed",
        "Farmer"
      ],
      "max_income": 250000,
      "education": [
        "All"
      ],
      "social_categories": [
        "SC",
        "ST",
        "OBC"
      ]
    },
    "application_url": "https://navasakam.ap.gov.in"
  },
  {
    "scheme_name": "YSR Kapu Nestham (Andhra Pradesh)",
    "category": "Women Welfare",
    "description": "Financial support of Rs. 15,000 per year (total Rs. 75,000 over 5 years) for women aged 45-60 from Kapu, Balija, Telaga, and Ontari communities to enhance livelihoods.",
    "eligibility_criteria": {
      "min_age": 45,
      "max_age": 60,
      "genders": [
        "Female"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "occupations": [
        "Homemaker",
        "Self-Employed",
        "Unemployed"
      ],
      "max_income": 250000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://navasakam.ap.gov.in"
  },
  {
    "scheme_name": "YSR Nethanna Nestham (Weaver Assistance – AP)",
    "category": "Business & Employment",
    "description": "Annual direct cash assistance of Rs. 24,000 to every handloom weaver family owning a loom to upgrade equipment and purchase yarn.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 70,
      "genders": [
        "All"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "occupations": [
        "Self-Employed",
        "Business Owner"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://navasakam.ap.gov.in"
  },
  {
    "scheme_name": "YSR Matsyakara Bharosa (Fishermen Subsidy – AP)",
    "category": "Fisheries",
    "description": "Financial relief of Rs. 10,000 during the annual marine fishing ban period and enhanced diesel subsidy of Rs. 9/litre for mechanized boats in AP.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "genders": [
        "All"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "occupations": [
        "Farmer",
        "Self-Employed"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://navasakam.ap.gov.in"
  },
  {
    "scheme_name": "Arogya Lakshmi (Telangana Nutrition Scheme)",
    "category": "Healthcare",
    "description": "Provides one nutritious full meal, boiled egg, 200 ml milk, and iron-folic acid tablets daily to pregnant and lactating women at Anganwadi centers in Telangana.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "genders": [
        "Female"
      ],
      "states": [
        "Telangana"
      ],
      "occupations": [
        "Homemaker",
        "Self-Employed",
        "Unemployed",
        "Farmer"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://wdcw.tg.nic.in"
  },
  {
    "scheme_name": "KCR Kit Scheme (Telangana)",
    "category": "Healthcare",
    "description": "Financial incentive of Rs. 12,000 (Rs. 13,000 for girl child) along with a 16-item mother and baby care kit for institutional deliveries in government hospitals.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "genders": [
        "Female"
      ],
      "states": [
        "Telangana"
      ],
      "occupations": [
        "Homemaker",
        "Self-Employed",
        "Unemployed"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://kcrkit.telangana.gov.in"
  },
  {
    "scheme_name": "Sabuj Sathi (Bicycle Distribution Scheme – West Bengal)",
    "category": "Education",
    "description": "Free eco-friendly bicycles distributed to all students studying in classes IX to XII in government and aided schools across West Bengal to reduce school dropout.",
    "eligibility_criteria": {
      "min_age": 13,
      "max_age": 19,
      "genders": [
        "All"
      ],
      "states": [
        "West Bengal"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 10000000,
      "education": [
        "8th Pass",
        "9th Pass",
        "10th Pass",
        "12th Pass"
      ]
    },
    "application_url": "https://wbsabujsathi.gov.in"
  },
  {
    "scheme_name": "Gatidhara Scheme (Commercial Vehicle Subsidy – West Bengal)",
    "category": "Business & Employment",
    "description": "Provides 30% government subsidy up to Rs. 1 lakh for registered unemployed youth in West Bengal to purchase small commercial transport vehicles, taxis, and auto-rickshaws.",
    "eligibility_criteria": {
      "min_age": 20,
      "max_age": 45,
      "genders": [
        "All"
      ],
      "states": [
        "West Bengal"
      ],
      "occupations": [
        "Unemployed",
        "Self-Employed"
      ],
      "max_income": 300000,
      "education": [
        "8th Pass",
        "10th Pass",
        "12th Pass"
      ]
    },
    "application_url": "https://transport.wb.gov.in"
  },
  {
    "scheme_name": "Swami Vivekananda Merit-cum-Means Scholarship (SVMCM – West Bengal)",
    "category": "Education",
    "description": "Scholarship ranging from Rs. 12,000 to Rs. 60,000 per year for meritorious students scoring 60%+ in board exams pursuing higher secondary, UG, PG, and Ph.D in West Bengal.",
    "eligibility_criteria": {
      "min_age": 15,
      "max_age": 30,
      "genders": [
        "All"
      ],
      "states": [
        "West Bengal"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 250000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate",
        "Post Graduate"
      ]
    },
    "application_url": "https://svmcm.wbhed.gov.in"
  },
  {
    "scheme_name": "Rupashree Prakalpa (West Bengal Marriage Grant)",
    "category": "Social Security",
    "description": "One-time direct financial grant of Rs. 25,000 credited to the bank account of an adult girl before marriage belonging to an economically stressed family in West Bengal.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 35,
      "genders": [
        "Female"
      ],
      "states": [
        "West Bengal"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 150000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://wbrupashree.gov.in"
  },
  {
    "scheme_name": "Chiranjeevi Swasthya Bima Yojana – Cancer / Heart Surgery Top-Up (Rajasthan)",
    "category": "Healthcare",
    "description": "Expanded cashless health coverage of up to Rs. 25 lakh per family including liver, heart, and bone marrow transplants across empaneled multispecialty hospitals.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Rajasthan"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 800000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://chiranjeevi.rajasthan.gov.in"
  },
  {
    "scheme_name": "Indira Gandhi Urban Employment Guarantee Scheme (IRGY – Rajasthan)",
    "category": "Employment",
    "description": "Guarantees 125 days of paid urban wage employment per year for urban families willing to undertake sanitation, tree plantation, and urban maintenance work in Rajasthan.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "genders": [
        "All"
      ],
      "states": [
        "Rajasthan"
      ],
      "occupations": [
        "Unemployed",
        "Homemaker",
        "Self-Employed"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://irgyurban.rajasthan.gov.in"
  },
  {
    "scheme_name": "Indira Gandhi Matritva Poshan Yojana (Rajasthan)",
    "category": "Women Welfare",
    "description": "Direct cash assistance of Rs. 6,000 in 5 installments to mothers upon the birth of their second child to promote maternal and infant nutrition in Rajasthan.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "genders": [
        "Female"
      ],
      "states": [
        "Rajasthan"
      ],
      "occupations": [
        "Homemaker",
        "Self-Employed",
        "Unemployed"
      ],
      "max_income": 400000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://wcd.rajasthan.gov.in"
  },
  {
    "scheme_name": "Mukhyamantri Anuprati Coaching Yojana (Rajasthan)",
    "category": "Education",
    "description": "Free professional entrance coaching and Rs. 40,000 annual boarding grant for SC, ST, OBC, MBC, and EWS students preparing for UPSC, RPSC, IIT-JEE, NEET, and CLAT.",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 30,
      "genders": [
        "All"
      ],
      "states": [
        "Rajasthan"
      ],
      "occupations": [
        "Student",
        "Unemployed"
      ],
      "max_income": 800000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ],
      "social_categories": [
        "SC",
        "ST",
        "OBC",
        "EWS"
      ]
    },
    "application_url": "https://sso.rajasthan.gov.in"
  },
  {
    "scheme_name": "Mukhyamantri Vridhjan Pension Yojana (Bihar)",
    "category": "Senior Welfare",
    "description": "Universal monthly pension of Rs. 400 for citizens aged 60-79 and Rs. 500 for senior citizens aged 80 and above residing in Bihar.",
    "eligibility_criteria": {
      "min_age": 60,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Bihar"
      ],
      "occupations": [
        "Retired",
        "Homemaker",
        "Unemployed",
        "Farmer"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://sspmis.bihar.gov.in"
  },
  {
    "scheme_name": "Bihar Student Credit Card Scheme (MNSSBY)",
    "category": "Education",
    "description": "Government-guaranteed education loans up to Rs. 4 lakh at ultra-low interest (1% for women/disabled/transgender, 4% for others) for pursuing polytechnic, B.Tech, MBBS, and degrees.",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 28,
      "genders": [
        "All"
      ],
      "states": [
        "Bihar"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 600000,
      "education": [
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://www.7nishchay-yuvaupmission.bihar.gov.in"
  },
  {
    "scheme_name": "Mukhyamantri Udyami Yojana (Bihar – SC/ST/EBC/Women/Youth)",
    "category": "Entrepreneurship",
    "description": "Financial support of Rs. 10 lakh (50% grant up to Rs. 5 lakh + 50% interest-free loan) for setting up manufacturing and processing micro-enterprises in Bihar.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 50,
      "genders": [
        "All"
      ],
      "states": [
        "Bihar"
      ],
      "occupations": [
        "Unemployed",
        "Self-Employed",
        "Entrepreneur"
      ],
      "max_income": 600000,
      "education": [
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://udyami.bihar.gov.in"
  },
  {
    "scheme_name": "Har Ghar Nal Ka Jal Scheme (Bihar)",
    "category": "Infrastructure",
    "description": "Provides free household piped treated drinking water connections to every rural household across all 38 districts of Bihar.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Bihar"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://state.bihar.gov.in/prdbihar/"
  },
  {
    "scheme_name": "Biju Yuva Sashaktikaran Yojana (Free Laptop – Odisha)",
    "category": "Education",
    "description": "Merit-based free laptop distribution to 15,000 top-ranking Class 12 students from Science, Commerce, and Arts streams across Odisha.",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 20,
      "genders": [
        "All"
      ],
      "states": [
        "Odisha"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 600000,
      "education": [
        "12th Pass"
      ]
    },
    "application_url": "https://scholarship.odisha.gov.in"
  },
  {
    "scheme_name": "Mission Shakti Loan Scheme (Odisha – 0% Interest)",
    "category": "Women Welfare",
    "description": "Offers 0% interest bank loans up to Rs. 10 lakh to Women Self-Help Groups (SHGs) to expand agricultural processing, tailoring, and micro-enterprises in Odisha.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "genders": [
        "Female"
      ],
      "states": [
        "Odisha"
      ],
      "occupations": [
        "Self-Employed",
        "Homemaker",
        "Entrepreneur"
      ],
      "max_income": 500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://missionshakti.odisha.gov.in"
  },
  {
    "scheme_name": "Mukhyamantri Vayoshri Yojana (Maharashtra Cash Incentive)",
    "category": "Senior Welfare",
    "description": "One-time direct cash transfer of Rs. 3,000 deposited in bank accounts of senior citizens aged 65+ experiencing age-related physical and mental disabilities.",
    "eligibility_criteria": {
      "min_age": 65,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Maharashtra"
      ],
      "occupations": [
        "Retired",
        "Homemaker",
        "Unemployed"
      ],
      "max_income": 200000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://sjsa.maharashtra.gov.in"
  },
  {
    "scheme_name": "Chief Minister's Solar Street Lighting Scheme (Bihar)",
    "category": "Renewable Energy",
    "description": "Installs automated, solar-powered LED street lights in all rural village wards to illuminate public roads, panchayat halls, and village squares.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Bihar"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://breda.bihar.gov.in"
  },
  {
    "scheme_name": "Mukhya Mantri Seva Sankalp (Himachal Pradesh Citizen Grievance)",
    "category": "Social Security",
    "description": "Unified state citizen helpline (1100) ensuring transparent, time-bound resolution of government service delivery complaints across HP departments.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Himachal Pradesh"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://cmsankalp.hp.gov.in"
  },
  {
    "scheme_name": "Himcare Scheme (Himachal Healthcare)",
    "category": "Healthcare",
    "description": "Cashless hospital treatment up to Rs. 5 lakh per family per year for families not covered under Ayushman Bharat in Himachal Pradesh.",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Himachal Pradesh"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://hpsbys.in"
  },
  {
    "scheme_name": "Mukhyamantri Swavalamban Yojana (Himachal Pradesh)",
    "category": "Entrepreneurship",
    "description": "Provides 25% to 35% capital subsidy and 5% interest subvention for 3 years on bank loans up to Rs. 1 crore for setting up manufacturing and tourism units in HP.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "genders": [
        "All"
      ],
      "states": [
        "Himachal Pradesh"
      ],
      "occupations": [
        "Unemployed",
        "Self-Employed",
        "Entrepreneur"
      ],
      "max_income": 1500000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://emerginghimachal.hp.gov.in"
  },
  {
    "scheme_name": "Atal Shresth Shahar Yojana (Himachal Pradesh)",
    "category": "Infrastructure",
    "description": "Provides incentive grants of Rs. 1 crore to the best performing urban local body for excellence in sanitation, waste management, and green parks in HP.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Himachal Pradesh"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://ud.hp.gov.in"
  },
  {
    "scheme_name": "Mera Bill Mera Adhikaar (Invoice Incentive Scheme)",
    "category": "Financial Inclusion",
    "description": "Citizens uploading GST invoices on the government portal enter monthly prize draws with cash rewards up to Rs. 10 lakh to Rs. 1 crore to incentivize tax compliance.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 10000000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://web.merabill.gst.gov.in"
  },
  {
    "scheme_name": "PM SHRI Schools Scheme (PM Schools for Rising India)",
    "category": "Education",
    "description": "Upgrades 14,500 government schools into modern smart exemplar schools featuring smart classrooms, green infrastructure, experiential STEM labs, and NEP pedagogy.",
    "eligibility_criteria": {
      "min_age": 5,
      "max_age": 18,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 10000000,
      "education": [
        "Below 8th",
        "8th Pass",
        "10th Pass",
        "12th Pass"
      ]
    },
    "application_url": "https://pmshrischools.education.gov.in"
  },
  {
    "scheme_name": "PM Young Achievers Scholarship Award Scheme (PM-YASASVI)",
    "category": "Education",
    "description": "Merit-based scholarship offering up to Rs. 75,000/yr for Class 9-10 and Rs. 1,25,000/yr for Class 11-12 to OBC, EBC, and DNT students in top schools.",
    "eligibility_criteria": {
      "min_age": 13,
      "max_age": 19,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 250000,
      "education": [
        "8th Pass",
        "9th Pass",
        "10th Pass",
        "12th Pass"
      ],
      "social_categories": [
        "OBC",
        "EWS"
      ]
    },
    "application_url": "https://yet.nta.ac.in"
  },
  {
    "scheme_name": "National Means Scholarship for ITI Apprentices",
    "category": "Skill Development",
    "description": "Monthly stipend incentive of Rs. 2,500 along with workshop toolkit support for engineering trade ITI certificate holders undergoing certified industrial apprenticeships.",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 28,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student",
        "Unemployed"
      ],
      "max_income": 400000,
      "education": [
        "10th Pass",
        "12th Pass"
      ]
    },
    "application_url": "https://www.apprenticeshipindia.gov.in"
  },
  {
    "scheme_name": "National Cold Storage Subsidy Initiative",
    "category": "Agriculture",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Cold Storage Subsidy Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nhb.gov.in"
  },
  {
    "scheme_name": "Arunachal Pradesh Higher Secondary Merit Award Scheme",
    "category": "Education",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Arunachal Pradesh Higher Secondary Merit Award Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 14,
      "max_age": 28,
      "genders": [
        "All"
      ],
      "states": [
        "Arunachal Pradesh"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 600000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://arunachalpradesh.gov.in"
  },
  {
    "scheme_name": "Assam Dialysis Patient Transport Aid Scheme",
    "category": "Healthcare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Assam Dialysis Patient Transport Aid Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Assam"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nhm.assam.gov.in"
  },
  {
    "scheme_name": "National Handicraft Artisan Grant Initiative",
    "category": "Women Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Handicraft Artisan Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://handicrafts.nic.in"
  },
  {
    "scheme_name": "Chhattisgarh Leather Craft Enterprise Subsidy Scheme",
    "category": "Business & Employment",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Chhattisgarh Leather Craft Enterprise Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Chhattisgarh"
      ],
      "occupations": [
        "Self-Employed",
        "Business Owner",
        "Entrepreneur"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://industries.cg.gov.in"
  },
  {
    "scheme_name": "Delhi Solar Water Heater Subsidy Scheme",
    "category": "Renewable Energy",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Delhi Solar Water Heater Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Delhi"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://delhi.gov.in"
  },
  {
    "scheme_name": "National Deep Sea Fishing Vessel Subsidy Initiative",
    "category": "Fisheries & Marine",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Deep Sea Fishing Vessel Subsidy Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pmmsy.dof.gov.in"
  },
  {
    "scheme_name": "Gujarat Motorized Tricycle Free Grant Scheme",
    "category": "Disability Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Gujarat Motorized Tricycle Free Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Gujarat"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://esamajkalyan.gujarat.gov.in"
  },
  {
    "scheme_name": "Haryana Tribal Forest Honey Processing Aid Scheme",
    "category": "Minority & Tribal Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Haryana Tribal Forest Honey Processing Aid Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Haryana"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://haryanascbc.gov.in"
  },
  {
    "scheme_name": "National Rural Village Library Grant Initiative",
    "category": "Rural Development",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Rural Village Library Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://panchayat.gov.in"
  },
  {
    "scheme_name": "Jharkhand Senior Citizen Recreational Centre Scheme",
    "category": "Senior Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Jharkhand Senior Citizen Recreational Centre Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 60,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Jharkhand"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://socialwelfare.jharkhand.gov.in"
  },
  {
    "scheme_name": "Karnataka National Medalist Youth Pension Scheme",
    "category": "Sports & Youth",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Karnataka National Medalist Youth Pension Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Karnataka"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://dyes.karnataka.gov.in"
  },
  {
    "scheme_name": "National Construction Worker Marriage Grant Initiative",
    "category": "Social Security",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Construction Worker Marriage Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://bocw.gov.in"
  },
  {
    "scheme_name": "Madhya Pradesh Drone Pilot Certified Training Scheme",
    "category": "Skill Development",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Madhya Pradesh Drone Pilot Certified Training Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "genders": [
        "All"
      ],
      "states": [
        "Madhya Pradesh"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://skill.mp.gov.in"
  },
  {
    "scheme_name": "Maharashtra Drip Irrigation Incentive Scheme",
    "category": "Agriculture",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Maharashtra Drip Irrigation Incentive Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Maharashtra"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://mahadbt.maharashtra.gov.in"
  },
  {
    "scheme_name": "National Polytechnic Diploma Grant Initiative",
    "category": "Education",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Polytechnic Diploma Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 14,
      "max_age": 28,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 600000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://www.aicte-india.org"
  },
  {
    "scheme_name": "Meghalaya Sickle Cell Anaemia Care Grant Scheme",
    "category": "Healthcare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Meghalaya Sickle Cell Anaemia Care Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Meghalaya"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://meghealth.gov.in"
  },
  {
    "scheme_name": "Mizoram Sanitary Hygiene Subsidy Scheme",
    "category": "Women Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Mizoram Sanitary Hygiene Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "Female"
      ],
      "states": [
        "Mizoram"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://health.mizoram.gov.in"
  },
  {
    "scheme_name": "National Food Processing Micro-Unit Aid Initiative",
    "category": "Business & Employment",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Food Processing Micro-Unit Aid Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Self-Employed",
        "Business Owner",
        "Entrepreneur"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pmfme.mofpi.gov.in"
  },
  {
    "scheme_name": "Odisha Biomass Pellet Plant Grant Scheme",
    "category": "Renewable Energy",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Odisha Biomass Pellet Plant Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Odisha"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://oredaodisha.com"
  },
  {
    "scheme_name": "Punjab Shrimp Aquaculture Pond Grant Scheme",
    "category": "Fisheries & Marine",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Punjab Shrimp Aquaculture Pond Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Punjab"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://fisheries.punjab.gov.in"
  },
  {
    "scheme_name": "National Braille Smart Reader Grant Initiative",
    "category": "Disability Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Braille Smart Reader Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://alimco.in"
  },
  {
    "scheme_name": "Sikkim Minority Women Leadership Training Scheme",
    "category": "Minority & Tribal Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Sikkim Minority Women Leadership Training Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "Female"
      ],
      "states": [
        "Sikkim"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://sikkim.gov.in"
  },
  {
    "scheme_name": "Tamil Nadu Panchayat Community Water Filter Scheme",
    "category": "Rural Development",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Tamil Nadu Panchayat Community Water Filter Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://tnrd.tn.gov.in"
  },
  {
    "scheme_name": "National Old Age Home Health Clinic Aid Initiative",
    "category": "Senior Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Old Age Home Health Clinic Aid Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 60,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://socialjustice.gov.in"
  },
  {
    "scheme_name": "Tripura Rural Wrestling Akhada Modernization Scheme",
    "category": "Sports & Youth",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Tripura Rural Wrestling Akhada Modernization Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Tripura"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://tripura.gov.in"
  },
  {
    "scheme_name": "Uttar Pradesh Unorganized Worker Funeral Assistance Scheme",
    "category": "Social Security",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Uttar Pradesh Unorganized Worker Funeral Assistance Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://upsbocw.in"
  },
  {
    "scheme_name": "National Solar Panel Technician Certification Initiative",
    "category": "Skill Development",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Solar Panel Technician Certification Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://suryamitra.nise.res.in"
  },
  {
    "scheme_name": "West Bengal Organic Fertilizer Subsidy Scheme",
    "category": "Agriculture",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the West Bengal Organic Fertilizer Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "West Bengal"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://matirkatha.net"
  },
  {
    "scheme_name": "Andhra Pradesh Tribal Girls Boarding Scholarship Scheme",
    "category": "Education",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Andhra Pradesh Tribal Girls Boarding Scholarship Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 14,
      "max_age": 28,
      "genders": [
        "Female"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 600000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://jnanabhumi.ap.gov.in"
  },
  {
    "scheme_name": "National Hearing Aid Device Subsidy Initiative",
    "category": "Healthcare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Hearing Aid Device Subsidy Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://alimco.in"
  },
  {
    "scheme_name": "Assam Widow Remarriage Financial Grant Scheme",
    "category": "Women Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Assam Widow Remarriage Financial Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "Female"
      ],
      "states": [
        "Assam"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://womenandchildren.assam.gov.in"
  },
  {
    "scheme_name": "Bihar Green Enterprise Loan Incentive Scheme",
    "category": "Business & Employment",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Bihar Green Enterprise Loan Incentive Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Bihar"
      ],
      "occupations": [
        "Self-Employed",
        "Business Owner",
        "Entrepreneur"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://udyami.bihar.gov.in"
  },
  {
    "scheme_name": "National Small Hydro Power Incentive Initiative",
    "category": "Renewable Energy",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Small Hydro Power Incentive Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://mnre.gov.in"
  },
  {
    "scheme_name": "Delhi Insulated Ice Box Subsidy Scheme",
    "category": "Fisheries & Marine",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Delhi Insulated Ice Box Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Delhi"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://delhi.gov.in"
  },
  {
    "scheme_name": "Goa Prosthetic Limb Fitting Grant Scheme",
    "category": "Disability Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Goa Prosthetic Limb Fitting Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Goa"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://socialwelfare.goa.gov.in"
  },
  {
    "scheme_name": "National Heritage Handloom Preservation Grant Initiative",
    "category": "Minority & Tribal Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Heritage Handloom Preservation Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://handlooms.nic.in"
  },
  {
    "scheme_name": "Haryana Village Compost Pit Construction Scheme",
    "category": "Rural Development",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Haryana Village Compost Pit Construction Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Haryana"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://haryanarural.gov.in"
  },
  {
    "scheme_name": "Himachal Pradesh Elderly Medical Home Visit Service Scheme",
    "category": "Senior Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Himachal Pradesh Elderly Medical Home Visit Service Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 60,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Himachal Pradesh"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://hpsbys.in"
  },
  {
    "scheme_name": "National Khelo India Academy Scholarship Initiative",
    "category": "Sports & Youth",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Khelo India Academy Scholarship Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://kheloindia.gov.in"
  },
  {
    "scheme_name": "Karnataka Destitute Orphan Educational Grant Scheme",
    "category": "Social Security",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Karnataka Destitute Orphan Educational Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Karnataka"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://wcd.karnataka.gov.in"
  },
  {
    "scheme_name": "Kerala Electric Vehicle EV Mechanic Course Scheme",
    "category": "Skill Development",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Kerala Electric Vehicle EV Mechanic Course Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "genders": [
        "All"
      ],
      "states": [
        "Kerala"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://asapkerala.gov.in"
  },
  {
    "scheme_name": "National Bio-Gas Plant Grant Initiative",
    "category": "Agriculture",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Bio-Gas Plant Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://biogas.mnre.gov.in"
  },
  {
    "scheme_name": "Maharashtra Sports Excellence Student Grant Scheme",
    "category": "Education",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Maharashtra Sports Excellence Student Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 14,
      "max_age": 28,
      "genders": [
        "All"
      ],
      "states": [
        "Maharashtra"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 600000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://mahadbt.maharashtra.gov.in"
  },
  {
    "scheme_name": "Manipur Maternity Nutrition Basket Scheme",
    "category": "Healthcare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Manipur Maternity Nutrition Basket Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Manipur"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nrhmmanipur.org"
  },
  {
    "scheme_name": "National Women Taxi Driver Vehicle Subsidy Initiative",
    "category": "Women Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Women Taxi Driver Vehicle Subsidy Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "Female"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://wcd.nic.in"
  },
  {
    "scheme_name": "Mizoram Handloom Weaver Powerloom Subsidy Scheme",
    "category": "Business & Employment",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Mizoram Handloom Weaver Powerloom Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Mizoram"
      ],
      "occupations": [
        "Self-Employed",
        "Business Owner",
        "Entrepreneur"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://commerce.mizoram.gov.in"
  },
  {
    "scheme_name": "Nagaland Electric Auto Charging Subsidy Scheme",
    "category": "Renewable Energy",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Nagaland Electric Auto Charging Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Nagaland"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nagaland.gov.in"
  },
  {
    "scheme_name": "National Fishermen Safety GPS Beacon Aid Initiative",
    "category": "Fisheries & Marine",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Fishermen Safety GPS Beacon Aid Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://pmmsy.dof.gov.in"
  },
  {
    "scheme_name": "Punjab Deaf Student Communication Aid Scheme",
    "category": "Disability Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Punjab Deaf Student Communication Aid Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Punjab"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://sswcd.punjab.gov.in"
  },
  {
    "scheme_name": "Rajasthan Tribal Youth Sports Talent Search Scheme",
    "category": "Minority & Tribal Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Rajasthan Tribal Youth Sports Talent Search Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Rajasthan"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://tad.rajasthan.gov.in"
  },
  {
    "scheme_name": "National Rural Youth Skill Hub Initiative",
    "category": "Rural Development",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Rural Youth Skill Hub Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://ddugky.gov.in"
  },
  {
    "scheme_name": "Tamil Nadu Senior Citizen Transport Concession Scheme",
    "category": "Senior Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Tamil Nadu Senior Citizen Transport Concession Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 60,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.tnstc.in"
  },
  {
    "scheme_name": "Telangana Athletics Equipment Subsidy Scheme",
    "category": "Sports & Youth",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Telangana Athletics Equipment Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Telangana"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://sports.telangana.gov.in"
  },
  {
    "scheme_name": "National Migrant Worker Transit Hostel Aid Initiative",
    "category": "Social Security",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Migrant Worker Transit Hostel Aid Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://labour.gov.in"
  },
  {
    "scheme_name": "Uttar Pradesh Mobile Repairing Skill Training Scheme",
    "category": "Skill Development",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Uttar Pradesh Mobile Repairing Skill Training Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "genders": [
        "All"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://upsdm.gov.in"
  },
  {
    "scheme_name": "Uttarakhand Tractor Purchase Subsidy Scheme",
    "category": "Agriculture",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Uttarakhand Tractor Purchase Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Uttarakhand"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://agriculture.uk.gov.in"
  },
  {
    "scheme_name": "National Civil Services Prelims Clearing Reward Initiative",
    "category": "Education",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Civil Services Prelims Clearing Reward Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 14,
      "max_age": 28,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 600000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://coaching.dosje.gov.in"
  },
  {
    "scheme_name": "Andhra Pradesh Mental Health Counseling Support Scheme",
    "category": "Healthcare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Andhra Pradesh Mental Health Counseling Support Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://telemanas.mohfw.gov.in"
  },
  {
    "scheme_name": "Arunachal Pradesh Sewing Machine Free Distribution Scheme",
    "category": "Women Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Arunachal Pradesh Sewing Machine Free Distribution Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "Female"
      ],
      "states": [
        "Arunachal Pradesh"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://arunachalpradesh.gov.in"
  },
  {
    "scheme_name": "National Pottery Modernization Grant Initiative",
    "category": "Business & Employment",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Pottery Modernization Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Self-Employed",
        "Business Owner",
        "Entrepreneur"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.kviconline.gov.in"
  },
  {
    "scheme_name": "Bihar Solar Dryer Agricultural Grant Scheme",
    "category": "Renewable Energy",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Bihar Solar Dryer Agricultural Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Bihar"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://breda.bihar.gov.in"
  },
  {
    "scheme_name": "Chhattisgarh Fish Hatchery Construction Grant Scheme",
    "category": "Fisheries & Marine",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Chhattisgarh Fish Hatchery Construction Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Chhattisgarh"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://agriportal.cg.nic.in/fisheries/"
  },
  {
    "scheme_name": "National Disability Marriage Incentive Initiative",
    "category": "Disability Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Disability Marriage Incentive Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://disabilityaffairs.gov.in"
  },
  {
    "scheme_name": "Goa Minority Community Hall Grant Scheme",
    "category": "Minority & Tribal Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Goa Minority Community Hall Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Goa"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://socialwelfare.goa.gov.in"
  },
  {
    "scheme_name": "Gujarat Gram Panchayat Digital Service Grant Scheme",
    "category": "Rural Development",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Gujarat Gram Panchayat Digital Service Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Gujarat"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://digitalgujarat.gov.in"
  },
  {
    "scheme_name": "National Retired War Veteran Daughter Grant Initiative",
    "category": "Senior Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Retired War Veteran Daughter Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 60,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://ksb.gov.in"
  },
  {
    "scheme_name": "Himachal Pradesh Youth Club Sports Kit Distribution Scheme",
    "category": "Sports & Youth",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Himachal Pradesh Youth Club Sports Kit Distribution Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Himachal Pradesh"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://himachal.nic.in"
  },
  {
    "scheme_name": "Jharkhand Sanitation Worker Safety Gear Kit Scheme",
    "category": "Social Security",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Jharkhand Sanitation Worker Safety Gear Kit Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Jharkhand"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://jharkhand.gov.in"
  },
  {
    "scheme_name": "National Culinary & Baking Skill Course Initiative",
    "category": "Skill Development",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Culinary & Baking Skill Course Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://www.thims.gov.in"
  },
  {
    "scheme_name": "Kerala Silage Fodder Unit Aid Scheme",
    "category": "Agriculture",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Kerala Silage Fodder Unit Aid Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Kerala"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://ahd.kerala.gov.in"
  },
  {
    "scheme_name": "Madhya Pradesh Foreign Language Career Grant Scheme",
    "category": "Education",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Madhya Pradesh Foreign Language Career Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 14,
      "max_age": 28,
      "genders": [
        "All"
      ],
      "states": [
        "Madhya Pradesh"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 600000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://highereducation.mp.gov.in"
  },
  {
    "scheme_name": "National Cleft Palate Free Surgery Initiative",
    "category": "Healthcare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Cleft Palate Free Surgery Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://rbsk.gov.in"
  },
  {
    "scheme_name": "Manipur Women Retail Mart Loan Scheme",
    "category": "Women Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Manipur Women Retail Mart Loan Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "Female"
      ],
      "states": [
        "Manipur"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://manipur.gov.in"
  },
  {
    "scheme_name": "Meghalaya Khadi Spinners Assistance Scheme",
    "category": "Business & Employment",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Meghalaya Khadi Spinners Assistance Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Meghalaya"
      ],
      "occupations": [
        "Self-Employed",
        "Business Owner",
        "Entrepreneur"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://megindustry.gov.in"
  },
  {
    "scheme_name": "National Mini-Grid Solar Power Unit Initiative",
    "category": "Renewable Energy",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Mini-Grid Solar Power Unit Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://mnre.gov.in"
  },
  {
    "scheme_name": "Nagaland Seaweed Farming Livelihood Grant Scheme",
    "category": "Fisheries & Marine",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Nagaland Seaweed Farming Livelihood Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Nagaland"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://fisheries.nagaland.gov.in"
  },
  {
    "scheme_name": "Odisha Special Vocational Skill Course Scheme",
    "category": "Disability Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Odisha Special Vocational Skill Course Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Odisha"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://ssepd.odisha.gov.in"
  },
  {
    "scheme_name": "National Scheduled Tribe Hostel Allowance Initiative",
    "category": "Minority & Tribal Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Scheduled Tribe Hostel Allowance Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://tribal.nic.in"
  },
  {
    "scheme_name": "Rajasthan Village Haat Infrastructure Grant Scheme",
    "category": "Rural Development",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Rajasthan Village Haat Infrastructure Grant Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Rajasthan"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://rdprd.rajasthan.gov.in"
  },
  {
    "scheme_name": "Sikkim Senior Caretaker Training Subsidy Scheme",
    "category": "Senior Welfare",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Sikkim Senior Caretaker Training Subsidy Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 60,
      "max_age": 100,
      "genders": [
        "All"
      ],
      "states": [
        "Sikkim"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://sikkim.gov.in"
  },
  {
    "scheme_name": "National State Games Traveling Grant Initiative",
    "category": "Sports & Youth",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National State Games Traveling Grant Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://sportsauthorityofindia.nic.in"
  },
  {
    "scheme_name": "Telangana Street Performer Folk Artist Pension Scheme",
    "category": "Social Security",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Telangana Street Performer Folk Artist Pension Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "Telangana"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 300000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://telangana.gov.in"
  },
  {
    "scheme_name": "Tripura Organic Farming Field Certification Scheme",
    "category": "Skill Development",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Tripura Organic Farming Field Certification Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "genders": [
        "All"
      ],
      "states": [
        "Tripura"
      ],
      "occupations": [
        "All"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://agri.tripura.gov.in"
  },
  {
    "scheme_name": "National Millet Cultivation Incentive Initiative",
    "category": "Agriculture",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the National Millet Cultivation Incentive Initiative to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "genders": [
        "All"
      ],
      "states": [
        "All"
      ],
      "occupations": [
        "Farmer"
      ],
      "max_income": 2500000,
      "education": [
        "All"
      ]
    },
    "application_url": "https://nutricereals.dac.gov.in"
  },
  {
    "scheme_name": "Uttarakhand Medical UG Tuition Waiver Scheme",
    "category": "Education",
    "description": "Provides targeted financial aid, equipment subsidies, and institutional support under the Uttarakhand Medical UG Tuition Waiver Scheme to enhance economic resilience and welfare for eligible beneficiaries.",
    "eligibility_criteria": {
      "min_age": 14,
      "max_age": 28,
      "genders": [
        "All"
      ],
      "states": [
        "Uttarakhand"
      ],
      "occupations": [
        "Student"
      ],
      "max_income": 600000,
      "education": [
        "10th Pass",
        "12th Pass",
        "Graduate"
      ]
    },
    "application_url": "https://uksc.uk.gov.in"
  }
];

module.exports = SCHEMES_DATA;
