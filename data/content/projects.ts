import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Eko Sport ",
    desc: "Ekosport, The No.1 of the outdoor sport in Europe",
    img: "/static/projects/eko.png",
    link: "https://www.ekosport.eu/",
    github: "",
    tags: [""],
  },
  {
    id: 1,
    title: "Nsap",
    desc: "Educational Courses ",
    img: "/static/projects/nsap.png",
    link: "https://www.thensap.in/",
    tags: [""],
  },
  {
    id: 2,
    title: "Srinag",
    desc: "Ecommers Static",
    img: "/static/projects/sri.png",
    link: "https://sringa-preview-1.netlify.app/",
    tags: [""],
  },
  {
    id: 3,
    title: "Vinsport Badminton",
    desc: "App landing page",
    img: "/static/projects/vi.png",
    link: "https://vin-1.netlify.app/   ",
    tags: ["", ],
  },
  {
    id: 4,
    title: "Colorist Akash",
    desc: "Color grading Portfolio",
    img: "/static/projects/clr.png",
    link: "https://coloristakash.com/",
    tags: ["",],
  },
  {
    id: 5,
    title: "Yellow Cv",
    desc: "Personal Articst Portfolio",
    img: "/static/projects/Yellow-cv.jpg",
    link: "https://coderabhi22454545454.github.io/Derick-Portfoilio/",
    tags: [""],
  },
  {
    id: 6,
    title: "School Managment",
    desc: "Shool And classroom Managment",
    img: "/static/projects/SCHOOL.jpg",
    link: "https://coderabhi22454545454.github.io/Grade-School-test/",
    tags: [""],
  },
  {
    id: 7,
    title: "SEA",
    desc: "",
    img: "/static/projects/SEA.jpg",
    link: "https://coderabhi22454545454.github.io/Sea_riding/",
    tags: ["" ],
  },
  {
    id: 8,
    title: "Constrution",
    desc: "",
    img: "/static/projects/constrution.jpg",
    link: "https://coderabhi22454545454.github.io/Test-Site-abhi/",
    tags: [""],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
