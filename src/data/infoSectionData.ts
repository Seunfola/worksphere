interface InfoItem {
  label: string;
  value: string;
}

interface InfoSectionData {
  title: string;
  items: InfoItem[];
  onEditClick: () => void;
}

export const personalInfo: InfoSectionData = {
  title: "All Personal Informations",
  items: [
    { label: 'Email', value: 'RonaldRich@example.com' },
    { label: 'Phone', value: '(219) 555-0114' },
    { label: 'Date of Birth', value: '03 September 2000' },
    { label: 'Salary Expectation', value: '$24,000' },
    { label: 'Work Type', value: 'Remote, Fulltime, Part-Time, Internship, Freelance' },
  ],
  onEditClick: () => console.log('Edit Personal Info'),
};

export const experiences: InfoSectionData = {
  title: "All Experiences",
  items: [
    { label: 'Trendyol.com', value: 'Fulltime - Oct 2021 - Dec 2022' },
    { label: 'TikaGelsin', value: 'Front-End Developer - Oct 2020 - Dec 2021' },
    { label: 'Pazarama', value: 'Internship - Oct 2019 - Oct 2020' },
  ],
  onEditClick: () => console.log('Edit Experience'),
};
