import gauravImg from "@/assets/gaurav-rajput.png";
import shivamImg from "@/assets/shivam-chauhan.png";
import tituImg from "@/assets/titu-rajput.png";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

// ============================================================
// TEAM MEMBERS DATA
// To add / edit / remove a team member, just update this array.
// - id: unique slug (used in URL anchors like /team#gaurav-rajput)
// - name: full display name
// - role: job title shown under the name
// - image: imported image from src/assets (add the import above)
// - bio: short paragraph shown on the Team page
// - linkedin: full LinkedIn profile URL (optional)
// - email: contact email (optional)
// ============================================================
export const teamMembers: TeamMember[] = [
  {
    id: "gaurav-rajput",
    name: "Gaurav Rajput",
    role: "Director",
    image: gauravImg,
    bio: "Gaurav leads Trivanta with a sharp focus on strategy, client success and long-term growth. With deep expertise in market research and consulting, he ensures every engagement delivers clear, actionable insight that drives real business decisions.",
    linkedin: "https://www.linkedin.com/in/gaurav-kumar-87a54b240",
    email: "gauravmahur704@gmail.com",
  },
  {
    id: "shivam-chauhan",
    name: "Shivam Chauhan",
    role: "Director of Operations",
    image: shivamImg,
    bio: "Shivam oversees end-to-end project operations at Trivanta. He brings precision, structure and a quality-first mindset — making sure every study runs smoothly, on time and to the highest research standards.",
    linkedin: "https://www.linkedin.com/in/shivam-raghuvan-495027202",
    email: "shivam@trivantaglobal.com",
  },
  {
    id: "titu-rajput",
    name: "Titu Rajput",
    role: "Account Manager",
    image: tituImg,
    bio: "Titu is the bridge between Trivanta and its clients. He manages day-to-day client relationships, ensures clear communication and works closely with the research team to deliver experiences that go beyond expectations.",
    email: "titu@trivantaglobal.com",
  },
];
