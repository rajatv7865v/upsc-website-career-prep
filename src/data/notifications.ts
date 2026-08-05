export type ExamNotification = {
  id: string;
  title: string;
  body: string;
  exam: string;
  date: string;
  source: string;
  sourceUrl: string;
  tag: "Notification" | "Result" | "Admit Card" | "Update";
};

/**
 * Government exam notifications — curated links (manual / scraped updates).
 * Replace or extend entries as new notices are published.
 */
export const examNotifications: ExamNotification[] = [
  {
    id: "upsc-csp-2026",
    title: "Civil Services (Preliminary) Examination, 2026",
    body: "Official UPSC notification and scheme for Civil Services Examination — Prelims and Mains.",
    exam: "UPSC CSE",
    date: "6 Feb 2026",
    source: "upsc.gov.in",
    sourceUrl:
      "https://www.upsc.gov.in/sites/default/files/Notif-CSP-2026-Engl-060226Rev.pdf",
    tag: "Notification",
  },
  {
    id: "upsc-pyq",
    title: "Previous Year Question Papers",
    body: "Official archive of Civil Services Preliminary and Main examination question papers.",
    exam: "UPSC CSE",
    date: "Ongoing",
    source: "upsc.gov.in",
    sourceUrl: "https://www.upsc.gov.in/examinations/previous-question-papers",
    tag: "Update",
  },
  {
    id: "upsc-cse-page",
    title: "Civil Services Examination — overview",
    body: "Exam page with links to syllabus, notifications, and related examination material.",
    exam: "UPSC CSE",
    date: "Ongoing",
    source: "upsc.gov.in",
    sourceUrl: "https://www.upsc.gov.in/examinations/Civil%20Services%20Examination",
    tag: "Update",
  },
  {
    id: "ssc-portal",
    title: "Staff Selection Commission — latest notices",
    body: "SSC exam notifications, results, and admit cards published on the official portal.",
    exam: "SSC",
    date: "Check portal",
    source: "ssc.gov.in",
    sourceUrl: "https://ssc.gov.in/",
    tag: "Notification",
  },
  {
    id: "ibps-portal",
    title: "IBPS — bank exam notifications",
    body: "Institute of Banking Personnel Selection — CRP and other bank recruitment notices.",
    exam: "IBPS",
    date: "Check portal",
    source: "ibps.in",
    sourceUrl: "https://www.ibps.in/",
    tag: "Notification",
  },
  {
    id: "rrb-portal",
    title: "Railway Recruitment Board — CEN notices",
    body: "Indian Railways recruitment notifications and updates via the RRB portal.",
    exam: "RRB",
    date: "Check portal",
    source: "indianrailways.gov.in",
    sourceUrl: "https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,7,1281",
    tag: "Notification",
  },
];
