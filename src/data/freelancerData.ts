export interface Freelancer {
  id: number;
  name: string;
  profession: string;
  description: string;
  location: string;
  skills: string[];
  hourlyRate: string;
  rating: number;
  imageUrl: string;
}

export const freelancers: Freelancer[] = [
  {
    id: 1,
    name: 'John Doe',
    profession: 'Web Developer',
    description: 'Expert in building scalable web applications with React and Node.js. Passionate about clean code and architecture.',
    location: 'New York, USA',
    skills: ['React', 'Node.js', 'JavaScript', 'TypeScript', 'GraphQL'],
    hourlyRate: '$50/hr',
    rating: 4.8,
    imageUrl: '/images/john-doe.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    profession: 'Graphic Designer',
    description: 'Creative graphic designer with over 10 years of experience in branding, print, and digital design. Proficient in Adobe Creative Suite.',
    location: 'London, UK',
    skills: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'Branding', 'Typography'],
    hourlyRate: '$40/hr',
    rating: 4.9,
    imageUrl: '/images/jane-smith.jpg',
  },
  {
    id: 3,
    name: 'Mark Johnson',
    profession: 'SEO Specialist',
    description: 'SEO expert with a proven track record of helping websites rank higher on search engines. Specializes in on-page and off-page SEO strategies.',
    location: 'San Francisco, USA',
    skills: ['SEO', 'Content Marketing', 'Link Building', 'Google Analytics', 'Keyword Research'],
    hourlyRate: '$60/hr',
    rating: 4.7,
    imageUrl: '/images/mark-johnson.jpg',
  },
  {
    id: 4,
    name: 'Emily Davis',
    profession: 'Mobile App Developer',
    description: 'Experienced mobile app developer with a focus on creating seamless user experiences. Skilled in both iOS and Android development.',
    location: 'Toronto, Canada',
    skills: ['Swift', 'Kotlin', 'React Native', 'UI/UX Design', 'Firebase'],
    hourlyRate: '$55/hr',
    rating: 4.9,
    imageUrl: '/images/emily-davis.jpg',
  },
  {
    id: 5,
    name: 'Michael Brown',
    profession: 'Data Scientist',
    description: 'Data scientist with expertise in machine learning, data analysis, and AI. Passionate about turning data into actionable insights.',
    location: 'Berlin, Germany',
    skills: ['Python', 'R', 'Machine Learning', 'Data Visualization', 'TensorFlow'],
    hourlyRate: '$70/hr',
    rating: 5.0,
    imageUrl: '/images/michael-brown.jpg',
  },
];
