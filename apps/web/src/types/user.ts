export interface EnrolledCourseProgress {
  id: string;
  courseSlug: string;
  courseTitle: string;
  badge: string;
  totalModules: number;
  completedModules: number;
  progressPercentage: number;
  lastAccessed: string;
  status: 'In Progress' | 'Completed' | 'Exam Ready';
}

export interface StudentDashboardData {
  studentName: string;
  studentHandle: string;
  clearanceLevel: string;
  activeLabs: number;
  hoursSpent: number;
  certificationsEarned: number;
  enrolledCourses: EnrolledCourseProgress[];
}