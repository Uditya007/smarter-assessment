export type UserRole = "student" | "teacher" | "parent" | "school_admin";

export interface DemoLeadForm {
  schoolName: string;
  contactPerson: string;
  workEmail: string;
  phone: string;
  numberOfStudents: string;
  curriculum: "CBSE" | "ICSE" | "IGCSE" | "Multiple / Other";
  message: string;
}

export interface StudentProgressItem {
  id: string;
  subject: string;
  grade: string;
  curriculum: string;
  overallScore: number;
  accuracyRate: number;
  completedQuizzes: number;
  totalTimeHours: number;
  masteryLevel: "Emerging" | "Proficient" | "Mastery";
  recentChapters: {
    name: string;
    score: number;
    totalQuestions: number;
    status: "Mastered" | "Needs Practice" | "In Progress";
  }[];
  weakAreas: string[];
  recommendations: string[];
}

export interface TeacherClassSummary {
  gradeClass: string;
  subject: string;
  totalStudents: number;
  averageScore: number;
  topPerformersCount: number;
  needsAttentionCount: number;
  completionRate: number;
  upcomingAssessment: {
    title: string;
    dueDate: string;
    scheduledCount: number;
  };
  strugglingStudents: {
    name: string;
    issue: string;
    accuracy: number;
  }[];
}

export interface ParentChildOverview {
  childName: string;
  grade: string;
  school: string;
  overallHealthScore: number;
  weeklyTrend: "+4.2% this week" | "+6.8% this month";
  lastAssessment: {
    subject: string;
    topic: string;
    date: string;
    score: number;
  };
  strengths: string[];
  revisionFocus: string[];
}
