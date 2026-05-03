import gauravImg from "@/assets/gaurav-rajput.jpg";
import shivamImg from "@/assets/shivam-rajput.jpg";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "gaurav-rajput",
    name: "Gaurav Rajput",
    role: "Senior Director",
    image: gauravImg,
    bio: "Gaurav brings over a decade of expertise in market research and strategic consulting. He leads Trivanta's vision with a data-driven approach, ensuring our clients receive actionable insights that drive real business growth.",
    linkedin: "#",
    email: "gaurav@trivantaglobal.com",
  },
  {
    id: "shivam-rajput",
    name: "Shivam Rajput",
    role: "Director",
    image: shivamImg,
    bio: "Shivam specializes in quantitative research and consumer analytics. With a keen eye for emerging trends, he oversees project execution and ensures every deliverable meets the highest standards of quality and precision.",
    linkedin: "#",
    email: "shivam@trivantaglobal.com",
  },
];
