export type StrategyGuide = {
  slug: string;
  paper: string;
  title: string;
  summary: string;
  points: string[];
};

export const strategyGuides: StrategyGuide[] = [
  {
    slug: "prelims",
    paper: "Prelims",
    title: "Prelims strategy",
    summary:
      "How to cover GS Paper I and protect CSAT without burning revision time.",
    points: [
      "Build a weekly loop: static subject + related current affairs the same day.",
      "Use PYQs to decide depth — if a theme rarely appears, keep notes short.",
      "Protect CSAT with a fixed weekly habit so Paper II never becomes a last-minute risk.",
      "In the last 30–40 days, prioritise revision, mocks, and error notebooks over new books.",
    ],
  },
  {
    slug: "gs-paper-1",
    paper: "GS Paper 1",
    title: "GS Paper 1 strategy",
    summary:
      "Culture, history, society, and geography — what to revise and how to link current affairs.",
    points: [
      "Keep culture notes visual and example-heavy (art forms, architecture, literature).",
      "For modern history and Freedom Struggle, revise timelines and contributor maps.",
      "Society answers improve with current examples on women, urbanisation, and social issues.",
      "Geography: maps first, then reports and disasters — location memory helps Prelims and Mains.",
    ],
  },
  {
    slug: "gs-paper-2",
    paper: "GS Paper 2",
    title: "GS Paper 2 strategy",
    summary:
      "Polity, governance, social justice, and IR — structure answers around the Constitution and current issues.",
    points: [
      "Anchor polity answers in constitutional provisions, judgments, and institutional design.",
      "For governance and social justice, keep scheme + performance + way-forward notes.",
      "IR: bilateral issues, groupings, and institutions — write short issue briefs weekly.",
      "Practise demand words (discuss, critically examine) with 150-word mini-answers.",
    ],
  },
  {
    slug: "gs-paper-3",
    paper: "GS Paper 3",
    title: "GS Paper 3 strategy",
    summary:
      "Economy, agriculture, S&T, environment, and security — link newspaper issues to syllabus lines.",
    points: [
      "Economy: Budget, growth, and inclusive development themes with one data point each.",
      "Agriculture and food security need scheme + constraint + reform structure.",
      "Environment and disaster management pair well with Geography current affairs maps.",
      "Internal security: keep short notes on cyber, border, and organised crime linkages.",
    ],
  },
  {
    slug: "gs-paper-4",
    paper: "GS Paper 4",
    title: "GS Paper 4 strategy",
    summary:
      "Ethics, integrity, and aptitude — values, thinkers, and case studies with a clear structure.",
    points: [
      "Build a small bank of thinkers, quotes, and public-service values you can reuse.",
      "Case studies: stakeholders → options → ethical frameworks → decision → safeguards.",
      "Link real governance examples (RTI, citizen charters, corruption cases) without naming individuals casually.",
      "Practise writing under time — clarity and structure matter more than decorative language.",
    ],
  },
];

export function getStrategyBySlug(slug: string) {
  return strategyGuides.find((g) => g.slug === slug);
}
