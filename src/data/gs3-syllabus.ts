export type Gs3Topic = {
  title: string;
  points: string[];
};

export type Gs3Block = {
  title: string;
  topics: Gs3Topic[];
};

export type Gs3Section = {
  id: string;
  label: string;
  title: string;
  summary: string;
  blocks: Gs3Block[];
};

export const gs3SyllabusSections: Gs3Section[] = 
[
  {
    "id": "economy",
    "label": "Section 01",
    "title": "Indian Economy — Planning, Growth & Employment",
    "summary": "Planning, mobilisation of resources, growth, development, and employment.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Basics of Indian Economy",
            "points": [
              "Meaning of Economy",
              "Economic Systems",
              "Capitalist Economy",
              "Socialist Economy",
              "Mixed Economy",
              "Features of Indian Economy",
              "Structural Characteristics of Indian Economy"
            ]
          },
          {
            "title": "Sectors of Economy",
            "points": [
              "Primary Sector",
              "Secondary Sector",
              "Tertiary Sector",
              "Formal Sector",
              "Informal Sector"
            ]
          }
        ]
      },
      {
        "title": "Planning in India",
        "topics": [
          {
            "title": "Concept of Planning",
            "points": [
              "Meaning of Economic Planning",
              "Objectives of Planning",
              "Need for Planning",
              "Types of Planning"
            ]
          },
          {
            "title": "Planning Framework in India",
            "points": [
              "Planning Commission",
              "National Development Council",
              "Five Year Plans",
              "Annual Plans",
              "Rolling Plans"
            ]
          },
          {
            "title": "NITI Aayog",
            "points": [
              "Establishment",
              "Objectives",
              "Structure",
              "Governing Council",
              "Regional Councils",
              "Functions",
              "Cooperative Federalism",
              "Competitive Federalism",
              "Aspirational District Programme"
            ]
          },
          {
            "title": "Planning Models",
            "points": [
              "Harrod-Domar Model",
              "Mahalanobis Model",
              "Gandhian Model",
              "Nehruvian Strategy",
              "Inclusive Planning",
              "Sustainable Development Planning"
            ]
          }
        ]
      },
      {
        "title": "Economic Growth",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Economic Growth",
              "Growth Rate",
              "Real Growth",
              "Nominal Growth",
              "Sustainable Growth"
            ]
          },
          {
            "title": "Measurement of Growth",
            "points": [
              "GDP",
              "GVA",
              "National Income",
              "Per Capita Income",
              "Sectoral Growth"
            ]
          },
          {
            "title": "Determinants of Growth",
            "points": [
              "Capital Formation",
              "Human Capital",
              "Technology",
              "Infrastructure",
              "Natural Resources",
              "Entrepreneurship",
              "Governance"
            ]
          },
          {
            "title": "Growth Models",
            "points": [
              "Harrod-Domar Model",
              "Solow Growth Model",
              "Endogenous Growth Theory"
            ]
          },
          {
            "title": "Growth Challenges",
            "points": [
              "Jobless Growth",
              "Regional Imbalances",
              "Low Productivity",
              "Infrastructure Deficit",
              "Informal Economy"
            ]
          }
        ]
      },
      {
        "title": "Economic Development",
        "topics": [
          {
            "title": "Development Concepts",
            "points": [
              "Economic Development",
              "Human Development",
              "Sustainable Development",
              "Inclusive Development"
            ]
          },
          {
            "title": "Indicators of Development",
            "points": [
              "HDI",
              "MPI",
              "Gender Development Index",
              "Social Progress Indicators",
              "SDGs"
            ]
          },
          {
            "title": "Human Development",
            "points": [
              "Health",
              "Education",
              "Standard of Living",
              "Human Capital Formation"
            ]
          },
          {
            "title": "Sustainable Development",
            "points": [
              "Sustainable Development Goals",
              "Green Growth",
              "Climate Resilient Development",
              "Circular Economy"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "budgeting",
    "label": "Section 02",
    "title": "Government Budgeting",
    "summary": "Budget concepts, process, deficits, and fiscal issues for GS Paper III.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning of Budget",
              "Constitutional Provisions",
              "Budget Cycle",
              "Budget Preparation",
              "Budget Presentation",
              "Budget Approval",
              "Budget Execution"
            ]
          },
          {
            "title": "Union Budget",
            "points": []
          },
          {
            "title": "Budget Documents",
            "points": [
              "Annual Financial Statement",
              "Finance Bill",
              "Appropriation Bill",
              "Fiscal Policy Statements",
              "Economic Survey"
            ]
          },
          {
            "title": "Budget Components",
            "points": []
          },
          {
            "title": "Receipts",
            "points": [
              "Revenue Receipts",
              "Tax Revenue",
              "Non-Tax Revenue",
              "Capital Receipts",
              "Borrowings"
            ]
          },
          {
            "title": "Expenditure",
            "points": [
              "Revenue Expenditure",
              "Capital Expenditure",
              "Development Expenditure",
              "Non-Development Expenditure"
            ]
          },
          {
            "title": "Fiscal Deficits",
            "points": [
              "Fiscal Deficit",
              "Revenue Deficit",
              "Primary Deficit",
              "Effective Revenue Deficit",
              "Monetized Deficit"
            ]
          },
          {
            "title": "Budgeting Types",
            "points": [
              "Performance Budgeting",
              "Outcome Budgeting",
              "Gender Budgeting",
              "Child Budgeting",
              "Zero-Based Budgeting",
              "Green Budgeting"
            ]
          },
          {
            "title": "Fiscal Responsibility",
            "points": [
              "FRBM Act",
              "Fiscal Consolidation",
              "Debt Management",
              "Public Debt Sustainability"
            ]
          },
          {
            "title": "Budget and Development",
            "points": [
              "Budget as Policy Instrument",
              "Redistribution Function",
              "Resource Allocation Function",
              "Stabilisation Function",
              "Welfare Function"
            ]
          },
          {
            "title": "Centre-State Fiscal Relations",
            "points": [
              "Finance Commission",
              "Tax Devolution",
              "Grants-in-Aid",
              "GST Council",
              "Fiscal Federalism"
            ]
          },
          {
            "title": "Economic Evolution of India",
            "points": []
          },
          {
            "title": "Pre-Independence Economy",
            "points": [
              "Colonial Economy",
              "Drain of Wealth",
              "Deindustrialization",
              "Agrarian Structure",
              "British Economic Policies"
            ]
          },
          {
            "title": "Post-Independence Economy",
            "points": [
              "Planned Development",
              "Mixed Economy Model",
              "Public Sector Expansion",
              "Green Revolution",
              "Nationalisation"
            ]
          },
          {
            "title": "Economic Reforms",
            "points": [
              "LPG Reforms, 1991",
              "Liberalisation",
              "Privatisation",
              "Globalisation",
              "Second Generation Reforms",
              "Structural Reforms"
            ]
          }
        ]
      },
      {
        "title": "Mobilization of Resources",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning",
              "Importance",
              "Sources of Resources"
            ]
          },
          {
            "title": "Domestic Resource Mobilization",
            "points": []
          },
          {
            "title": "Savings",
            "points": [
              "Household Savings",
              "Corporate Savings",
              "Public Savings"
            ]
          },
          {
            "title": "Investment",
            "points": [
              "Public Investment",
              "Private Investment",
              "Foreign Investment"
            ]
          },
          {
            "title": "Fiscal Resource Mobilization",
            "points": [
              "Tax Revenue",
              "Non-Tax Revenue",
              "Direct Taxes",
              "Indirect Taxes",
              "GST",
              "Cess and Surcharge"
            ]
          },
          {
            "title": "Borrowings",
            "points": [
              "Internal Borrowings",
              "External Borrowings",
              "Public Debt",
              "Sovereign Debt"
            ]
          },
          {
            "title": "Foreign Capital",
            "points": [
              "FDI",
              "FPI",
              "External Commercial Borrowings",
              "Sovereign Wealth Funds",
              "Development Assistance"
            ]
          },
          {
            "title": "Multilateral Funding",
            "points": [
              "World Bank",
              "IMF",
              "Asian Development Bank",
              "AIIB",
              "NDB",
              "Bilateral Assistance"
            ]
          }
        ]
      },
      {
        "title": "Employment",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Employment",
              "Unemployment",
              "Labour Force",
              "Workforce Participation"
            ]
          },
          {
            "title": "Types of Unemployment",
            "points": [
              "Open Unemployment",
              "Disguised Unemployment",
              "Seasonal Unemployment",
              "Structural Unemployment",
              "Frictional Unemployment",
              "Cyclical Unemployment",
              "Educated Unemployment"
            ]
          },
          {
            "title": "Labour Market Issues",
            "points": [
              "Informal Employment",
              "Gig Economy",
              "Platform Workers",
              "Female Labour Force Participation",
              "Youth Unemployment",
              "Migrant Labour"
            ]
          },
          {
            "title": "Employment Generation",
            "points": [
              "Labour Intensive Growth",
              "Skill Development",
              "MSMEs",
              "Startups",
              "Manufacturing Growth",
              "Services Sector GrowEmployment Schemes"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "inclusive-growth",
    "label": "Section 03",
    "title": "Inclusive Growth",
    "summary": "Meaning, components, challenges, and issues arising from inclusive growth.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning of Inclusive Growth",
              "Features of Inclusive Growth",
              "Importance of Inclusive Growth"
            ]
          },
          {
            "title": "Components of Inclusive Growth",
            "points": [
              "Poverty Reduction",
              "Employment Generation",
              "Social Inclusion",
              "Financial Inclusion",
              "Gender Inclusion",
              "Regional Inclusion",
              "Digital Inclusion"
            ]
          },
          {
            "title": "Financial Inclusion",
            "points": [
              "Jan Dhan Yojana",
              "Banking Access",
              "Digital Payments",
              "UPI",
              "Microfinance",
              "SHGs"
            ]
          },
          {
            "title": "Social Inclusion",
            "points": [
              "SC Welfare",
              "ST Welfare",
              "OBC Welfare",
              "Minority Welfare",
              "Women Empowerment",
              "Disability Inclusion"
            ]
          },
          {
            "title": "Regional Inclusion",
            "points": [
              "Aspirational District Programme",
              "Backward Region Development",
              "North-East Development",
              "Hill Area Development",
              "Tribal Area Development"
            ]
          },
          {
            "title": "Inclusive Growth Challenges",
            "points": [
              "Income Inequality",
              "Wealth Inequality",
              "Rural-Urban Divide",
              "Regional Disparities",
              "Social Exclusion"
            ]
          }
        ]
      },
      {
        "title": "Issues Arising from Inclusive Growth",
        "topics": [
          {
            "title": "Poverty",
            "points": [
              "Absolute Poverty",
              "Relative Poverty",
              "Multidimensional Poverty"
            ]
          },
          {
            "title": "Inequality",
            "points": [
              "Income Inequality",
              "Wealth Inequality",
              "Consumption Inequality",
              "Regional Inequality"
            ]
          },
          {
            "title": "Social Sector Deficits",
            "points": [
              "Education Deficit",
              "Health Deficit",
              "Nutrition Deficit",
              "Skill Deficit"
            ]
          },
          {
            "title": "Financial Exclusion",
            "points": [
              "Lack of Banking Access",
              "Credit Constraints",
              "Informal Lending"
            ]
          },
          {
            "title": "Developmental Challenges",
            "points": [
              "Urbanisation Challenges",
              "Migration Issues",
              "Agrarian Distress",
              "Jobless Growth",
              "Informalisation of Labour"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "agriculture",
    "label": "Section 04",
    "title": "Agriculture, Irrigation & Allied Sectors",
    "summary": "Crops, irrigation, marketing, land reforms, subsidies, PDS, buffer stocks, and food processing.",
    "blocks": [
      {
        "title": "Major Crops of India",
        "topics": [
          {
            "title": "Food Crops and MSP",
            "points": []
          },
          {
            "title": "Cereals",
            "points": [
              "Rice",
              "Wheat",
              "Maize",
              "Barley",
              "Millets"
            ]
          },
          {
            "title": "Millets",
            "points": [
              "Jowar",
              "Bajra",
              "Ragi",
              "Kodo Millet",
              "Kutki",
              "Foxtail Millet",
              "Barnyard Millet",
              "Little Millet",
              "Proso Millet"
            ]
          },
          {
            "title": "Pulses",
            "points": [
              "Gram",
              "Tur (Arhar)",
              "Urad",
              "Moong",
              "Lentil (Masur)",
              "Peas"
            ]
          },
          {
            "title": "Oilseeds",
            "points": [
              "Groundnut",
              "Mustard",
              "Soybean",
              "Sunflower",
              "Sesame",
              "Safflower",
              "Castor",
              "Linseed",
              "Niger Seed"
            ]
          },
          {
            "title": "Commercial Crops",
            "points": [
              "Cotton",
              "Jute",
              "Sugarcane",
              "Tobacco",
              "Rubber"
            ]
          },
          {
            "title": "Plantation Crops",
            "points": [
              "Tea",
              "Coffee",
              "Rubber",
              "Coconut",
              "Arecanut",
              "Cocoa"
            ]
          },
          {
            "title": "Horticultural Crops",
            "points": []
          },
          {
            "title": "Fruits",
            "points": []
          },
          {
            "title": "Vegetables",
            "points": []
          },
          {
            "title": "Spices",
            "points": []
          }
        ]
      },
      {
        "title": "Storage of Agricultural Produce",
        "topics": [
          {
            "title": "Storage Infrastructure",
            "points": [
              "Warehouses",
              "Cold Storage",
              "Silos",
              "Godowns",
              "Rural Storage Facilities"
            ]
          },
          {
            "title": "Institutions",
            "points": [
              "Food Corporation of India (FCI)",
              "Central Warehousing Corporation (CWC)",
              "State Warehousing Corporations"
            ]
          },
          {
            "title": "Storage Issues",
            "points": [
              "Post-Harvest Losses",
              "Lack of Cold Chains",
              "Poor Infrastructure",
              "Regional Gaps",
              "Scientific Storage Deficit"
            ]
          }
        ]
      },
      {
        "title": "Transport of Agricultural Produce",
        "topics": [
          {
            "title": "Agricultural Logistics",
            "points": [
              "Road Transport",
              "Rail Transport",
              "Water Transport",
              "Air Transport"
            ]
          },
          {
            "title": "Challenges",
            "points": [
              "High Logistics Cost",
              "Inadequate Infrastructure",
              "Cold Chain Deficit",
              "Rural Connectivity Issues"
            ]
          }
        ]
      },
      {
        "title": "Marketing of Agricultural Produce",
        "topics": [
          {
            "title": "Agricultural Marketing",
            "points": [
              "Agricultural Markets",
              "Marketable Surplus",
              "Marketed Surplus"
            ]
          },
          {
            "title": "Agricultural Marketing Institutions",
            "points": [
              "APMC Mandis",
              "Regulated Markets",
              "Cooperative Marketing",
              "Farmer Producer Organisations (FPOs)",
              "Farmer Producer Companies (FPCs)"
            ]
          },
          {
            "title": "Agricultural Marketing Reforms",
            "points": [
              "e-NAM",
              "Contract Farming",
              "Direct Marketing",
              "Private Markets",
              "Unified National Market"
            ]
          },
          {
            "title": "Marketing Challenges",
            "points": [
              "Middlemen",
              "Price Volatility",
              "Inadequate Infrastructure",
              "Information Asymmetry",
              "Fragmented Markets"
            ]
          }
        ]
      },
      {
        "title": "Minimum Support Price (msp)",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning of MSP",
              "Objectives of MSP",
              "Crops Covered under MSP"
            ]
          },
          {
            "title": "MSP Determination",
            "points": [
              "Commission for Agricultural Costs and Prices (CACP)",
              "Cost Concepts",
              "A2 Cost",
              "A2+FL Cost",
              "C2 Cost"
            ]
          },
          {
            "title": "MSP Procurement",
            "points": [
              "Food Corporation of India",
              "Procurement Agencies",
              "Decentralised Procurement"
            ]
          },
          {
            "title": "Issues Related to MSP",
            "points": [
              "Limited Procurement",
              "Regional Concentration",
              "Crop Diversification Issues",
              "Fiscal Burden",
              "Legal MSP Debate"
            ]
          }
        ]
      },
      {
        "title": "Food Security",
        "topics": [
          {
            "title": "Food Security Dimensions",
            "points": [
              "Availability",
              "Accessibility",
              "Affordability",
              "Nutritional Security"
            ]
          },
          {
            "title": "Food Security Programmes",
            "points": []
          },
          {
            "title": "Food Security Challenges",
            "points": [
              "Malnutrition",
              "Climate Change",
              "Food Inflation",
              "Supply Chain Disruptions"
            ]
          }
        ]
      },
      {
        "title": "Technology Missions in Agriculture",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Technology Mission on Oilseeds",
              "National Food Security Mission (NFSM)",
              "National Mission on Sustainable Agriculture (NMSA)",
              "National Mission for Integrated Development of Horticulture (MIDH)",
              "National Bamboo Mission",
              "Mission for Integrated Development of Horticulture",
              "Digital Agriculture Mission"
            ]
          }
        ]
      },
      {
        "title": "Economics of Animal Rearing",
        "topics": [
          {
            "title": "Animal Husbandry",
            "points": [
              "Dairy Sector",
              "Poultry Sector",
              "Sheep Rearing",
              "Goat Rearing",
              "Piggery",
              "Fisheries",
              "Apiculture",
              "Sericulture"
            ]
          },
          {
            "title": "Livestock Economics",
            "points": [
              "Contribution to Agricultural GDP",
              "Rural Livelihoods",
              "Employment Generation",
              "Export Potential"
            ]
          },
          {
            "title": "Livestock Development Schemes",
            "points": [
              "Rashtriya Gokul Mission",
              "National Livestock Mission",
              "Dairy Infrastructure Development Fund",
              "Blue Revolution",
              "PM Matsya Sampada Yojana"
            ]
          },
          {
            "title": "Challenges",
            "points": [
              "Fodder Deficit",
              "Breed Improvement",
              "Animal Diseases",
              "Veterinary Infrastructure"
            ]
          }
        ]
      },
      {
        "title": "Land Reforms in India",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning",
              "Objectives",
              "Agrarian Justice",
              "Equity and Productivity"
            ]
          },
          {
            "title": "Components of Land Reforms",
            "points": []
          },
          {
            "title": "Abolition of Intermediaries",
            "points": [
              "Zamindari Abolition",
              "Jagirdari Abolition",
              "Inamdari Abolition"
            ]
          },
          {
            "title": "Tenancy Reforms",
            "points": [
              "Security of Tenure",
              "Fair Rent",
              "Ownership Rights"
            ]
          },
          {
            "title": "Land Ceiling",
            "points": [
              "Ceiling on Land Holdings",
              "Redistribution of Surplus Land"
            ]
          },
          {
            "title": "Consolidation of Holdings",
            "points": [
              "Fragmentation Reduction",
              "Land Consolidation"
            ]
          },
          {
            "title": "Cooperative Farming",
            "points": []
          },
          {
            "title": "Post-Reform Measures",
            "points": [
              "Computerisation of Land Records",
              "Digital India Land Records"
            ]
          },
          {
            "title": "Modernization Programme (DILRMP)",
            "points": [
              "SVAMITVA Scheme",
              "Land Titling Reforms"
            ]
          },
          {
            "title": "Issues in Land Reforms",
            "points": [
              "Uneven Implementation",
              "Benami Holdings",
              "Land Fragmentation",
              "Land Disputes",
              "Poor Land Records",
              "Tenancy Informality"
            ]
          }
        ]
      },
      {
        "title": "Cropping Patterns in India",
        "topics": [
          {
            "title": "Cropping Seasons",
            "points": []
          },
          {
            "title": "Kharif Crops",
            "points": [
              "Rice",
              "Cotton",
              "Jute",
              "Maize",
              "Soybean",
              "Groundnut"
            ]
          },
          {
            "title": "Rabi Crops",
            "points": [
              "Wheat",
              "Gram",
              "Mustard",
              "Barley",
              "Peas"
            ]
          },
          {
            "title": "Zaid Crops",
            "points": [
              "Watermelon",
              "Muskmelon",
              "Cucumber",
              "Vegetables"
            ]
          },
          {
            "title": "Cropping Patterns",
            "points": [
              "Monocropping",
              "Multiple Cropping",
              "Mixed Cropping",
              "Intercropping",
              "Relay Cropping",
              "Sequential Cropping",
              "Crop Rotation"
            ]
          },
          {
            "title": "Regional Cropping Patterns",
            "points": []
          },
          {
            "title": "Northern India",
            "points": [
              "Wheat-Rice System",
              "Sugarcane-Based Agriculture"
            ]
          },
          {
            "title": "Eastern India",
            "points": [
              "Rice Dominated Agriculture",
              "Jute Cultivation"
            ]
          },
          {
            "title": "Western India",
            "points": [
              "Cotton",
              "Oilseeds",
              "Millets"
            ]
          },
          {
            "title": "Southern India",
            "points": [
              "Rice",
              "Plantation Crops",
              "Pulses"
            ]
          },
          {
            "title": "North-East India",
            "points": [
              "Shifting Cultivation",
              "Horticulture",
              "Bamboo-Based Agriculture"
            ]
          }
        ]
      },
      {
        "title": "Irrigation in India",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning of Irrigation",
              "Need for Irrigation",
              "Irrigation Potential",
              "Irrigation Efficiency"
            ]
          },
          {
            "title": "Types of Irrigation",
            "points": []
          },
          {
            "title": "Surface Irrigation",
            "points": [
              "Canal Irrigation",
              "Tank Irrigation",
              "Flood Irrigation"
            ]
          },
          {
            "title": "Groundwater Irrigation",
            "points": [
              "Wells",
              "Tube Wells"
            ]
          },
          {
            "title": "Micro Irrigation",
            "points": [
              "Drip Irrigation",
              "Sprinkler Irrigation",
              "Subsurface Irrigation"
            ]
          },
          {
            "title": "Irrigation Systems",
            "points": []
          },
          {
            "title": "Canal Irrigation",
            "points": [
              "Perennial Canals",
              "Inundation Canals"
            ]
          },
          {
            "title": "Tank Irrigation",
            "points": []
          },
          {
            "title": "Well Irrigation",
            "points": []
          },
          {
            "title": "Micro Irrigation Systems",
            "points": []
          },
          {
            "title": "Pressurized Irrigation Systems",
            "points": []
          },
          {
            "title": "Irrigation Projects",
            "points": [
              "Major Irrigation Projects",
              "Medium Irrigation Projects",
              "Minor Irrigation Projects"
            ]
          },
          {
            "title": "Irrigation Related Schemes",
            "points": []
          },
          {
            "title": "Irrigation Challenges",
            "points": [
              "Water Scarcity",
              "Groundwater Depletion",
              "Waterlogging",
              "Salinity",
              "Canal Inefficiency",
              "Regional Imbalances"
            ]
          }
        ]
      },
      {
        "title": "E-technology in Aid of Farmers",
        "topics": [
          {
            "title": "Digital Agriculture",
            "points": [
              "Precision Agriculture",
              "Smart Farming",
              "Climate Smart Agriculture"
            ]
          },
          {
            "title": "E-Governance Initiatives",
            "points": []
          },
          {
            "title": "Emerging Technologies",
            "points": [
              "Artificial Intelligence",
              "Drones in Agriculture",
              "GIS and Remote Sensing",
              "IoT in Agriculture",
              "Big Data Analytics",
              "Satellite-Based Monitoring"
            ]
          }
        ]
      },
      {
        "title": "Farm Subsidies",
        "topics": [
          {
            "title": "Direct Farm Subsidies",
            "points": [
              "Income Support Schemes"
            ]
          }
        ]
      },
      {
        "title": "• Pm-kisan",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Direct Benefit Transfer (DBT)"
            ]
          },
          {
            "title": "Indirect Farm Subsidies",
            "points": [
              "Fertilizer Subsidy",
              "Power Subsidy",
              "Irrigation Subsidy",
              "Seed Subsidy",
              "Credit Subsidy"
            ]
          },
          {
            "title": "Issues Related to Subsidies",
            "points": [
              "Fiscal Burden",
              "Regional Imbalances",
              "Environmental Impact",
              "Inefficient Targeting",
              "WTO Concerns"
            ]
          }
        ]
      },
      {
        "title": "Public Distribution System (pds)",
        "topics": [
          {
            "title": "Objectives of PDS",
            "points": [
              "Food Security",
              "Price Stabilization",
              "Nutritional Support",
              "Welfare of Poor"
            ]
          },
          {
            "title": "Functioning of PDS",
            "points": [
              "Procurement",
              "Storage",
              "Transportation",
              "Allocation",
              "Distribution"
            ]
          },
          {
            "title": "National Food Security Act (NFSA), 2013",
            "points": [
              "Priority Households",
              "Antyodaya Anna Yojana",
              "Food Entitlements"
            ]
          },
          {
            "title": "Limitations of PDS",
            "points": [
              "Leakages",
              "Diversion",
              "Ghost Beneficiaries",
              "Exclusion Errors",
              "Inclusion Errors"
            ]
          },
          {
            "title": "Revamping of PDS",
            "points": [
              "Digitisation",
              "Aadhaar Seeding",
              "One Nation One Ration Card"
            ]
          },
          {
            "title": "(ONORC)",
            "points": [
              "End-to-End Computerisation",
              "Smart Ration Cards"
            ]
          }
        ]
      },
      {
        "title": "Buffer Stocks",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning",
              "Objectives",
              "Food Security",
              "Price Stabilization"
            ]
          },
          {
            "title": "Buffer Stock Norms",
            "points": [
              "Strategic Reserve",
              "Operational Stock"
            ]
          },
          {
            "title": "Issues Related to Buffer Stocks",
            "points": [
              "Excess Procurement",
              "Storage Constraints",
              "Carrying Cost",
              "Food Wastage"
            ]
          }
        ]
      },
      {
        "title": "Food Processing Industry",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning",
              "Scope",
              "Importance",
              "Agro-Based Industries"
            ]
          },
          {
            "title": "Significance",
            "points": [
              "Value Addition",
              "Employment Generation",
              "Export Promotion",
              "Reduction in Post-Harvest Losses",
              "Farmer Income Enhancement"
            ]
          },
          {
            "title": "Segments of Food Processing",
            "points": [
              "Dairy Processing",
              "Meat Processing",
              "Fish Processing",
              "Fruit and Vegetable Processing",
              "Grain Processing",
              "Beverage Industry"
            ]
          },
          {
            "title": "Location Factors",
            "points": [
              "Raw Material Availability",
              "Market Availability",
              "Infrastructure",
              "Labour Availability",
              "Power Supply",
              "Transport Connectivity"
            ]
          },
          {
            "title": "Upstream Requirements",
            "points": [
              "Agriculture Production",
              "Storage Facilities",
              "Cold Chains",
              "Logistics",
              "Input Supply"
            ]
          },
          {
            "title": "Downstream Requirements",
            "points": [
              "Packaging",
              "Branding",
              "Marketing",
              "Distribution Networks",
              "Retail Chains",
              "Export Infrastructure"
            ]
          },
          {
            "title": "Supply Chain Management",
            "points": [
              "Farm to Fork Chain",
              "Cold Chain Infrastructure",
              "Warehousing",
              "Transportation",
              "Inventory Management",
              "Traceability Systems"
            ]
          },
          {
            "title": "Government Initiatives",
            "points": [
              "PM Kisan Sampada Yojana",
              "Mega Food Parks",
              "Operation Greens",
              "Production Linked IncentiveScheme for Food Processing"
            ]
          },
          {
            "title": "Challenges",
            "points": [
              "Fragmented Supply Chains",
              "Infrastructure Gaps",
              "Quality Standards",
              "Export Competitiveness",
              "High Wastage"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "industry-infra",
    "label": "Section 05",
    "title": "Liberalization, Industry, Infrastructure & Investment",
    "summary": "Effects of liberalisation, industrial policy, infrastructure, and investment models.",
    "blocks": [
      {
        "title": "Liberalization",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning of Liberalization",
              "Economic Liberalization",
              "Market-Oriented Reforms",
              "Deregulation",
              "Delicensing",
              "Reduction of Government Control",
              "Economic Freedom"
            ]
          },
          {
            "title": "Background of Liberalization",
            "points": []
          },
          {
            "title": "Pre-1991 Economic System",
            "points": [
              "License-Permit Raj",
              "Industrial Licensing",
              "Public Sector Dominance",
              "Import Substitution Strategy",
              "Protectionist Economy",
              "Foreign Exchange Crisis",
              "Fiscal Crisis",
              "Balance of Payments Crisis"
            ]
          },
          {
            "title": "LPG Reforms (1991)",
            "points": []
          },
          {
            "title": "Liberalization",
            "points": [
              "Industrial Delicensing",
              "Deregulation",
              "Trade Liberalization",
              "Financial Sector Reforms"
            ]
          },
          {
            "title": "Privatization",
            "points": [
              "Disinvestment",
              "Strategic Sale",
              "Public Sector Reforms"
            ]
          },
          {
            "title": "Globalization",
            "points": [
              "Global Integration",
              "Foreign Trade Expansion",
              "Foreign Investment Promotion"
            ]
          }
        ]
      },
      {
        "title": "Effects of Liberalization on the Economy",
        "topics": [
          {
            "title": "Positive Effects",
            "points": [
              "Economic Growth",
              "Higher GDP Growth",
              "Increased Productivity",
              "Expansion of Services Sector",
              "Increased Exports"
            ]
          },
          {
            "title": "Industrial Development",
            "points": [
              "Increased Competition",
              "Technology Transfer",
              "Improved Efficiency",
              "Better Quality Products"
            ]
          },
          {
            "title": "Investment",
            "points": [
              "Rise in FDI",
              "Rise in FPI",
              "Expansion of Private Investment",
              "Infrastructure Investment"
            ]
          },
          {
            "title": "Employment",
            "points": [
              "Growth of New Sectors",
              "Expansion of Services Employment",
              "Startup Ecosystem"
            ]
          },
          {
            "title": "Global Integration",
            "points": [
              "Increased Trade",
              "Global Value Chains",
              "Export Competitiveness"
            ]
          },
          {
            "title": "Negative Effects",
            "points": []
          },
          {
            "title": "Inequality",
            "points": [
              "Income Inequality",
              "Regional Imbalances",
              "Rural-Urban Divide"
            ]
          },
          {
            "title": "Agriculture",
            "points": [
              "Agricultural Distress",
              "Price Volatility",
              "Global Competition"
            ]
          },
          {
            "title": "Industry",
            "points": [
              "Closure of Small Industries",
              "MSME Competition Issues"
            ]
          },
          {
            "title": "Employment",
            "points": [
              "Jobless Growth",
              "Informalisation of Labour"
            ]
          },
          {
            "title": "External Vulnerability",
            "points": [
              "Global Recession Impact",
              "External Shocks",
              "Capital Flow Volatility"
            ]
          }
        ]
      },
      {
        "title": "Infrastructure",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning of Infrastructure",
              "Economic Infrastructure",
              "Social Infrastructure",
              "Infrastructure and Growth"
            ]
          }
        ]
      },
      {
        "title": "Energy Infrastructure",
        "topics": [
          {
            "title": "Conventional Energy",
            "points": [
              "Coal",
              "Petroleum",
              "Natural Gas",
              "Thermal Power"
            ]
          },
          {
            "title": "Renewable Energy",
            "points": [
              "Solar Energy",
              "Wind Energy",
              "Hydropower",
              "Biomass Energy",
              "Green Hydrogen"
            ]
          },
          {
            "title": "Nuclear Energy",
            "points": [
              "Nuclear Power Plants",
              "Uranium Resources",
              "Nuclear Fuel Cycle"
            ]
          },
          {
            "title": "Energy Security",
            "points": [
              "Energy Mix",
              "Energy Transition",
              "Strategic Petroleum Reserves",
              "Energy Efficiency"
            ]
          }
        ]
      },
      {
        "title": "Road Infrastructure",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "National Highways",
              "State Highways",
              "District Roads",
              "Rural Roads"
            ]
          },
          {
            "title": "Major Programmes",
            "points": []
          },
          {
            "title": "Road Sector Challenges",
            "points": [
              "Land Acquisition",
              "Maintenance Issues",
              "Financing Constraints",
              "Road Safety"
            ]
          }
        ]
      },
      {
        "title": "Railway Infrastructure",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Indian Railways",
              "Freight Corridors",
              "High-Speed Rail"
            ]
          },
          {
            "title": "Railway Modernization",
            "points": [
              "Dedicated Freight Corridors",
              "Bullet Train Project",
              "Station Redevelopment",
              "Vande Bharat Trains"
            ]
          },
          {
            "title": "Challenges",
            "points": [
              "Capacity Constraints",
              "Freight Competition",
              "Safety Issues"
            ]
          }
        ]
      },
      {
        "title": "Port Infrastructure",
        "topics": [
          {
            "title": "Major Ports",
            "points": [
              "Government-Owned Ports"
            ]
          },
          {
            "title": "Non-Major Ports",
            "points": [
              "State-Controlled Ports"
            ]
          },
          {
            "title": "Port Development",
            "points": [
              "Sagarmala Programme",
              "Port Modernization",
              "Coastal Shipping",
              "Port Connectivity"
            ]
          },
          {
            "title": "Blue Economy",
            "points": [
              "Maritime Trade",
              "Coastal Economy",
              "Fisheries Economy"
            ]
          }
        ]
      },
      {
        "title": "Airport Infrastructure",
        "topics": [
          {
            "title": "Aviation Sector",
            "points": [
              "Domestic Aviation",
              "International Aviation",
              "Cargo Aviation"
            ]
          },
          {
            "title": "Airport Development",
            "points": [
              "UDAN Scheme",
              "Greenfield Airports",
              "Brownfield Airports",
              "Airport Privatization"
            ]
          },
          {
            "title": "Challenges",
            "points": [
              "Regional Connectivity",
              "High Operational Costs",
              "Infrastructure Financing"
            ]
          }
        ]
      },
      {
        "title": "Urban Infrastructure",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Smart Cities Mission",
              "AMRUT",
              "Metro Rail Projects",
              "Urban Mobility",
              "Water Supply Systems",
              "Sewage Systems",
              "Solid Waste Management"
            ]
          }
        ]
      },
      {
        "title": "Digital Infrastructure",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "BharatNet",
              "Optical Fibre Network",
              "Data Centres",
              "Digital Public Infrastructure",
              "UPI",
              "ONDC",
              "India Stack",
              "5G Infrastructure",
              "Semiconductor Ecosystem"
            ]
          }
        ]
      },
      {
        "title": "Logistics Infrastructure",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Warehousing",
              "Cold Chains",
              "Logistics Parks",
              "Freight Corridors",
              "Multi-Modal Transport",
              "National Logistics Policy"
            ]
          }
        ]
      },
      {
        "title": "Industrial Policy of India",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning of Industrial Policy",
              "Objectives of Industrial Policy",
              "Industrial Development Strategy"
            ]
          }
        ]
      },
      {
        "title": "Evolution of Industrial Policy",
        "topics": [
          {
            "title": "Industrial Policy Resolution, 1948",
            "points": [
              "Mixed Economy Model",
              "Public and Private Sector Roles"
            ]
          },
          {
            "title": "Industrial Policy Resolution, 1956",
            "points": [
              "Socialistic Pattern of Society",
              "Public Sector Dominance",
              "Classification of Industries"
            ]
          },
          {
            "title": "Industrial Policy Statement, 1977",
            "points": [
              "Promotion of Small Scale Industries",
              "Rural Industrialization"
            ]
          },
          {
            "title": "Industrial Policy Statement, 1980",
            "points": [
              "Industrial Modernization",
              "Productivity Improvement"
            ]
          },
          {
            "title": "New Industrial Policy, 1991",
            "points": []
          },
          {
            "title": "Industrial Delicensing",
            "points": [
              "Abolition of Licensing for Most Industries"
            ]
          },
          {
            "title": "Public Sector Reforms",
            "points": [
              "Reduction in Reserved Sectors",
              "Disinvestment"
            ]
          },
          {
            "title": "MRTP Reforms",
            "points": [
              "Removal of Asset Limits"
            ]
          },
          {
            "title": "Foreign Investment Reforms",
            "points": [
              "Automatic Route",
              "Increased FDI Limits"
            ]
          }
        ]
      },
      {
        "title": "Changes in Industrial Policy",
        "topics": [
          {
            "title": "Post-1991 Reforms",
            "points": [
              "Delicensing",
              "Deregulation",
              "Competition Promotion",
              "FDI Reforms",
              "Industrial Corridors"
            ]
          },
          {
            "title": "Recent Industrial Initiatives",
            "points": [
              "Make in India",
              "Startup India",
              "Standup India",
              "Digital India",
              "Atmanirbhar Bharat"
            ]
          },
          {
            "title": "Production Linked Incentive (PLI) Scheme",
            "points": [
              "Objectives",
              "Sectors Covered",
              "Manufacturing Promotion",
              "Export Promotion"
            ]
          },
          {
            "title": "National Manufacturing Policies",
            "points": [
              "National Manufacturing Policy",
              "National Logistics Policy",
              "PM Gati Shakti"
            ]
          }
        ]
      },
      {
        "title": "Effect of Industrial Policy on Industrial Growth",
        "topics": [
          {
            "title": "Positive Effects",
            "points": [
              "Industrial Expansion",
              "Manufacturing Growth",
              "FDI Inflows",
              "Technology Upgradation",
              "Export Growth",
              "Global Competitiveness"
            ]
          },
          {
            "title": "Challenges",
            "points": [
              "Manufacturing Share in GDP",
              "MSME Constraints",
              "Infrastructure Deficit",
              "Logistics Cost",
              "Skill Deficit",
              "Regional Imbalances"
            ]
          }
        ]
      },
      {
        "title": "Industrial Development",
        "topics": [
          {
            "title": "Industrial Sectors",
            "points": []
          },
          {
            "title": "Large Scale Industries",
            "points": [
              "Steel",
              "Cement",
              "Automobile",
              "Petrochemicals"
            ]
          },
          {
            "title": "MSMEs",
            "points": [
              "Micro Enterprises",
              "Small Enterprises",
              "Medium Enterprises"
            ]
          },
          {
            "title": "Industrial Corridors",
            "points": [
              "Delhi-Mumbai Industrial Corridor (DMIC)",
              "Chennai-Bengaluru Industrial"
            ]
          },
          {
            "title": "Corridor",
            "points": [
              "East Coast Economic Corridor",
              "Bengaluru-Mumbai Industrial",
              "Amritsar-Kolkata Industrial"
            ]
          },
          {
            "title": "Industrial Clusters",
            "points": [
              "Textile Clusters",
              "Leather Clusters",
              "Pharmaceutical Clusters",
              "Automobile Clusters",
              "Electronics Clusters"
            ]
          }
        ]
      },
      {
        "title": "Investment Models",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning of Investment",
              "Capital Formation",
              "Public Investment",
              "Private Investment"
            ]
          }
        ]
      },
      {
        "title": "Public Investment Models",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Government Funding Model",
              "Budgetary Support Model",
              "PSU-Led Investment"
            ]
          }
        ]
      },
      {
        "title": "Private Investment Models",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Private Ownership Model",
              "Corporate Investment Model",
              "Venture Capital Model",
              "Startup Funding Model"
            ]
          }
        ]
      },
      {
        "title": "Public Private Partnership (ppp)",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning of PPP",
              "Objectives of PPP",
              "Advantages of PPP"
            ]
          },
          {
            "title": "PPP Models",
            "points": []
          },
          {
            "title": "BOT (Build Operate Transfer)",
            "points": [
              "BOT (Toll)",
              "BOT (Annuity)"
            ]
          },
          {
            "title": "BOOT",
            "points": [
              "Build Own Operate Transfer"
            ]
          },
          {
            "title": "BOO",
            "points": [
              "Build Own Operate"
            ]
          },
          {
            "title": "DBFOT",
            "points": [
              "Design Build Finance Operate Transfer"
            ]
          },
          {
            "title": "HAM",
            "points": [
              "Hybrid Annuity Model"
            ]
          },
          {
            "title": "Engineering Procurement Construction",
            "points": []
          },
          {
            "title": "TOT",
            "points": [
              "Toll Operate Transfer"
            ]
          },
          {
            "title": "Advantages of PPP",
            "points": [
              "Faster Infrastructure Creation",
              "Better Efficiency",
              "Risk Sharing",
              "Reduced Fiscal Burden"
            ]
          },
          {
            "title": "Challenges of PPP",
            "points": [
              "Contractual Disputes",
              "Land Acquisition Problems",
              "Revenue Risks",
              "Financing Issues",
              "Regulatory Delays"
            ]
          }
        ]
      },
      {
        "title": "Foreign Investment Models",
        "topics": [
          {
            "title": "Foreign Direct Investment (FDI)",
            "points": [
              "Greenfield Investment",
              "Brownfield Investment",
              "Automatic Route",
              "Government Route"
            ]
          },
          {
            "title": "Foreign Portfolio Investment (FPI)",
            "points": [
              "Equity Investment",
              "Debt Investment"
            ]
          },
          {
            "title": "Sovereign Wealth Funds",
            "points": [
              "Long-Term Investment",
              "Infrastructure Funding"
            ]
          },
          {
            "title": "Investment Models",
            "points": [
              "PPP Reforms",
              "Asset Monetisation",
              "National Monetisation Pipeline",
              "InvITs",
              "REITs",
              "Infrastructure Financing Reforms"
            ]
          }
        ]
      },
      {
        "title": "Infrastructure Financing",
        "topics": [
          {
            "title": "Sources of Infrastructure Finance",
            "points": [
              "Budgetary Support",
              "Public Investment",
              "Private Investment",
              "External Funding",
              "Multilateral Funding"
            ]
          },
          {
            "title": "Institutions",
            "points": [
              "National Bank for Financing"
            ]
          },
          {
            "title": "Infrastructure and Development (NaBFID)",
            "points": [
              "NIIF",
              "Infrastructure Investment Trusts"
            ]
          },
          {
            "title": "(InvITs)",
            "points": []
          }
        ]
      }
    ]
  },
  {
    "id": "science-tech",
    "label": "Section 06",
    "title": "Science & Technology in Everyday Life",
    "summary": "Developments in S&T and their applications and effects in everyday life.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Science and Technology",
            "points": [
              "Meaning of Science",
              "Meaning of Technology",
              "Relationship between Science and Technology",
              "Basic Research",
              "Applied Research",
              "Innovation",
              "Technology Development",
              "Technology Transfer",
              "Emerging Technologies",
              "Disruptive Technologies"
            ]
          },
          {
            "title": "Science, Technology and Society",
            "points": [
              "Science and Society",
              "Technology and Development",
              "Technology and Governance",
              "Technology and Sustainable Development",
              "Science for Public Welfare",
              "Ethical Issues in Science",
              "Responsible Innovation"
            ]
          }
        ]
      },
      {
        "title": "Science & Technology Developments and Their Applications",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Scientific Discoveries",
              "Scientific Innovations",
              "Frontier Technologies",
              "Emerging Technologies",
              "Indigenous Technologies"
            ]
          },
          {
            "title": "Effects on Everyday Life",
            "points": []
          },
          {
            "title": "Positive Effects",
            "points": [
              "Improved Quality of Life",
              "Better Healthcare",
              "Faster Communication",
              "Increased Productivity",
              "Improved Governance",
              "Better Connectivity"
            ]
          },
          {
            "title": "Negative Effects",
            "points": [
              "Digital Divide",
              "Cyber Crime",
              "Privacy Concerns",
              "Job Displacement",
              "Ethical Issues",
              "Technology Dependence"
            ]
          },
          {
            "title": "Applications in Everyday Life",
            "points": []
          },
          {
            "title": "Communication",
            "points": [
              "Mobile Technology",
              "Internet",
              "Satellite Communication",
              "Social Media"
            ]
          },
          {
            "title": "Transportation",
            "points": [
              "GPS Navigation",
              "Electric Vehicles",
              "Intelligent Transport Systems"
            ]
          },
          {
            "title": "Healthcare",
            "points": [
              "Telemedicine",
              "Medical Devices",
              "Vaccines",
              "Diagnostic Technologies",
              "AI in Healthcare"
            ]
          },
          {
            "title": "Agriculture",
            "points": [
              "Precision Farming",
              "Drones",
              "GIS Applications",
              "Smart Irrigation",
              "Biotechnology"
            ]
          },
          {
            "title": "Education",
            "points": [
              "Digital Learning",
              "Online Platforms",
              "Virtual Classrooms"
            ]
          },
          {
            "title": "Banking and Finance",
            "points": [
              "Digital Payments",
              "UPI",
              "FinTech",
              "Blockchain Applications"
            ]
          },
          {
            "title": "Governance",
            "points": [
              "Digital India",
              "E-Governance",
              "Digital Public Infrastructure"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "indian-st",
    "label": "Section 07",
    "title": "Indian S&T Achievements & Indigenization",
    "summary": "Achievements of Indians in S&T, indigenization, and developing new technology.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Ancient Indian Contributions",
            "points": []
          },
          {
            "title": "Mathematics",
            "points": [
              "Zero",
              "Decimal System",
              "Aryabhata",
              "Brahmagupta",
              "Bhaskara"
            ]
          },
          {
            "title": "Astronomy",
            "points": [
              "Aryabhata",
              "Varahamihira"
            ]
          },
          {
            "title": "Medicine",
            "points": [
              "Charaka",
              "Sushruta",
              "Ayurveda"
            ]
          },
          {
            "title": "Metallurgy",
            "points": [
              "Iron Pillar of Delhi",
              "Zinc Extraction",
              "Wootz Steel"
            ]
          },
          {
            "title": "Modern Indian Scientists",
            "points": []
          },
          {
            "title": "Physics",
            "points": [
              "C.V. Raman",
              "S.N. Bose",
              "Homi Bhabha",
              "Vikram Sarabhai"
            ]
          },
          {
            "title": "Mathematics",
            "points": [
              "Srinivasa Ramanujan"
            ]
          },
          {
            "title": "Agriculture",
            "points": [
              "M.S. Swaminathan",
              "Green Revolution"
            ]
          },
          {
            "title": "Space",
            "points": [
              "Vikram Sarabhai",
              "Satish Dhawan",
              "A.P.J. Abdul Kalam"
            ]
          },
          {
            "title": "Biotechnology",
            "points": [
              "Indian Vaccine Development",
              "Genome Research"
            ]
          },
          {
            "title": "Contemporary Achievements",
            "points": [
              "Chandrayaan Missions",
              "Mangalyaan",
              "Aditya-L1",
              "Gaganyaan Programme",
              "Indigenous Vaccines",
              "UPI Technology",
              "Digital Public Infrastructure",
              "Supercomputing Mission",
              "Semiconductor Initiatives"
            ]
          }
        ]
      },
      {
        "title": "Indigenization of Technology",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning of Indigenization",
              "Need for Indigenization",
              "Strategic Importance",
              "Self-Reliance"
            ]
          },
          {
            "title": "Areas of Indigenization",
            "points": []
          },
          {
            "title": "Defence",
            "points": [
              "Missiles",
              "Fighter Aircraft",
              "Warships",
              "Drones",
              "Radars"
            ]
          },
          {
            "title": "Space",
            "points": [
              "Launch Vehicles",
              "Satellites",
              "Navigation Systems"
            ]
          },
          {
            "title": "Electronics",
            "points": [
              "Semiconductor Manufacturing",
              "Telecom Equipment"
            ]
          },
          {
            "title": "Energy",
            "points": [
              "Nuclear Technology",
              "Renewable Energy Technology"
            ]
          },
          {
            "title": "Healthcare",
            "points": [
              "Vaccines",
              "Medical Devices"
            ]
          },
          {
            "title": "Government Initiatives",
            "points": []
          }
        ]
      },
      {
        "title": "Development of New Technology",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Research and Development (R&D)",
              "Incubation Centres",
              "Innovation Hubs",
              "Startup Ecosystem"
            ]
          },
          {
            "title": "Technology Development Institutions",
            "points": [
              "CSIR",
              "DRDO",
              "ISRO",
              "ICAR",
              "ICMR",
              "BARC",
              "IITs",
              "IISc",
              "AIIMS Research Institutions"
            ]
          },
          {
            "title": "Emerging Technologies",
            "points": [
              "Artificial Intelligence",
              "Quantum Technology",
              "Blockchain",
              "Internet of Things",
              "Augmented Reality",
              "Virtual Reality",
              "Metaverse",
              "Quantum Computing",
              "Advanced Materials"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "emerging-tech",
    "label": "Section 08",
    "title": "IT, Space, Biotech & Intellectual Property",
    "summary": "Awareness in IT, space, computers, robotics, nano & biotech, and IPR issues.",
    "blocks": [
      {
        "title": "Information Technology (it)",
        "topics": [
          {
            "title": "IT Basics",
            "points": [
              "Information Technology",
              "Digital Technologies",
              "Computing Systems"
            ]
          },
          {
            "title": "Digital Infrastructure",
            "points": [
              "BharatNet",
              "India Stack",
              "UPI",
              "DigiLocker",
              "Aadhaar",
              "ONDC"
            ]
          },
          {
            "title": "Emerging IT Areas",
            "points": [
              "Cloud Computing",
              "Edge Computing",
              "Big Data Analytics",
              "Data Science",
              "Artificial Intelligence",
              "Machine Learning"
            ]
          },
          {
            "title": "Cyber Security",
            "points": [
              "Cyber Attacks",
              "Malware",
              "Ransomware",
              "Phishing",
              "Cyber Warfare",
              "Data Breaches"
            ]
          },
          {
            "title": "Cyber Security Framework",
            "points": [
              "CERT-In",
              "National Cyber Security Policy",
              "Cyber Swachhta Kendra",
              "Data Protection Framework"
            ]
          }
        ]
      },
      {
        "title": "Nanotechnology",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Nano Scale",
              "Nanomaterials",
              "Nano Science",
              "Nano Engineering"
            ]
          },
          {
            "title": "Types of Nanomaterials",
            "points": [
              "Nanoparticles",
              "Nanotubes",
              "Nanocomposites",
              "Quantum Dots"
            ]
          },
          {
            "title": "Applications",
            "points": []
          },
          {
            "title": "Healthcare",
            "points": [
              "Drug Delivery",
              "Nano Medicine"
            ]
          },
          {
            "title": "Agriculture",
            "points": [
              "Nano Fertilizers",
              "Nano Pesticides"
            ]
          },
          {
            "title": "Energy",
            "points": [
              "Solar Cells",
              "Battery Technology"
            ]
          },
          {
            "title": "Environment",
            "points": [
              "Water Purification",
              "Pollution Control"
            ]
          },
          {
            "title": "Defence",
            "points": [
              "Smart Materials",
              "Nano Sensors"
            ]
          },
          {
            "title": "India and Nanotechnology",
            "points": [
              "Nano Mission",
              "Research Institutions",
              "Indigenous Innovations"
            ]
          }
        ]
      },
      {
        "title": "Intellectual Property Rights (ipr)",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning of Intellectual Property",
              "Need for IPR Protection",
              "Innovation and IPR"
            ]
          },
          {
            "title": "Types of Intellectual Property",
            "points": []
          },
          {
            "title": "Patents",
            "points": [
              "Patentability",
              "Patent Rights",
              "Patent Term"
            ]
          },
          {
            "title": "Copyright",
            "points": [
              "Literary Works",
              "Artistic Works",
              "Software Copyright"
            ]
          },
          {
            "title": "Trademark",
            "points": [
              "Brand Protection",
              "Trade Identity"
            ]
          },
          {
            "title": "Geographical Indications",
            "points": [
              "GI Tags",
              "Traditional Products"
            ]
          },
          {
            "title": "Industrial Designs",
            "points": []
          },
          {
            "title": "Trade Secrets",
            "points": []
          },
          {
            "title": "Plant Variety Protection",
            "points": []
          },
          {
            "title": "International IPR Framework",
            "points": [
              "WIPO",
              "TRIPS Agreement",
              "WTO and IPR",
              "Patent Cooperation Treaty"
            ]
          },
          {
            "title": "India's IPR Framework",
            "points": [
              "Patents Act",
              "Copyright Act",
              "Trademarks Act",
              "GI Act",
              "National IPR Policy"
            ]
          },
          {
            "title": "Contemporary IPR Issues",
            "points": [
              "Compulsory Licensing",
              "Pharmaceutical Patents",
              "Traditional Knowledge Protection",
              "Biopiracy"
            ]
          },
          {
            "title": "COMPUTERS",
            "points": [
              "Hardware",
              "Software",
              "Operating Systems",
              "Programming Languages",
              "Computer Networks"
            ]
          },
          {
            "title": "Computing Technologies",
            "points": [
              "Supercomputers",
              "High Performance Computing",
              "PARAM Series",
              "National Supercomputing Mission"
            ]
          },
          {
            "title": "Advanced Computing",
            "points": [
              "Quantum Computing",
              "Neuromorphic Computing",
              "Cloud Computing",
              "Distributed Computing"
            ]
          }
        ]
      },
      {
        "title": "Space Technology",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Universe",
              "Solar System",
              "Satellites",
              "Orbits",
              "Launch Vehicles"
            ]
          },
          {
            "title": "Indian Space Programme",
            "points": [
              "ISRO",
              "IN-SPACe",
              "NSIL"
            ]
          },
          {
            "title": "Launch Vehicles",
            "points": [
              "PSLV",
              "GSLV",
              "LVM3",
              "SSLV"
            ]
          },
          {
            "title": "Satellites",
            "points": [
              "Communication Satellites",
              "Navigation Satellites",
              "Remote Sensing Satellites",
              "Weather Satellites"
            ]
          },
          {
            "title": "Major Indian Space Missions",
            "points": [
              "Aryabhata",
              "Bhaskara",
              "INSAT Series",
              "IRS Series",
              "Chandrayaan-1",
              "Chandrayaan-2",
              "Chandrayaan-3",
              "Mangalyaan",
              "Aditya-L1",
              "Gaganyaan",
              "SPADEX"
            ]
          },
          {
            "title": "Space Applications",
            "points": [
              "Communication",
              "Navigation",
              "Disaster Management",
              "Weather Forecasting",
              "Agriculture",
              "Defence Applications"
            ]
          },
          {
            "title": "Space Governance",
            "points": [
              "Space Policy",
              "Commercial Space Sector",
              "Space Diplomacy",
              "Space Security",
              "Space Debris"
            ]
          }
        ]
      },
      {
        "title": "Biotechnology",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Definition",
              "Principles",
              "Branches of Biotechnology"
            ]
          },
          {
            "title": "Genetic Engineering",
            "points": [
              "Recombinant DNA Technology",
              "Gene Editing",
              "CRISPR-Cas9",
              "Genome Sequencing"
            ]
          },
          {
            "title": "Agricultural Biotechnology",
            "points": [
              "GM Crops",
              "Biofertilizers",
              "Biopesticides",
              "Tissue Culture"
            ]
          },
          {
            "title": "Medical Biotechnology",
            "points": [
              "Vaccines",
              "Gene Therapy",
              "Stem Cell Technology",
              "Monoclonal Antibodies"
            ]
          },
          {
            "title": "Industrial Biotechnology",
            "points": [
              "Fermentation Technology",
              "Biofuels",
              "Industrial Enzymes"
            ]
          },
          {
            "title": "Environmental Biotechnology",
            "points": [
              "Bioremediation",
              "Waste Treatment",
              "Bioenergy"
            ]
          },
          {
            "title": "Biotechnology Governance",
            "points": []
          },
          {
            "title": "ROBOTICS",
            "points": [
              "Robot",
              "Automation",
              "Sensors",
              "Actuators",
              "Control Systems"
            ]
          },
          {
            "title": "Types of Robots",
            "points": [
              "Industrial Robots",
              "Service Robots",
              "Medical Robots",
              "Defence Robots",
              "Humanoid Robots",
              "Autonomous Robots"
            ]
          },
          {
            "title": "Applications",
            "points": [
              "Manufacturing",
              "Agriculture",
              "Healthcare",
              "Defence",
              "Disaster Management",
              "Logistics"
            ]
          },
          {
            "title": "Challenges",
            "points": [
              "Job Displacement",
              "Ethical Concerns",
              "Safety Issues",
              "Regulatory Issues"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "environment",
    "label": "Section 09",
    "title": "Environment, Pollution & EIA",
    "summary": "Conservation, environmental pollution and degradation, and environmental impact assessment.",
    "blocks": [
      {
        "title": "Environment – Basics",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning of Environment",
              "Components of Environment",
              "Abiotic Components",
              "Biotic Components",
              "Ecosystem",
              "Ecological Balance",
              "Environmental Sustainability"
            ]
          },
          {
            "title": "Ecology",
            "points": [
              "Ecology",
              "Organism",
              "Population",
              "Community",
              "Ecosystem",
              "Habitat",
              "Niche",
              "Ecotone",
              "Edge Effect",
              "Succession"
            ]
          },
          {
            "title": "Ecosystem",
            "points": []
          },
          {
            "title": "Structure",
            "points": [
              "Biotic Components",
              "Abiotic Components"
            ]
          },
          {
            "title": "Functions",
            "points": [
              "Energy Flow",
              "Food Chain",
              "Food Web",
              "Ecological Pyramid",
              "Nutrient Cycling"
            ]
          },
          {
            "title": "Biomes",
            "points": [
              "Tundra",
              "Taiga",
              "Temperate Forest",
              "Tropical Rainforest",
              "Savanna",
              "Grassland",
              "Desert Biome"
            ]
          }
        ]
      },
      {
        "title": "Forest Conservation",
        "topics": [
          {
            "title": "Forest Resources",
            "points": [
              "Forest Cover",
              "Tree Cover",
              "Forest Types"
            ]
          },
          {
            "title": "Forest Governance",
            "points": [
              "National Forest Policy",
              "Forest Rights Act",
              "Joint Forest Management",
              "Community Forest Resource Rights"
            ]
          },
          {
            "title": "Afforestation Programmes",
            "points": [
              "Green India Mission",
              "CAMPA",
              "National Afforestation Programme",
              "Nagar Van Yojana"
            ]
          }
        ]
      },
      {
        "title": "Climate Change",
        "topics": [
          {
            "title": "Climate Change Basics",
            "points": [
              "Weather vs Climate",
              "Global Warming",
              "Greenhouse Effect",
              "Greenhouse Gases"
            ]
          },
          {
            "title": "Causes",
            "points": [
              "Fossil Fuel Combustion",
              "Deforestation",
              "Agriculture",
              "Industrial Emissions"
            ]
          },
          {
            "title": "Impacts",
            "points": [
              "Sea Level Rise",
              "Glacier Melting",
              "Heat Waves",
              "Extreme Weather Events",
              "Biodiversity Loss",
              "Food Security Threats"
            ]
          },
          {
            "title": "Mitigation",
            "points": [
              "Renewable Energy",
              "Carbon Sequestration",
              "Energy Efficiency",
              "Carbon Markets",
              "Net Zero Targets"
            ]
          },
          {
            "title": "Adaptation",
            "points": [
              "Climate Resilient Agriculture",
              "Disaster Preparedness",
              "Coastal Protection",
              "Water Conservation"
            ]
          }
        ]
      },
      {
        "title": "International Environmental Conventions",
        "topics": [
          {
            "title": "Climate Related",
            "points": [
              "UNFCCC",
              "Kyoto Protocol",
              "Paris Agreement",
              "COP Meetings"
            ]
          },
          {
            "title": "Biodiversity Related",
            "points": [
              "Convention on Biological Diversity (CBD)",
              "Cartagena Protocol",
              "Nagoya Protocol"
            ]
          },
          {
            "title": "Wildlife Related",
            "points": [
              "CITES",
              "CMS",
              "Ramsar Convention"
            ]
          },
          {
            "title": "Ozone Related",
            "points": [
              "Vienna Convention",
              "Montreal Protocol",
              "Kigali Amendment"
            ]
          }
        ]
      },
      {
        "title": "Solid Waste Management",
        "topics": [
          {
            "title": "Types",
            "points": [
              "Municipal Solid Waste",
              "Hazardous Waste",
              "Biomedical Waste",
              "Plastic Waste",
              "E-Waste",
              "Construction Waste"
            ]
          },
          {
            "title": "Management",
            "points": [
              "Segregation",
              "Recycling",
              "Composting",
              "Waste-to-Energy",
              "Circular Economy"
            ]
          }
        ]
      },
      {
        "title": "Environmental Degradation",
        "topics": [
          {
            "title": "Land Degradation",
            "points": [
              "Soil Erosion",
              "Desertification",
              "Salinization",
              "Waterlogging"
            ]
          },
          {
            "title": "Deforestation",
            "points": [
              "Causes",
              "Effects",
              "Mitigation"
            ]
          },
          {
            "title": "Biodiversity Loss",
            "points": [
              "Habitat Loss",
              "Fragmentation",
              "Invasive Species",
              "Climate Change Impact"
            ]
          },
          {
            "title": "Marine Degradation",
            "points": [
              "Marine Pollution",
              "Plastic Pollution",
              "Coral Bleaching",
              "Oil Spills"
            ]
          }
        ]
      },
      {
        "title": "Biodiversity Conservation",
        "topics": [
          {
            "title": "Biodiversity",
            "points": [
              "Genetic Diversity",
              "Species Diversity",
              "Ecosystem Diversity"
            ]
          },
          {
            "title": "Biodiversity Hotspots",
            "points": [
              "Concept",
              "Criteria",
              "Hotspots Relevant to India"
            ]
          },
          {
            "title": "Indian Biodiversity Hotspots",
            "points": [
              "Himalayas",
              "Western Ghats-Sri Lanka",
              "Indo-Burma",
              "Sundaland (Nicobar)"
            ]
          },
          {
            "title": "Conservation Approaches",
            "points": []
          },
          {
            "title": "In-Situ Conservation",
            "points": [
              "National Parks",
              "Wildlife Sanctuaries",
              "Biosphere Reserves",
              "Conservation Reserves",
              "Community Reserves",
              "Sacred Groves",
              "Marine Protected Areas"
            ]
          },
          {
            "title": "Ex-Situ Conservation",
            "points": [
              "Botanical Gardens",
              "Zoological Parks",
              "Gene Banks",
              "Seed Banks",
              "Tissue Culture Repositories",
              "Cryopreservation"
            ]
          },
          {
            "title": "Protected Area Network",
            "points": []
          },
          {
            "title": "National Parks",
            "points": [
              "Features",
              "Legal Status",
              "Management"
            ]
          },
          {
            "title": "Wildlife Sanctuaries",
            "points": []
          },
          {
            "title": "Biosphere Reserves",
            "points": []
          },
          {
            "title": "Tiger Reserves",
            "points": []
          },
          {
            "title": "Elephant Reserves",
            "points": []
          },
          {
            "title": "Ramsar Sites",
            "points": []
          },
          {
            "title": "UNESCO World Heritage Natural Sites",
            "points": []
          },
          {
            "title": "Species Conservation",
            "points": []
          },
          {
            "title": "Flagship Species",
            "points": [
              "Tiger",
              "Elephant",
              "Rhino",
              "Lion"
            ]
          },
          {
            "title": "Umbrella Species",
            "points": []
          },
          {
            "title": "Keystone Species",
            "points": []
          },
          {
            "title": "Endemic Species",
            "points": []
          },
          {
            "title": "Invasive Species",
            "points": []
          },
          {
            "title": "Threatened Species",
            "points": []
          },
          {
            "title": "Wildlife Conservation",
            "points": []
          },
          {
            "title": "Project Tiger",
            "points": []
          },
          {
            "title": "Project Elephant",
            "points": []
          },
          {
            "title": "Project Snow Leopard",
            "points": []
          },
          {
            "title": "Project Dolphin",
            "points": []
          },
          {
            "title": "Project Cheetah",
            "points": []
          },
          {
            "title": "Species Recovery Programmes",
            "points": []
          }
        ]
      },
      {
        "title": "Environmental Pollution",
        "topics": [
          {
            "title": "Pollution Basics",
            "points": [
              "Meaning",
              "Sources",
              "Pollutants",
              "Point Source Pollution",
              "Non-Point Source Pollution"
            ]
          }
        ]
      },
      {
        "title": "Air Pollution",
        "topics": [
          {
            "title": "Sources",
            "points": [
              "Vehicular Emissions",
              "Industrial Emissions",
              "Thermal Power Plants",
              "Biomass Burning",
              "Stubble Burning"
            ]
          },
          {
            "title": "Pollutants",
            "points": [
              "PM2.5",
              "PM10",
              "SO₂",
              "NOx",
              "Ozone",
              "Carbon Monoxide",
              "Lead"
            ]
          },
          {
            "title": "Air Quality Monitoring",
            "points": [
              "AQI",
              "National Ambient Air Quality Standards (NAAQS)"
            ]
          },
          {
            "title": "Control Measures",
            "points": [
              "National Clean Air Programme (NCAP)",
              "BS-VI Norms",
              "Cleaner Fuels",
              "Emission Control Technologies"
            ]
          }
        ]
      },
      {
        "title": "Water Pollution",
        "topics": [
          {
            "title": "Sources",
            "points": [
              "Domestic Sewage",
              "Industrial Effluents",
              "Agricultural Runoff"
            ]
          },
          {
            "title": "Indicators",
            "points": [
              "BOD",
              "COD",
              "Dissolved Oxygen",
              "Eutrophication"
            ]
          },
          {
            "title": "Control Measures",
            "points": [
              "Sewage Treatment Plants",
              "Effluent Treatment Plants",
              "River Rejuvenation Programmes",
              "Namami Gange"
            ]
          }
        ]
      },
      {
        "title": "Soil Pollution",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Agrochemicals",
              "Industrial Waste",
              "Heavy Metals",
              "Solid Waste"
            ]
          }
        ]
      },
      {
        "title": "Noise Pollution",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Sources",
              "Impacts",
              "Noise Standards",
              "Mitigation Measures"
            ]
          }
        ]
      },
      {
        "title": "Environmental Impact Assessment",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning of EIA",
              "Objectives",
              "Importance",
              "Precautionary Principle",
              "Sustainable Development Principle"
            ]
          },
          {
            "title": "EIA Process",
            "points": [
              "Screening",
              "Scoping",
              "Baseline Data Collection",
              "Impact Prediction",
              "Mitigation Measures"
            ]
          },
          {
            "title": "Environmental Clearance",
            "points": [
              "Category A Projects",
              "Category B Projects"
            ]
          },
          {
            "title": "Authorities",
            "points": [
              "MoEFCC",
              "SEIAA",
              "EAC"
            ]
          },
          {
            "title": "EIA Notification",
            "points": [
              "EIA Notification 1994",
              "EIA Notification 2006",
              "Amendments and Reforms"
            ]
          },
          {
            "title": "Issues in EIA",
            "points": []
          }
        ]
      }
    ]
  },
  {
    "id": "disaster",
    "label": "Section 10",
    "title": "Disaster Management",
    "summary": "Disasters, frameworks, risk reduction, early warning, and international cooperation.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Disaster",
            "points": [
              "Meaning",
              "Hazard",
              "Vulnerability",
              "Capacity",
              "Risk",
              "Resilience"
            ]
          },
          {
            "title": "Disaster Cycle",
            "points": [
              "Prevention",
              "Mitigation",
              "Preparedness",
              "Response",
              "Recovery",
              "Reconstruction"
            ]
          }
        ]
      },
      {
        "title": "Types of Disasters",
        "topics": [
          {
            "title": "Geological",
            "points": [
              "Earthquake",
              "Tsunami",
              "Volcano",
              "Landslide"
            ]
          },
          {
            "title": "Hydrological",
            "points": [
              "Flood",
              "Flash Flood",
              "Glacial Lake Outburst Flood (GLOF)"
            ]
          },
          {
            "title": "Meteorological",
            "points": [
              "Cyclone",
              "Heat Wave",
              "Cold Wave",
              "Thunderstorm",
              "Tornado",
              "Lightning"
            ]
          },
          {
            "title": "Climatological",
            "points": [
              "Drought",
              "Desertification",
              "Forest Fires"
            ]
          },
          {
            "title": "Biological",
            "points": [
              "Epidemics",
              "Pandemics",
              "Pest Attacks"
            ]
          },
          {
            "title": "Man-Made Disasters",
            "points": [
              "Industrial Disasters",
              "Chemical Disasters",
              "Nuclear Disasters",
              "Biological Accidents",
              "Fire Accidents",
              "Oil Spills",
              "Terrorism"
            ]
          }
        ]
      },
      {
        "title": "Disaster Management for Specific Disasters",
        "topics": [
          {
            "title": "Earthquake Management",
            "points": [
              "Seismic Zoning",
              "Earthquake Resistant Construction",
              "Preparedness Measures"
            ]
          },
          {
            "title": "Flood Management",
            "points": [
              "Flood Plain Zoning",
              "River Basin Management",
              "Forecasting and Warning"
            ]
          },
          {
            "title": "Cyclone Management",
            "points": [
              "Forecasting",
              "Evacuation",
              "Shelters",
              "Coastal Regulation"
            ]
          },
          {
            "title": "Drought Management",
            "points": [
              "Water Conservation",
              "Watershed Management",
              "Crop Diversification"
            ]
          },
          {
            "title": "Heat Wave Management",
            "points": [
              "Heat Action Plans",
              "Urban Cooling Measures"
            ]
          }
        ]
      },
      {
        "title": "Disaster Management Framework in India",
        "topics": [
          {
            "title": "Disaster Management Act, 2005",
            "points": []
          },
          {
            "title": "Institutional Framework",
            "points": [
              "NDMA",
              "NDRF",
              "NEC",
              "SDMA",
              "DDMA"
            ]
          },
          {
            "title": "National Disaster Management Authority (NDMA)",
            "points": [
              "Structure",
              "Functions",
              "Guidelines"
            ]
          },
          {
            "title": "National Disaster Response Force (NDRF)",
            "points": [
              "Composition",
              "Functions",
              "Response Operations"
            ]
          },
          {
            "title": "Disaster Management Plans",
            "points": [
              "National Disaster Management Plan",
              "State Disaster Management Plan",
              "District Disaster Management Plan"
            ]
          }
        ]
      },
      {
        "title": "Disaster Risk Reduction",
        "topics": [
          {
            "title": "Structural Measures",
            "points": [
              "Dams",
              "Embankments",
              "Cyclone Shelters",
              "Earthquake Resistant Structures"
            ]
          },
          {
            "title": "Non-Structural Measures",
            "points": [
              "Early Warning Systems",
              "Awareness Programmes",
              "Capacity Building",
              "Land Use Planning",
              "Risk Mapping"
            ]
          }
        ]
      },
      {
        "title": "Early Warning Systems",
        "topics": [
          {
            "title": "Meteorological",
            "points": [
              "IMD"
            ]
          },
          {
            "title": "Cyclone Warning",
            "points": [
              "INSAT",
              "Doppler Weather Radar"
            ]
          },
          {
            "title": "Tsunami Warning",
            "points": [
              "INCOIS"
            ]
          },
          {
            "title": "Flood Forecasting",
            "points": [
              "Central Water Commission"
            ]
          }
        ]
      },
      {
        "title": "International Frameworks",
        "topics": [
          {
            "title": "Sendai Framework for Disaster Risk Reduction",
            "points": [
              "Priority Areas",
              "Targets"
            ]
          },
          {
            "title": "Hyogo Framework",
            "points": []
          },
          {
            "title": "Paris Agreement and Disasters",
            "points": []
          },
          {
            "title": "Sustainable Development Goals",
            "points": [
              "SDG 11",
              "SDG 13"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "extremism",
    "label": "Section 11",
    "title": "Development & Spread of Extremism",
    "summary": "Linkages between development and the spread of extremism.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Extremism",
            "points": [
              "Meaning of Extremism",
              "Radicalization",
              "Violent Extremism",
              "Left Wing Extremism (LWE)",
              "Right Wing Extremism",
              "Religious Extremism",
              "Ethnic Extremism",
              "Separatist Movements"
            ]
          },
          {
            "title": "Causes of Extremism",
            "points": []
          },
          {
            "title": "Socio-Economic Causes",
            "points": [
              "Poverty",
              "Unemployment",
              "Illiteracy",
              "Land Alienation",
              "Lack of Infrastructure",
              "Lack of Development"
            ]
          },
          {
            "title": "Political Causes",
            "points": [
              "Governance Deficit",
              "Political Exclusion",
              "Corruption",
              "Administrative Failure"
            ]
          },
          {
            "title": "Social Causes",
            "points": [
              "Social Exclusion",
              "Identity Crisis",
              "Marginalization",
              "Tribal Exploitation"
            ]
          }
        ]
      },
      {
        "title": "Development and Extremism",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Backward Regions",
              "Tribal Areas",
              "Forest Areas",
              "Border Areas"
            ]
          },
          {
            "title": "Indicators of Underdevelopment",
            "points": [
              "Low Literacy",
              "Poor Health Infrastructure",
              "Lack of Roads",
              "Lack of Communication",
              "Low Employment Opportunities",
              "Low Human Development"
            ]
          }
        ]
      },
      {
        "title": "Left Wing Extremism (lwe)",
        "topics": [
          {
            "title": "Naxalism",
            "points": [
              "Origin",
              "Evolution",
              "Ideology"
            ]
          },
          {
            "title": "Red Corridor",
            "points": [
              "Affected States",
              "Affected Districts"
            ]
          },
          {
            "title": "Causes",
            "points": [
              "Tribal Displacement",
              "Forest Rights Issues",
              "Land Issues",
              "Underdevelopment"
            ]
          },
          {
            "title": "Government Response",
            "points": [
              "Security Approach",
              "Development Approach",
              "SAMADHAN Doctrine",
              "Aspirational District Programme",
              "Special Central Assistance"
            ]
          },
          {
            "title": "Development as a Counter-Extremism Strategy",
            "points": [
              "Infrastructure Development",
              "Employment Generation",
              "Education",
              "Skill Development",
              "Financial Inclusion",
              "Good Governance",
              "Community Participation"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "internal-security",
    "label": "Section 12",
    "title": "Internal Security & Cyber Challenges",
    "summary": "External/non-state actors, communication networks, media, social networking, and cyber security.",
    "blocks": [
      {
        "title": "External State Actors",
        "topics": [
          {
            "title": "State Actors",
            "points": [
              "Foreign Governments",
              "Intelligence Agencies",
              "Military Establishments",
              "Proxy Warfare Mechanisms"
            ]
          },
          {
            "title": "Challenges Created by State Actors",
            "points": [
              "Cross-Border Terrorism",
              "Infiltration",
              "Radicalization Support",
              "Cyber Attacks",
              "Information Warfare",
              "Funding of Extremist Groups"
            ]
          }
        ]
      },
      {
        "title": "Non-state Actors",
        "topics": [
          {
            "title": "Non-State Actors",
            "points": [
              "Terrorist Organizations",
              "Insurgent Groups",
              "Extremist Groups",
              "Organized Crime Syndicates",
              "Drug Cartels",
              "Separatist Groups",
              "Cyber Criminal Networks"
            ]
          },
          {
            "title": "Challenges from Non-State Actors",
            "points": [
              "Terrorism",
              "Drug Trafficking",
              "Arms Smuggling",
              "Human Trafficking",
              "Cyber Crime",
              "Fake Currency Networks"
            ]
          },
          {
            "title": "Challenges to Internal Security through Communication Networks, Role of Media and Social Networking Sites in Internal Security Challenges, Basics of Cyber Security, Money-Laundering and its prevention.",
            "points": []
          }
        ]
      },
      {
        "title": "Internal Security Through Communication Networks",
        "topics": [
          {
            "title": "Communication Infrastructure",
            "points": [
              "Internet",
              "Mobile Networks",
              "Satellite Networks",
              "Social Media Platforms",
              "Dark Web"
            ]
          },
          {
            "title": "Security Challenges",
            "points": [
              "Cyber Attacks",
              "Data Theft",
              "Online Radicalization",
              "Disinformation Campaigns",
              "Fake News",
              "Deepfakes",
              "Information Warfare"
            ]
          }
        ]
      },
      {
        "title": "Social Networking Sites and Internal Security",
        "topics": [
          {
            "title": "Social Media Platforms",
            "points": [
              "Facebook",
              "X (Twitter)",
              "Instagram",
              "WhatsApp",
              "Telegram",
              "YouTube"
            ]
          },
          {
            "title": "Counter Measures",
            "points": [
              "Fact Checking",
              "Platform Regulation",
              "Digital Literacy",
              "Monitoring Mechanisms"
            ]
          },
          {
            "title": "Security Concerns",
            "points": [
              "Radicalization",
              "Recruitment by Terror Groups",
              "Hate Speech",
              "Fake News",
              "Communal Violence",
              "Deepfake Technology",
              "Cyber Propaganda"
            ]
          }
        ]
      },
      {
        "title": "Money Laundering",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Illegal Money Conversion",
              "Concealment of Illicit Funds"
            ]
          },
          {
            "title": "Stages",
            "points": []
          },
          {
            "title": "Placement",
            "points": []
          },
          {
            "title": "Layering",
            "points": []
          },
          {
            "title": "Integration",
            "points": []
          },
          {
            "title": "Sources",
            "points": [
              "Drug Trafficking",
              "Terror Financing",
              "Corruption",
              "Smuggling",
              "Organized Crime"
            ]
          },
          {
            "title": "Prevention Laws",
            "points": [
              "Prevention of Money Laundering Act (PMLA), 2002"
            ]
          },
          {
            "title": "Institutions",
            "points": [
              "Enforcement Directorate (ED)",
              "Financial Intelligence Unit (FIU)"
            ]
          },
          {
            "title": "International Mechanism",
            "points": [
              "Financial Action Task Force (FATF)"
            ]
          }
        ]
      },
      {
        "title": "Terror Financing",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Hawala Networks",
              "Shell Companies",
              "Cryptocurrency Misuse",
              "Cross-Border Funding",
              "NGO Misuse"
            ]
          }
        ]
      },
      {
        "title": "Role of Media in Internal Security",
        "topics": [
          {
            "title": "Traditional Media",
            "points": [
              "Newspapers",
              "Television",
              "Radio"
            ]
          },
          {
            "title": "Positive Role",
            "points": [
              "Public Awareness",
              "Disaster Communication",
              "Counter-Radicalization",
              "National Integration"
            ]
          },
          {
            "title": "Challenges",
            "points": [
              "Sensationalism",
              "Misinformation",
              "Propaganda",
              "Trial by Media",
              "National Security Risks"
            ]
          }
        ]
      },
      {
        "title": "Cyber Security",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning",
              "Importance",
              "Cyber Space",
              "Cyber Infrastructure",
              "Digital Security"
            ]
          },
          {
            "title": "Cyber Threats/Malware",
            "points": [
              "Virus",
              "Worm",
              "Trojan Horse",
              "Spyware",
              "Ransomware"
            ]
          },
          {
            "title": "Cyber Crimes",
            "points": [
              "Hacking",
              "Identity Theft",
              "Data Theft",
              "Financial Fraud",
              "Phishing",
              "Spoofing",
              "Cyber Stalking"
            ]
          },
          {
            "title": "Cyber Warfare",
            "points": [
              "State Sponsored Attacks",
              "Critical Infrastructure Attacks",
              "Information Warfare"
            ]
          }
        ]
      },
      {
        "title": "Critical Information Infrastructure",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Power Sector",
              "Banking Sector",
              "Defence Networks",
              "Telecom Networks",
              "Transportation Systems",
              "Government Databases"
            ]
          }
        ]
      },
      {
        "title": "Cyber Security Framework in India",
        "topics": [
          {
            "title": "Institutions",
            "points": [
              "CERT-In",
              "NCIIPC",
              "National Cyber Coordination Centre",
              "Defence Cyber Agency"
            ]
          },
          {
            "title": "Policies",
            "points": [
              "National Cyber Security Policy",
              "Digital Personal Data Protection Framework",
              "Cyber Crisis Management Plan"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "border-security",
    "label": "Section 13",
    "title": "Border Security & Organized Crime",
    "summary": "Border area challenges and linkages of organized crime with terrorism.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Border Management",
            "points": [
              "International Borders",
              "Coastal Borders",
              "Maritime Boundaries"
            ]
          },
          {
            "title": "Border Security Challenges",
            "points": []
          },
          {
            "title": "Land Borders",
            "points": [
              "Infiltration",
              "Cross-Border Terrorism",
              "Smuggling",
              "Human Trafficking",
              "Illegal Migration"
            ]
          },
          {
            "title": "Maritime Borders",
            "points": [
              "Piracy",
              "Coastal Infiltration",
              "Maritime Terrorism",
              "Illegal Fishing"
            ]
          }
        ]
      },
      {
        "title": "India’s Borders",
        "topics": [
          {
            "title": "Western Border",
            "points": [
              "India-Pakistan Border",
              "LOC",
              "International Border"
            ]
          },
          {
            "title": "Northern Border",
            "points": [
              "India-China Border",
              "LAC"
            ]
          },
          {
            "title": "Eastern Borders",
            "points": [
              "India-Bangladesh Border",
              "India-Myanmar Border"
            ]
          },
          {
            "title": "Maritime Borders",
            "points": [
              "Arabian Sea",
              "Bay of Bengal",
              "Indian Ocean Region"
            ]
          }
        ]
      },
      {
        "title": "Border Management Mechanisms",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Border Fencing",
              "Smart Fencing (CIBMS)",
              "Border Roads",
              "Integrated Check Posts",
              "Coastal Surveillance Network",
              "Border Area Development Programme (BADP)"
            ]
          }
        ]
      },
      {
        "title": "Organized Crime",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning",
              "Characteristics",
              "Criminal Syndicates"
            ]
          },
          {
            "title": "Forms",
            "points": [
              "Drug Trafficking",
              "Human Trafficking",
              "Arms Smuggling",
              "Counterfeit Currency",
              "Wildlife Crime",
              "Cyber Crime"
            ]
          }
        ]
      },
      {
        "title": "Linkages Between Organized Crime and Terrorism",
        "topics": [
          {
            "title": "Areas of Convergence",
            "points": [
              "Financing Networks",
              "Arms Supply Networks",
              "Drug Trade",
              "Hawala Channels",
              "Fake Currency Networks"
            ]
          },
          {
            "title": "Narco-Terrorism",
            "points": [
              "Drug Money",
              "Terror Financing",
              "Cross-Border Networks"
            ]
          },
          {
            "title": "Counter Measures",
            "points": [
              "Intelligence Sharing",
              "Financial Surveillance",
              "International Cooperation",
              "Border Control"
            ]
          },
          {
            "title": "TERRORISM",
            "points": [
              "Terrorism",
              "State-Sponsored Terrorism",
              "Lone Wolf Attacks",
              "Suicide Terrorism"
            ]
          },
          {
            "title": "Types",
            "points": [
              "Religious Terrorism",
              "Ethnic Terrorism",
              "Ideological Terrorism",
              "Cross-Border Terrorism",
              "Cyber Terrorism"
            ]
          },
          {
            "title": "Counter-Terrorism Strategy",
            "points": [
              "Intelligence Gathering",
              "Security Operations",
              "Counter Radicalization",
              "Financial Tracking",
              "International Cooperation"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "security-forces",
    "label": "Section 14",
    "title": "Security Forces & Agencies",
    "summary": "Various security forces and agencies and their mandate.",
    "blocks": [
      {
        "title": "Security Forces of India",
        "topics": [
          {
            "title": "Armed Forces",
            "points": []
          },
          {
            "title": "Indian Army",
            "points": [
              "Territorial Security",
              "Counter Insurgency",
              "Border Defence"
            ]
          },
          {
            "title": "Indian Navy",
            "points": [
              "Maritime Security",
              "Coastal Defence",
              "Anti-Piracy Operations"
            ]
          },
          {
            "title": "Indian Air Force",
            "points": [
              "Air Defence",
              "Strategic Operations"
            ]
          },
          {
            "title": "CENTRAL ARMED POLICE FORCES (CAPFs)",
            "points": []
          },
          {
            "title": "Border Security Force (BSF)",
            "points": [
              "India-Pakistan Border",
              "India-Bangladesh Border"
            ]
          },
          {
            "title": "Central Reserve Police Force (CRPF)",
            "points": [
              "Internal Security",
              "Counter Insurgency",
              "LWE Operations"
            ]
          },
          {
            "title": "Central Industrial Security Force (CISF)",
            "points": [
              "Critical Infrastructure Protection",
              "Airport Security",
              "PSU Security"
            ]
          },
          {
            "title": "Indo-Tibetan Border Police (ITBP)",
            "points": [
              "India-China Border Security"
            ]
          },
          {
            "title": "Sashastra Seema Bal (SSB)",
            "points": [
              "India-Nepal Border",
              "India-Bhutan Border"
            ]
          },
          {
            "title": "Assam Rifles",
            "points": [
              "India-Myanmar Border",
              "Counter Insurgency in North-East"
            ]
          }
        ]
      },
      {
        "title": "Specialized Forces",
        "topics": [
          {
            "title": "National Security Guard (NSG)",
            "points": [
              "Counter Terrorism",
              "Hostage Rescue"
            ]
          },
          {
            "title": "Special Protection Group (SPG)",
            "points": [
              "Protection of Former PMs (as per law)"
            ]
          },
          {
            "title": "Special Frontier Force (SFF)",
            "points": [
              "Strategic Operations"
            ]
          }
        ]
      },
      {
        "title": "Intelligence Agencies",
        "topics": [
          {
            "title": "Internal Intelligence",
            "points": []
          },
          {
            "title": "Intelligence Bureau (IB)",
            "points": [
              "Internal Security Intelligence",
              "Counter Intelligence"
            ]
          },
          {
            "title": "External Intelligence",
            "points": []
          },
          {
            "title": "Research and Analysis Wing (RAW)",
            "points": [
              "External Intelligence",
              "Strategic Intelligence"
            ]
          }
        ]
      },
      {
        "title": "Investigative Agencies",
        "topics": [
          {
            "title": "National Investigation Agency (NIA)",
            "points": [
              "Terror Cases Investigation"
            ]
          },
          {
            "title": "Central Bureau of Investigation (CBI)",
            "points": [
              "Anti-Corruption",
              "Special Crimes"
            ]
          },
          {
            "title": "Enforcement Directorate (ED)",
            "points": [
              "Money Laundering",
              "FEMA Violations"
            ]
          }
        ]
      },
      {
        "title": "Cyber Security Agencies",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "CERT-In",
              "NCIIPC",
              "Defence Cyber Agency",
              "National Cyber Coordination Centre"
            ]
          }
        ]
      },
      {
        "title": "Maritime Security Agencies",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Indian Navy",
              "Indian Coast Guard",
              "Marine Police",
              "Coastal Security Scheme"
            ]
          }
        ]
      }
    ]
  }
];
