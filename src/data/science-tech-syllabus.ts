export type ScienceTechTopicBlock = {
  title: string;
  points: string[];
};

export type ScienceTechSection = {
  id: string;
  label: string;
  title: string;
  summary: string;
  blocks: ScienceTechTopicBlock[];
};

export const scienceTechSyllabusSections: ScienceTechSection[] = [
  {
    id: 'chemistry',
    label: 'Section 01',
    title: 'Chemistry',
    summary: 'Matter, atomic structure, inorganic/organic chemistry, and applied chemical themes.',
    blocks: [
      {
        title: 'Matter & Atomic Structure',
        points: [
          'Matter & Atomic Structure',
        ],
      },
      {
        title: 'Matter',
        points: [
          'Nature of Matter',
          'States of Matter',
          'Physical & Chemical Changes',
          'Properties of Matter',
          'Classification of Matter',
        ],
      },
      {
        title: 'Atomic Structure',
        points: [
          'Atom',
          'Molecule',
          'Ion',
          'Atomic Models',
          'Subatomic Particles',
          'Atomic Number',
          'Mass Number',
          'Isotopes',
          'Isobars',
          'Electronic Configuration',
        ],
      },
      {
        title: 'Elements & Molecules',
        points: [
          'Elements',
          'Compounds',
          'Mixtures',
          'Molecular Formula',
          'Chemical Formula',
          'Molecular Mass',
          'Atomic Mass',
        ],
      },
      {
        title: 'Inorganic Chemistry',
        points: [
          'Periodic Table',
          'Periodic Classification',
          'Groups & Periods',
          'Metals',
          'Non-Metals',
          'Metalloids',
          'Chemical Bonding',
          'Ionic Bond',
          'Covalent Bond',
          'Metallic Bond',
          'Coordination Compounds',
          'Acids',
          'Bases',
          'Salts',
          'Oxidation & Reduction',
        ],
      },
      {
        title: 'Physical Chemistry',
        points: [
          'Mole Concept',
          'Atomic Structure',
          'Chemical Equilibrium',
          'Ionic Equilibrium',
          'Thermodynamics',
          'Electrochemistry',
          'Chemical Kinetics',
          'Surface Chemistry',
          'Solutions',
          'Colloids',
        ],
      },
      {
        title: 'Organic Chemistry',
        points: [
          'Hydrocarbons',
          'Functional Groups',
          'Organic Reactions',
          'Isomerism',
          'Alcohols',
          'Phenols',
          'Ethers',
          'Aldehydes',
          'Ketones',
          'Carboxylic Acids',
          'Polymers',
          'Petrochemicals',
        ],
      },
      {
        title: 'Applied Chemistry',
        points: [
          'Applied Chemistry',
        ],
      },
      {
        title: 'Biomolecules',
        points: [
          'Carbohydrates',
          'Proteins',
          'Lipids',
          'Nucleic Acids',
        ],
      },
      {
        title: 'Vitamins & Enzymes',
        points: [
          'Fat Soluble Vitamins',
          'Water Soluble Vitamins',
          'Enzyme Functions',
          'Enzyme Deficiency',
        ],
      },
      {
        title: 'Pharmaceuticals',
        points: [
          'Drugs',
          'Antibiotics',
          'Vaccines',
          'Therapeutic Agents',
          'Drug Delivery Systems',
        ],
      },
      {
        title: 'Chemicals in Daily Life',
        points: [
          'Soaps',
          'Detergents',
          'Cosmetics',
          'Fertilizers',
          'Pesticides',
          'Food Additives',
        ],
      },
    ],
  },
  {
    id: 'biotechnology',
    label: 'Section 02',
    title: 'Biotechnology',
    summary: 'Genetics, biotech tools, applications in health, agriculture, and industry.',
    blocks: [
      {
        title: 'Fundamentals of Biotechnology',
        points: [
          'Biotechnology Concepts',
          'Applications',
          'Scope',
        ],
      },
      {
        title: 'Genetic Engineering',
        points: [
          'Recombinant DNA Technology',
          'Gene Cloning',
          'Gene Editing',
          'CRISPR-Cas9',
          'Genome Mapping',
        ],
      },
      {
        title: 'Environmental Biotechnology',
        points: [
          'Bioremediation',
          'Waste Treatment',
          'Pollution Control',
          'Biofertilizers',
        ],
      },
      {
        title: 'Plant Biotechnology',
        points: [
          'Tissue Culture',
          'GM Crops',
          'Marker Assisted Breeding',
        ],
      },
      {
        title: 'Animal Biotechnology',
        points: [
          'Transgenic Animals',
          'Cloning',
          'Stem Cell Technology',
        ],
      },
      {
        title: 'Industrial Biotechnology',
        points: [
          'Fermentation Technology',
          'Industrial Enzymes',
          'Bioprocess Engineering',
        ],
      },
      {
        title: 'Agricultural Biotechnology',
        points: [
          'Biofertilizers',
          'Biopesticides',
          'Precision Agriculture',
        ],
      },
      {
        title: 'Medical Biotechnology',
        points: [
          'Vaccines',
          'Gene Therapy',
          'Stem Cell Therapy',
          'Personalized Medicine',
        ],
      },
      {
        title: 'Biotechnology Governance',
        points: [
          'Biosafety',
          'Bioethics',
          'Regulations',
          'Intellectual Property Rights',
        ],
      },
      {
        title: 'Emerging Trends',
        points: [
          'Synthetic Biology',
          'Genomics',
          'Proteomics',
          'Bioinformatics',
          'Recent Developments in Biotechnology',
        ],
      },
    ],
  },
  {
    id: 'defence-technology',
    label: 'Section 03',
    title: 'Defence Technology',
    summary: 'Defence R&D, missiles, platforms, and strategic technology themes.',
    blocks: [
      {
        title: 'Missiles',
        points: [
          'Ballistic Missiles',
          'Cruise Missiles',
          'Hypersonic Missiles',
          'Missile Defence Systems',
        ],
      },
      {
        title: 'Defence Systems',
        points: [
          'Air Defence',
          'Naval Systems',
          'Land Warfare Systems',
        ],
      },
      {
        title: 'Emerging Defence Technologies',
        points: [
          'Directed Energy Weapons',
          'Quantum Technologies',
          'Autonomous Systems',
        ],
      },
      {
        title: 'Weapons',
        points: [
          'Conventional Weapons',
          'Smart Weapons',
          'Precision Guided Munitions',
        ],
      },
      {
        title: 'Cyber & Information Warfare',
        points: [
          'Cyber Attacks',
          'Cyber Defence',
          'Information Warfare',
          'Electronic Warfare',
        ],
      },
      {
        title: 'Defence Reforms',
        points: [
          'Defence Modernization',
          'Theatre Commands',
          'Defence Procurement',
        ],
      },
      {
        title: 'Military Exercises',
        points: [
          'Domestic Exercises',
          'Bilateral Exercises',
          'Multilateral Exercises',
        ],
      },
      {
        title: 'Nuclear Technology',
        points: [
          'Nuclear Science',
          'Nuclear Reactors',
          'Nuclear Fuel Cycle',
        ],
      },
      {
        title: 'Nuclear Energy',
        points: [
          'Nuclear Power Plants',
          'Safety Measures',
          'Nuclear Policy',
        ],
      },
    ],
  },
  {
    id: 'robotics-and-artificial-intelligence',
    label: 'Section 04',
    title: 'Robotics and Artificial Intelligence',
    summary: 'Robotics, AI/ML basics, applications, and governance concerns.',
    blocks: [
      {
        title: 'Robotics',
        points: [
          'Robotics Fundamentals',
          'Industrial Robots',
          'Service Robots',
          'Autonomous Systems',
        ],
      },
      {
        title: 'Artificial Intelligence',
        points: [
          'Machine Learning',
          'Deep Learning',
          'Neural Networks',
          'Generative AI',
          'Explainable AI',
        ],
      },
      {
        title: 'AI Applications',
        points: [
          'Healthcare',
          'Agriculture',
          'Defence',
          'Governance',
          'Education',
        ],
      },
      {
        title: 'AI Ethics & Governance',
        points: [
          'AI Ethics',
          'Responsible AI',
          'AI Regulation',
          'Data Governance',
        ],
      },
    ],
  },
  {
    id: 'physics',
    label: 'Section 05',
    title: 'Physics',
    summary: 'Core physics concepts relevant to Prelims and applied technology.',
    blocks: [
      {
        title: 'Classical Physics',
        points: [
          'Classical Physics',
        ],
      },
      {
        title: 'Mechanics',
        points: [
          'Motion',
          'Force',
          'Laws of Motion',
          'Work',
          'Energy',
          'Power',
          'Gravitation',
        ],
      },
      {
        title: 'Heat & Thermodynamics',
        points: [
          'Heat Transfer',
          'Temperature',
          'Thermodynamic Laws',
        ],
      },
      {
        title: 'Waves',
        points: [
          'Sound',
          'Wave Motion',
          'Doppler Effect',
        ],
      },
      {
        title: 'Optics',
        points: [
          'Reflection',
          'Refraction',
          'Optical Instruments',
        ],
      },
      {
        title: 'Electricity & Magnetism',
        points: [
          'Electric Current',
          'Ohm\'s Law',
          'Magnetism',
          'Electromagnetic Induction',
        ],
      },
      {
        title: 'Modern Physics',
        points: [
          'Quantum Theory',
          'Photoelectric Effect',
          'Dual Nature of Matter',
          'Nuclear Physics',
          'Radioactivity',
          'Semiconductors',
          'Lasers',
          'Particle Physics',
        ],
      },
      {
        title: 'Astronomy & Astrophysics',
        points: [
          'Universe',
          'Galaxies',
          'Stars',
          'Solar System',
          'Planetary Motion',
          'Black Holes',
          'Neutron Stars',
          'Pulsars',
          'Dark Matter',
          'Dark Energy',
          'Cosmology',
        ],
      },
    ],
  },
  {
    id: 'biology',
    label: 'Section 06',
    title: 'Biology',
    summary: 'Cell biology, genetics, life processes, and applied biological themes.',
    blocks: [
      {
        title: 'Origin & Diversity of Life',
        points: [
          'Origin of Life',
          'Biological Classification',
          'Five Kingdom Classification',
          'Domains of Life',
          'Biodiversity',
        ],
      },
      {
        title: 'Living World',
        points: [
          'Characteristics of Living Organisms',
          'Taxonomy',
          'Systematics',
          'Nomenclature',
        ],
      },
      {
        title: 'Evolution',
        points: [
          'Evolutionary Theories',
          'Natural Selection',
          'Speciation',
          'Human Evolution',
        ],
      },
      {
        title: 'Genetics',
        points: [
          'Heredity',
          'Mendelian Genetics',
          'Chromosomes',
          'DNA',
          'RNA',
          'Gene Expression',
          'Mutation',
          'Genetic Disorders',
        ],
      },
      {
        title: 'Cell Biology',
        points: [
          'Cell Theory',
          'Cell Structure',
          'Cell Organelles',
          'Cell Division',
          'Mitosis',
          'Meiosis',
        ],
      },
      {
        title: 'Tissues',
        points: [
          'Plant Tissues',
          'Animal Tissues',
          'Tissue Functions',
        ],
      },
      {
        title: 'Human Physiology',
        points: [
          'Human Physiology',
        ],
      },
      {
        title: 'Digestive System',
        points: [
          'Digestive System',
        ],
      },
      {
        title: 'Respiratory System',
        points: [
          'Respiratory System',
        ],
      },
      {
        title: 'Circulatory System',
        points: [
          'Circulatory System',
        ],
      },
      {
        title: 'Excretory System',
        points: [
          'Excretory System',
        ],
      },
      {
        title: 'Nervous System',
        points: [
          'Nervous System',
        ],
      },
      {
        title: 'Endocrine System',
        points: [
          'Endocrine System',
        ],
      },
      {
        title: 'Reproductive System',
        points: [
          'Reproductive System',
        ],
      },
      {
        title: 'Muscular System',
        points: [
          'Muscular System',
        ],
      },
      {
        title: 'Skeletal System',
        points: [
          'Skeletal System',
        ],
      },
      {
        title: 'Immune System',
        points: [
          'Immune System',
        ],
      },
      {
        title: 'Nutrition',
        points: [
          'Nutrients',
          'Balanced Diet',
          'Malnutrition',
          'Deficiency Diseases',
        ],
      },
      {
        title: 'Plant Physiology',
        points: [
          'Photosynthesis',
          'Respiration',
          'Plant Growth',
          'Plant Hormones',
          'Mineral Nutrition',
        ],
      },
      {
        title: 'Medical Technology',
        points: [
          'Diagnostic Technologies',
          'Medical Imaging',
          'Organ Transplantation',
          'Regenerative Medicine',
          'Biomedical Devices',
        ],
      },
      {
        title: 'Bioenergy',
        points: [
          'Biomass Energy',
          'Biofuels',
          'Bioethanol',
          'Biodiesel',
          'Biogas',
        ],
      },
    ],
  },
  {
    id: 'human-health-and-diseases',
    label: 'Section 07',
    title: 'Human Health and Diseases',
    summary: 'Diseases, immunity, public health, and medical technology linkages.',
    blocks: [
      {
        title: 'Diseases',
        points: [
          'Communicable Diseases',
          'Non-Communicable Diseases',
          'Lifestyle Diseases',
          'Genetic Diseases',
          'Zoonotic Diseases',
        ],
      },
      {
        title: 'Immunology',
        points: [
          'Immunity',
          'Immune System',
          'Antibodies',
          'Vaccination',
          'Autoimmune Disorders',
        ],
      },
      {
        title: 'Medicines & Therapeutics',
        points: [
          'Drug Classification',
          'Antimicrobials',
          'Vaccines',
          'Hormonal Therapy',
          'Precision Medicine',
        ],
      },
    ],
  },
  {
    id: 'space-technology',
    label: 'Section 08',
    title: 'Space Technology',
    summary: 'Space science, ISRO missions, satellites, and applications.',
    blocks: [
      {
        title: 'Space Basics',
        points: [
          'Space Environment',
          'Satellites',
          'Orbits',
          'Launch Vehicles',
          'Escape Velocity',
        ],
      },
      {
        title: 'Space Missions',
        points: [
          'Lunar Missions',
          'Mars Missions',
          'Planetary Missions',
          'Deep Space Missions',
        ],
      },
      {
        title: 'Indian Space Programme',
        points: [
          'Evolution of ISRO',
          'Major Programmes',
          'Satellite Missions',
          'Human Spaceflight Programme',
        ],
      },
      {
        title: 'Space Technologies',
        points: [
          'Remote Sensing',
          'Satellite Communication',
          'Earth Observation',
          'Space Exploration Technologies',
        ],
      },
      {
        title: 'International Cooperation',
        points: [
          'International Space Collaboration',
          'Bilateral Agreements',
          'Multilateral Agreements',
        ],
      },
      {
        title: 'Navigation Systems',
        points: [
          'GPS',
          'NavIC',
          'GLONASS',
          'Galileo',
          'BeiDou',
        ],
      },
      {
        title: 'Space Geopolitics',
        points: [
          'Militarization of Space',
          'Space Security',
          'Space Law',
          'Geopolitics of Outer Space',
        ],
      },
    ],
  },
  {
    id: 'nanotechnology',
    label: 'Section 09',
    title: 'Nanotechnology',
    summary: 'Nanoscience basics, applications, impacts, and India’s nano mission.',
    blocks: [
      {
        title: 'Nano Science',
        points: [
          'Basics of Nanotechnology',
          'Nanomaterials',
          'Nano Scale Properties',
        ],
      },
      {
        title: 'Applications',
        points: [
          'Medicine',
          'Agriculture',
          'Energy',
          'Defence',
          'Electronics',
        ],
      },
      {
        title: 'Impacts',
        points: [
          'Economic Impact',
          'Environmental Impact',
          'Ethical Concerns',
        ],
      },
      {
        title: 'India & Nanotechnology',
        points: [
          'National Nano Mission',
          'Research Institutions',
          'Emerging Applications',
        ],
      },
    ],
  },
  {
    id: 'science-institutions-and-policy',
    label: 'Section 10',
    title: 'Science Institutions and Policy',
    summary: 'S&T institutions, policy, governance, HRD, and awards.',
    blocks: [
      {
        title: 'Institutions',
        points: [
          'Scientific Research Institutions',
          'Space Institutions',
          'Biotechnology Institutions',
          'Defence Research Institutions',
        ],
      },
      {
        title: 'Science Policy',
        points: [
          'India\'s Science & Technology Policy',
          'Research & Innovation Policy',
        ],
      },
      {
        title: 'S&T Governance',
        points: [
          'Regulatory Framework',
          'Technology Governance',
          'Innovation Ecosystem',
        ],
      },
      {
        title: 'Human Resource Development in S&T',
        points: [
          'Scientific Education',
          'Research Fellowships',
          'Skill Development',
        ],
      },
      {
        title: 'Awards in Science',
        points: [
          'National Science Awards',
          'International Science Awards',
          'Scientific Recognitions',
        ],
      },
    ],
  },
];
