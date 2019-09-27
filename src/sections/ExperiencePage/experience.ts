export interface ExperienceType {
  companyName: string;
  location: string;
  title: string;
  dates: [string, string];
  achievements: string[];
}

export const EXPERIENCES: ExperienceType[] = [
  {
    companyName: "Dollar Shave Club",
    location: "Marina Del Rey, CA",
    title: "Software Engineering Intern",
    dates: ["June 2019", "August 2019"],
    achievements: [""]
  },
  {
    companyName: "Coding Hub",
    location: "Plattsburgh, NY",
    title: "Tech Lead / Full Stack Developer",
    dates: ["January 2019", "Present"],
    achievements: [""]
  },
  {
    companyName: "Real Time Solutions",
    location: "Lalitpur, Nepal",
    title: "Software Engineering Intern",
    dates: ["November 2016", "May 2017"],
    achievements: [""]
  },
  {
    companyName: "Student Accessibility Services",
    location: "Plattsburgh, NY",
    title: "Mathematics Tutor",
    dates: ["January 2019", "Present"],
    achievements: [""]
  }
];
