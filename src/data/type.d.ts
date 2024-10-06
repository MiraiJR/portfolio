export interface Profile {
  fullName: string;
  description: string;
  dobYear: number;
  email: string;
  phone: string;
  address: string;
  currentJob: string;
}

export interface Academic {
  gpa: number;
  university: string;
  major: string;
  yearStart: number;
  yearEnd: number;
}

export interface EnglishCert {
  name: string;
  scoreReadListen?: number;
  scoreSpeakWrite?: number;
  type: string;
}

export interface Tech {
  name: string;
  image: string;
}

export interface Company {
  name: string;
  url: string;
}

export interface WorkExperienceModel {
  title: string;
  company: Company;
  start: string;
  end?: string;
  description: string;
  techStack: string[];
  products: Product[];
  responsilities: string[];
}

export interface Product {
  name: string;
  url: string;
  description: string;
}

export interface ContactModel {
  app: IconType;
  url: string;
}

export interface PersonalProjectModel {
  name: string;
  start: string;
  end?: string;
  production: string;
  folder: string;
  description: string;
  githubs: GithubRepo[];
  team: {
    size: number;
    role: string;
  };
  responsilities: string[];
  techStack: string[];
}

export interface GithubRepo {
  label: string;
  url: string;
}
