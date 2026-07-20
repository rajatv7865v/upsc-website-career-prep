export type Gs4Topic = {
  title: string;
  points: string[];
};

export type Gs4Block = {
  title: string;
  topics: Gs4Topic[];
};

export type Gs4Section = {
  id: string;
  label: string;
  title: string;
  summary: string;
  blocks: Gs4Block[];
};

export const gs4SyllabusSections: Gs4Section[] = 
[
  {
    "id": "ethics-interface",
    "label": "Section 01",
    "title": "Ethics & Human Interface",
    "summary": "Essence, determinants and consequences of ethics in human actions; dimensions of ethics; ethics in private and public relationships; human values.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Ethics",
            "points": [
              "Meaning of Ethics",
              "Nature of Ethics",
              "Scope of Ethics",
              "Ethics as a Branch of Philosophy",
              "Importance of Ethics",
              "Need for Ethics in Society",
              "Ethics and Human Conduct"
            ]
          },
          {
            "title": "Human Interface",
            "points": [
              "Human Behaviour",
              "Human Conduct",
              "Human Relationships",
              "Human Interactions",
              "Human Decision-Making",
              "Human Responsibility"
            ]
          },
          {
            "title": "Ethics and Morality",
            "points": [
              "Ethics",
              "Morality",
              "Moral Values",
              "Moral Standards",
              "Moral Judgements",
              "Moral Responsibility",
              "Relationship between Ethics and Morality"
            ]
          },
          {
            "title": "Ethics and Law",
            "points": [
              "Ethics vs Law",
              "Legal Responsibility",
              "Moral Responsibility",
              "Ethical Governance",
              "Constitutional Morality"
            ]
          }
        ]
      },
      {
        "title": "Essence of Ethics in Human Actions",
        "topics": [
          {
            "title": "Meaning of Human Action",
            "points": [
              "Voluntary Actions",
              "Involuntary Actions",
              "Rational Actions",
              "Moral Actions"
            ]
          },
          {
            "title": "Essence of Ethical Behaviour",
            "points": [
              "Right Conduct",
              "Moral Choice",
              "Duty Consciousness",
              "Responsibility",
              "Accountability",
              "Self-Regulation"
            ]
          },
          {
            "title": "Ethical Decision Making",
            "points": [
              "Ethical Dilemmas",
              "Moral Reasoning",
              "Consequential Analysis",
              "Duty-Based Reasoning",
              "Value-Based Decision Making"
            ]
          }
        ]
      },
      {
        "title": "Determinants of Ethics",
        "topics": [
          {
            "title": "Individual Determinants",
            "points": [
              "Conscience",
              "Character",
              "Personality",
              "Beliefs",
              "Attitudes",
              "Values",
              "Emotional Intelligence"
            ]
          },
          {
            "title": "Social Determinants",
            "points": [
              "Family",
              "Society",
              "Community",
              "Religion",
              "Culture",
              "Traditions",
              "Customs"
            ]
          },
          {
            "title": "Institutional Determinants",
            "points": [
              "Educational Institutions",
              "Political Institutions",
              "Economic Institutions",
              "Legal Institutions",
              "Media"
            ]
          },
          {
            "title": "Contemporary Determinants",
            "points": [
              "Globalization",
              "Technology",
              "Social Media",
              "Consumerism",
              "Professional Environment"
            ]
          }
        ]
      },
      {
        "title": "Consequences of Ethics in Human Actions",
        "topics": [
          {
            "title": "Positive Consequences",
            "points": [
              "Trust",
              "Credibility",
              "Social Harmony",
              "Justice",
              "Transparency",
              "Accountability",
              "Good Governance"
            ]
          },
          {
            "title": "Negative Consequences of Unethical Behaviour",
            "points": [
              "Corruption",
              "Exploitation",
              "Injustice",
              "Social Conflict",
              "Distrust",
              "Governance Failure"
            ]
          }
        ]
      },
      {
        "title": "Dimensions of Ethics",
        "topics": [
          {
            "title": "Individual Ethics",
            "points": [
              "Self-Discipline",
              "Personal Integrity",
              "Character"
            ]
          },
          {
            "title": "Social Ethics",
            "points": [
              "Social Responsibility",
              "Social Justice",
              "Equality",
              "Human Dignity"
            ]
          },
          {
            "title": "Professional Ethics",
            "points": [
              "Professional Conduct",
              "Professional Responsibility",
              "Code of Ethics"
            ]
          },
          {
            "title": "Administrative Ethics",
            "points": [
              "Public Accountability",
              "Neutrality",
              "Integrity",
              "Public Interest"
            ]
          },
          {
            "title": "Environmental Ethics",
            "points": [
              "Sustainable Development",
              "Ecological Responsibility",
              "Intergenerational Equity"
            ]
          },
          {
            "title": "Global Ethics",
            "points": [
              "Human Rights",
              "Global Justice",
              "Peace",
              "International Responsibility"
            ]
          }
        ]
      },
      {
        "title": "Human Values",
        "topics": [
          {
            "title": "Meaning of Human Values",
            "points": [
              "Values",
              "Human Values",
              "Universal Values",
              "Moral Values",
              "Ethical Values"
            ]
          },
          {
            "title": "Types of Human Values",
            "points": []
          },
          {
            "title": "Personal Values",
            "points": [
              "Honesty",
              "Courage",
              "Discipline",
              "Self-Respect"
            ]
          },
          {
            "title": "Social Values",
            "points": [
              "Cooperation",
              "Compassion",
              "Respect",
              "Tolerance"
            ]
          },
          {
            "title": "Professional Values",
            "points": [
              "Integrity",
              "Commitment",
              "Responsibility"
            ]
          },
          {
            "title": "Constitutional Values",
            "points": [
              "Justice",
              "Liberty",
              "Equality",
              "Fraternity"
            ]
          }
        ]
      },
      {
        "title": "Sources of Human Values",
        "topics": [
          {
            "title": "Family",
            "points": [
              "Parenting",
              "Family Culture",
              "Socialization"
            ]
          },
          {
            "title": "Society",
            "points": [
              "Social Norms",
              "Community Values",
              "Social Institutions"
            ]
          },
          {
            "title": "Educational Institutions",
            "points": [
              "School Education",
              "Higher Education",
              "Moral Education"
            ]
          },
          {
            "title": "Religion and Spirituality",
            "points": [
              "Religious Teachings",
              "Spiritual Traditions"
            ]
          },
          {
            "title": "Literature and Culture",
            "points": [
              "Literature",
              "Art",
              "Traditions",
              "Cultural Heritage"
            ]
          }
        ]
      },
      {
        "title": "Lessons from Great Leaders, Reformers and Administrators",
        "topics": [
          {
            "title": "Indian Leaders",
            "points": [
              "Mahatma Gandhi",
              "Swami Vivekananda",
              "Rabindranath Tagore",
              "Dr. B.R. Ambedkar",
              "Sardar Patel",
              "A.P.J. Abdul Kalam",
              "etc"
            ]
          },
          {
            "title": "Social Reformers",
            "points": [
              "Raja Ram Mohan Roy",
              "Jyotiba Phule",
              "Savitribai Phule",
              "Ishwar Chandra Vidyasagar",
              "Narayana Guru",
              "Periyar"
            ]
          },
          {
            "title": "Administrators",
            "points": [
              "E. Sreedharan",
              "T.N. Seshan",
              "Armstrong Pame",
              "Ashok Khemka"
            ]
          },
          {
            "title": "Global Thinkers",
            "points": [
              "Socrates",
              "Plato",
              "Aristotle",
              "Immanuel Kant",
              "John Stuart Mill",
              "Nelson Mandela",
              "Martin Luther King Jr."
            ]
          }
        ]
      },
      {
        "title": "Role of Family, Society and Educational Institutions in Inculcating Values",
        "topics": [
          {
            "title": "Family",
            "points": [
              "Primary Socialization",
              "Character Formation",
              "Moral Development",
              "Ethical Behaviour"
            ]
          },
          {
            "title": "Society",
            "points": [
              "Social Norms",
              "Community Behaviour",
              "Social Responsibility",
              "Collective Values"
            ]
          },
          {
            "title": "Educational Institutions",
            "points": [
              "Value Education",
              "Civic Education",
              "Ethical Awareness",
              "Leadership Development"
            ]
          }
        ]
      },
      {
        "title": "Ethics in Private and Public Relationships",
        "topics": [
          {
            "title": "Private Relationships",
            "points": [
              "Family Relationships",
              "Friendships",
              "Personal Relationships",
              "Social Relationships"
            ]
          },
          {
            "title": "Ethical Values in Private Relationships",
            "points": [
              "Love",
              "Trust",
              "Loyalty",
              "Respect",
              "Care",
              "Responsibility"
            ]
          },
          {
            "title": "Public Relationships",
            "points": [
              "Citizen-State Relationship",
              "Public Officials and Citizens",
              "Political Relationships",
              "Institutional Relationships"
            ]
          },
          {
            "title": "Ethical Values in Public Relationships",
            "points": [
              "Transparency",
              "Accountability",
              "Integrity",
              "Impartiality",
              "Responsiveness",
              "Service Orientation"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "attitude",
    "label": "Section 02",
    "title": "Attitude",
    "summary": "Content, structure, function; influence on thought and behaviour; moral and political attitudes; social influence and persuasion.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "ATTITUDE",
            "points": []
          },
          {
            "title": "Meaning of Attitude",
            "points": [
              "Attitude",
              "Belief",
              "Opinion",
              "Perception",
              "Stereotype",
              "Prejudice"
            ]
          },
          {
            "title": "Characteristics of Attitude",
            "points": [
              "Learned Behaviour",
              "Stability",
              "Direction",
              "Intensity"
            ]
          }
        ]
      },
      {
        "title": "Content of Attitude",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Beliefs",
              "Values",
              "Emotions",
              "Experiences",
              "Knowledge"
            ]
          }
        ]
      },
      {
        "title": "Structure of Attitude",
        "topics": [
          {
            "title": "Cognitive Component",
            "points": [
              "Thoughts",
              "Beliefs",
              "Knowledge"
            ]
          },
          {
            "title": "Affective Component",
            "points": [
              "Feelings",
              "Emotions"
            ]
          },
          {
            "title": "Behavioural Component",
            "points": [
              "Actions",
              "Responses",
              "Behavioural Intentions"
            ]
          }
        ]
      },
      {
        "title": "Functions of Attitude",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Knowledge Function",
              "Utilitarian Function",
              "Ego Defensive Function",
              "Value Expressive Function"
            ]
          }
        ]
      },
      {
        "title": "Influence of Attitude",
        "topics": [
          {
            "title": "Attitude and Thought",
            "points": [
              "Perception",
              "Judgement",
              "Decision Making"
            ]
          },
          {
            "title": "Attitude and Behaviour",
            "points": [
              "Behaviour Formation",
              "Behaviour Modification",
              "Consistency and Inconsistency"
            ]
          }
        ]
      },
      {
        "title": "Moral and Political Attitudes",
        "topics": [
          {
            "title": "Moral Attitudes",
            "points": [
              "Honesty",
              "Integrity",
              "Justice",
              "Responsibility"
            ]
          },
          {
            "title": "Political Attitudes",
            "points": [
              "Democracy",
              "Secularism",
              "Nationalism",
              "Constitutionalism",
              "Social Justice"
            ]
          }
        ]
      },
      {
        "title": "Social Influence",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Social Influence",
              "Group Influence",
              "Social Pressure"
            ]
          },
          {
            "title": "Types",
            "points": [
              "Conformity",
              "Compliance",
              "Obedience"
            ]
          },
          {
            "title": "Factors Affecting Social Influence",
            "points": [
              "Authority",
              "Group Size",
              "Social Norms",
              "Peer Pressure"
            ]
          }
        ]
      },
      {
        "title": "Persuasion",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Persuasion",
              "Behaviour Change"
            ]
          },
          {
            "title": "Elements",
            "points": [
              "Source",
              "Message",
              "Receiver",
              "Medium"
            ]
          },
          {
            "title": "Techniques",
            "points": [
              "Logical Appeal",
              "Emotional Appeal",
              "Credibility Appeal"
            ]
          },
          {
            "title": "Persuasion in Governance",
            "points": [
              "Public Awareness Campaigns",
              "Behavioural Change Programmes",
              "Social Mobilization"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "aptitude-values",
    "label": "Section 03",
    "title": "Aptitude & Foundational Values for Civil Service",
    "summary": "Integrity, impartiality, non-partisanship, objectivity, dedication to public service, empathy, tolerance and compassion.",
    "blocks": [
      {
        "title": "Aptitude and Foundational Values for Civil Services",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Aptitude",
              "Ability",
              "Competency",
              "Potential"
            ]
          },
          {
            "title": "Types",
            "points": [
              "Intellectual Aptitude",
              "Administrative Aptitude",
              "Leadership Aptitude",
              "Decision-Making Aptitude",
              "Emotional Aptitude"
            ]
          },
          {
            "title": "Importance in Civil Services",
            "points": [
              "Public Administration",
              "Problem Solving",
              "Conflict Resolution",
              "Leadership"
            ]
          }
        ]
      },
      {
        "title": "Values towards Weaker Sections",
        "topics": [
          {
            "title": "Vulnerable Groups",
            "points": [
              "Women",
              "Children",
              "Elderly",
              "Persons with Disabilities",
              "SCs",
              "STs",
              "Minorities",
              "Poor"
            ]
          },
          {
            "title": "Ethical Values Required",
            "points": [
              "Compassion",
              "Inclusion",
              "Social Justice",
              "Equity",
              "Human Dignity"
            ]
          }
        ]
      },
      {
        "title": "Application of Ethics in Civil Services",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Ethical Decision Making",
              "Public Accountability",
              "Citizen-Centric Governance",
              "Transparency",
              "Responsiveness",
              "Conflict Resolution",
              "Ethical Leadership",
              "Good Governance"
            ]
          }
        ]
      },
      {
        "title": "Foundational Values for Civil Services",
        "topics": [
          {
            "title": "Integrity",
            "points": [
              "Consistency in Values and Actions",
              "Moral Uprightness"
            ]
          },
          {
            "title": "Components",
            "points": [
              "Honesty",
              "Truthfulness",
              "Ethical Consistency"
            ]
          },
          {
            "title": "Importance",
            "points": [
              "Public Trust",
              "Credibility",
              "Accountability"
            ]
          },
          {
            "title": "Impartiality",
            "points": [
              "Fairness",
              "Neutrality",
              "Non-Discrimination"
            ]
          },
          {
            "title": "Application",
            "points": [
              "Public Service Delivery",
              "Decision Making",
              "Recruitment",
              "Welfare Distribution"
            ]
          },
          {
            "title": "Non-Partisanship",
            "points": [
              "Political Neutrality",
              "Institutional Neutrality"
            ]
          },
          {
            "title": "Importance",
            "points": [
              "Democratic Governance",
              "Administrative Continuity"
            ]
          },
          {
            "title": "Objectivity",
            "points": [
              "Evidence-Based Decision Making",
              "Rationality"
            ]
          },
          {
            "title": "Components",
            "points": [
              "Facts",
              "Data",
              "Reasoning"
            ]
          },
          {
            "title": "Dedication to Public Service",
            "points": [
              "Service Orientation",
              "Commitment to Public Welfare"
            ]
          },
          {
            "title": "Attributes",
            "points": [
              "Duty Consciousness",
              "Public Interest",
              "Responsiveness"
            ]
          },
          {
            "title": "Empathy",
            "points": [
              "Understanding Others’ Feelings",
              "Emotional Understanding"
            ]
          },
          {
            "title": "Applications",
            "points": [
              "Welfare Delivery",
              "Citizen Interaction",
              "Conflict Resolution"
            ]
          },
          {
            "title": "Tolerance",
            "points": [
              "Respect for Diversity",
              "Acceptance of Differences"
            ]
          },
          {
            "title": "Areas",
            "points": [
              "Religion",
              "Culture",
              "Language",
              "Ideology"
            ]
          },
          {
            "title": "Compassion",
            "points": [
              "Concern for Others",
              "Desire to Help"
            ]
          },
          {
            "title": "Applications",
            "points": [
              "Vulnerable Sections",
              "Disaster Relief",
              "Social Welfare"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "emotional-intelligence",
    "label": "Section 04",
    "title": "Emotional Intelligence",
    "summary": "Concepts, utilities, and application of emotional intelligence in administration and governance.",
    "blocks": [
      {
        "title": "Emotional Intelligence – Basics",
        "topics": [
          {
            "title": "Meaning of Emotional Intelligence",
            "points": [
              "Emotion",
              "Intelligence",
              "Emotional Intelligence (EI)",
              "Emotional Quotient (EQ)",
              "Emotional Competence",
              "Emotional Maturity"
            ]
          },
          {
            "title": "Evolution of Emotional Intelligence",
            "points": []
          },
          {
            "title": "Early Foundations",
            "points": [
              "Social Intelligence (Edward Thorndike)",
              "Multiple Intelligence Theory (Howard Gardner)"
            ]
          },
          {
            "title": "Modern Concept",
            "points": [
              "Peter Salovey and John Mayer",
              "Daniel Goleman Model"
            ]
          }
        ]
      },
      {
        "title": "Components of Emotional Intelligence",
        "topics": [
          {
            "title": "Self-Awareness",
            "points": [
              "Emotional Awareness",
              "Self-Confidence",
              "Accurate Self-Assessment"
            ]
          },
          {
            "title": "Self-Regulation",
            "points": [
              "Emotional Control",
              "Self-Discipline",
              "Adaptability",
              "Trustworthiness"
            ]
          },
          {
            "title": "Motivation",
            "points": [
              "Achievement Orientation",
              "Initiative",
              "Optimism",
              "Commitment"
            ]
          },
          {
            "title": "Empathy",
            "points": [
              "Understanding Others' Emotions",
              "Perspective Taking",
              "Social Awareness"
            ]
          },
          {
            "title": "Social Skills",
            "points": [
              "Communication Skills",
              "Leadership Skills",
              "Conflict Resolution",
              "Relationship Management",
              "Team Building"
            ]
          }
        ]
      },
      {
        "title": "Types of Emotions",
        "topics": [
          {
            "title": "Positive Emotions",
            "points": [
              "Happiness",
              "Compassion",
              "Gratitude",
              "Hope",
              "Love",
              "Confidence"
            ]
          },
          {
            "title": "Negative Emotions",
            "points": [
              "Anger",
              "Fear",
              "Anxiety",
              "Jealousy",
              "Hatred",
              "Frustration"
            ]
          }
        ]
      },
      {
        "title": "Characteristics of Emotionally Intelligent Persons",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Self-Controlled",
              "Empathetic",
              "Adaptable",
              "Resilient",
              "Patient",
              "Ethical",
              "Socially Responsible",
              "Good Communicator",
              "Positive Thinker"
            ]
          }
        ]
      },
      {
        "title": "Application of Emotional Intelligence in Administration",
        "topics": [
          {
            "title": "Citizen-Centric Governance",
            "points": [
              "Sensitivity towards Citizens",
              "Grievance Redressal",
              "Public Service Delivery"
            ]
          },
          {
            "title": "Public Administration",
            "points": [
              "Ethical Decision Making",
              "Administrative Fairness",
              "Public Accountability"
            ]
          },
          {
            "title": "Crisis Management",
            "points": [
              "Disaster Management",
              "Pandemic Response",
              "Law and Order Situations"
            ]
          },
          {
            "title": "Welfare Administration",
            "points": [
              "Understanding Vulnerable Groups",
              "Social Justice",
              "Inclusive Governance"
            ]
          },
          {
            "title": "Human Resource Management",
            "points": [
              "Team Leadership",
              "Employee Motivation",
              "Organizational Behaviour"
            ]
          }
        ]
      },
      {
        "title": "Emotional Intelligence Vs Iq",
        "topics": [
          {
            "title": "IQ",
            "points": [
              "Cognitive Ability",
              "Analytical Skills",
              "Academic Intelligence"
            ]
          },
          {
            "title": "EQ",
            "points": [
              "Emotional Understanding",
              "Social Relationships",
              "Behavioural Effectiveness"
            ]
          },
          {
            "title": "Comparison",
            "points": [
              "IQ helps in selection",
              "EQ helps in success and leadership",
              "IQ predicts academic performance",
              "EQ predicts interpersonal effectiveness"
            ]
          }
        ]
      },
      {
        "title": "Importance of Emotional Intelligence",
        "topics": [
          {
            "title": "Personal Life",
            "points": [
              "Better Relationships",
              "Mental Well-being",
              "Emotional Stability",
              "Stress Management"
            ]
          },
          {
            "title": "Professional Life",
            "points": [
              "Leadership",
              "Team Management",
              "Decision Making",
              "Conflict Resolution"
            ]
          },
          {
            "title": "Public Life",
            "points": [
              "Citizen Engagement",
              "Social Harmony",
              "Public Trust"
            ]
          }
        ]
      },
      {
        "title": "Utilities of Emotional Intelligence",
        "topics": [
          {
            "title": "Decision Making",
            "points": [
              "Balanced Decisions",
              "Ethical Judgements",
              "Rational Behaviour"
            ]
          },
          {
            "title": "Leadership",
            "points": [
              "Inspirational Leadership",
              "Transformational Leadership",
              "Crisis Leadership"
            ]
          },
          {
            "title": "Conflict Management",
            "points": [
              "Negotiation",
              "Mediation",
              "Reconciliation"
            ]
          },
          {
            "title": "Communication",
            "points": [
              "Effective Listening",
              "Persuasion",
              "Interpersonal Relations"
            ]
          },
          {
            "title": "Team Building",
            "points": [
              "Cooperation",
              "Motivation",
              "Coordination"
            ]
          },
          {
            "title": "Stress Management",
            "points": [
              "Emotional Stability",
              "Resilience",
              "Coping Mechanisms"
            ]
          }
        ]
      },
      {
        "title": "Application of Ei in Governance",
        "topics": [
          {
            "title": "Good Governance",
            "points": [
              "Transparency",
              "Accountability",
              "Responsiveness",
              "Participation"
            ]
          },
          {
            "title": "Policy Implementation",
            "points": [
              "Stakeholder Management",
              "Public Consultation",
              "Community Participation"
            ]
          },
          {
            "title": "Conflict Resolution",
            "points": [
              "Ethnic Conflicts",
              "Social Tensions",
              "Labour Disputes"
            ]
          },
          {
            "title": "Public Trust Building",
            "points": [
              "Compassionate Administration",
              "Responsive Governance",
              "Ethical Governance"
            ]
          }
        ]
      },
      {
        "title": "Emotional Intelligence and Civil Services",
        "topics": [
          {
            "title": "EI is Important for Civil Servants",
            "points": [
              "Public Interaction",
              "Leadership",
              "Administrative Neutrality",
              "Stress Handling",
              "Crisis Response"
            ]
          },
          {
            "title": "EI Competencies Required",
            "points": [
              "Empathy",
              "Patience",
              "Tolerance",
              "Adaptability",
              "Integrity",
              "Communication Skills"
            ]
          }
        ]
      },
      {
        "title": "Ways to Develop Emotional Intelligence",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Self-Reflection",
              "Self-Awareness Practices",
              "Mindfulness",
              "Meditation",
              "Active Listening",
              "Feedback Mechanism",
              "Empathy Building",
              "Emotional Regulation Exercises"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "moral-thinkers",
    "label": "Section 05",
    "title": "Moral Thinkers & Philosophers",
    "summary": "Contributions of moral thinkers and philosophers from India and the world.",
    "blocks": [
      {
        "title": "Moral Thinkers & Philosophers – Basics",
        "topics": [
          {
            "title": "Ethics and Philosophy",
            "points": [
              "Moral Philosophy",
              "Ethical Thought",
              "Moral Reasoning",
              "Ethical Schools of Thought"
            ]
          },
          {
            "title": "Importance in Ethics",
            "points": [
              "Ethical Principles",
              "Governance Applications",
              "Value Systems",
              "Leadership Lessons"
            ]
          }
        ]
      },
      {
        "title": "Indian Moral Thinkers and Philosophers",
        "topics": []
      },
      {
        "title": "Ancient Indian Thinkers",
        "topics": [
          {
            "title": "Vedic Philosophy",
            "points": [
              "Dharma",
              "Rta",
              "Satya",
              "Karma"
            ]
          },
          {
            "title": "Upanishadic Thinkers",
            "points": [
              "Self-Knowledge",
              "Universal Brotherhood",
              "Truth"
            ]
          }
        ]
      },
      {
        "title": "Indian Thinkers",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Gautama Buddha",
              "Mahavira"
            ]
          }
        ]
      },
      {
        "title": "•\tKautilya",
        "topics": []
      },
      {
        "title": "•\tSwami Vivekananda",
        "topics": []
      },
      {
        "title": "•\tMahatma Gandhi",
        "topics": []
      },
      {
        "title": "•\tDr. B.r. Ambedkar",
        "topics": []
      },
      {
        "title": "•\tRabindranath Tagore",
        "topics": []
      },
      {
        "title": "•\tSri Aurobindo",
        "topics": []
      },
      {
        "title": "•\tVinoba Bhave",
        "topics": []
      },
      {
        "title": "•\tJyotiba Phule",
        "topics": []
      },
      {
        "title": "•\tSavitribai Phule",
        "topics": []
      },
      {
        "title": "•\tNarayana Guru",
        "topics": []
      },
      {
        "title": "•\tA.p.j. Abdul Kalam",
        "topics": []
      },
      {
        "title": "World Moral Thinkers and Philosophers",
        "topics": []
      },
      {
        "title": "•\tSocrates",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "PLATO"
            ]
          }
        ]
      },
      {
        "title": "•\tImmanuel Kant",
        "topics": []
      },
      {
        "title": "•\tAristotle",
        "topics": []
      },
      {
        "title": "•\tJeremy Bentham",
        "topics": []
      },
      {
        "title": "•\tJohn Stuart Mill",
        "topics": []
      },
      {
        "title": "•\tJean-jacques Rousseau",
        "topics": []
      },
      {
        "title": "•\tThomas Hobbes",
        "topics": []
      },
      {
        "title": "•\tJohn Locke",
        "topics": []
      },
      {
        "title": "•\tNiccolo Machiavelli",
        "topics": []
      },
      {
        "title": "•\tKarl Marx",
        "topics": []
      },
      {
        "title": "•\tConfucius",
        "topics": []
      },
      {
        "title": "•\tNelson Mandela",
        "topics": []
      },
      {
        "title": "•\tMartin Luther King Jr.",
        "topics": []
      },
      {
        "title": "•\tMother Teresa",
        "topics": []
      },
      {
        "title": "•\tDalai Lama",
        "topics": []
      },
      {
        "title": "Ethical Theories of Philosophy",
        "topics": []
      },
      {
        "title": "Deontological Ethics",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Duty-Based Ethics",
              "Immanuel Kant"
            ]
          }
        ]
      },
      {
        "title": "Utilitarian Ethics",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Consequentialism",
              "Jeremy Bentham",
              "J.S. Mill"
            ]
          }
        ]
      },
      {
        "title": "Virtue Ethics",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Aristotle",
              "Character-Based Ethics"
            ]
          }
        ]
      },
      {
        "title": "Rights-based Ethics",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Human Rights",
              "Natural Rights"
            ]
          }
        ]
      },
      {
        "title": "Justice Theory",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Distributive Justice",
              "Procedural Justice",
              "Social Justice"
            ]
          }
        ]
      },
      {
        "title": "Ethics of Care",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Compassion",
              "Relationships",
              "Responsibility"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "public-admin-ethics",
    "label": "Section 06",
    "title": "Ethics in Public Administration",
    "summary": "Public/civil service values; status and problems; ethical concerns and dilemmas; corporate governance.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Public Service Values",
            "points": []
          },
          {
            "title": "Meaning",
            "points": [
              "Public Service",
              "Public Interest",
              "Public Duty",
              "Public Trust",
              "Public Responsibility"
            ]
          },
          {
            "title": "Civil Service Values",
            "points": [
              "Integrity",
              "Honesty",
              "Impartiality",
              "Objectivity",
              "Accountability",
              "Transparency",
              "Non-Partisanship",
              "Dedication to Public Service",
              "Empathy",
              "Compassion",
              "Tolerance",
              "Responsiveness"
            ]
          },
          {
            "title": "Constitutional Values in Civil Services",
            "points": [
              "Justice",
              "Liberty",
              "Equality",
              "Fraternity",
              "Rule of Law",
              "Constitutional Morality"
            ]
          }
        ]
      },
      {
        "title": "Ethics in Public Administration",
        "topics": [
          {
            "title": "Meaning",
            "points": [
              "Administrative Ethics",
              "Bureaucratic Ethics",
              "Ethics in Governance",
              "Ethics in Public Service"
            ]
          },
          {
            "title": "Objectives",
            "points": [
              "Public Welfare",
              "Public Trust",
              "Efficient Administration",
              "Citizen-Centric Governance"
            ]
          },
          {
            "title": "Importance",
            "points": [
              "Good Governance",
              "Transparency",
              "Accountability",
              "Integrity in Administration",
              "Ethical Decision Making"
            ]
          }
        ]
      },
      {
        "title": "Sources of Ethical Guidance",
        "topics": [
          {
            "title": "Laws as a Source of Ethical Guidance",
            "points": []
          },
          {
            "title": "Law",
            "points": [
              "Constitutional Law",
              "Statutory Law",
              "Administrative Law"
            ]
          },
          {
            "title": "Importance",
            "points": [
              "Defines Standards",
              "Ensures Accountability",
              "Protects Rights"
            ]
          },
          {
            "title": "Limitations",
            "points": [
              "Law May Not Cover Every Situation",
              "Legal but Unethical Actions"
            ]
          },
          {
            "title": "Rules as a Source of Ethical Guidance",
            "points": []
          },
          {
            "title": "Rules",
            "points": [
              "Service Rules",
              "Conduct Rules",
              "Departmental Instructions",
              "Civil Service Conduct Rules",
              "Integrity Requirements",
              "Professional Conduct",
              "Conflict of Interest Norms"
            ]
          },
          {
            "title": "Regulations as a Source of Ethical Guidance",
            "points": [
              "Regulatory Framework",
              "Administrative Regulations",
              "Codes of Conduct",
              "Professional Codes"
            ]
          },
          {
            "title": "Professional Ethics Codes",
            "points": [
              "Medical Ethics",
              "Legal Ethics",
              "Engineering Ethics",
              "Media Ethics"
            ]
          },
          {
            "title": "Conscience as a Source of Ethical Guidance",
            "points": []
          },
          {
            "title": "Meaning",
            "points": [
              "Inner Voice",
              "Moral Sense",
              "Ethical Compass",
              "Role",
              "Moral Judgement",
              "Ethical Decision Making",
              "Personal Responsibility"
            ]
          },
          {
            "title": "Challenges",
            "points": [
              "Subjectivity",
              "Personal Biases",
              "Conflicts with Institutional Rules"
            ]
          }
        ]
      },
      {
        "title": "Accountability and Ethical Governance",
        "topics": [
          {
            "title": "Accountability",
            "points": [
              "Meaning",
              "Responsibility for Actions",
              "Answerability",
              "Enforceability"
            ]
          },
          {
            "title": "Types of Accountability",
            "points": [
              "Administrative Accountability",
              "Political Accountability",
              "Legal Accountability",
              "Financial Accountability",
              "Social Accountability",
              "Ethical Accountability"
            ]
          },
          {
            "title": "Ethical Governance",
            "points": []
          },
          {
            "title": "Meaning",
            "points": []
          },
          {
            "title": "Governance Based on Ethical Principles",
            "points": []
          },
          {
            "title": "Principles",
            "points": [
              "Transparency",
              "Accountability",
              "Participation",
              "Rule of Law",
              "Integrity",
              "Responsiveness",
              "Equity"
            ]
          },
          {
            "title": "Pillars of Ethical Governance",
            "points": [
              "Ethical Leadership",
              "Citizen-Centric Administration",
              "Institutional Integrity",
              "Public Accountability"
            ]
          },
          {
            "title": "Good Governance",
            "points": []
          },
          {
            "title": "Characteristics",
            "points": [
              "Transparency",
              "Accountability",
              "Responsiveness",
              "Participation",
              "Effectiveness",
              "Efficiency",
              "Inclusiveness",
              "Rule of Law"
            ]
          }
        ]
      },
      {
        "title": "Ethical Issues in Funding",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Funding and Ethics",
              "Political Funding",
              "Electoral Funding",
              "Transparency in Funding",
              "Electoral Bonds Debate",
              "NGO Funding",
              "Foreign Funding",
              "FCRA Issues",
              "Accountability of NGOs",
              "International Funding",
              "Development Assistance",
              "Conditional Funding",
              "Sovereignty Concerns",
              "Corporate Funding",
              "Political Donations",
              "Lobbying",
              "Conflict of Interest"
            ]
          }
        ]
      },
      {
        "title": "Corporate Governance",
        "topics": [
          {
            "title": "System of Directing and Controlling Companies",
            "points": []
          },
          {
            "title": "Objectives",
            "points": [
              "Transparency",
              "Accountability",
              "Ethical Business Practices",
              "Protection of Stakeholders"
            ]
          },
          {
            "title": "Principles of Corporate Governance",
            "points": [
              "Transparency",
              "Accountability",
              "Fairness",
              "Responsibility",
              "Disclosure",
              "Ethical Conduct"
            ]
          },
          {
            "title": "Stakeholders in Corporate Governance",
            "points": [
              "Shareholders",
              "Employees",
              "Consumers",
              "Creditors",
              "Suppliers",
              "Government",
              "Society"
            ]
          },
          {
            "title": "Corporate Ethics",
            "points": []
          },
          {
            "title": "Corporate Values",
            "points": [
              "Integrity",
              "Honesty",
              "Responsibility",
              "Sustainability"
            ]
          },
          {
            "title": "Business Ethics",
            "points": [
              "Fair Competition",
              "Consumer Protection",
              "Labour Welfare",
              "Environmental Responsibility"
            ]
          },
          {
            "title": "Corporate Social Responsibility (CSR)",
            "points": []
          },
          {
            "title": "CSR Basics",
            "points": [
              "Meaning",
              "Objectives",
              "CSR Provisions under Companies Act",
              "Areas",
              "Education",
              "Health",
              "Environment",
              "Rural Development",
              "Skill Development"
            ]
          },
          {
            "title": "Corporate Governance Framework in India",
            "points": [
              "Institutions",
              "SEBI",
              "MCA",
              "National Financial Reporting Authority (NFRA)"
            ]
          },
          {
            "title": "Committees",
            "points": [
              "Kumar Mangalam Birla Committee",
              "Narayana Murthy Committee",
              "Uday Kotak Committee"
            ]
          },
          {
            "title": "Corporate Governance Challenges",
            "points": [
              "Corporate Frauds",
              "Insider Trading",
              "Accounting Manipulation",
              "Conflict of Interest",
              "Regulatory Capture",
              "Weak Board Oversight"
            ]
          }
        ]
      },
      {
        "title": "Status of Ethics in Public Administration",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Positive Trends",
              "E-Governance",
              "Citizen Charters",
              "RTI",
              "Social Audits",
              "Transparency Mechanisms"
            ]
          },
          {
            "title": "Challenges",
            "points": [
              "Corruption",
              "Political Interference",
              "Red Tapism",
              "Nepotism",
              "Cronyism",
              "Conflict of Interest",
              "Lack of Accountability"
            ]
          }
        ]
      },
      {
        "title": "Problems of Ethics in Public Administration",
        "topics": [
          {
            "title": "Administrative Problems",
            "points": [
              "Corruption",
              "Abuse of Power",
              "Delay in Decision Making",
              "Lack of Transparency"
            ]
          },
          {
            "title": "Political Problems",
            "points": [
              "Politicization of Administration",
              "Patronage Networks",
              "Electoral Pressures"
            ]
          },
          {
            "title": "Institutional Problems",
            "points": [
              "Weak Accountability Mechanisms",
              "Poor Ethical Culture",
              "Inadequate Monitoring"
            ]
          }
        ]
      },
      {
        "title": "Ethical Concerns and Dilemmas",
        "topics": [
          {
            "title": "Ethical Concerns in Government Institutions",
            "points": []
          },
          {
            "title": "Governance Related Concerns",
            "points": [
              "Corruption",
              "Favoritism",
              "Nepotism",
              "Misuse of Authority",
              "Lack of Transparency"
            ]
          },
          {
            "title": "Public Service Delivery Issues",
            "points": [
              "Leakages",
              "Exclusion Errors",
              "Discrimination",
              "Administrative Apathy",
              "Policy Making Concerns",
              "Conflict of Interest",
              "Political Pressure",
              "Resource Allocation Issues"
            ]
          },
          {
            "title": "Ethical Dilemmas in Government",
            "points": [
              "Meaning",
              "Ethical Dilemma",
              "Moral Conflict",
              "Value Conflict"
            ]
          },
          {
            "title": "Types of Ethical Dilemmas",
            "points": [
              "Personal vs Professional Values",
              "Law vs Conscience",
              "Public Interest vs Political Orders",
              "Efficiency vs Equity",
              "Transparency vs Confidentiality",
              "Development vs Environment",
              "Individual Rights vs Collective Good"
            ]
          },
          {
            "title": "Ethical Concerns in Private Institutions",
            "points": [
              "Corporate Sector",
              "Corporate Fraud",
              "Insider Trading",
              "Tax Evasion",
              "Regulatory Violations"
            ]
          },
          {
            "title": "Workplace Ethics",
            "points": [
              "Discrimination",
              "Harassment",
              "Unfair Labour Practices"
            ]
          },
          {
            "title": "Consumer Ethics",
            "points": [
              "Misleading Advertisements",
              "Product Safety Issues",
              "Data Privacy Violations",
              "Ethical Dilemmas in Private Institutions",
              "Profit vs Ethics",
              "Growth vs Sustainability",
              "Privacy vs Business Interest",
              "Competition vs Fair Practices",
              "Shareholder Interest vs Stakeholder Interest"
            ]
          }
        ]
      },
      {
        "title": "Strengthening Ethical and Moral Values in Governance",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Ethical Leadership",
              "Features",
              "Integrity",
              "Vision",
              "Accountability",
              "Public Service Orientation"
            ]
          },
          {
            "title": "Institutional Reforms",
            "points": []
          },
          {
            "title": "Administrative Reforms",
            "points": [
              "Civil Service Reforms",
              "Performance Evaluation",
              "Capacity Building"
            ]
          },
          {
            "title": "Anti-Corruption Reforms",
            "points": [
              "Vigilance Systems",
              "Whistleblower Protection",
              "Asset Disclosure"
            ]
          },
          {
            "title": "Ethics Management Tools",
            "points": [
              "Code of Ethics",
              "Code of Conduct",
              "Ethics Committees",
              "Ethics Audits",
              "Ethical Training"
            ]
          },
          {
            "title": "Transparency Mechanisms",
            "points": [
              "RTI Act",
              "E-Governance",
              "Open Government Data",
              "Digital Governance"
            ]
          },
          {
            "title": "Citizen-Centric Governance",
            "points": [
              "Citizen Charter",
              "Sevottam Model",
              "Public Consultation",
              "Participatory Governance"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ethics-ir",
    "label": "Section 07",
    "title": "Ethical Issues in International Relations & Funding",
    "summary": "Ethical issues in international relations and funding.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Morality in Global Affairs",
              "Ethical Diplomacy"
            ]
          },
          {
            "title": "Principles",
            "points": [
              "Sovereign Equality",
              "Peaceful Coexistence",
              "Human Rights",
              "International Justice",
              "Humanitarianism"
            ]
          },
          {
            "title": "Ethical Issues in International Relations",
            "points": [
              "Human Rights",
              "Refugees",
              "Humanitarian Intervention",
              "Minority Rights"
            ]
          },
          {
            "title": "War and Peace",
            "points": [
              "Just War Theory",
              "Nuclear Ethics",
              "Terrorism"
            ]
          },
          {
            "title": "Global Justice",
            "points": [
              "Climate Justice",
              "Vaccine Equity",
              "Development Assistance"
            ]
          },
          {
            "title": "Ethical Diplomacy",
            "points": [
              "National Interest vs Global Interest",
              "Strategic Autonomy",
              "International Cooperation"
            ]
          },
          {
            "title": "Ethics of Global Governance",
            "points": [
              "United Nations",
              "International Law",
              "Sustainable Development Goals",
              "Climate Agreements"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "probity",
    "label": "Section 08",
    "title": "Probity in Governance",
    "summary": "Public service, philosophical basis of governance and probity, transparency, codes of ethics/conduct, RTI, corruption, and related mechanisms.",
    "blocks": [
      {
        "title": "Probity in Governance",
        "topics": [
          {
            "title": "Concept of Public Service",
            "points": []
          },
          {
            "title": "Public Service",
            "points": [
              "Meaning of Public Service",
              "Public Welfare",
              "Public Interest",
              "Public Duty",
              "Public Responsibility",
              "Public Trust",
              "Service Before Self",
              "Citizen-Centric Governance",
              "Public Service Motivation",
              "Constitutional Responsibility"
            ]
          },
          {
            "title": "Characteristics of Public Service",
            "points": [
              "Integrity",
              "Honesty",
              "Accountability",
              "Transparency",
              "Impartiality",
              "Objectivity",
              "Non-Partisanship",
              "Responsiveness",
              "Commitment to Public Welfare",
              "Professionalism",
              "Compassion",
              "Empathy"
            ]
          },
          {
            "title": "Public Service Values",
            "points": [
              "Justice",
              "Equality",
              "Liberty",
              "Fraternity",
              "Rule of Law",
              "Constitutional Morality",
              "Ethical Conduct",
              "Dedication to Duty",
              "Respect for Human Dignity"
            ]
          },
          {
            "title": "Philosophical Basis of Governance and Probity",
            "points": []
          },
          {
            "title": "Governance",
            "points": [
              "Meaning of Governance",
              "Good Governance",
              "Democratic Governance",
              "Constitutional Governance",
              "Participatory Governance",
              "Citizen-Centric Governance"
            ]
          },
          {
            "title": "Philosophical Foundations of Governance",
            "points": [
              "Justice",
              "Liberty",
              "Equality",
              "Fraternity",
              "Rule of Law",
              "Human Dignity",
              "Public Welfare",
              "Social Contract",
              "Constitutional Morality",
              "Democratic Values"
            ]
          },
          {
            "title": "Probity",
            "points": [
              "Meaning of Probity",
              "Integrity in Public Life",
              "Ethical Governance",
              "Moral Uprightness",
              "Honesty in Administration",
              "Public Trust",
              "Ethical Conduct"
            ]
          },
          {
            "title": "Principles of Probity",
            "points": [
              "Integrity",
              "Honesty",
              "Accountability",
              "Transparency",
              "Fairness",
              "Objectivity",
              "Impartiality",
              "Responsibility",
              "Ethical Behaviour",
              "Public Interest Orientation"
            ]
          },
          {
            "title": "Importance of Probity",
            "points": [
              "Good Governance",
              "Citizen Trust",
              "Administrative Efficiency",
              "Reduction of Corruption",
              "Public Confidence in Institutions",
              "Ethical Decision Making"
            ]
          },
          {
            "title": "Information Sharing and Transparency in Government",
            "points": []
          },
          {
            "title": "Information Sharing",
            "points": [
              "Open Government",
              "Access to Information",
              "Public Disclosure",
              "Citizen Participation",
              "Information Dissemination",
              "Open Data Systems"
            ]
          },
          {
            "title": "Transparency in Government",
            "points": [
              "Meaning of Transparency",
              "Transparency as a Governance Tool",
              "Transparency as an Anti-Corruption Measure",
              "Transparency and Accountability",
              "Transparency and Citizen Trust"
            ]
          },
          {
            "title": "Mechanisms for Transparency",
            "points": [
              "Right to Information",
              "Citizen Charters",
              "Social Audits",
              "Public Disclosure Systems",
              "E-Governance",
              "Digital Governance",
              "Open Government Data Platforms",
              "Public Consultation Mechanisms",
              "Grievance Redressal Systems"
            ]
          },
          {
            "title": "Benefits of Transparency",
            "points": [
              "Improved Governance",
              "Reduced Corruption",
              "Public Trust",
              "Better Accountability",
              "Citizen Empowerment",
              "Administrative Efficiency"
            ]
          },
          {
            "title": "Challenges to Transparency",
            "points": [
              "Secrecy Culture",
              "Bureaucratic Resistance",
              "Poor Record Management",
              "Privacy Concerns",
              "Information Overload",
              "Lack of Awareness"
            ]
          },
          {
            "title": "Right to Information (RTI)",
            "points": []
          },
          {
            "title": "RTI Concept",
            "points": [
              "Citizen's Right to Know",
              "Transparency Law",
              "Democratic Accountability Tool",
              "Citizen Empowerment Mechanism"
            ]
          },
          {
            "title": "RTI Act, 2005",
            "points": [
              "Objectives of RTI Act",
              "Scope of RTI",
              "Coverage of Public Authorities",
              "Public Information Officers (PIOs)",
              "First Appeal",
              "Second Appeal",
              "Time Limits for Information Disclosure"
            ]
          },
          {
            "title": "Institutions under RTI",
            "points": [
              "Central Information Commission (CIC)",
              "State Information Commissions (SICs)"
            ]
          },
          {
            "title": "Exemptions under RTI",
            "points": [
              "National Security",
              "Strategic Interests",
              "Cabinet Papers",
              "Personal Information",
              "Trade Secrets",
              "Fiduciary Information"
            ]
          },
          {
            "title": "Importance of RTI",
            "points": [
              "Transparency",
              "Accountability",
              "Citizen Participation",
              "Reduction of Corruption",
              "Better Governance"
            ]
          },
          {
            "title": "Challenges in RTI",
            "points": [
              "Delay in Information Supply",
              "Vacancies in Information"
            ]
          },
          {
            "title": "Commissions",
            "points": [
              "Threats to RTI Activists",
              "Poor Awareness",
              "Misuse of RTI"
            ]
          },
          {
            "title": "Citizen's Charters",
            "points": []
          },
          {
            "title": "Meaning",
            "points": [
              "Citizen-Centric Governance Tool",
              "Public Service Commitment"
            ]
          },
          {
            "title": "Document",
            "points": []
          },
          {
            "title": "Objectives",
            "points": [
              "Transparency",
              "Accountability",
              "Service Quality Improvement",
              "Citizen Satisfaction",
              "Time-Bound Service Delivery"
            ]
          },
          {
            "title": "Components",
            "points": [
              "Vision and Mission",
              "Service Standards",
              "Time Limits",
              "Grievance Redressal Mechanism",
              "Citizen Responsibilities"
            ]
          },
          {
            "title": "Principles",
            "points": [
              "Transparency",
              "Accountability",
              "Participation",
              "Responsiveness"
            ]
          },
          {
            "title": "Benefits",
            "points": [
              "Improved Service Delivery",
              "Citizen Empowerment",
              "Administrative Efficiency",
              "Reduced Arbitrary Behaviour"
            ]
          },
          {
            "title": "Limitations",
            "points": [
              "Weak Enforcement",
              "Poor Awareness",
              "Lack of Monitoring",
              "Absence of Penalties"
            ]
          },
          {
            "title": "Codes of Ethics",
            "points": []
          },
          {
            "title": "Meaning",
            "points": [
              "Ethical Principles of an Organization",
              "Statement of Core Values",
              "Ethical Framework for Conduct"
            ]
          },
          {
            "title": "Objectives",
            "points": [
              "Ethical Decision Making",
              "Value-Based Behaviour",
              "Professional Integrity",
              "Ethical Culture Building"
            ]
          },
          {
            "title": "Components",
            "points": [
              "Integrity",
              "Honesty",
              "Accountability",
              "Transparency",
              "Responsibility",
              "Public Interest",
              "Professionalism"
            ]
          },
          {
            "title": "Importance",
            "points": [
              "Ethical Governance",
              "Trust Building",
              "Institutional Integrity",
              "Guidance in Ethical Dilemmas"
            ]
          },
          {
            "title": "Codes of Conduct",
            "points": []
          },
          {
            "title": "Meaning",
            "points": [
              "Prescribed Standards of Behaviour",
              "Rules Governing Official Conduct",
              "Behavioural Framework"
            ]
          },
          {
            "title": "Features",
            "points": [
              "Specific Rules",
              "Enforceable Standards",
              "Disciplinary Provisions",
              "Professional Responsibilities"
            ]
          },
          {
            "title": "Civil Service Conduct Rules",
            "points": [
              "Integrity in Public Life",
              "Political Neutrality",
              "Conflict of Interest Restrictions",
              "Official Responsibility",
              "Professional Conduct"
            ]
          },
          {
            "title": "Difference between Code of Ethics and Code of Conduct",
            "points": [
              "Values vs Rules",
              "Guidance vs Compliance",
              "Ethical Standards vs Behavioural Standards",
              "Voluntary Orientation vs Enforceable Obligations"
            ]
          },
          {
            "title": "Work Culture",
            "points": []
          },
          {
            "title": "Meaning",
            "points": [
              "Organizational Behaviour Patterns",
              "Administrative Values and Practices"
            ]
          },
          {
            "title": "Elements of Good Work Culture",
            "points": [
              "Integrity",
              "Professionalism",
              "Accountability",
              "Teamwork",
              "Discipline",
              "Innovation",
              "Responsibility",
              "Respect for Citizens"
            ]
          },
          {
            "title": "Civil Service Work Culture",
            "points": [
              "Public Service Orientation",
              "Citizen-Centric Approach",
              "Ethical Behaviour",
              "Responsiveness",
              "Commitment to Duty"
            ]
          },
          {
            "title": "Challenges",
            "points": [
              "Red Tapism",
              "Bureaucratic Inertia",
              "Corruption",
              "Delayed Decision Making",
              "Resistance to Change"
            ]
          },
          {
            "title": "Improvement Measures",
            "points": [
              "Capacity Building",
              "Ethics Training",
              "Leadership Development",
              "Performance Evaluation",
              "Technology Adoption"
            ]
          },
          {
            "title": "Quality of Service Delivery",
            "points": []
          },
          {
            "title": "Meaning",
            "points": [
              "Efficiency and Effectiveness of Public Services"
            ]
          },
          {
            "title": "Principles",
            "points": [
              "Accessibility",
              "Affordability",
              "Reliability",
              "Timeliness",
              "Transparency",
              "Responsiveness",
              "Inclusiveness"
            ]
          },
          {
            "title": "Determinants",
            "points": [
              "Administrative Capacity",
              "Human Resources",
              "Technology",
              "Infrastructure",
              "Institutional Efficiency"
            ]
          },
          {
            "title": "Tools for Better Service Delivery",
            "points": [
              "Citizen Charter",
              "E-Governance",
              "Sevottam Model",
              "Digital Platforms",
              "Social Audit",
              "Public Feedback Systems"
            ]
          },
          {
            "title": "Challenges",
            "points": [
              "Delays",
              "Corruption",
              "Leakages",
              "Poor Infrastructure",
              "Exclusion Errors"
            ]
          },
          {
            "title": "Utilization of Public Funds",
            "points": []
          },
          {
            "title": "Public Funds",
            "points": [
              "Tax Revenue",
              "Non-Tax Revenue",
              "Grants",
              "Borrowings",
              "Public Resources"
            ]
          },
          {
            "title": "Principles of Utilization",
            "points": [
              "Economy",
              "Efficiency",
              "Effectiveness",
              "Equity",
              "Accountability",
              "Transparency"
            ]
          },
          {
            "title": "Financial Accountability Mechanisms",
            "points": [
              "Parliament",
              "State Legislatures",
              "Comptroller and Auditor General (CAG)",
              "Public Accounts Committee (PAC)",
              "Internal Audits",
              "Finance Commissions"
            ]
          },
          {
            "title": "Issues in Public Fund Utilization",
            "points": [
              "Misappropriation",
              "Leakages",
              "Cost Overruns",
              "Project Delays",
              "Corruption",
              "Inefficient Spending"
            ]
          },
          {
            "title": "Improvement Measures",
            "points": [
              "Outcome Budgeting",
              "Performance Auditing",
              "Direct Benefit Transfer (DBT)",
              "Public Financial Management System (PFMS)",
              "E-Governance Systems"
            ]
          },
          {
            "title": "Challenges of Corruption",
            "points": []
          },
          {
            "title": "Meaning of Corruption",
            "points": [
              "Abuse of Public Office for Private Gain",
              "Misuse of Authority",
              "Unethical Conduct"
            ]
          },
          {
            "title": "Types of Corruption",
            "points": [
              "Petty Corruption",
              "Grand Corruption",
              "Political Corruption",
              "Administrative Corruption",
              "Institutional Corruption"
            ]
          },
          {
            "title": "Forms of Corruption",
            "points": [
              "Bribery",
              "Nepotism",
              "Cronyism",
              "Favoritism",
              "Embezzlement",
              "Extortion",
              "Influence Peddling"
            ]
          },
          {
            "title": "Causes of Corruption",
            "points": [
              "Lack of Accountability",
              "Weak Institutions",
              "Excessive Discretion",
              "Political Patronage",
              "Lack of Transparency",
              "Poor Enforcement Mechanisms"
            ]
          },
          {
            "title": "Impact of Corruption",
            "points": [
              "Governance Failure",
              "Economic Loss",
              "Reduced Public Trust",
              "Poor Service Delivery",
              "Social Inequality",
              "Institutional Weakness"
            ]
          },
          {
            "title": "Anti-Corruption Institutions",
            "points": [
              "Central Vigilance Commission (CVC)",
              "Lokpal",
              "Lokayuktas",
              "Central Bureau of Investigation (CBI)",
              "Comptroller and Auditor General (CAG)",
              "Enforcement Directorate (ED)"
            ]
          },
          {
            "title": "Anti-Corruption Laws",
            "points": [
              "Prevention of Corruption Act, 1988",
              "Lokpal and Lokayuktas Act, 2013",
              "Whistle Blowers Protection Act, 2014",
              "Prevention of Money Laundering Act (PMLA), 2002",
              "Benami Transactions (Prohibition) Act"
            ]
          },
          {
            "title": "Measures to Combat Corruption",
            "points": [
              "Transparency",
              "Accountability",
              "RTI",
              "E-Governance",
              "Social Audits",
              "Citizen Participation",
              "Whistleblower Protection",
              "Ethics Training",
              "Administrative Reforms"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "case-studies",
    "label": "Section 09",
    "title": "Case Studies",
    "summary": "Case studies on the above issues — practice applying ethics frameworks to real administrative situations.",
    "blocks": [
      {
        "title": "How to Approach Case Studies",
        "topics": [
          {
            "title": "Recommended practice method",
            "points": [
              "Identify stakeholders and conflicting values",
              "State the ethical dilemma clearly",
              "Apply relevant foundational values and theories",
              "Suggest practical, lawful, and empathetic options",
              "Choose a course of action with justification",
              "Mention safeguards, follow-up, and long-term reforms"
            ]
          },
          {
            "title": "Common case themes",
            "points": [
              "Conflict of interest and integrity",
              "Pressure from seniors or political executive",
              "Compassion vs rule of law",
              "Transparency, RTI, and confidentiality",
              "Corruption and whistle-blowing",
              "Equity for weaker sections in service delivery"
            ]
          }
        ]
      }
    ]
  }
];
