export type Gs2Topic = {
  title: string;
  points: string[];
};

export type Gs2Block = {
  title: string;
  topics: Gs2Topic[];
};

export type Gs2Section = {
  id: string;
  label: string;
  title: string;
  summary: string;
  blocks: Gs2Block[];
};

export const gs2SyllabusSections: Gs2Section[] =
[
  {
    "id": "constitution",
    "label": "Section 01",
    "title": "Indian Constitution",
    "summary": "Historical underpinnings, evolution, features, amendments, significant provisions, and basic structure.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Historical Underpinnings of Indian Constitution",
            "points": [
              "Regulating Act, 1773",
              "Pitt’s India Act, 1784",
              "Charter Acts",
              "Government of India Act, 1858",
              "Indian Councils Acts",
              "Morley-Minto Reforms, 1909",
              "Montagu-Chelmsford Reforms, 1919",
              "Government of India Act, 1935",
              "Indian Independence Act, 1947"
            ]
          },
          {
            "title": "Evolution of Indian Constitution",
            "points": [
              "Demand for Constitution",
              "Constituent Assembly",
              "Objective Resolution",
              "Drafting Committee",
              "Sources of Constitution",
              "Adoption and Enforcement"
            ]
          },
          {
            "title": "Features of Indian Constitution",
            "points": [
              "Written Constitution",
              "Lengthiest Constitution",
              "Federal System with Unitary Bias",
              "Parliamentary System",
              "Fundamental Rights",
              "Directive Principles of State Policy",
              "Fundamental Duties",
              "Independent Judiciary",
              "Judicial Review",
              "Secularism",
              "Universal Adult Franchise",
              "Single Citizenship"
            ]
          },
          {
            "title": "Amendments of Indian Constitution",
            "points": [
              "Meaning of Amendment",
              "Article 368",
              "Types of Amendment",
              "Simple Majority",
              "Special Majority",
              "Special Majority with State Ratification",
              "Important Constitutional Amendments",
              "Amendment Procedure",
              "Limitations on Amending Power"
            ]
          },
          {
            "title": "Significant Provisions of Indian Constitution",
            "points": [
              "Preamble",
              "Citizenship",
              "Fundamental Rights",
              "Directive Principles of State Policy",
              "Fundamental Duties",
              "Emergency Provisions",
              "Centre-State Relations",
              "Scheduled Areas",
              "Panchayats and Municipalities",
              "Constitutional Bodies"
            ]
          },
          {
            "title": "Basic Structure of Constitution",
            "points": [
              "Meaning of Basic Structure",
              "Kesavananda Bharati Case",
              "Supremacy of Constitution",
              "Rule of Law",
              "Separation of Powers",
              "Judicial Review",
              "Federalism",
              "Secularism",
              "Democracy",
              "Independence of Judiciary",
              "Free and Fair Elections"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "federalism",
    "label": "Section 02",
    "title": "Federal Structure & Local Governance",
    "summary": "Union–State functions, federal challenges, devolution of powers and finances to local levels.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Functions and Responsibilities of the Union",
            "points": [
              "Defence",
              "Foreign Affairs",
              "Currency",
              "Railways",
              "Banking",
              "Communication",
              "Citizenship",
              "National Security",
              "Inter-State Trade"
            ]
          },
          {
            "title": "Functions and Responsibilities of the States",
            "points": [
              "Public Order",
              "Police",
              "Public Health",
              "Agriculture",
              "Local Government",
              "Land",
              "Markets and Fairs",
              "State Public Services"
            ]
          },
          {
            "title": "Devolution of Finances to Local Levels",
            "points": [
              "State Finance Commission",
              "Central Finance Commission Grants",
              "Own Revenue of Local Bodies",
              "Grants-in-Aid",
              "Property Tax",
              "Local Body Finances",
              "Fiscal Decentralisation"
            ]
          },
          {
            "title": "Challenges in Local Governance",
            "points": [
              "Lack of Funds",
              "Lack of Functions",
              "Lack of Functionaries",
              "Poor Urban Governance",
              "Capacity Deficit",
              "Irregular Elections"
            ]
          },
          {
            "title": "Centre-State Relations",
            "points": [
              "Legislative Relations",
              "Administrative Relations",
              "Financial Relations",
              "Union List",
              "State List",
              "Concurrent List",
              "Residuary Powers"
            ]
          },
          {
            "title": "Centre-State Relations — Issues and Challenges in Federal Structure",
            "points": [
              "Centralisation of Power",
              "Governor’s Role",
              "Misuse of Article 356",
              "Fiscal Imbalance",
              "Inter-State River Disputes",
              "Regionalism",
              "Coalition Politics",
              "GST Compensation Issues",
              "Role of Inter-State Council"
            ]
          },
          {
            "title": "Devolution of Powers to Local Levels",
            "points": [
              "73rd Constitutional Amendment",
              "74th Constitutional Amendment",
              "Panchayati Raj Institutions",
              "Municipalities",
              "Eleventh Schedule",
              "Twelfth Schedule",
              "Gram Sabha",
              "District Planning Committee",
              "Metropolitan Planning Committee",
              "Bureaucratic Control",
              "Political Interference",
              "Weak Gram Sabha"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "separation-of-powers",
    "label": "Section 03",
    "title": "Separation of Powers & Dispute Redressal",
    "summary": "Separation of powers between organs, dispute redressal mechanisms and institutions.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Separation of Powers",
            "points": [
              "Meaning of Separation of Powers",
              "Legislature",
              "Executive",
              "Judiciary",
              "Checks and Balances",
              "Constitutional Provisions",
              "Indian Model of Separation of Powers"
            ]
          },
          {
            "title": "Dispute Redressal Mechanisms",
            "points": [
              "Supreme Court",
              "High Courts",
              "Tribunals",
              "Lok Adalat",
              "Alternative Dispute Resolution",
              "Arbitration",
              "Mediation",
              "Conciliation"
            ]
          },
          {
            "title": "Dispute Redressal Institutions",
            "points": [
              "Inter-State Council",
              "Finance Commission",
              "GST Council",
              "River Water Tribunals",
              "National Human Rights Commission",
              "Lokpal",
              "Lokayukta",
              "Central Administrative Tribunal"
            ]
          },
          {
            "title": "Legislature-Executive Relations",
            "points": [
              "Parliamentary Control over Executive",
              "Collective Responsibility",
              "Questions",
              "Motions",
              "Parliamentary Committees",
              "Budgetary Control"
            ]
          },
          {
            "title": "Executive-Judiciary Relations",
            "points": [
              "Judicial Review",
              "Judicial Activism",
              "Judicial Overreach",
              "Appointment of Judges",
              "Tribunals",
              "Contempt Power"
            ]
          },
          {
            "title": "Legislature-Judiciary Relations",
            "points": [
              "Law-Making Power",
              "Constitutional Amendment",
              "Judicial Review of Laws",
              "Parliamentary Privileges",
              "Basic Structure Doctrine"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "comparison-constitutions",
    "label": "Section 04",
    "title": "Comparison with Other Constitutions",
    "summary": "Comparison of the Indian constitutional scheme with that of other countries.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Indian Constitution and British Constitution",
            "points": [
              "Parliamentary System",
              "Rule of Law",
              "Cabinet System",
              "Bicameralism",
              "Parliamentary Privileges",
              "Difference between Written and Unwritten Constitution"
            ]
          },
          {
            "title": "Indian Constitution and Canadian Constitution",
            "points": [
              "Federation with Strong Centre",
              "Residuary Powers",
              "Appointment of Governors",
              "Advisory Jurisdiction"
            ]
          },
          {
            "title": "Indian Constitution and Australian Constitution",
            "points": [
              "Concurrent List",
              "Freedom of Trade and Commerce",
              "Joint Sitting of Parliament"
            ]
          },
          {
            "title": "Indian Constitution and French Constitution",
            "points": [
              "Republic",
              "Liberty, Equality and Fraternity"
            ]
          },
          {
            "title": "Indian Constitution and United States Constitution",
            "points": [
              "Federalism",
              "Fundamental Rights",
              "Judicial Review",
              "Separation of Powers",
              "Presidential System vs Parliamentary System",
              "Due Process of Law"
            ]
          },
          {
            "title": "Indian Constitution and Irish Constitution",
            "points": [
              "Directive Principles of State Policy",
              "Nomination of Members to Rajya Sabha",
              "Election of President"
            ]
          },
          {
            "title": "Indian Constitution and South African Constitution",
            "points": [
              "Constitutional Amendment Procedure",
              "Election of Rajya Sabha Members"
            ]
          },
          {
            "title": "Indian Constitution and Japanese Constitution",
            "points": [
              "Procedure Established by Law"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "parliament-legislatures",
    "label": "Section 05",
    "title": "Parliament and State Legislatures",
    "summary": "Structure, functioning, conduct of business, powers & privileges and issues arising out of these.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Parliament: Structure",
            "points": [
              "President",
              "Lok Sabha",
              "Rajya Sabha",
              "Composition of Lok Sabha",
              "Composition of Rajya Sabha",
              "Speaker",
              "Deputy Speaker",
              "Chairman of Rajya Sabha",
              "Deputy Chairman of Rajya Sabha"
            ]
          },
          {
            "title": "Functioning of Parliament and State Legislatures",
            "points": [
              "Sessions",
              "Summoning",
              "Prorogation",
              "Adjournment",
              "Question Hour",
              "Zero Hour",
              "Motions",
              "Resolutions",
              "Debates",
              "Voting"
            ]
          },
          {
            "title": "Powers of Parliament and State Legislatures",
            "points": [
              "Legislative Powers",
              "Financial Powers",
              "Executive Control",
              "Constitutional Amendment Power",
              "Electoral Functions",
              "Judicial Functions",
              "Deliberative Functions"
            ]
          },
          {
            "title": "Parliamentary Privileges",
            "points": [
              "Freedom of Speech in Legislature",
              "Immunity from Court Proceedings",
              "Right to Regulate Internal Proceedings",
              "Breach of Privilege",
              "Contempt of House",
              "Committee of Privileges"
            ]
          },
          {
            "title": "State Legislature: Structure",
            "points": [
              "Governor",
              "Legislative Assembly",
              "Legislative Council",
              "Speaker of Assembly",
              "Chairman of Legislative Council",
              "Unicameral Legislature",
              "Bicameral Legislature"
            ]
          },
          {
            "title": "Conduct of Business",
            "points": [
              "Rules of Procedure",
              "Business Advisory Committee",
              "Parliamentary Committees",
              "Legislative Procedure",
              "Ordinary Bills",
              "Money Bills",
              "Financial Bills",
              "Constitutional Amendment Bills",
              "Budget Procedure"
            ]
          },
          {
            "title": "Conduct of Business — Issues Arising Out of Legislatures",
            "points": [
              "Decline in Parliamentary Productivity",
              "Frequent Disruptions",
              "Criminalisation of Politics",
              "Money Bill Controversy",
              "Anti-Defection Issues",
              "Weak Committee System",
              "Ordinance Route",
              "Lack of Debate",
              "Declining Standards of Conduct"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "executive-judiciary",
    "label": "Section 06",
    "title": "Executive, Judiciary & Pressure Groups",
    "summary": "Structure, organization and functioning of the Executive and the Judiciary; ministries; pressure groups.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Union Executive",
            "points": [
              "President",
              "Vice-President",
              "Prime Minister",
              "Council of Ministers",
              "Cabinet",
              "Cabinet Committees",
              "Attorney General of India"
            ]
          },
          {
            "title": "Functioning of Executive",
            "points": [
              "Policy Formulation",
              "Policy Implementation",
              "Administrative Decision-Making",
              "Delegated Legislation",
              "Coordination among Ministries",
              "Accountability of Executive",
              "Civil Services"
            ]
          },
          {
            "title": "Judiciary: Structure and Organisation",
            "points": [
              "Supreme Court",
              "High Courts",
              "District Courts",
              "Subordinate Courts",
              "Tribunals",
              "Gram Nyayalayas"
            ]
          },
          {
            "title": "Functioning of Judiciary",
            "points": [
              "Judicial Review",
              "Judicial Activism",
              "Public Interest Litigation",
              "Writ Jurisdiction",
              "Appellate Jurisdiction",
              "Advisory Jurisdiction",
              "Original Jurisdiction",
              "Independence of Judiciary"
            ]
          },
          {
            "title": "Formal and Informal Associations",
            "points": [
              "Formal Associations",
              "Informal Associations",
              "Civil Society Organisations",
              "NGOs",
              "Social Movements",
              "Interest Groups",
              "Community Organisations"
            ]
          },
          {
            "title": "State Executive",
            "points": [
              "Governor",
              "Chief Minister",
              "State Council of Ministers",
              "Advocate General",
              "State Secretariat"
            ]
          },
          {
            "title": "Ministries and Departments of Government",
            "points": [
              "Cabinet Secretariat",
              "Prime Minister’s Office",
              "Central Ministries",
              "Departments",
              "Attached Offices",
              "Subordinate Offices",
              "Regulatory Authorities",
              "Field Organisations"
            ]
          },
          {
            "title": "Ministries and Departments of Government — Issues Related to Judiciary",
            "points": [
              "Judicial Pendency",
              "Judicial Vacancies",
              "Collegium System",
              "Judicial Accountability",
              "Access to Justice",
              "Tribunals and Independence",
              "Judicial Overreach"
            ]
          },
          {
            "title": "Pressure Groups",
            "points": [
              "Meaning of Pressure Groups",
              "Types of Pressure Groups",
              "Business Groups",
              "Trade Unions",
              "Farmers’ Organisations",
              "Student Organisations",
              "Professional Associations",
              "Caste Groups",
              "Religious Groups",
              "Environmental Groups"
            ]
          },
          {
            "title": "Role in Polity",
            "points": [
              "Interest Articulation",
              "Policy Influence",
              "Public Opinion Formation",
              "Representation of Groups",
              "Democratic Participation",
              "Accountability of Government",
              "Pressure Tactics",
              "Lobbying"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "rpa",
    "label": "Section 07",
    "title": "Representation of the People's Act",
    "summary": "Salient features of the Representation of the People's Act.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Representation of the People Act, 1950",
            "points": [
              "Allocation of Seats",
              "Delimitation of Constituencies",
              "Preparation of Electoral Rolls",
              "Qualification of Voters",
              "Election Machinery"
            ]
          },
          {
            "title": "Salient Features",
            "points": [
              "Universal Adult Franchise",
              "Electoral Rolls",
              "Voting Rights",
              "Qualifications for Membership",
              "Disqualifications",
              "Election Expenses",
              "Model Code of Conduct Linkage",
              "Criminalisation of Politics",
              "Electoral Reforms"
            ]
          },
          {
            "title": "Representation of the People Act, 1951",
            "points": [
              "Conduct of Elections",
              "Qualification of Candidates",
              "Disqualification of Candidates",
              "Election Offences",
              "Election Petitions",
              "Corrupt Practices",
              "By-Elections"
            ]
          },
          {
            "title": "Representation of the People Act, 1951 — Issues Related to RPA",
            "points": [
              "Paid News",
              "Money Power",
              "Muscle Power",
              "Hate Speech",
              "False Affidavits",
              "Criminal Candidates",
              "Election Expenditure",
              "Disqualification after Conviction"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "constitutional-bodies",
    "label": "Section 08",
    "title": "Constitutional Posts & Bodies",
    "summary": "Appointment to various constitutional posts, powers, functions and responsibilities of constitutional bodies.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Constitutional Posts",
            "points": [
              "President of India",
              "Vice-President of India",
              "Prime Minister",
              "Governor",
              "Chief Minister",
              "Speaker of Lok Sabha",
              "Speaker of Legislative Assembly",
              "Deputy Speaker",
              "Attorney General of India",
              "Advocate General of State",
              "Comptroller and Auditor General",
              "Election Commissioners",
              "UPSC Chairman and Members",
              "State Public Service Commission Members"
            ]
          },
          {
            "title": "Appointment to Constitutional Posts",
            "points": [
              "Method of Appointment",
              "Eligibility",
              "Tenure",
              "Removal",
              "Oath",
              "Conditions of Service",
              "Independence of Office"
            ]
          },
          {
            "title": "Responsibilities of Constitutional Bodies",
            "points": [
              "Ensuring Free and Fair Elections",
              "Maintaining Financial Accountability",
              "Recruitment to Civil Services",
              "Protecting Vulnerable Sections",
              "Strengthening Federalism",
              "Upholding Constitutional"
            ]
          },
          {
            "title": "Governance — Constitutional Bodies",
            "points": [
              "Election Commission of India",
              "Union Public Service Commission",
              "State Public Service Commission",
              "Finance Commission",
              "Comptroller and Auditor General of India",
              "National Commission for Scheduled Castes",
              "National Commission for Scheduled Tribes",
              "National Commission for Backward Classes",
              "Goods and Services Tax Council",
              "Special Officer for Linguistic Minorities"
            ]
          },
          {
            "title": "Powers and Functions of Constitutional Bodies",
            "points": [
              "Advisory Functions",
              "Regulatory Functions",
              "Audit Functions",
              "Electoral Functions",
              "Recruitment Functions",
              "Financial Devolution",
              "Protection of Rights",
              "Constitutional Safeguards"
            ]
          },
          {
            "title": "Powers and Functions of Constitutional Bodies — Issues Related to Constitutional Bodies",
            "points": [
              "Independence",
              "Appointment Process",
              "Removal Process",
              "Political Interference",
              "Vacancy and Delay",
              "Limited Powers",
              "Accountability",
              "Transparency"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "statutory-bodies",
    "label": "Section 09",
    "title": "Statutory, Regulatory & Quasi-Judicial Bodies",
    "summary": "Statutory, regulatory and various quasi-judicial bodies.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Statutory Bodies",
            "points": [
              "Meaning of Statutory Bodies",
              "Created by Acts of Parliament or State Legislature",
              "National Human Rights Commission",
              "National Commission for Women",
              "National Commission for Minorities",
              "Central Vigilance Commission",
              "Central Information Commission",
              "Lokpal",
              "Lokayukta"
            ]
          },
          {
            "title": "Quasi-Judicial Bodies",
            "points": [
              "Meaning of Quasi-Judicial Bodies",
              "National Green Tribunal",
              "Central Administrative Tribunal",
              "Income Tax Appellate Tribunal",
              "National Company Law Tribunal",
              "Consumer Commissions",
              "Competition Commission of India",
              "Securities Appellate Tribunal"
            ]
          },
          {
            "title": "Quasi-Judicial Bodies — Issues and Challenges",
            "points": [
              "Independence",
              "Overlapping Jurisdiction",
              "Delay in Appointments",
              "Lack of Expertise",
              "Political Interference",
              "Accountability Issues",
              "Tribunalisation of Justice",
              "Pendency of Cases"
            ]
          },
          {
            "title": "Regulatory Bodies",
            "points": [
              "Meaning of Regulatory Bodies",
              "Securities and Exchange Board of India",
              "Reserve Bank of India",
              "Telecom Regulatory Authority of India",
              "Insurance Regulatory and Development Authority of India",
              "Competition Commission of India",
              "Food Safety and Standards Authority of India",
              "Central Electricity Regulatory Commission"
            ]
          },
          {
            "title": "Functions of These Bodies",
            "points": [
              "Regulation",
              "Adjudication",
              "Dispute Resolution",
              "Protection of Rights",
              "Grievance Redressal",
              "Policy Implementation",
              "Monitoring and Enforcement"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "government-policies",
    "label": "Section 10",
    "title": "Government Policies & Interventions",
    "summary": "Government policies and interventions for development in various sectors and issues arising out of their design and implementation.",
    "blocks": [
      {
        "title": "Government Policies – Basics",
        "topics": [
          {
            "title": "Public Policy",
            "points": [
              "Meaning of Public Policy",
              "Need for Public Policy",
              "Policy Cycle",
              "Policy Formulation",
              "Policy Adoption",
              "Policy Implementation",
              "Policy Monitoring",
              "Policy Evaluation",
              "Policy Feedback"
            ]
          },
          {
            "title": "Government Intervention",
            "points": [
              "Meaning of Government Intervention",
              "Constitutional Basis",
              "Welfare State Concept",
              "Inclusive Development",
              "Sustainable Development",
              "Good Governance",
              "Citizen-Centric Governance"
            ]
          },
          {
            "title": "Policy Making Institutions",
            "points": [
              "Parliament",
              "State Legislatures",
              "Union Executive",
              "State Executive",
              "NITI Aayog",
              "Ministries and Departments",
              "Cabinet Committees",
              "Regulatory Bodies",
              "Local Governments"
            ]
          }
        ]
      },
      {
        "title": "Economic Development Policies",
        "topics": [
          {
            "title": "Poverty Alleviation — Policies",
            "points": [
              "MGNREGA",
              "National Rural Livelihood Mission",
              "DAY-NULM",
              "PM Garib Kalyan Initiatives"
            ]
          },
          {
            "title": "Poverty Alleviation — Issues",
            "points": [
              "Identification of Beneficiaries",
              "Fund Constraints",
              "Wage Delays",
              "Corruption",
              "Monitoring Problems"
            ]
          },
          {
            "title": "Employment Generation — Implementation Challenges",
            "points": [
              "Skill Mismatch",
              "Informal Employment",
              "Quality of Jobs"
            ]
          },
          {
            "title": "Industrial Development — Policies",
            "points": [
              "Make in India",
              "Production Linked Incentive (PLI)",
              "Industrial Corridors",
              "Ease of Doing Business",
              "Startup Ecosystem"
            ]
          },
          {
            "title": "Industrial Development — Issues",
            "points": [
              "Land Acquisition",
              "Infrastructure Gaps",
              "Regulatory Bottlenecks",
              "Investment Constraints",
              "MSME Challenges"
            ]
          }
        ]
      },
      {
        "title": "Agriculture and Rural Development",
        "topics": [
          {
            "title": "Agricultural Policies — Interventions",
            "points": [
              "e-NAM",
              "MSP System",
              "Agriculture Infrastructure Fund"
            ]
          },
          {
            "title": "Agricultural Policies — Issues",
            "points": [
              "Small Land Holdings",
              "Low Productivity",
              "Market Distortions",
              "Climate Vulnerability",
              "Storage Deficiencies"
            ]
          }
        ]
      },
      {
        "title": "Digital Governance Policies",
        "topics": [
          {
            "title": "E-Governance — Initiatives",
            "points": [
              "Digital India"
            ]
          },
          {
            "title": "E-Governance — Challenges",
            "points": [
              "Digital Divide",
              "Cyber Security",
              "Data Privacy",
              "Connectivity Issues"
            ]
          },
          {
            "title": "Digital Economy — Policies",
            "points": [
              "India Stack",
              "ONDC",
              "UPI Ecosystem",
              "Digital Public Infrastructure"
            ]
          },
          {
            "title": "Digital Economy — Issues",
            "points": [
              "Data Protection",
              "Competition Issues",
              "Technology Access"
            ]
          }
        ]
      },
      {
        "title": "Governance Reforms",
        "topics": [
          {
            "title": "Administrative Reforms — Areas",
            "points": [
              "Civil Service Reforms",
              "Mission Karmayogi",
              "Performance-Based Governance",
              "Citizen Charters"
            ]
          },
          {
            "title": "Administrative Reforms — Issues",
            "points": [
              "Bureaucratic Delays",
              "Capacity Deficits",
              "Accountability Issues"
            ]
          },
          {
            "title": "Transparency and Accountability — Mechanisms",
            "points": [
              "Right to Information Act",
              "Social Audit",
              "Citizen Participation",
              "E-Governance Tools"
            ]
          },
          {
            "title": "Transparency and Accountability — Challenges",
            "points": [
              "Information Gaps",
              "Weak Enforcement",
              "Corruption",
              "Institutional Capacity Issues"
            ]
          }
        ]
      },
      {
        "title": "Social Sector Policies",
        "topics": [
          {
            "title": "Education Sector — Policy Framework",
            "points": [
              "Right to Education Act (RTE)",
              "National Education Policy (NEP)",
              "Digital Education Initiatives"
            ]
          },
          {
            "title": "Education Sector — Issues in Design and Implementation",
            "points": [
              "Learning Outcomes",
              "School Dropouts",
              "Teacher Shortage",
              "Digital Divide",
              "Regional Disparities",
              "Higher Education Quality",
              "Employability Issues"
            ]
          },
          {
            "title": "Health Sector",
            "points": [
              "National Health Policy",
              "Ayushman Bharat",
              "Health and Wellness Centres",
              "National Health Mission",
              "Universal Health Coverage"
            ]
          },
          {
            "title": "Health Sector — Implementation Challenges",
            "points": [
              "Low Public Health Expenditure",
              "Doctor-Population Ratio",
              "Rural Health Infrastructure",
              "Shortage of Medical Staff",
              "Healthcare Accessibility",
              "Disease Surveillance Issues"
            ]
          },
          {
            "title": "Nutrition and Food Security — Policies",
            "points": [
              "National Food Security Act (NFSA)",
              "Public Distribution System (PDS) Issues",
              "Leakages",
              "Exclusion Errors",
              "Malnutrition",
              "Anaemia",
              "Food Storage Issues",
              "Targeting Problems"
            ]
          },
          {
            "title": "Women and Child Development — Government Interventions",
            "points": [
              "Beti Bachao Beti Padhao",
              "Mission Shakti",
              "One Stop Centres",
              "PM Matru Vandana Yojana",
              "Child Protection Schemes"
            ]
          },
          {
            "title": "Women and Child Development — Challenges",
            "points": [
              "Gender Inequality",
              "Child Marriage",
              "Women Safety",
              "Low Workforce Participation",
              "Implementation Gaps"
            ]
          },
          {
            "title": "MSME Sector — Government Initiatives",
            "points": [
              "Udyam Registration",
              "Credit Guarantee Schemes",
              "Emergency Credit Line Guarantee Scheme",
              "Cluster Development Programmes"
            ]
          },
          {
            "title": "MSME Sector — Challenges",
            "points": [
              "Access to Credit",
              "Technology Gap",
              "Market Access Issues",
              "Compliance Burden"
            ]
          },
          {
            "title": "Rural Development — Schemes",
            "points": [
              "Rural Housing Schemes",
              "Rural Electrification"
            ]
          },
          {
            "title": "Rural Development — Challenges",
            "points": [
              "Regional Disparities",
              "Fund Utilisation Issues",
              "Lack of Convergence",
              "Rural Migration"
            ]
          }
        ]
      },
      {
        "title": "Urban Development Policies",
        "topics": [
          {
            "title": "Urban Governance — Schemes",
            "points": [
              "Smart Cities Mission",
              "AMRUT",
              "PMAY-Urban",
              "Swachh Bharat Mission (Urban)"
            ]
          },
          {
            "title": "Urban Governance — Issues",
            "points": [
              "Urban Planning Deficit",
              "Housing Shortage",
              "Slum Growth",
              "Waste Management",
              "Urban Flooding"
            ]
          }
        ]
      },
      {
        "title": "Infrastructure Development Policies",
        "topics": [
          {
            "title": "Transport Infrastructure — Issues",
            "points": [
              "Land Acquisition",
              "Cost Overruns",
              "Delays in Execution",
              "Environmental Concerns"
            ]
          }
        ]
      },
      {
        "title": "Environment And Climate Policies",
        "topics": [
          {
            "title": "Environmental Governance — Policies",
            "points": [
              "National Action Plan on Climate Change",
              "Green India Mission",
              "National Clean Air Programme",
              "CAMPA"
            ]
          },
          {
            "title": "Environmental Governance — Implementation Issues",
            "points": [
              "Enforcement Deficit",
              "Coordination Problems",
              "Funding Issues",
              "Monitoring Challenges"
            ]
          },
          {
            "title": "Disaster Management — Policies",
            "points": [
              "Disaster Management Act, 2005",
              "National Disaster Management Authority",
              "State Disaster Management Authorities"
            ]
          },
          {
            "title": "Disaster Management — Issues",
            "points": [
              "Preparedness Gaps",
              "Early Warning Dissemination",
              "Capacity Constraints"
            ]
          }
        ]
      },
      {
        "title": "Issues Arising Out of Policy Design and Implementation",
        "topics": [
          {
            "title": "Policy Design Issues",
            "points": [
              "Poor Problem Identification",
              "Weak Data Support",
              "Inadequate Consultation",
              "One-Size-Fits-All Approach",
              "Lack of Evidence-Based Planning"
            ]
          },
          {
            "title": "Policy Design Issues — Monitoring and Evaluation Issues",
            "points": [
              "Weak Outcome Measurement",
              "Poor Impact Assessment",
              "Data Quality Issues",
              "Delayed Feedback Mechanisms"
            ]
          },
          {
            "title": "Policy Design Issues — Governance Challenges",
            "points": [
              "Transparency Deficit",
              "Accountability Deficit",
              "Citizen Awareness Issues",
              "Exclusion Errors",
              "Inclusion Errors",
              "Regional Disparities",
              "Last-Mile Delivery Problems"
            ]
          },
          {
            "title": "Policy Design Issues — Policy Implementation Issues",
            "points": [
              "Administrative Bottlenecks",
              "Capacity Constraints",
              "Fund Utilisation Problems",
              "Centre-State Coordination Issues",
              "Inter-Departmental Coordination Problems"
            ]
          },
          {
            "title": "Emerging Themes for GOVERNANCE",
            "points": [
              "Cooperative Federalism",
              "Competitive Federalism",
              "Digital Governance",
              "Citizen-Centric Governance",
              "Outcome-Based Governance",
              "Sustainable Development",
              "Inclusive Development",
              "Ease of Living",
              "Minimum Government, Maximum Governance",
              "Good Governance Principles"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "welfare-schemes",
    "label": "Section 11",
    "title": "Welfare Schemes for Vulnerable Sections",
    "summary": "Welfare schemes for vulnerable sections of the population by the Centre and States and the performance of these schemes.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Vulnerable Sections – Concept — Socially Vulnerable Groups",
            "points": [
              "Women",
              "Children",
              "Elderly Persons",
              "Persons with Disabilities (PwDs)",
              "Transgender Persons",
              "Orphans",
              "Destitute Persons"
            ]
          },
          {
            "title": "Economically Vulnerable Groups",
            "points": [
              "Poor Households",
              "Urban Poor",
              "Rural Poor",
              "Homeless Persons",
              "Informal Workers",
              "Migrant Workers"
            ]
          },
          {
            "title": "Socially Marginalized Groups",
            "points": [
              "Scheduled Castes (SCs)",
              "Scheduled Tribes (STs)",
              "Other Backward Classes (OBCs)",
              "Minorities",
              "Particularly Vulnerable Tribal Groups (PVTGs)",
              "Denotified Tribes"
            ]
          }
        ]
      },
      {
        "title": "Welfare Schemes for Women",
        "topics": [
          {
            "title": "Protection and Empowerment",
            "points": []
          },
          {
            "title": "Maternal Welfare",
            "points": []
          },
          {
            "title": "Economic Empowerment",
            "points": []
          }
        ]
      },
      {
        "title": "Welfare Schemes for Children",
        "topics": [
          {
            "title": "Child Protection",
            "points": []
          },
          {
            "title": "Child Nutrition",
            "points": []
          },
          {
            "title": "Integrated Child Development Services (ICDS)",
            "points": []
          },
          {
            "title": "Child Education",
            "points": []
          }
        ]
      },
      {
        "title": "Welfare Schemes for SCs, STs and OBCs",
        "topics": [
          {
            "title": "Scheduled Castes",
            "points": []
          },
          {
            "title": "Scheduled Tribes",
            "points": []
          },
          {
            "title": "OBC Welfare",
            "points": []
          }
        ]
      },
      {
        "title": "Welfare Schemes for Migrant and Unorganised Workers",
        "topics": [
          {
            "title": "Workers Welfare Schemes",
            "points": []
          }
        ]
      },
      {
        "title": "Institutions and Bodies for Protection of Vulnerable Sections",
        "topics": [
          {
            "title": "Constitutional Bodies",
            "points": [
              "National Commission for Scheduled Castes (NCSC)",
              "National Commission for Scheduled Tribes (NCST)",
              "National Commission for Backward Classes (NCBC)"
            ]
          },
          {
            "title": "Statutory Bodies",
            "points": [
              "National Human Rights Commission (NHRC)",
              "National Commission for Women (NCW)",
              "National Commission for Protection of Child Rights (NCPCR)",
              "National Commission for Minorities (NCM)",
              "Chief Commissioner for Persons with Disabilities"
            ]
          },
          {
            "title": "Government Ministries",
            "points": [
              "Ministry of Women and Child Development",
              "Ministry of Social Justice and Empowerment",
              "Ministry of Tribal Affairs",
              "Ministry of Minority Affairs",
              "Ministry of Labour and Employment"
            ]
          },
          {
            "title": "Success Indicators",
            "points": [
              "Coverage of Beneficiaries",
              "Financial Inclusion",
              "Direct Benefit Transfer (DBT)",
              "Reduction in Leakages",
              "Improved Service Delivery",
              "Social Inclusion",
              "Gender Empowerment"
            ]
          },
          {
            "title": "Major Challenges",
            "points": [
              "Exclusion Errors",
              "Inclusion Errors",
              "Identification Problems",
              "Digital Divide",
              "Awareness Deficit",
              "Corruption and Leakages",
              "Weak Monitoring Mechanisms",
              "Regional Disparities",
              "Last-Mile Delivery Issues"
            ]
          }
        ]
      },
      {
        "title": "Mechanisms for Protection of Vulnerable Sections",
        "topics": [
          {
            "title": "Constitutional Mechanisms — Fundamental Rights",
            "points": [
              "Right to Equality",
              "Right against Discrimination",
              "Right against Exploitation"
            ]
          },
          {
            "title": "Constitutional Mechanisms — Directive Principles",
            "points": [
              "Social Justice",
              "Welfare State",
              "Equal Pay for Equal Work",
              "Protection of Children and Women"
            ]
          },
          {
            "title": "Constitutional Mechanisms — Protective Provisions",
            "points": [
              "Reservation Policies",
              "Educational Safeguards",
              "Political Representation"
            ]
          }
        ]
      },
      {
        "title": "Laws for Protection of Vulnerable Sections",
        "topics": [
          {
            "title": "Women",
            "points": [
              "Protection of Women from Domestic Violence Act, 2005",
              "Dowry Prohibition Act, 1961",
              "Sexual Harassment of Women at Workplace Act, 2013",
              "Prohibition of Child Marriage Act, 2006"
            ]
          },
          {
            "title": "Children",
            "points": [
              "Juvenile Justice Act, 2015",
              "POCSO Act, 2012",
              "Right to Education Act, 2009",
              "Child Labour Act"
            ]
          },
          {
            "title": "SCs and STs",
            "points": [
              "SC/ST (Prevention of Atrocities) Act, 1989",
              "Forest Rights Act, 2006",
              "Panchayats (Extension to Scheduled Areas) Act, 1996 (PESA)"
            ]
          },
          {
            "title": "Minorities",
            "points": [
              "National Commission for Minorities Act, 1992",
              "Wakf Act"
            ]
          },
          {
            "title": "Persons with Disabilities",
            "points": [
              "Rights of Persons with Disabilities Act, 2016"
            ]
          },
          {
            "title": "Senior Citizens",
            "points": [
              "Maintenance and Welfare of Parents and Senior Citizens Act, 2007"
            ]
          },
          {
            "title": "Transgender Persons",
            "points": [
              "Transgender Persons (Protection of Rights) Act, 2019"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "social-sector",
    "label": "Section 12",
    "title": "Social Sector — Health, Education & Human Resources",
    "summary": "Issues relating to development and management of Social Sector/Services relating to Health, Education, Human Resources.",
    "blocks": [
      {
        "title": "Health",
        "topics": [
          {
            "title": "Health Infrastructure",
            "points": [
              "Primary Healthcare",
              "Secondary Healthcare",
              "Tertiary Healthcare",
              "Public Health System",
              "Private Health Sector"
            ]
          },
          {
            "title": "Health Policies",
            "points": [
              "National Health Policy",
              "Ayushman Bharat",
              "PM-JAY",
              "Health and Wellness Centres",
              "National Health Mission"
            ]
          },
          {
            "title": "Health Policies — Public Health Issues",
            "points": [
              "Malnutrition",
              "Maternal Mortality",
              "Infant Mortality",
              "Communicable Diseases",
              "Non-Communicable Diseases",
              "Mental Health",
              "Geriatric Care",
              "Antimicrobial Resistance"
            ]
          },
          {
            "title": "Health Policies — Health Governance Issues",
            "points": [
              "Low Public Expenditure on Health",
              "Shortage of Doctors",
              "Shortage of Nurses",
              "Rural Health Deficit",
              "Urban Health Challenges",
              "Health Insurance Coverage",
              "Health Workforce Issues"
            ]
          }
        ]
      },
      {
        "title": "Education",
        "topics": [
          {
            "title": "School Education",
            "points": [
              "Universal Education",
              "Foundational Literacy and Numeracy",
              "School Infrastructure",
              "Teacher Education"
            ]
          },
          {
            "title": "Higher Education",
            "points": [
              "Universities",
              "Research and Innovation",
              "Accreditation",
              "Higher Education Governance"
            ]
          },
          {
            "title": "Education Policies",
            "points": [
              "National Education Policy 2020",
              "Samagra Shiksha",
              "PM SHRI Schools",
              "Digital Education"
            ]
          },
          {
            "title": "Education Policies — Education Issues",
            "points": [
              "Learning Outcomes",
              "Dropout Rates",
              "Digital Divide",
              "Teacher Shortage",
              "Employability Crisis",
              "Regional Disparities",
              "Quality of Education"
            ]
          }
        ]
      },
      {
        "title": "Human Resources",
        "topics": [
          {
            "title": "Human Capital",
            "points": [
              "Human Resource Development",
              "Human Capital Formation",
              "Demographic Dividend",
              "Productivity Enhancement"
            ]
          },
          {
            "title": "Skill Development — Employment Issues",
            "points": [
              "Unemployment",
              "Underemployment",
              "Informal Employment",
              "Female Labour Force Participation",
              "Skill Mismatch"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "poverty-hunger",
    "label": "Section 13",
    "title": "Poverty and Hunger",
    "summary": "Issues relating to poverty and hunger.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Poverty – Concepts",
            "points": [
              "Absolute Poverty",
              "Relative Poverty",
              "Multidimensional Poverty",
              "Poverty Line"
            ]
          },
          {
            "title": "Measurement of Poverty",
            "points": [
              "Tendulkar Committee",
              "Rangarajan Committee",
              "Multidimensional Poverty Index (MPI)"
            ]
          },
          {
            "title": "Causes of Poverty — Poverty Challenges",
            "points": [
              "Urban Poverty",
              "Rural Poverty",
              "Feminisation of Poverty",
              "Child Poverty",
              "Regional Imbalances"
            ]
          }
        ]
      },
      {
        "title": "Current Themes",
        "topics": [
          {
            "title": "Overview",
            "points": [
              "Social Justice",
              "Inclusive Development",
              "Human Development",
              "Human Capital Formation",
              "Demographic Dividend",
              "Gender Empowerment",
              "Nutrition Security",
              "Universal Health Coverage",
              "Learning Outcomes",
              "Skill Development",
              "Social Protection Systems",
              "Direct Benefit Transfer (DBT)",
              "Aspirational Districts Programme",
              "SDGs Related to Poverty, Hunger, Health and Education"
            ]
          }
        ]
      },
      {
        "title": "Issues Relating to Hunger",
        "topics": [
          {
            "title": "Food Security",
            "points": [
              "Availability",
              "Accessibility",
              "Affordability",
              "Nutritional Security"
            ]
          },
          {
            "title": "Hunger and Malnutrition",
            "points": [
              "Child Malnutrition",
              "Stunting",
              "Wasting",
              "Underweight Children",
              "Anaemia",
              "Hidden Hunger"
            ]
          },
          {
            "title": "Food Security Mechanisms",
            "points": [
              "National Food Security Act (NFSA), 2013",
              "Public Distribution System (PDS)",
              "Targeted Public Distribution System (TPDS)",
              "One Nation One Ration Card",
              "Buffer Stocking"
            ]
          },
          {
            "title": "Nutrition Programmes — Hunger-Related Reports and Indices",
            "points": [
              "Global Hunger Index (GHI)",
              "State of Food Security and Nutrition Report (SOFI)",
              "National Family Health Survey (NFHS)"
            ]
          },
          {
            "title": "Nutrition Programmes — Challenges",
            "points": [
              "Leakages in PDS and Nutritional Deficiency",
              "Climate Change Impact on Food Security",
              "Agricultural Distress",
              "Supply Chain Disruptions"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "governance",
    "label": "Section 14",
    "title": "Governance, Transparency, Accountability & E-Governance",
    "summary": "Important aspects of governance, transparency and accountability, e-governance, citizens charters, and role of civil services.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Governance – Basics",
            "points": [
              "Meaning of Governance",
              "Government vs Governance",
              "Good Governance",
              "Democratic Governance",
              "Participatory Governance",
              "Citizen-Centric Governance",
              "Responsive Governance",
              "Inclusive Governance",
              "Collaborative Governance",
              "Network Governance"
            ]
          },
          {
            "title": "Principles of Good Governance",
            "points": [
              "Transparency",
              "Accountability",
              "Rule of Law",
              "Participation",
              "Responsiveness",
              "Consensus Orientation",
              "Equity and Inclusiveness",
              "Effectiveness and Efficiency",
              "Strategic Vision",
              "Predictability"
            ]
          },
          {
            "title": "Dimensions of Governance — Political Governance",
            "points": [
              "Democratic Institutions",
              "Elections",
              "Political Participation"
            ]
          },
          {
            "title": "Administrative Governance",
            "points": [
              "Public Administration",
              "Service Delivery",
              "Bureaucracy"
            ]
          },
          {
            "title": "Economic Governance",
            "points": [
              "Economic Policies",
              "Regulatory Framework",
              "Market Governance"
            ]
          },
          {
            "title": "Social Governance",
            "points": [
              "Welfare Delivery",
              "Social Justice",
              "Human Development"
            ]
          }
        ]
      },
      {
        "title": "Institutional Measures for Transparency & Accountability",
        "topics": [
          {
            "title": "Constitutional Bodies",
            "points": [
              "Comptroller and Auditor General (CAG)",
              "Election Commission of India (ECI)",
              "Finance Commission",
              "UPSC"
            ]
          },
          {
            "title": "Statutory Bodies",
            "points": [
              "Central Vigilance Commission (CVC)",
              "Central Information Commission (CIC)",
              "Lokpal",
              "Lokayuktas",
              "National Human Rights Commission (NHRC)"
            ]
          },
          {
            "title": "Regulatory Bodies",
            "points": [
              "SEBI",
              "RBI",
              "TRAI",
              "IRDAI",
              "Competition Commission of India"
            ]
          },
          {
            "title": "Anti-Corruption Mechanisms",
            "points": [
              "Prevention of Corruption Act",
              "Vigilance Framework",
              "Whistle Blower Protection Act",
              "Benami Transactions Act",
              "Prevention of Money Laundering Act (PMLA)"
            ]
          }
        ]
      },
      {
        "title": "E-Governance",
        "topics": [
          {
            "title": "Overview",
            "points": [
              "Meaning of E-Governance",
              "Objectives of E-Governance",
              "Digital Governance",
              "SMART Governance",
              "Good Governance through ICT"
            ]
          },
          {
            "title": "Evolution of E-Governance in India",
            "points": [
              "National e-Governance Plan (NeGP)",
              "Digital India Programme",
              "Digital Public Infrastructure"
            ]
          }
        ]
      },
      {
        "title": "Applications of E-Governance",
        "topics": [
          {
            "title": "Government to Citizen (G2C) — Service Delivery Models",
            "points": [
              "Centralised Model",
              "Decentralised Model",
              "Integrated Model",
              "Mobile Governance (m-Governance)",
              "Cloud Governance"
            ]
          }
        ]
      },
      {
        "title": "Successes of E-Governance",
        "topics": [
          {
            "title": "Overview",
            "points": [
              "Improved Service Delivery",
              "Reduction in Corruption",
              "Transparency Enhancement",
              "Time Efficiency",
              "Cost Reduction",
              "Financial Inclusion",
              "Direct Benefit Transfer Success",
              "Improved Citizen Participation",
              "Better Data-Based Governance"
            ]
          }
        ]
      },
      {
        "title": "Grievance Redressal Mechanisms",
        "topics": [
          {
            "title": "Administrative Mechanisms",
            "points": [
              "CPGRAMS",
              "Public Grievance Portals",
              "Departmental Grievance Cells"
            ]
          },
          {
            "title": "Statutory Mechanisms",
            "points": [
              "Lokpal",
              "Lokayukta",
              "Information Commissions",
              "Consumer Forums"
            ]
          },
          {
            "title": "Judicial Mechanisms",
            "points": [
              "Courts",
              "Tribunals",
              "Ombudsman Institutions"
            ]
          }
        ]
      },
      {
        "title": "Other Measures for Transparency and Accountability",
        "topics": [
          {
            "title": "Overview",
            "points": [
              "Social Audit",
              "Citizen Report Cards",
              "Community Monitoring",
              "Public Hearings (Jan Sunwai)",
              "Participatory Budgeting",
              "Performance Audits",
              "Outcome Budgeting",
              "Third Party Evaluation",
              "Open Data Platforms"
            ]
          },
          {
            "title": "Governance Reforms in India",
            "points": [
              "Administrative Reforms Commissions",
              "Mission Karmayogi",
              "Sevottam Model",
              "Citizen-Centric Administration",
              "Digital Governance Reforms",
              "Minimum Government Maximum Governance"
            ]
          }
        ]
      },
      {
        "title": "Transparency In Governance",
        "topics": [
          {
            "title": "Overview",
            "points": [
              "Meaning of Transparency",
              "Importance of Transparency",
              "Open Government",
              "Access to Information",
              "Public Disclosure",
              "Right to Information (RTI)",
              "Open Data Initiatives",
              "Public Disclosure Laws",
              "Proactive Disclosure",
              "Social Audits",
              "Public Consultations",
              "Open Government Data Platform"
            ]
          },
          {
            "title": "Right to Information Act, 2005 — Background",
            "points": [
              "Freedom of Information Movement",
              "Evolution of RTI"
            ]
          },
          {
            "title": "Right to Information Act, 2005 — Provisions",
            "points": [
              "Right to Information",
              "Public Authorities",
              "Public Information Officers",
              "Information Commissions",
              "Appeals and Penalties"
            ]
          },
          {
            "title": "Right to Information Act, 2005 — Exemptions",
            "points": [
              "National Security",
              "Sovereignty and Integrity",
              "Cabinet Papers",
              "Personal Information"
            ]
          },
          {
            "title": "Right to Information Act, 2005 — Issues",
            "points": [
              "Pendency",
              "Vacancies in Information Commissions",
              "Misuse of Exemptions",
              "RTI Amendments"
            ]
          }
        ]
      },
      {
        "title": "Accountability In Governance",
        "topics": [
          {
            "title": "Overview",
            "points": [
              "Meaning of Accountability",
              "Administrative Accountability",
              "Political Accountability",
              "Legal Accountability",
              "Financial Accountability",
              "Social Accountability"
            ]
          },
          {
            "title": "Types of Accountability — Political Accountability",
            "points": [
              "Parliament",
              "State Legislatures",
              "Elections"
            ]
          },
          {
            "title": "Administrative Accountability",
            "points": [
              "Departmental Control",
              "Performance Evaluation",
              "Conduct Rules"
            ]
          },
          {
            "title": "Judicial Accountability",
            "points": [
              "Judicial Review",
              "Constitutional Remedies"
            ]
          },
          {
            "title": "Financial Accountability",
            "points": [
              "Audit",
              "Public Expenditure Review"
            ]
          },
          {
            "title": "Social Accountability",
            "points": [
              "Social Audits",
              "Citizen Participation"
            ]
          },
          {
            "title": "Accountability Mechanisms — Parliamentary Mechanisms",
            "points": [
              "Question Hour",
              "Zero Hour",
              "Motions",
              "Parliamentary Committees"
            ]
          },
          {
            "title": "Executive Mechanisms",
            "points": [
              "Vigilance Systems",
              "Departmental Enquiries",
              "Internal Audits"
            ]
          },
          {
            "title": "Judicial Mechanisms",
            "points": [
              "Judicial Review",
              "Public Interest Litigation"
            ]
          },
          {
            "title": "Citizen-Based Mechanisms",
            "points": [
              "RTI",
              "Social Audit",
              "Public Hearings",
              "Grievance Redressal Systems"
            ]
          }
        ]
      },
      {
        "title": "Citizens’ Charter",
        "topics": [
          {
            "title": "Concept",
            "points": [
              "Meaning of Citizens’ Charter",
              "Origin (UK Citizen’s Charter Movement)",
              "Need for Citizens’ Charter"
            ]
          },
          {
            "title": "Components of Citizens’ Charter",
            "points": [
              "Vision and Mission",
              "Service Standards",
              "Time Limits",
              "Grievance Redressal",
              "Accountability Framework",
              "Citizen Expectations"
            ]
          },
          {
            "title": "Components of Citizens’ Charter — Principles",
            "points": [
              "Transparency",
              "Accountability",
              "Participation",
              "Quality Service Delivery",
              "Non-Discrimination"
            ]
          },
          {
            "title": "Components of Citizens’ Charter — Issues in Citizens’ Charter",
            "points": [
              "Non-Enforceability",
              "Lack of Awareness",
              "Poor Monitoring",
              "Absence of Penalties",
              "Weak Feedback Systems"
            ]
          }
        ]
      },
      {
        "title": "Role of Civil Services in a Democracy",
        "topics": [
          {
            "title": "Civil Services – Concept",
            "points": [
              "Meaning of Civil Services",
              "Permanent Executive",
              "Neutral Administration",
              "Professional Bureaucracy"
            ]
          },
          {
            "title": "Role in Democracy",
            "points": [
              "Political Neutrality",
              "Continuity in Administration",
              "Rule of Law",
              "Public Welfare",
              "Citizen Service Delivery",
              "Democratic Accountability",
              "Nation Building",
              "Social Justice",
              "Inclusive Development",
              "Good Governance"
            ]
          },
          {
            "title": "Civil Services and Development Administration",
            "points": [
              "Poverty Alleviation Programmes",
              "Welfare Scheme Implementation",
              "Health Programmes",
              "Education Programmes",
              "Infrastructure Development",
              "Disaster Management",
              "Rural Development",
              "Urban Governance"
            ]
          },
          {
            "title": "Civil Service Reforms — Administrative Reforms Commission Recommendations",
            "points": [
              "Ethics in Governance",
              "Citizen-Centric Administration",
              "Performance Management"
            ]
          },
          {
            "title": "Mission Karmayogi",
            "points": [
              "Capacity Building",
              "Competency-Based Training",
              "Digital Learning Platform"
            ]
          },
          {
            "title": "Challenges before Civil Services",
            "points": [
              "Political Interference",
              "Corruption",
              "Red Tapism",
              "Lack of Specialisation",
              "Frequent Transfers",
              "Accountability Deficit",
              "Capacity Constraints",
              "Technology Adaptation Issues",
              "Citizen Expectations"
            ]
          },
          {
            "title": "Constitutional Basis",
            "points": [
              "Part XIV of Constitution",
              "Articles 308–323",
              "UPSC",
              "State Public Service Commissions",
              "All India Services"
            ]
          },
          {
            "title": "Structure of Civil Services — Central Civil Services",
            "points": [
              "Group A Services",
              "Group B Services"
            ]
          },
          {
            "title": "State Civil Services",
            "points": [
              "State Administrative Services",
              "State Police Services"
            ]
          },
          {
            "title": "Functions of Civil Services — Policy Functions",
            "points": [
              "Policy Formulation Support",
              "Policy Advice",
              "Policy Analysis"
            ]
          },
          {
            "title": "Administrative Functions",
            "points": [
              "Policy Implementation",
              "Programme Execution",
              "Public Service Delivery"
            ]
          },
          {
            "title": "Development Functions",
            "points": [
              "Welfare Administration",
              "Rural Development",
              "Social Sector Delivery",
              "Economic Development"
            ]
          },
          {
            "title": "Regulatory Functions",
            "points": [
              "Law and Order",
              "Revenue Administration",
              "Regulatory Enforcement"
            ]
          },
          {
            "title": "Coordination Functions",
            "points": [
              "Centre-State Coordination",
              "Inter-Departmental Coordination",
              "Crisis Management"
            ]
          },
          {
            "title": "Emerging Areas",
            "points": [
              "Digital Governance",
              "Artificial Intelligence in"
            ]
          },
          {
            "title": "Administration",
            "points": [
              "Data Governance",
              "Cyber Security Governance",
              "Climate Governance",
              "Disaster Governance",
              "Outcome-Based Administration",
              "Participatory Governance"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "india-neighbourhood",
    "label": "Section 15",
    "title": "India and Its Neighbourhood",
    "summary": "India and its neighbourhood — relations.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "India’s Neighbourhood Policy",
            "points": [
              "Neighbourhood First Policy",
              "Strategic Importance of Neighbourhood",
              "India’s Civilisational Links",
              "Border Management",
              "Connectivity",
              "Trade Relations",
              "Security Cooperation",
              "Development Assistance",
              "Humanitarian Assistance",
              "Disaster Relief"
            ]
          },
          {
            "title": "India-Pakistan Relations",
            "points": []
          },
          {
            "title": "India-China Relations",
            "points": []
          },
          {
            "title": "India-Nepal Relations",
            "points": []
          },
          {
            "title": "India-Bhutan Relations",
            "points": []
          },
          {
            "title": "India-Bangladesh Relations",
            "points": []
          },
          {
            "title": "India-Sri Lanka Relations",
            "points": []
          },
          {
            "title": "India-Maldives Relations",
            "points": []
          },
          {
            "title": "India-Myanmar Relations",
            "points": []
          },
          {
            "title": "India-Afghanistan Relations",
            "points": []
          }
        ]
      }
    ]
  },
  {
    "id": "bilateral-regional-global",
    "label": "Section 16",
    "title": "Bilateral, Regional & Global Groupings",
    "summary": "Bilateral, regional and global groupings and agreements involving India and/or affecting India's interests.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Bilateral Relations of India",
            "points": [
              "India-USA Relations",
              "India-Russia Relations",
              "India-France Relations",
              "India-Japan Relations",
              "India-Australia Relations",
              "India-UK Relations",
              "India-Germany Relations",
              "India-Israel Relations",
              "India-Iran Relations",
              "India-UAE Relations",
              "India-Saudi Arabia Relations",
              "India-Africa Relations",
              "India-Latin America Relations"
            ]
          }
        ]
      },
      {
        "title": "Global Agreements and Arrangements Affecting India",
        "topics": [
          {
            "title": "Trade Agreements — Cooperation Agreement",
            "points": [
              "Regional Trade Agreements"
            ]
          },
          {
            "title": "Climate Agreements",
            "points": [
              "UNFCCC",
              "Kyoto Protocol",
              "Paris Agreement",
              "Nationally Determined Contributions",
              "Climate Finance",
              "Loss and Damage Fund",
              "Common But Differentiated"
            ]
          },
          {
            "title": "Maritime Agreements",
            "points": [
              "UNCLOS",
              "Freedom of Navigation",
              "Exclusive Economic Zone",
              "Continental Shelf",
              "Maritime Boundary Agreements",
              "Anti-Piracy Cooperation"
            ]
          }
        ]
      },
      {
        "title": "Quad",
        "topics": [
          {
            "title": "I2U2",
            "points": []
          },
          {
            "title": "G20",
            "points": []
          },
          {
            "title": "G7",
            "points": []
          }
        ]
      },
      {
        "title": "Ibsa",
        "topics": [
          {
            "title": "Indian Ocean Rim Association — Nuclear Agreements and Regimes",
            "points": [
              "Nuclear Non-Proliferation Treaty",
              "Comprehensive Test Ban Treaty",
              "Nuclear Suppliers Group",
              "Missile Technology Control Regime",
              "Wassenaar Arrangement",
              "Australia Group",
              "India-US Civil Nuclear Agreement"
            ]
          },
          {
            "title": "Security and Defence Agreements",
            "points": [
              "LEMOA",
              "COMCASA",
              "BECA",
              "Defence Logistics Agreements",
              "Joint Military Exercises",
              "Defence Technology Cooperation"
            ]
          },
          {
            "title": "Technology and Digital Agreements",
            "points": [
              "Cyber Security Cooperation",
              "Digital Public Infrastructure",
              "Data Governance",
              "AI Governance",
              "Semiconductor Cooperation",
              "Critical and Emerging Technologies"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "effect-of-policies",
    "label": "Section 17",
    "title": "Effect of Policies of Other Countries",
    "summary": "Effect of policies and politics of developed and developing countries on India's interests.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Policies of Developed Countries Affecting India",
            "points": [
              "US Foreign Policy",
              "European Union Policies",
              "China’s Rise",
              "Russia-West Conflict",
              "Immigration Policies",
              "Trade Protectionism",
              "Technology Sanctions",
              "Climate Policies",
              "Carbon Border Adjustment"
            ]
          },
          {
            "title": "Mechanism — Policies of Developing Countries Affecting India",
            "points": [
              "China’s Belt and Road Initiative",
              "Pakistan’s Security Policy",
              "Sri Lanka’s China Policy",
              "Nepal’s Balancing Policy",
              "Maldives’ Foreign Policy Shifts",
              "Myanmar’s Internal Politics",
              "West Asian Conflicts",
              "African Resource Politics"
            ]
          },
          {
            "title": "Global Political Developments Affecting India",
            "points": [
              "Russia-Ukraine War",
              "Israel-Palestine Conflict",
              "Red Sea Crisis",
              "South China Sea Dispute",
              "Taliban Rule in Afghanistan",
              "US-China Rivalry",
              "China-Taiwan Tensions",
              "Global Supply Chain Disruptions"
            ]
          },
          {
            "title": "Impact on India’s Interests",
            "points": [
              "National Security",
              "Energy Security",
              "Food Security",
              "Trade Interests",
              "Maritime Security",
              "Indian Ocean Security",
              "Border Security",
              "Diaspora Safety",
              "Technology Access",
              "Defence Procurement",
              "Climate Commitments"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "indian-diaspora",
    "label": "Section 18",
    "title": "Indian Diaspora",
    "summary": "Indian diaspora — importance, issues, and government initiatives.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Overview",
            "points": [
              "Meaning of Diaspora",
              "Non-Resident Indians",
              "Persons of Indian Origin",
              "Overseas Citizens of India",
              "Global Distribution of Indian Diaspora"
            ]
          },
          {
            "title": "Importance of Indian Diaspora",
            "points": [
              "Remittances",
              "Soft Power",
              "Cultural Diplomacy",
              "Political Influence",
              "Economic Linkages",
              "Technology Transfer",
              "Investment",
              "Knowledge Network"
            ]
          },
          {
            "title": "Indian Diaspora in Major Regions",
            "points": [
              "Indian Diaspora in USA",
              "Indian Diaspora in UK",
              "Indian Diaspora in Canada",
              "Indian Diaspora in Gulf Countries",
              "Indian Diaspora in Africa",
              "Indian Diaspora in Southeast Asia",
              "Indian Diaspora in Australia"
            ]
          },
          {
            "title": "Indian Diaspora in Major Regions — Issues Faced by Indian Diaspora",
            "points": [
              "Labour Exploitation",
              "Migration Issues",
              "Visa Problems",
              "Racism",
              "Safety and Security",
              "Evacuation during Crisis",
              "Dual Citizenship Issues",
              "Political Representation"
            ]
          },
          {
            "title": "Government Initiatives for Diaspora",
            "points": [
              "Pravasi Bharatiya Divas",
              "OCI Card",
              "MADAD Portal",
              "e-Migrate Portal",
              "Know India Programme",
              "Indian Community Welfare Fund",
              "Vande Bharat Mission,etc"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "international-institutions",
    "label": "Section 19",
    "title": "Important International Institutions",
    "summary": "Important international institutions, agencies and fora — their structure and mandate.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "United Nations System",
            "points": [
              "United Nations",
              "UN General Assembly",
              "UN Security Council",
              "Economic and Social Council",
              "International Court of Justice",
              "UN Secretariat",
              "Trusteeship Council",
              "UN Reforms",
              "India and UNSC Reform"
            ]
          },
          {
            "title": "UN Agencies",
            "points": [
              "WHO",
              "UNESCO",
              "UNICEF",
              "UNDP",
              "UNEP",
              "UNHCR",
              "FAO",
              "ILO",
              "UN Women",
              "WFP"
            ]
          },
          {
            "title": "Climate and Environment Institutions",
            "points": [
              "UNFCCC",
              "IPCC",
              "Global Environment Facility",
              "International Solar Alliance",
              "Coalition for Disaster Resilient Infrastructure"
            ]
          },
          {
            "title": "Structure and Mandate of International Institutions",
            "points": [
              "Membership",
              "Decision-Making Structure",
              "Voting System",
              "Funding Mechanism",
              "Secretariat",
              "Mandate",
              "Functions",
              "Reports Published",
              "India’s Role",
              "Reforms Needed"
            ]
          },
          {
            "title": "International Financial Institutions",
            "points": [
              "International Monetary Fund",
              "World Bank",
              "Asian Development Bank",
              "Asian Infrastructure Investment Bank",
              "New Development Bank",
              "International Finance Corporation"
            ]
          },
          {
            "title": "Trade and Economic Institutions",
            "points": [
              "World Trade Organization",
              "UNCTAD",
              "World Economic Forum",
              "OECD",
              "G7",
              "G20"
            ]
          },
          {
            "title": "Security Institutions and Fora",
            "points": [
              "NATO",
              "Interpol",
              "International Atomic Energy Agency",
              "Financial Action Task Force",
              "Organisation for the Prohibition of Chemical Weapons"
            ]
          },
          {
            "title": "Regional Organisations",
            "points": [
              "European Union",
              "ASEAN",
              "African Union",
              "SAARC",
              "BIMSTEC",
              "SCO",
              "BRICS",
              "Gulf Cooperation Council",
              "Arab League",
              "OPEC"
            ]
          }
        ]
      }
    ]
  }
]
;
