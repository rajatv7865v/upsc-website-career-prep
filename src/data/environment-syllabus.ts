export type EnvironmentTopicBlock = {
  title: string;
  points: string[];
};

export type EnvironmentSection = {
  id: string;
  label: string;
  title: string;
  summary: string;
  blocks: EnvironmentTopicBlock[];
};

export const environmentSyllabusSections: EnvironmentSection[] = [
  {
    id: 'ecology',
    label: 'Section 01',
    title: 'Ecology',
    summary: 'Foundations — hierarchy, habitat, niche, ecotone, and core ecological concepts.',
    blocks: [
      {
        title: 'Fundamentals of Ecology',
        points: [
          'Definition of Ecology',
          'Origin and Development of Ecology',
          'Father of Ecology (Ernst Haeckel)',
          'Branches of Ecology',
          'Autecology',
          'Synecology',
          'Population Ecology',
          'Community Ecology',
          'Ecosystem Ecology',
          'Landscape Ecology',
          'Global Ecology',
          'Scope of Ecology',
          'Importance of Ecology',
          'Ecology as an Interdisciplinary Science',
        ],
      },
      {
        title: 'Ecology, Environment and Ecosystem',
        points: [
          'Environment',
          'Components of Environment',
          'Biotic Environment',
          'Abiotic Environment',
          'Ecology',
          'Ecosystem',
          'Differences between Ecology, Environment and Ecosystem',
          'Human–Environment Interaction',
        ],
      },
      {
        title: 'Ecological Hierarchy',
        points: [
          'Organism',
          'Species',
          'Population',
          'Community',
          'Ecosystem',
          'Landscape',
          'Biome',
          'Biosphere',
        ],
      },
      {
        title: 'Habitat',
        points: [
          'Definition',
          'Characteristics',
          'Types',
          'Terrestrial Habitat',
          'Aquatic Habitat',
          'Habitat Fragmentation',
          'Habitat Destruction',
          'Habitat Corridors',
          'Habitat Restoration',
        ],
      },
      {
        title: 'Ecological Niche',
        points: [
          'Definition',
          'Fundamental Niche',
          'Realized Niche',
          'Niche Overlap',
          'Niche Segregation',
          'Competitive Exclusion Principle',
          'Resource Partitioning',
        ],
      },
      {
        title: 'Ecotone, Ecocline and Edge Effect',
        points: [
          'Ecotone, Ecocline and Edge Effect',
        ],
      },
      {
        title: 'Ecotone',
        points: [
          'Definition',
          'Characteristics',
          'Examples',
        ],
      },
      {
        title: 'Ecocline',
        points: [
          'Definition',
          'Examples',
        ],
      },
      {
        title: 'Edge Effect',
        points: [
          'Concept',
          'Advantages',
          'Disadvantages',
        ],
      },
      {
        title: 'Ecological Principles',
        points: [
          'Ecological Principles',
        ],
      },
      {
        title: 'Law of Minimum',
        points: [
          'Liebig\'s Law',
        ],
      },
      {
        title: 'Law of Tolerance',
        points: [
          'Shelford\'s Law',
        ],
      },
      {
        title: 'Limiting Factors',
        points: [
          'Limiting Factors',
        ],
      },
      {
        title: 'Ecological Amplitude',
        points: [
          'Ecological Amplitude',
        ],
      },
      {
        title: 'Carrying Capacity',
        points: [
          'Carrying Capacity',
        ],
      },
      {
        title: 'Homeostasis',
        points: [
          'Homeostasis',
        ],
      },
      {
        title: 'Feedback Mechanism',
        points: [
          'Positive Feedback',
          'Negative Feedback',
        ],
      },
      {
        title: 'Ecological Resilience',
        points: [
          'Ecological Resilience',
        ],
      },
      {
        title: 'Ecological Resistance',
        points: [
          'Ecological Resistance',
        ],
      },
      {
        title: 'Ecological Footprint',
        points: [
          'Ecological Footprint',
        ],
      },
      {
        title: 'Ecological Overshoot',
        points: [
          'Ecological Overshoot',
        ],
      },
      {
        title: 'Planetary Boundaries',
        points: [
          'Planetary Boundaries',
        ],
      },
      {
        title: 'Gaia Hypothesis',
        points: [
          'Gaia Hypothesis',
        ],
      },
      {
        title: 'Deep Ecology',
        points: [
          'Deep Ecology',
        ],
      },
      {
        title: 'Shallow Ecology',
        points: [
          'Shallow Ecology',
        ],
      },
    ],
  },
  {
    id: 'ecosystem',
    label: 'Section 02',
    title: 'Ecosystem',
    summary: 'Structure and types of ecosystems — components, producers, consumers, and biomes.',
    blocks: [
      {
        title: 'Ecosystem Concept',
        points: [
          'Ecosystem Concept',
        ],
      },
      {
        title: 'Definition',
        points: [
          'Definition',
        ],
      },
      {
        title: 'Characteristics',
        points: [
          'Characteristics',
        ],
      },
      {
        title: 'Types',
        points: [
          'Natural Ecosystem',
          'Artificial Ecosystem',
        ],
      },
      {
        title: 'Ecosystem Structure',
        points: [
          'Ecosystem Structure',
        ],
      },
      {
        title: 'Biotic Components',
        points: [
          'Producers',
          'Consumers',
          'Decomposers',
          'Detritivores',
        ],
      },
      {
        title: 'Abiotic Components',
        points: [
          'Solar Radiation',
          'Water',
          'Air',
          'Soil',
          'Temperature',
          'Nutrients',
        ],
      },
      {
        title: 'Ecosystem Functions',
        points: [
          'Energy Flow',
          'Nutrient Cycling',
          'Productivity',
          'Decomposition',
          'Ecological Balance',
        ],
      },
      {
        title: 'Ecosystem Services',
        points: [
          'Ecosystem Services',
        ],
      },
      {
        title: 'Provisioning Services',
        points: [
          'Provisioning Services',
        ],
      },
      {
        title: 'Regulating Services',
        points: [
          'Regulating Services',
        ],
      },
      {
        title: 'Supporting Services',
        points: [
          'Supporting Services',
        ],
      },
      {
        title: 'Cultural Services',
        points: [
          'Cultural Services',
        ],
      },
      {
        title: 'Ecosystem Goods',
        points: [
          'Ecosystem Goods',
        ],
      },
      {
        title: 'Ecosystem Valuation',
        points: [
          'Ecosystem Valuation',
        ],
      },
    ],
  },
  {
    id: 'ecosystem-dynamics',
    label: 'Section 03',
    title: 'Ecosystem Dynamics',
    summary: 'Energy flow, food chains/webs, ecological pyramids, and succession.',
    blocks: [
      {
        title: 'Energy Flow',
        points: [
          'Energy Flow',
        ],
      },
      {
        title: 'First Law of Thermodynamics',
        points: [
          'First Law of Thermodynamics',
        ],
      },
      {
        title: 'Second Law of Thermodynamics',
        points: [
          'Second Law of Thermodynamics',
        ],
      },
      {
        title: 'Lindeman\'s 10% Law',
        points: [
          'Lindeman\'s 10% Law',
        ],
      },
      {
        title: 'Ecological Efficiency',
        points: [
          'Ecological Efficiency',
        ],
      },
      {
        title: 'Standing Crop',
        points: [
          'Standing Crop',
        ],
      },
      {
        title: 'Standing State',
        points: [
          'Standing State',
        ],
      },
      {
        title: 'Trophic Levels',
        points: [
          'Trophic Levels',
        ],
      },
      {
        title: 'Producers',
        points: [
          'Producers',
        ],
      },
      {
        title: 'Primary Consumers',
        points: [
          'Primary Consumers',
        ],
      },
      {
        title: 'Secondary Consumers',
        points: [
          'Secondary Consumers',
        ],
      },
      {
        title: 'Tertiary Consumers',
        points: [
          'Tertiary Consumers',
        ],
      },
      {
        title: 'Apex Predators',
        points: [
          'Apex Predators',
        ],
      },
      {
        title: 'Food Chain',
        points: [
          'Grazing Food Chain',
          'Detritus Food Chain',
        ],
      },
      {
        title: 'Food Web',
        points: [
          'Food Web',
        ],
      },
      {
        title: 'Ecological Productivity',
        points: [
          'Ecological Productivity',
        ],
      },
      {
        title: 'Primary Productivity',
        points: [
          'Gross Primary Productivity (GPP)',
          'Net Primary Productivity (NPP)',
        ],
      },
      {
        title: 'Secondary Productivity',
        points: [
          'Secondary Productivity',
        ],
      },
      {
        title: 'Ecological Pyramids',
        points: [
          'Pyramid of Numbers',
          'Pyramid of Biomass',
          'Pyramid of Energy',
        ],
      },
      {
        title: 'Energy Flow Models',
        points: [
          'Single Channel Model',
          'Y-Shaped Model',
          'Universal Energy Flow Model (Odum)',
        ],
      },
    ],
  },
  {
    id: 'forest-ecosystems-of-india',
    label: 'Section 04',
    title: 'Forest Ecosystems of India',
    summary: 'Indian forest types, distribution, and ecological significance.',
    blocks: [
      {
        title: 'Forest Ecosystems of India',
        points: [
          'Classification of Forests',
          'Champion & Seth Classification',
          'Tropical Evergreen Forests',
          'Tropical Semi-Evergreen Forests',
          'Tropical Moist Deciduous Forests',
          'Tropical Dry Deciduous Forests',
          'Thorn Forests',
          'Littoral and Swamp Forests',
          'Montane Forests',
          'Alpine Forests',
        ],
      },
    ],
  },
  {
    id: 'wetlands',
    label: 'Section 05',
    title: 'Wetlands',
    summary: 'Wetland ecology, Ramsar sites, and conservation importance.',
    blocks: [
      {
        title: 'Wetlands',
        points: [
          'Wetland Concepts',
          'Types of Wetlands',
          'Wetland Functions',
          'Wetland Values',
          'Wetland Threats',
          'Wetland Conservation Rules 2017',
          'National Wetland Authority',
          'Wetlands of India',
          'National Lake Conservation Plan',
          'Ramsar Convention',
          'Ramsar Criteria',
          'Wise Use Principle',
          'Montreux Record',
          'Ramsar Sites of India',
        ],
      },
    ],
  },
  {
    id: 'biodiversity',
    label: 'Section 06',
    title: 'Biodiversity',
    summary: 'Levels of biodiversity, hotspots, and India’s biological wealth.',
    blocks: [
      {
        title: 'Biodiversity',
        points: [
          'Biodiversity Concepts',
          'Biodiversity Values',
          'Consumptive Value',
          'Productive Value',
          'Social Value',
          'Ethical Value',
          'Aesthetic Value',
          'Option Value',
        ],
      },
      {
        title: 'Types of Biodiversity',
        points: [
          'Genetic Diversity',
          'Species Diversity',
          'Ecosystem Diversity',
          'Functional Diversity',
          'Phylogenetic Diversity',
        ],
      },
      {
        title: 'Diversity Indices',
        points: [
          'Alpha Diversity',
          'Beta Diversity',
          'Gamma Diversity',
        ],
      },
    ],
  },
  {
    id: 'biogeography',
    label: 'Section 07',
    title: 'Biogeography',
    summary: 'Biogeographic zones, realms, and distribution patterns.',
    blocks: [
      {
        title: 'Biogeography',
        points: [
          'Biogeographic Realms',
          'Wallace Line',
          'Biodiversity Hotspots',
          'Coldspots',
          'Megadiversity Countries',
          'Island Biogeography Theory',
          'Species-Area Relationship',
          'Biogeographic Classification of India',
          'Biodiversity of India',
        ],
      },
    ],
  },
  {
    id: 'biodiversity-conservation',
    label: 'Section 08',
    title: 'Biodiversity Conservation',
    summary: 'In-situ and ex-situ approaches, strategies, and frameworks.',
    blocks: [
      {
        title: 'Biodiversity Conservation',
        points: [
          'In-Situ Conservation',
          'Ex-Situ Conservation',
          'Community Conservation',
          'Sacred Groves',
          'Gene Banks',
          'Seed Banks',
          'Cryopreservation',
          'DNA Banks',
          'Botanical Gardens',
          'Zoological Parks',
        ],
      },
    ],
  },
  {
    id: 'protected-area-network-of-india',
    label: 'Section 09',
    title: 'Protected Area Network of India',
    summary: 'National parks, sanctuaries, biosphere reserves, and conservation areas.',
    blocks: [
      {
        title: 'Protected Area Network of India',
        points: [
          'National Parks',
          'Wildlife Sanctuaries',
          'Conservation Reserves',
          'Community Reserves',
          'Marine Protected Areas',
          'Biosphere Reserves',
          'UNESCO-MAB Programme',
          'Biodiversity Heritage Sites',
          'Eco-Sensitive Zones',
          'Wildlife Corridors',
        ],
      },
    ],
  },
  {
    id: 'wildlife-conservation',
    label: 'Section 10',
    title: 'Wildlife Conservation',
    summary: 'Species protection, projects, threats, and wildlife management.',
    blocks: [
      {
        title: 'Wildlife Conservation',
        points: [
          'Project Tiger',
          'Tiger Reserves',
          'Project Elephant',
          'Elephant Reserves',
          'Project Snow Leopard',
          'Asiatic Lion Conservation',
          'Rhino Conservation',
          'Crocodile Conservation',
          'Dolphin Conservation',
          'Sea Turtle Conservation',
          'Vulture Conservation',
          'Great Indian Bustard Programme',
          'Species Recovery Programme',
          'Indigenous Conservation Practices',
        ],
      },
    ],
  },
  {
    id: 'sustainable-development',
    label: 'Section 11',
    title: 'Sustainable Development',
    summary: 'SDGs, sustainability principles, and environment–development balance.',
    blocks: [
      {
        title: 'Sustainable Development',
        points: [
          'Brundtland Report',
          'Rio Summit',
          'Agenda 21',
          'Johannesburg Summit',
          'Rio+20',
          'Sustainable Development Goals (SDGs)',
          'Green Economy',
          'Green GDP',
          'Natural Capital Accounting',
          'Circular Economy',
          'Environmental Ethics',
        ],
      },
    ],
  },
  {
    id: 'international-environmental-conventions-and-protocols',
    label: 'Section 12',
    title: 'International Environmental Conventions and Protocols',
    summary: 'Key global treaties, protocols, and India’s commitments.',
    blocks: [
      {
        title: 'International Environmental Conventions and Protocols',
        points: [
          'UNFCCC',
          'Kyoto Protocol',
          'Paris Agreement',
          'Montreal Protocol',
          'Kigali Amendment',
          'Convention on Biological Diversity (CBD)',
          'Cartagena Protocol',
          'Nagoya Protocol',
          'Ramsar Convention',
          'CITES',
          'CMS',
          'Basel Convention',
          'Rotterdam Convention',
          'Stockholm Convention',
          'Minamata Convention',
          'UNCCD',
          'Vienna Convention',
          'MARPOL',
          'Antarctic Treaty System',
        ],
      },
    ],
  },
  {
    id: 'environmental-schemes-missions-and-reports',
    label: 'Section 13',
    title: 'Environmental Schemes, Missions and Reports',
    summary: 'Flagship missions, schemes, and major environment reports.',
    blocks: [
      {
        title: 'Environmental Schemes, Missions and Reports',
        points: [
          'NAPCC (All 8 Missions)',
          'Green India Mission',
          'National Biodiversity Action Plan',
          'National Clean Air Programme (NCAP)',
          'Namami Gange',
          'Nagar Van Yojana',
          'MISHTI',
          'Amrit Dharohar',
          'Green Credit Programme',
          'LiFE Mission',
          'CAMPA',
          'National Adaptation Fund',
          'State Action Plans on Climate Change',
        ],
      },
    ],
  },
  {
    id: 'population-ecology',
    label: 'Section 14',
    title: 'Population Ecology',
    summary: 'Population attributes, growth models, and regulating factors.',
    blocks: [
      {
        title: 'Population Characteristics',
        points: [
          'Population Density',
          'Natality',
          'Mortality',
          'Immigration',
          'Emigration',
          'Age Structure',
          'Sex Ratio',
          'Population Dispersion',
        ],
      },
      {
        title: 'Population Growth',
        points: [
          'Exponential Growth',
          'Logistic Growth',
          'J-Curve',
          'S-Curve',
        ],
      },
      {
        title: 'Population Regulation',
        points: [
          'Density Dependent Factors',
          'Density Independent Factors',
        ],
      },
      {
        title: 'Population Interactions',
        points: [
          'Mutualism',
          'Commensalism',
          'Protocooperation',
          'Parasitism',
          'Predation',
          'Competition',
          'Amensalism',
          'Neutralism',
        ],
      },
    ],
  },
  {
    id: 'community-ecology',
    label: 'Section 15',
    title: 'Community Ecology',
    summary: 'Species interactions, community structure, and ecological succession.',
    blocks: [
      {
        title: 'Ecological Community',
        points: [
          'Definition',
          'Characteristics',
        ],
      },
      {
        title: 'Community Structure',
        points: [
          'Species Diversity',
          'Species Richness',
          'Species Evenness',
          'Dominance',
        ],
      },
      {
        title: 'Community Attributes',
        points: [
          'Stratification',
          'Zonation',
        ],
      },
      {
        title: 'Ecological Succession',
        points: [
          'Ecological Succession',
        ],
      },
      {
        title: 'Primary Succession',
        points: [
          'Primary Succession',
        ],
      },
      {
        title: 'Secondary Succession',
        points: [
          'Secondary Succession',
        ],
      },
      {
        title: 'Hydrarch Succession',
        points: [
          'Hydrarch Succession',
        ],
      },
      {
        title: 'Xerarch Succession',
        points: [
          'Xerarch Succession',
        ],
      },
      {
        title: 'Autogenic Succession',
        points: [
          'Autogenic Succession',
        ],
      },
      {
        title: 'Allogenic Succession',
        points: [
          'Allogenic Succession',
        ],
      },
      {
        title: 'Cyclic Succession',
        points: [
          'Cyclic Succession',
        ],
      },
      {
        title: 'Successional Stages',
        points: [
          'Nudation',
          'Invasion',
          'Competition',
          'Reaction',
          'Stabilization',
        ],
      },
      {
        title: 'Climax Community',
        points: [
          'Climax Community',
        ],
      },
    ],
  },
  {
    id: 'biogeochemical-cycles',
    label: 'Section 16',
    title: 'Biogeochemical Cycles',
    summary: 'Carbon, nitrogen, phosphorus, water, and nutrient cycling.',
    blocks: [
      {
        title: 'Nutrient Cycling',
        points: [
          'Nutrient Cycling',
        ],
      },
      {
        title: 'Carbon Cycle',
        points: [
          'Carbon Reservoirs',
          'Carbon Sink',
          'Carbon Source',
          'Carbon Sequestration',
          'Blue Carbon',
        ],
      },
      {
        title: 'Nitrogen Cycle',
        points: [
          'Nitrogen Fixation',
          'Nitrification',
          'Nitrosification',
          'Assimilation',
          'Ammonification',
          'Denitrification',
        ],
      },
      {
        title: 'Oxygen Cycle',
        points: [
          'Oxygen Cycle',
        ],
      },
      {
        title: 'Sulphur Cycle',
        points: [
          'Sulphur Cycle',
        ],
      },
      {
        title: 'Phosphorus Cycle',
        points: [
          'Phosphorus Cycle',
        ],
      },
      {
        title: 'Hydrological Cycle',
        points: [
          'Hydrological Cycle',
        ],
      },
      {
        title: 'Methane Cycle',
        points: [
          'Methane Cycle',
        ],
      },
      {
        title: 'PMOH Cycle',
        points: [
          'PMOH Cycle',
        ],
      },
    ],
  },
  {
    id: 'applied-ecology',
    label: 'Section 17',
    title: 'Applied Ecology',
    summary: 'Restoration, conservation biology, and ecology in practice.',
    blocks: [
      {
        title: 'Applied Ecology',
        points: [
          'Biomagnification',
          'Bioaccumulation',
          'Biological Control',
          'Bioremediation',
          'Phytoremediation',
          'Biofertilizers',
          'Biopesticides',
          'Organic Farming',
          'Natural Farming',
          'Zero Budget Natural Farming',
          'Agroforestry',
          'Climate Smart Agriculture',
          'Sustainable Agriculture',
        ],
      },
    ],
  },
  {
    id: 'biomes',
    label: 'Section 18',
    title: 'Biomes',
    summary: 'Major terrestrial biomes — tundra, taiga, forests, grasslands, deserts, and more.',
    blocks: [
      {
        title: 'Biomes',
        points: [
          'Tundra Biome',
          'Taiga Biome',
          'Temperate Forest Biome',
          'Temperate Grassland Biome',
          'Tropical Rainforest Biome',
          'Tropical Deciduous Forest Biome',
          'Savanna Biome',
          'Desert Biome',
          'Mountain Biome',
          'Polar Biome',
        ],
      },
    ],
  },
  {
    id: 'aquatic-ecosystems',
    label: 'Section 19',
    title: 'Aquatic Ecosystems',
    summary: 'Freshwater systems — lakes, rivers, ponds, and their ecology.',
    blocks: [
      {
        title: 'Freshwater Ecosystem',
        points: [
          'Freshwater Ecosystem',
        ],
      },
      {
        title: 'Lentic Ecosystem',
        points: [
          'Lakes',
          'Ponds',
        ],
      },
      {
        title: 'Lotic Ecosystem',
        points: [
          'Rivers',
          'Streams',
        ],
      },
      {
        title: 'Marine Ecosystem',
        points: [
          'Marine Ecosystem',
        ],
      },
      {
        title: 'Ocean Zones',
        points: [
          'Intertidal Zone',
          'Neritic Zone',
          'Oceanic Zone',
          'Benthic Zone',
          'Abyssal Zone',
        ],
      },
      {
        title: 'Marine Productivity',
        points: [
          'Marine Productivity',
        ],
      },
      {
        title: 'Marine Food Chain',
        points: [
          'Marine Food Chain',
        ],
      },
    ],
  },
  {
    id: 'coastal-and-marine-ecosystems',
    label: 'Section 20',
    title: 'Coastal and Marine Ecosystems',
    summary: 'Coasts, mangroves, coral reefs, and marine biodiversity.',
    blocks: [
      {
        title: 'Coral Reefs',
        points: [
          'Types',
          'Distribution',
          'Coral Bleaching',
          'Coral Restoration',
          'Coral Triangle',
        ],
      },
      {
        title: 'Mangroves',
        points: [
          'Adaptations',
          'Ecological Importance',
          'Indian Mangroves',
        ],
      },
      {
        title: 'Estuaries',
        points: [
          'Estuaries',
        ],
      },
      {
        title: 'Lagoons',
        points: [
          'Lagoons',
        ],
      },
      {
        title: 'Seagrass Ecosystems',
        points: [
          'Seagrass Ecosystems',
        ],
      },
      {
        title: 'Salt Marshes',
        points: [
          'Salt Marshes',
        ],
      },
      {
        title: 'Kelp Forests',
        points: [
          'Kelp Forests',
        ],
      },
      {
        title: 'Coastal Regulation Zone (CRZ)',
        points: [
          'Coastal Regulation Zone (CRZ)',
        ],
      },
      {
        title: 'Integrated Coastal Zone Management (ICZM)',
        points: [
          'Integrated Coastal Zone Management (ICZM)',
        ],
      },
    ],
  },
  {
    id: 'species-concepts',
    label: 'Section 21',
    title: 'Species Concepts',
    summary: 'Species definitions, speciation, and taxonomic ideas for ecology.',
    blocks: [
      {
        title: 'Species Concepts',
        points: [
          'Endemic Species',
          'Keystone Species',
          'Flagship Species',
          'Umbrella Species',
          'Indicator Species',
          'Foundation Species',
          'Engineer Species',
          'Rare Species',
          'Relict Species',
          'Invasive Alien Species',
          'Exotic Species',
          'Threatened Species',
        ],
      },
    ],
  },
  {
    id: 'evolution-and-extinction',
    label: 'Section 22',
    title: 'Evolution and Extinction',
    summary: 'Evolutionary processes, mass extinctions, and biodiversity loss.',
    blocks: [
      {
        title: 'Evolution and Extinction',
        points: [
          'Evolution',
          'Adaptive Radiation',
          'Speciation',
          'Genetic Drift',
          'Gene Flow',
          'Natural Selection',
          'Extinction',
          'Co-extinction',
          'Mass Extinction Events',
          'Big Five Extinctions',
          'Sixth Mass Extinction',
        ],
      },
    ],
  },
  {
    id: 'pollution',
    label: 'Section 23',
    title: 'Pollution',
    summary: 'Air, water, soil, noise, and other pollution forms and controls.',
    blocks: [
      {
        title: 'Pollution',
        points: [
          'Air Pollution',
          'Water Pollution',
          'Groundwater Pollution',
          'Soil Pollution',
          'Noise Pollution',
          'Thermal Pollution',
          'Radioactive Pollution',
          'Plastic Pollution',
          'Microplastic Pollution',
          'Biomedical Waste Pollution',
          'Hazardous Waste Pollution',
          'E-Waste Pollution',
          'Industrial Pollution',
          'Heavy Metal Pollution',
          'Toxic Pollution',
          'POPs (Persistent Organic Pollutants)',
          'Endocrine Disruptors',
          'Carcinogens',
        ],
      },
      {
        title: 'For each pollution type cover:',
        points: [
          'Sources',
          'Pollutants',
          'Effects',
          'Monitoring',
          'Standards',
          'Prevention',
          'Control Measures',
        ],
      },
    ],
  },
  {
    id: 'waste-management',
    label: 'Section 24',
    title: 'Waste Management',
    summary: 'Solid waste, hazardous waste, and circular management approaches.',
    blocks: [
      {
        title: 'Waste Management',
        points: [
          'Solid Waste Management Rules',
          'Plastic Waste Management Rules',
          'E-Waste Management Rules',
          'Biomedical Waste Rules',
          'Hazardous Waste Rules',
          'Construction & Demolition Waste Rules',
          'Circular Economy',
          'Waste-to-Energy',
          'Extended Producer Responsibility (EPR)',
        ],
      },
    ],
  },
  {
    id: 'climate-change',
    label: 'Section 25',
    title: 'Climate Change',
    summary: 'Science, impacts, mitigation, adaptation, and policy responses.',
    blocks: [
      {
        title: 'Climate Change',
        points: [
          'Climate System',
          'Weather vs Climate',
          'Greenhouse Effect',
          'Greenhouse Gases',
          'Global Warming',
          'Climate Change',
          'Carbon Cycle & Climate',
          'Carbon Budget',
          'Carbon Market',
          'Carbon Credit',
          'Carbon Tax',
          'Carbon Sequestration',
          'Blue Carbon',
          'Net Zero',
          'Climate Justice',
          'Loss and Damage',
          'Climate Refugees',
          'Urbanisation & Climate',
          'Agriculture & Climate',
          'Health & Climate',
          'Ocean & Climate',
          'Cryosphere & Climate',
          'El Niño',
          'La Niña',
          'ENSO',
          'Indian Ocean Dipole',
          'Arctic Amplification',
          'Tipping Points',
          'Heat Waves',
          'Droughts',
          'Desertification',
          'Forest Fires',
          'GLOF',
          'Sea Level Rise',
        ],
      },
    ],
  },
  {
    id: 'environmental-impact-assessment-eia',
    label: 'Section 26',
    title: 'Environmental Impact Assessment (EIA)',
    summary: 'EIA process, stages, and environmental clearance framework.',
    blocks: [
      {
        title: 'Environmental Impact Assessment (EIA)',
        points: [
          'EIA Notification',
          'Screening',
          'Scoping',
          'Baseline Data Collection',
          'Public Hearing',
          'Appraisal',
          'Environmental Clearance',
          'Monitoring',
          'Strategic Environmental Assessment',
        ],
      },
    ],
  },
  {
    id: 'environmental-governance',
    label: 'Section 27',
    title: 'Environmental Governance',
    summary: 'Institutions, policy architecture, and decision-making bodies.',
    blocks: [
      {
        title: 'Environmental Governance',
        points: [
          'MoEFCC',
          'CPCB',
          'SPCBs',
          'NGT',
          'National Biodiversity Authority',
          'State Biodiversity Boards',
          'Biodiversity Management Committees',
          'Forest Survey of India',
          'Wildlife Institute of India',
          'National Green Corps',
        ],
      },
    ],
  },
  {
    id: 'environmental-legislation',
    label: 'Section 28',
    title: 'Environmental Legislation',
    summary: 'Key environment laws, acts, and regulatory framework in India.',
    blocks: [
      {
        title: 'Environmental Legislation',
        points: [
          'Constitutional Provisions',
          'Wildlife Protection Act, 1972',
          'Water Act, 1974',
          'Forest Conservation Act, 1980',
          'Air Act, 1981',
          'Environment Protection Act, 1986',
          'Biological Diversity Act, 2002',
          'Forest Rights Act, 2006',
          'CAMPA Act',
          'Wetland Rules',
          'CRZ Notifications',
        ],
      },
    ],
  },
  {
    id: 'environment-current-affairs-dynamic-section',
    label: 'Section 29',
    title: 'Environment Current Affairs (Dynamic Section)',
    summary: 'Dynamic CA themes to link static ecology with current developments.',
    blocks: [
      {
        title: 'Environment Current Affairs (Dynamic Section)',
        points: [
          'Ramsar Sites',
          'National Parks',
          'Wildlife Sanctuaries',
          'Tiger Reserves',
          'Elephant Reserves',
          'Biosphere Reserves',
          'Biodiversity Heritage Sites',
          'UNESCO Natural Heritage Sites',
          'IUCN Status Changes',
          'New Species Discoveries',
          'Environment Performance Index',
          'Living Planet Report',
          'IPCC Assessment Reports',
          'COP Summits (UNFCCC, CBD, UNCCD)',
          'Global Biodiversity Framework',
          'Major National & International Environmental Developments',
        ],
      },
    ],
  },
];
