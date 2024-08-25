// src/data/jobData.ts

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  jobTypes: string[]; 
  description: string;
  salaryRange: string;
  requiredSkills: string;
  applicationDeadline: Date;
  contactEmail: string;
  updatedAt: Date;
}

export const jobData: Job[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Bulb',
    location: 'Lagos, Nigeria',
    jobTypes: ['Full-Time', 'Remote', 'Hybrid'], // Job types array
    description: 'We are looking for a skilled Frontend Developer to join our team and work on exciting projects.',
    salaryRange: '$50,000 - $70,000',
    requiredSkills: 'JavaScript, React, Node.js',
    applicationDeadline: new Date('2024-08-06'),
    contactEmail: 'hr@bulb.com',
    updatedAt: new Date('2023-08-15'),
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'CodeWorks',
    location: 'San Francisco, CA',
    jobTypes: ['Full-Time', 'Remote'],
    description: 'Seeking an experienced Backend Developer to design and implement server-side applications.',
    salaryRange: '$60,000 - $80,000',
    requiredSkills: 'Node.js, Express, MongoDB',
    applicationDeadline: new Date('2024-08-10'),
    contactEmail: 'careers@codeworks.com',
    updatedAt: new Date('2023-08-20'),
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'DesignPro',
    location: 'Austin, TX',
    jobTypes: ['Hybrid'],
    description: 'We need a creative UI/UX Designer to create intuitive and beautiful user experiences.',
    salaryRange: '$55,000 - $75,000',
    requiredSkills: 'Figma, Sketch, Adobe XD',
    applicationDeadline: new Date('2024-08-15'),
    contactEmail: 'design@designpro.com',
    updatedAt: new Date('2023-08-18'),
  },
  {
    id: 4,
    title: 'Data Scientist',
    company: 'Data Insights',
    location: 'Chicago, IL',
    jobTypes: ['Full-Time'],
    description: 'Join our team as a Data Scientist and help us derive meaningful insights from complex data sets.',
    salaryRange: '$70,000 - $90,000',
    requiredSkills: 'Python, R, SQL, Machine Learning',
    applicationDeadline: new Date('2024-08-20'),
    contactEmail: 'jobs@datainsights.com',
    updatedAt: new Date('2023-08-22'),
  },
  {
    id: 5,
    title: 'Project Manager',
    company: 'Agile Solutions',
    location: 'Los Angeles, CA',
    jobTypes: ['Remote'],
    description: 'We are looking for a Project Manager with Agile experience to lead our teams on various projects.',
    salaryRange: '$65,000 - $85,000',
    requiredSkills: 'Agile, Scrum, Project Management',
    applicationDeadline: new Date('2024-08-12'),
    contactEmail: 'pm@agilesolutions.com',
    updatedAt: new Date('2023-08-19'),
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    company: 'CloudOps',
    location: 'Seattle, WA',
    jobTypes: ['Full-Time', 'Remote'],
    description: 'We are seeking a DevOps Engineer to manage our cloud infrastructure and deployment pipelines.',
    salaryRange: '$75,000 - $95,000',
    requiredSkills: 'AWS, Docker, Kubernetes, CI/CD',
    applicationDeadline: new Date('2024-08-14'),
    contactEmail: 'devops@cloudops.com',
    updatedAt: new Date('2023-08-21'),
  },
  {
    id: 7,
    title: 'Product Manager',
    company: 'Innovatech',
    location: 'Boston, MA',
    jobTypes: ['Hybrid'],
    description: 'Looking for a Product Manager to drive the vision and execution of our new product line.',
    salaryRange: '$80,000 - $100,000',
    requiredSkills: 'Product Management, Agile, UX/UI Design',
    applicationDeadline: new Date('2024-08-17'),
    contactEmail: 'careers@innovatech.com',
    updatedAt: new Date('2023-08-17'),
  },
  {
    id: 8,
    title: 'Mobile App Developer',
    company: 'AppMasters',
    location: 'Miami, FL',
    jobTypes: ['Full-Time'],
    description: 'Join us as a Mobile App Developer to create top-notch applications for iOS and Android.',
    salaryRange: '$70,000 - $90,000',
    requiredSkills: 'Swift, Kotlin, React Native',
    applicationDeadline: new Date('2024-08-09'),
    contactEmail: 'jobs@appmasters.com',
    updatedAt: new Date('2023-08-16'),
  },
  {
    id: 9,
    title: 'System Administrator',
    company: 'NetSecure',
    location: 'Houston, TX',
    jobTypes: ['Remote'],
    description: 'We need a System Administrator to manage and secure our IT infrastructure.',
    salaryRange: '$60,000 - $80,000',
    requiredSkills: 'Linux, Windows Server, Network Security',
    applicationDeadline: new Date('2024-08-18'),
    contactEmail: 'it@netsecure.com',
    updatedAt: new Date('2023-08-23'),
  },
  {
    id: 10,
    title: 'Database Administrator',
    company: 'DataSafe',
    location: 'Atlanta, GA',
    jobTypes: ['Hybrid'],
    description: 'We are seeking a Database Administrator to ensure the performance, integrity, and security of our databases.',
    salaryRange: '$65,000 - $85,000',
    requiredSkills: 'SQL, Oracle, Database Management',
    applicationDeadline: new Date('2024-08-11'),
    contactEmail: 'jobs@datasafe.com',
    updatedAt: new Date('2023-08-14'),
  },
];
