import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import {
  Academic,
  ContactModel,
  EnglishCert,
  PersonalProjectModel,
  Profile,
  Tech,
  WorkExperienceModel,
} from "./type";

export const me: Profile = {
  fullName: "Trương Văn Hào",
  description:
    "I am a flexible individual with a great cooperative will. Working under pressure and the ability to finish the work as soon as possible are some of my strengths.",
  dobYear: 2002,
  email: "truongvanhao159@gmail.com",
  phone: "0379755378",
  address: "Hồ Chí Minh, Việt Nam",
  currentJob: "Full-time software developer at Cybozu Viet Nam",
};

export const academic: Academic = {
  gpa: 8.81,
  university: "Ho Chi Minh City University of Science",
  major: "Software engineering",
  yearStart: 2020,
  yearEnd: 2024,
};

export const english: EnglishCert[] = [
  {
    name: "B1",
    type: "VSTEP",
  },
];

export const techStack: Tech[] = [
  {
    name: "PHP",
    image: "assets/php.svg",
  },
];

export const techicalSkills = [
  "php",
  "nodejs",
  "javascript",
  "typescript",
  "postgresql",
  "mysql",
  "redis",
];

export const workExperiences: WorkExperienceModel[] = [
  {
    title: "Software developer",
    company: {
      name: "Cybozu",
      url: "https://www.cybozu.vn",
    },
    start: "November 2023",
    description:
      "As a Software Developer with Cybozu Vietnam, I use PHP, TypeScript, and JavaScript to build web applications that help businesses collaborate and work more efficiently. I enjoy using my skills in web development and security to solve real-world problems and make a positive impact for users",
    techStack: [
      "PHP",
      "TypeScript",
      "JavaScript",
      "ReactJS",
      "Automation Testing (Selenium grid)",
      "Unit-test (Jest & PHP-unit)",
      "Docker",
      "Git",
      "AWS",
    ],
    products: [
      {
        name: "Garoon",
        url: "https://garoon.cybozu.co.jp",
        description: "",
      },
    ],
    responsilities: [
      "Develop new feature from client’s feedback both UI with ReactJS and logic in PHP server side.",
      "Develop external/internal REST API",
      "Fix bugs, upgrade library, maintain the old features",
      "Implement unit-test with Jest, React-testing and PHPUnit",
      "Implement E2E test for UI, RestAPI",
    ],
  },
];

export const contactInformation: ContactModel[] = [
  {
    app: FaFacebookSquare,
    url: "https://www.facebook.com/TruongVanHao111",
  },
  {
    app: FaLinkedin,
    url: "https://www.linkedin.com/in/v%C4%83n-h%C3%A0o-tr%C6%B0%C6%A1ng-612028239/",
  },
];

export const personalProjects: PersonalProjectModel[] = [
  {
    name: "MangaHay",
    start: "Sep 19 2023",
    description: "Read comic website for everyone",
    githubs: [
      {
        label: "BackEnd",
        url: "https://github.com/MiraiJR/mangahay.top",
      },
      {
        label: "FrontEnd",
        url: "https://github.com/MiraiJR/mangahay.top_be",
      },
    ],
    team: {
      size: 1,
      role: "Full-stack developer",
    },
    responsilities: [
      "Implement CRUD comic, chapter, ...",
      "CI/CD with docker and digital ocean",
      "CEO website",
      "Implement UI",
      "Crawl the image from the post of facebook/another comic website and upload to s3 storage of digital ocean",
    ],
    techStack: [
      "Github Action",
      "Digital Ocean",
      "NestJs",
      "Postgres",
      "Redis",
      "NextJS",
      "Linux",
      "Docker",
      "Nginx",
    ],
    production: "https://mangahay.top",
    folder: "mangahay",
  },
];
