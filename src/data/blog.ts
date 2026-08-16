export type ExamStage = "Prelims" | "Mains" | "Both";

export type SubjectTag =
  | "Geography"
  | "Economy"
  | "Polity"
  | "IR"
  | "Environment"
  | "Science & Tech"
  | "History"
  | "Ethics"
  | "Strategy"
  | "Optional"
  | "Interview"
  | "CSAT";

export type BlogPost = {
  slug: string;
  /** Display / legacy filter label */
  category: string;
  /** Exam stage for Current Affairs tabs */
  stage: ExamStage;
  /** Subject tags — article auto-appears in matching subject tabs */
  subjects: SubjectTag[];
  title: string;
  excerpt: string;
  read: string;
  date: string;
  image: string;
  alt: string;
  content: string[];
  /** Rich HTML from admin editor (optional). */
  htmlContent?: string;
};

export const SUBJECT_TAGS: SubjectTag[] = [
  "Geography",
  "Economy",
  "Polity",
  "IR",
  "Environment",
  "Science & Tech",
  "History",
  "Ethics",
  "Strategy",
  "Optional",
  "Interview",
  "CSAT",
];
