export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface CourseModule {
  id: string;
  title: string;
  duration: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  badge: string;
  description: string;
  level: CourseLevel;
  duration: string;
  modulesCount: number;
  tags: string[];
  instructor: string;
  highlights: string[];
}