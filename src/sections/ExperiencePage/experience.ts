export interface ExperienceType {
  companyName: string;
  location: string;
  title: string;
  dates: [string, string];
  site: string;
  achievements: string[];
}

export const EXPERIENCES: ExperienceType[] = [
  {
    companyName: "Dollar Shave Club",
    location: "Marina Del Rey, CA",
    title: "Software Engineering Intern",
    dates: ["June 2019", "August 2019"],
    site: "https://www.dollarshaveclub.com",
    achievements: [""]
  },
  {
    companyName: "Coding Hub",
    location: "Plattsburgh, NY",
    title: "Tech Lead / Full Stack Developer",
    dates: ["January 2019", "Present"],
    site: "https://www.coding-hub.com",
    achievements: [""]
  },
  {
    companyName: "Real Time Solutions",
    location: "Lalitpur, Nepal",
    title: "Software Engineering Intern",
    dates: ["November 2016", "May 2017"],
    site: "https://rts.com.np",
    achievements: [""]
  },
  {
    companyName: "Student Accessibility Services",
    location: "Plattsburgh, NY",
    title: "Mathematics Tutor",
    dates: ["January 2019", "Present"],
    site:
      "https://www.plattsburgh.edu/plattslife/student-support/accessibility-services.html",
    achievements: [""]
  }
];
