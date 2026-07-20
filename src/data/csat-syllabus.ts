export type CsatTopicBlock = {
  title: string;
  points: string[];
};

export type CsatSection = {
  id: string;
  label: string;
  title: string;
  summary: string;
  blocks: CsatTopicBlock[];
};

export const csatSyllabusSections: CsatSection[] = [
  {
    id: "reading-comprehension",
    label: "Section 01",
    title: "Reading Comprehension",
    summary:
      "English comprehension at Class X level — factual, inferential, and critical reading with vocabulary and argument skills.",
    blocks: [
      {
        title: "Comprehension Skills",
        points: [
          "Factual Comprehension",
          "Inferential Comprehension",
          "Analytical Comprehension",
          "Critical Reasoning Passages",
          "Main Idea & Central Theme",
          "Passage Summary",
          "Author's Tone & Attitude",
          "Assumptions",
          "Inferences",
          "Conclusions",
          "Fact vs Opinion",
          "Arguments",
          "Strengthening & Weakening Arguments",
        ],
      },
      {
        title: "Vocabulary & Passage Flow",
        points: [
          "Vocabulary in Context",
          "Meaning of Words/Phrases",
          "Contextual Usage",
          "Paragraph Interpretation",
          "Paragraph Completion",
          "Logical Flow of Passage",
          "Statement-Based Comprehension",
          "English Comprehension (Class X Level)",
        ],
      },
    ],
  },
  {
    id: "interpersonal-communication",
    label: "Section 02",
    title: "Interpersonal Skills & Communication",
    summary:
      "How communication works in administrative settings — process, barriers, and people skills for teamwork and public interaction.",
    blocks: [
      {
        title: "Communication",
        points: [
          "Communication Process",
          "Types of Communication",
          "Verbal Communication",
          "Non-Verbal Communication",
          "Written Communication",
          "Formal & Informal Communication",
          "Barriers to Communication",
          "Effective Communication",
          "Listening Skills",
          "Feedback Mechanism",
        ],
      },
      {
        title: "Interpersonal Skills",
        points: [
          "Interpersonal Relations",
          "Teamwork",
          "Leadership",
          "Negotiation Skills",
          "Persuasion",
          "Conflict Resolution",
          "Emotional Intelligence",
          "Empathy",
          "Social Awareness",
          "Behavioural Aptitude",
          "Public Interaction",
        ],
      },
    ],
  },
  {
    id: "logical-reasoning",
    label: "Section 03",
    title: "Logical Reasoning",
    summary:
      "Verbal reasoning patterns used across CSAT — relations, sequences, diagrams, and statement logic.",
    blocks: [
      {
        title: "Verbal Reasoning",
        points: [
          "Analogy",
          "Classification",
          "Series",
          "Coding-Decoding",
          "Blood Relations",
          "Direction Sense",
          "Ranking & Ordering",
          "Alphabet Test",
          "Venn Diagram",
          "Syllogism",
          "Logical Statements",
          "Data Sufficiency",
        ],
      },
    ],
  },
  {
    id: "analytical-ability",
    label: "Section 04",
    title: "Analytical Ability",
    summary:
      "Structured thinking for arrangements, puzzles, and logical deduction under time pressure.",
    blocks: [
      {
        title: "Analytical Themes",
        points: ["Arrangement", "Puzzles", "Logical Deduction"],
      },
    ],
  },
  {
    id: "decision-making",
    label: "Section 05",
    title: "Decision Making & Problem Solving",
    summary:
      "Situational judgement for Prelims Paper II — choose fair, practical, and ethical courses of action.",
    blocks: [
      {
        title: "Decision Making & Problem Solving",
        points: [
          "Decision Making",
          "Problem Solving",
          "General Mental Ability and Aptitude",
        ],
      },
    ],
  },
  {
    id: "basic-numeracy",
    label: "Section 06",
    title: "Basic Numeracy & Mental Ability",
    summary:
      "Class X–level numeracy and general mental aptitude — numbers, arithmetic, algebra, geometry, and modern maths basics.",
    blocks: [
      {
        title: "Number System",
        points: [
          "Natural Numbers",
          "Whole Numbers",
          "Integers",
          "Rational Numbers",
          "Irrational Numbers",
          "Real Numbers",
          "Surds & Indices",
          "Divisibility Rules",
          "HCF & LCM",
          "Factors & Multiples",
          "Remainders",
          "Unit Digit",
          "Cyclicity",
        ],
      },
      {
        title: "Simplification & Arithmetic",
        points: [
          "BODMAS",
          "Fractions",
          "Decimals",
          "Percentage",
          "Approximation",
          "Ratio & Proportion",
          "Basic Average",
          "Weighted Average",
          "Percentage Change",
          "Successive Percentage",
          "Profit, Loss & Discount",
          "Simple Interest",
          "Compound Interest",
        ],
      },
      {
        title: "Time, Work & Motion",
        points: [
          "Time & Work",
          "Relative Speed",
          "Boats & Streams",
          "Trains",
          "Race Problems",
          "Age-Based Problems",
          "Family Age Problems",
        ],
      },
      {
        title: "Algebra",
        points: [
          "Algebraic Expressions",
          "Linear Equations",
          "Simultaneous Equations",
          "Quadratic Equations (Basic)",
          "Inequalities (Basic)",
        ],
      },
      {
        title: "Geometry & Mensuration",
        points: [
          "Lines & Angles",
          "Triangles",
          "Quadrilaterals",
          "Circles",
          "Coordinate Geometry",
          "2D Mensuration",
          "3D Mensuration",
        ],
      },
      {
        title: "Modern Mathematics",
        points: [
          "Set Theory",
          "Permutation & Combination",
          "Probability",
        ],
      },
    ],
  },
  {
    id: "data-interpretation",
    label: "Section 07",
    title: "Data Interpretation",
    summary:
      "Read and analyse tables, graphs, charts, and caselets — plus quantitative and logical data sufficiency.",
    blocks: [
      {
        title: "DI Formats",
        points: [
          "Tabular Data",
          "Graphs",
          "Charts",
          "Paragraph-Based Data",
          "Analytical Caselets",
          "Data Analysis",
        ],
      },
      {
        title: "Data Sufficiency",
        points: [
          "Quantitative Data Sufficiency",
          "Logical Data Sufficiency",
        ],
      },
    ],
  },
];
