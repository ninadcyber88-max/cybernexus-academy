export interface NavItem {
  title: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  creator: string;
  description: string;
  navItems: NavItem[];
}

export const SITE_CONFIG: SiteConfig = {
  name: 'CYBERNEXUS ACADEMY',
  creator: 'BY NINAD PAWAR',
  description: 'Practical, industry-grade cybersecurity training and live threat simulations.',
  navItems: [
    { title: 'COURSES', href: '/courses' },
    { title: 'ETHICAL HACKING', href: '/ethical-hacking' },
    { title: 'DIGITAL FORENSICS', href: '/digital-forensics' },
    { title: 'SOC ANALYST', href: '/soc-analyst' },
  ],
};