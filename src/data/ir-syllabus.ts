export type IrTopicBlock = {
  title: string;
  points: string[];
};

export type IrSection = {
  id: string;
  label: string;
  title: string;
  summary: string;
  blocks: IrTopicBlock[];
};

export const irSyllabusSections: IrSection[] = [
  {
    id: "foreign-policy",
    label: "Section 01",
    title: "Evolution & Key Principles of Indian Foreign Policy",
    summary:
      "Core ideas that shape India’s external engagement — determinants, neighbourhood policy evolution, and the diaspora.",
    blocks: [
      {
        title: "Indian Foreign Policy",
        points: [
          "Determinants of India's Foreign Policy",
          "Factors Determining India's Foreign Policy",
          "Evolution of Neighbourhood Policy",
        ],
      },
      {
        title: "Indian Diaspora",
        points: [
          "Role Played by Indian Diaspora",
          "Issue of Safety of Indians Abroad",
          "Schemes for Welfare of Overseas Indians",
        ],
      },
    ],
  },
  {
    id: "bilateral-neighbours",
    label: "Section 02",
    title: "Bilateral Relations — India & Neighbours",
    summary:
      "Country-wise bilateral themes for South Asia and the neighbourhood — cooperation, disputes, and strategic context.",
    blocks: [
      {
        title: "India – Nepal Relations",
        points: [
          "Background of Relation",
          "Cooperation Between India & Nepal",
          "Recommendations to Improve Relations",
          "External Influences",
        ],
      },
      {
        title: "India and Bhutan",
        points: [
          "Economy: A Broad Overview",
          "India, Bhutan and China: Issues",
        ],
      },
      {
        title: "Indo-Afghan Bilateral Relations",
        points: [
          "A Long History of Bilateral Relations",
          "The India-Afghanistan Development Partnership",
          "Strategic Factors Underpinning India's Partnership with Afghanistan",
          "Presence of Taliban",
        ],
      },
      {
        title: "India-Bangladesh Relations",
        points: [
          "Development Partnership",
          "India-Bangladesh Relations in Line with 'Look East' Policy",
          "Boundary Agreements and Dispute",
        ],
      },
      {
        title: "India-Maldives Relations",
        points: [
          "Geostrategic Importance of Maldives",
          "Development Cooperation",
        ],
      },
      {
        title: "India-Sri Lanka Relations",
        points: ["Commercial Relations", "Developmental Cooperation"],
      },
      {
        title: "India-Myanmar Relations",
        points: ["Relation Through Ages", "Recent Change in Policy"],
      },
      {
        title: "Indo-Pak Relations",
        points: [
          "Cooperation Between India & Pakistan",
          "Major Crisis",
          "Water Dispute",
          "Issue of Terrorism and Proxy Wars",
        ],
      },
    ],
  },
  {
    id: "major-powers",
    label: "Section 03",
    title: "Major Power Relations",
    summary:
      "Engagement with major powers and the wider Asian / Indo-Pacific security theatre.",
    blocks: [
      {
        title: "Indian-Russia Relations",
        points: [
          "Cooperation Between India and Russia",
          "Strategic Cooperation",
        ],
      },
      {
        title: "Indo-China Relations",
        points: [
          "Economic Relation",
          '"String of Pearls Strategy" Chain Diamonds',
          "Implications for India",
          "Militarisation of Belt and Road Initiative (BRI)",
          "Main Disputes",
        ],
      },
      {
        title: "India-USA Relations",
        points: [
          "India and International Organisations",
          "Indo-Pacific Relations",
          "Quadrilateral Security Dialogue (QUAD)",
          "India and Generalised System of Preference (GSP)",
        ],
      },
      {
        title: "India & Asian Nations Relations",
        points: [
          "Security Challenges in the Indian Ocean Region",
          "India and Asian Nations Relations",
        ],
      },
    ],
  },
  {
    id: "other-nations",
    label: "Section 04",
    title: "India and Other Nations",
    summary:
      "Broader bilateral themes beyond the immediate neighbourhood and major-power set — keep this as a flexible revision bucket.",
    blocks: [
      {
        title: "Coverage focus",
        points: [
          "Track emerging partnerships and region-specific briefs as they appear in current affairs",
          "Link each bilateral note to GS Paper II themes and Interview opinion building",
          "Maintain a short fact sheet: history, trade, defence, diaspora, flashpoints",
        ],
      },
    ],
  },
  {
    id: "multilateral",
    label: "Section 05",
    title: "Multilateral Relations",
    summary:
      "Nuclear security and global institutions — UN bodies, specialised agencies, and Bretton Woods institutions.",
    blocks: [
      {
        title: "Nuclear Security",
        points: [
          "Nuclear doctrine and non-proliferation debates relevant to India",
          "Global nuclear order and India’s diplomatic position",
        ],
      },
      {
        title: "United Nations & Its Bodies",
        points: [
          "Structure of United Nations",
          "United Nations General Assembly (UNGA)",
          "United Nations Security Council (UNSC)",
          "India & UNSC",
          "Economic and Social Council",
          "International Court of Justice (ICJ)",
        ],
      },
      {
        title: "UN Specialised Agencies",
        points: [
          "Food & Agriculture Organization (FAO)",
          "International Civil Aviation Organization (ICAO)",
          "International Labour Organization (ILO)",
          "International Maritime Organization (IMO)",
          "International Telecommunication Union (ITU)",
          "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
          "International Fund for Agricultural Development (IFAD)",
          "World Health Organization (WHO) and Question Over Its Credibility",
          "World Meteorological Organisation (WMO)",
          "WIPO",
        ],
      },
      {
        title: "Bretton Woods & Finance",
        points: ["World Bank", "International Monetary Fund (IMF)"],
      },
    ],
  },
];

export const irQuickNav = irSyllabusSections.map((s) => ({
  id: s.id,
  label: s.title,
}));
