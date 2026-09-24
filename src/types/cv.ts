export interface ContactInfo {
  location: string;
  phone: string;
  email: string;
  languagesSummary: string;
  linkedin?: string;
  github?: string;
  kaggle?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  certificationContext: string;
  introduction: string;
  approachSteps: {
    number: number;
    step: string;
    title: string;
    description: string;
    tools?: string;
  }[];
  keyFindings: {
    group: string;
    highlight: string;
    details: string;
    tag: string;
  }[];
  recommendations: string[];
  kaggleUrl: string;
  tableauUrl: string;
  githubUrl?: string;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: string[];
}

export interface LanguageItem {
  code: string;
  name: string;
  level: string;
}

export interface InterestItem {
  iconName: string;
  title: string;
  subtitle?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyType?: string;
  role: string;
  location?: string;
  period: string;
  bullets: string[];
  logoType: 'egov' | 'verditra' | 'radiomaria' | 'custom';
}

export interface EducationItem {
  id: string;
  year: string;
  institution: string;
  location: string;
  degree: string;
  logoType: 'iuea' | 'custom';
}

export interface CertificationItem {
  id: string;
  title: string;
  provider: string;
  platform: string;
  logoType: 'google' | 'coursera' | 'microsoft' | 'udemy' | 'freecodecamp' | 'horizon';
  linkUrl?: string;
  note?: string;
}

export interface ReferenceItem {
  id: string;
  name: string;
  role: string;
  company: string;
  email: string;
  phone: string;
}

export interface CVData {
  fullName: string;
  title: string;
  tags: string[];
  bannerQuote: string;
  photoUrl: string;
  contact: ContactInfo;
  profile: string;
  skillCategories: SkillCategory[];
  languages: LanguageItem[];
  interests: InterestItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  references: ReferenceItem[];
  projects?: PortfolioProject[];
}
