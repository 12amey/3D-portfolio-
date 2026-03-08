import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  springboot: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/spring-boot.svg" alt="Spring Boot" />,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/opencv.svg" alt="OpenCV" />,
  },
  jwt: {
    title: "JWT",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/jwt.svg" alt="JWT" />,
  },
  webrtc: {
    title: "WebRTC",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/webrtc.svg" alt="WebRTC" />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  { // 01. AI Resume Suite
    id: "ai-resume-builder",
    category: "AI & Full Stack",
    title: "AI Resume Builder (MERN + AI Automation)",
    src: "/assets/projects-screenshots/ai-resume-builder/dashboard.webp",
    screenshots: [
      "dashboard.webp",
      "image.png",
      "image (1).png",
      "image (2).png",
      "image (3).png",
      "image (4).png",
      "image (5).png",
      "image (6).png",
      "image (7).png"
    ],
    live: "https://ai-resume-suite.vercel.app/",
    github: "https://github.com/12amey/ai-resume-suite",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.openai,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An intelligent resume builder powered by AI that helps users create
            professional, ATS-friendly resumes. Built with the MERN stack and integrated
            with AI for content suggestions, formatting optimization, and keyword analysis.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[
            `${BASE_PATH}/ai-resume-builder/dashboard.webp`,
            `${BASE_PATH}/ai-resume-builder/image.png`,
            `${BASE_PATH}/ai-resume-builder/image (1).png`,
            `${BASE_PATH}/ai-resume-builder/image (2).png`,
            `${BASE_PATH}/ai-resume-builder/image (3).png`,
            `${BASE_PATH}/ai-resume-builder/image (4).png`,
            `${BASE_PATH}/ai-resume-builder/image (5).png`,
            `${BASE_PATH}/ai-resume-builder/image (6).png`,
            `${BASE_PATH}/ai-resume-builder/image (7).png`,
          ]} />
        </div>
      );
    },
  },
  { // 02. Real-Time Video Chat App
    id: "video-chat-app",
    category: "Real-Time Systems",
    title: "Real-Time Video Chat App (Node.js + WebRTC + Socket.io)",
    src: "/assets/projects-screenshots/video-chat-app/landing.webp",
    screenshots: [
      "landing.webp",
      "image.png",
      "image (1).png",
      "image (2).png",
      "image (3).png",
      "image (4).png"
    ],
    live: "https://video-chat-real-time.onrender.com/",
    github: "https://github.com/12amey/video-chat-real-time",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.webrtc],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.sockerio],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A real-time video chat application built with Node.js, WebRTC, and Socket.io.
            Features include peer-to-peer video streaming, real-time messaging, and room
            management for seamless video communication with stunning 3D animations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[
            `${BASE_PATH}/video-chat-app/landing.webp`,
            `${BASE_PATH}/video-chat-app/image.png`,
            `${BASE_PATH}/video-chat-app/image (1).png`,
            `${BASE_PATH}/video-chat-app/image (2).png`,
            `${BASE_PATH}/video-chat-app/image (3).png`,
            `${BASE_PATH}/video-chat-app/image (4).png`,
          ]} />
        </div>
      );
    },
  },
  { // 03. Satellite Data Analysis Demo
    id: "satellite-data-analysis",
    category: "Advanced Earth Observation",
    title: "SatelliteVision Pro - Advanced Satellite Data Analysis Platform",
    src: "/assets/projects-screenshots/satellite-data-analysis/dashboard.webp",
    screenshots: [
      "dashboard.webp",
      "image.png",
      "image (1).png",
      "image (2).png",
      "image (3).png",
      "image (4).png",
      "image (5).png",
      "image (6).png",
      "image (7).png"
    ],
    live: "https://sattilte.netlify.app/",
    github: "https://github.com/12amey/demo-stallite",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.python, PROJECT_SKILLS.openai],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An advanced satellite data analysis platform integrating real-time data from NASA, ESA,
            and ISRO. Features include NDVI time-lapse analysis, interactive satellite maps, AI-powered
            classification, ML predictions for deforestation and climate impact, and comprehensive
            environmental monitoring tools.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[
            `${BASE_PATH}/satellite-data-analysis/dashboard.webp`,
            `${BASE_PATH}/satellite-data-analysis/image.png`,
            `${BASE_PATH}/satellite-data-analysis/image (1).png`,
            `${BASE_PATH}/satellite-data-analysis/image (2).png`,
            `${BASE_PATH}/satellite-data-analysis/image (3).png`,
            `${BASE_PATH}/satellite-data-analysis/image (4).png`,
            `${BASE_PATH}/satellite-data-analysis/image (5).png`,
            `${BASE_PATH}/satellite-data-analysis/image (6).png`,
            `${BASE_PATH}/satellite-data-analysis/image (7).png`,
          ]} />
        </div>
      );
    },
  },
  { // 04. Job Portal
    id: "job-portal",
    category: "Backend & Microservices",
    title: "Job Portal (Spring Boot + JWT + Microservices)",
    src: "/assets/projects-screenshots/job-portal/landing.jpg",
    screenshots: ["landing.jpg"],
    live: "https://github.com/12amey/job_portalnew",
    github: "https://github.com/12amey/job_portalnew",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.springboot,
        PROJECT_SKILLS.jwt,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A full-featured job portal built with Spring Boot, JWT authentication,
            and microservices architecture. This platform enables seamless job
            searching, application management, and secure user authentication with
            role-based access control.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/job-portal/landing.jpg`]} />
        </div>
      );
    },
  },
  { // 05. Face Recognition System
    id: "face-recognition",
    category: "Machine Learning",
    title: "Face Recognition System (ML + OpenCV + Python)",
    src: "/assets/projects-screenshots/face-recognition/landing.webp",
    screenshots: ["landing.webp"],
    live: "https://github.com/12amey/face-recognition-master",
    github: "https://github.com/12amey/face-recognition-master",
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.opencv],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An advanced face recognition system built with Python, OpenCV, and Machine
            Learning algorithms. This project implements real-time face detection and
            recognition capabilities with high accuracy for security and authentication
            purposes.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/face-recognition/landing.webp`]} />
        </div>
      );
    },
  },
  { // 06. Quick Food Delivery Website
    id: "quick-food-delivery",
    category: "Frontend Development",
    title: "Quick Food Delivery Website (Frontend Project)",
    src: "/assets/projects-screenshots/quick-food-delivery/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/12amey/quick-food-delivery-website",
    github: "https://github.com/12amey/quick-food-delivery-website",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A modern and responsive food delivery website featuring a clean UI,
            intuitive navigation, and smooth user experience. Built with vanilla
            HTML, CSS, and JavaScript to showcase frontend development skills.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/quick-food-delivery/landing.png`]} />
        </div>
      );
    },
  },
  // {
  //   id: "codingducks",
  //   category: "Coding platform",
  //   title: "Coding Ducks",
  //   src: "/assets/projects-screenshots/codingducks/landing.png",
  //   screenshots: ["landing.png"],
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.chakra,
  //       PROJECT_SKILLS.reactQuery,
  //       PROJECT_SKILLS.firebase,
  //     ],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.prisma,
  //       PROJECT_SKILLS.python,
  //       PROJECT_SKILLS.postgres,
  //       PROJECT_SKILLS.sockerio,
  //     ],
  //   },
  //   live: "https://www.codingducks.xyz/",
  //   github: "https://github.com/12amey/Coding-Ducks",
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono text-2xl text-center">
  //           Coding ducks = LeetCode + CodePen + CSS Battles
  //         </TypographyP>
  //         <TypographyP className="font-mono ">
  //           Coding Ducks is your coding dojo — where you level up your skills,
  //           battle in real-time code duels, and earn badges like a true code
  //           warrior. Track your progress, flex your brain, and climb the
  //           leaderboard. Ready to quack the code?
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <TypographyH3 className="my-4 mt-8">Problems </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Solve coding problems similar to LeetCode, enhancing your
  //           problem-solving skills across various languages.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/problems.png`,
  //             `${BASE_PATH}/codingducks/problem.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Ducklets</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Collaborate in real-time with others in a multiplayer coding
  //           environment, just like CodePen but with a social twist.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/ducklets.png`,
  //             `${BASE_PATH}/codingducks/ducklet1.png`,
  //             `${BASE_PATH}/codingducks/ducklet2.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">UI Battles </TypographyH3>

  //         <p className="font-mono mb-2">
  //           Challenge yourself to create UI components with HTML/CSS/JS, and get
  //           instant feedback with an automated similarity scoring.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/css-battles.png`,
  //             `${BASE_PATH}/codingducks/css-battle.png`,
  //             `${BASE_PATH}/codingducks/css-battle2.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Contests </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Organize or participate in coding competitions. Successfully used to
  //           host three contests during college.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/codingducks/contests.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Playground </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Test and execute your code instantly in my versatile online code
  //           runner.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/codingducks/playground.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Users</TypographyH3>

  //         <p className="font-mono mb-2">
  //           Track your progress, earn badges, and climb the rankings with
  //           detailed user profiles and activity tracking.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/users.png`,
  //             `${BASE_PATH}/codingducks/user.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "couponluxury",
  //   category: "Coupon site",
  //   title: "Coupon Luxury",
  //   src: "/assets/projects-screenshots/couponluxury/landing.png",
  //   screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
  //   live: "https://www.couponluxury.com/",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.js,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.chakra,
  //       PROJECT_SKILLS.vue,
  //     ],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.prisma,
  //       PROJECT_SKILLS.postgres,
  //       PROJECT_SKILLS.docker,
  //     ],
  //   },
  //   get content(): JSX.Element {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           CouponLuxury is your go-to destination for snagging the best deals
  //           without lifting a finger. Whether you&apos;re hunting for the latest
  //           discounts or trying to save a buck at your favorite stores,
  //           CouponLuxury&apos;s got you covered.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <p className="font-mono mb-2 mt-4">
  //           As soon as you land, boom! You&apos;re greeted with the freshest
  //           coupons and top-tier deals that&apos;ll make your wallet happy.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/couponluxury/landing.png`]} />
  //         <TypographyH3 className="my-4 ">Stores</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Dive into a comprehensive list of stores, each packed with exclusive
  //           deals and discounts. It&apos;s like having a VIP pass to every sale
  //           in town.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/couponluxury/stores.png`,
  //             `${BASE_PATH}/couponluxury/store.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Categories</TypographyH3>

  //         <p className="font-mono mb-2">
  //           Whatever you&apos;re into—fashion, tech, food—you&apos;ll find it
  //           neatly organized here. No more endless scrolling; just pick a
  //           category and get the best offers instantly.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/couponluxury/categories.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Custom CMS </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Powered by Vue.js, this bad boy allows us to keep the content
  //           dynamic and up-to-date. From flash sales to limited-time offers, my
  //           CMS ensures everything&apos;s live and relevant.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/couponluxury/cms-1.png`,
  //             `${BASE_PATH}/couponluxury/cms-2.png`,
  //           ]}
  //         />
  //         <p className="font-mono mb-2 mt-5">
  //           Plus, I&apos;ve sprinkled in some extra magic like personalized
  //           deal recommendations, user-friendly search features, and a sleek,
  //           responsive design that works like a charm on any device.
  //         </p>
  //         <p className="font-mono mb-2">
  //           CouponLuxury isn&apos;t just a website; it&apos;s your personal deal-hunting
  //           assistant, ensuring you never miss out on a bargain!
  //         </p>
  //         {/* <TypographyP className="my-4 mt-8">
  //         <strong>Misc:</strong>
  //         Hosted not one, not two, but THREE coding contests (Codemacha) during
  //         college. Safe to say, Coding Ducks passed the vibe check.
  //       </TypographyP>
  //       <TypographyP className="my-4 mt-8">
  //         <strong>Target Audience:</strong>
  //         For all the novice coders out there ready to make their mark.
  //       </TypographyP> */}
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "the-booking-desk",
  //   category: "Travel",
  //   title: "The Booking Desk",
  //   src: "/assets/projects-screenshots/the-booking-desk/landing.png",
  //   screenshots: ["1.png"],
  //   live: "https://thebookingdesk.com/",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.aceternity,
  //       PROJECT_SKILLS.tailwind,
  //     ],
  //     backend: [PROJECT_SKILLS.sanity],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           The Booking Desk is your ultimate travel consultation hub, designed
  //           to turn your wanderlust dreams into reality. With a focus on smooth
  //           and visually captivating animations, navigating the site feels like
  //           a breeze—it&apos;s almost as if the destinations are calling you.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <p className="font-mono mb-2 mt-8">
  //           A sleek, modern interface greets you, featuring the latest travel
  //           tips, deals, and must-visit spots around the globe.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/the-booking-desk/landing.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Blogs</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Dive into the curated articles written by travel experts. Whether
  //           you&apos;re looking for hidden gems or travel hacks, our blog section has
  //           you covered.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/the-booking-desk/blogs.png`,
  //             `${BASE_PATH}/the-booking-desk/blog.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Sanity CMS</TypographyH3>

  //         <p className="font-mono mb-2">
  //           Keeping everything fresh and up-to-date, I&apos;ve integrated Sanity CMS
  //           to manage all the content with ease, ensuring you always get the
  //           latest and greatest information.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/the-booking-desk/cms-1.png`,
  //             `${BASE_PATH}/the-booking-desk/cms-2.png`,
  //           ]}
  //         />
  //         <p className="font-mono mb-2 my-8">
  //           With a stunning 100% score on Lighthouse, The Booking Desk isn&apos;t
  //           just beautiful—it&apos;s built to perform. Whether you&apos;re planning your
  //           next adventure or just daydreaming, our site delivers a top-notch
  //           experience that&apos;s both informative and enjoyable.
  //         </p>
  //       </div>
  //     );
  //   },
  // },
  // { // Portfolio project
  //   id: "portfolio",
  //   category: "Portfolio",
  //   title: "My Portfolio",
  //   src: "/assets/projects-screenshots/portfolio/landing.png",
  //   screenshots: ["1.png"],
  //   live: "http://12amey.vercel.app",
  //   github:"https://github.com/12amey/Portfolio",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.shadcn,
  //       PROJECT_SKILLS.aceternity,
  //       PROJECT_SKILLS.framerMotion,
  //       PROJECT_SKILLS.tailwind,
  //       PROJECT_SKILLS.spline,
  //     ],
  //     backend: [],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           Welcome to my digital playground, where creativity meets code in the
  //           dopest way possible.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <TypographyH3 className="my-4 mt-8">
  //           Beautiful 3D Objects{" "}
  //         </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Did you see that 3D keyboard modal? Yeah! I made that. That
  //           interactive keyboard is being rendered in 3D on a webpage 🤯, and
  //           pressing each keycap reveals a skill in a goofy way. It&apos;s like
  //           typing, but make it art.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/portfolio/landing.png`,
  //             `${BASE_PATH}/portfolio/skills.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Dark background + floating particles = out-of-this-world cool.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

  //         <p className="font-mono mb-2">
  //           My top personal and freelance projects — no filler, all killer.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/portfolio/projects.png`,
  //             `${BASE_PATH}/portfolio/project.png`,
  //           ]}
  //         />
  //         <p className="font-mono mb-2 mt-8 text-center">
  //           This site&apos;s not just a portfolio — it&apos;s a whole vibe.
  //         </p>
  //       </div>
  //     );
  //   },
  // },
  // { // GhostChat project
  //   id: "ghostchat",
  //   category: "Anonymous chat",
  //   title: "GhostChat",
  //   src: "/assets/projects-screenshots/ghostchat/1.png",
  //   screenshots: ["1.png", "2.png", "3.png", "4.png"],
  //   live: "https://ghostchat.vercel.app",
  //   github:"https://github.com/12amey/GhostChat",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
  //     backend: [PROJECT_SKILLS.supabase],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           Ghostchat is your go-to spot for sending anonymous messages without
  //           leaving a trace. Powered by Supabase, it&apos;s all about keeping things
  //           low-key and secure. Whether you&apos;re sharing secrets, giving feedback,
  //           or just having some fun, Ghostchat ensures your identity stays
  //           hidden, while your voice is heard. Say what you want, without the
  //           worry.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/ghostchat/1.png`,
  //             `${BASE_PATH}/ghostchat/2.png`,
  //             `${BASE_PATH}/ghostchat/3.png`,
  //             `${BASE_PATH}/ghostchat/4.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "jra",
  //   category: "Result analyzer",
  //   title: "JNTUA Results Analyzer",
  //   src: "/assets/projects-screenshots/jra/1.png",
  //   screenshots: ["1.png"],
  //   live: "https://12amey.github.io/JNTUA-result-analyser-spa/#/",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.mongo,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.docker,
  //     ],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           JNTUA Results Analyzer was a revolutionary tool designed to simplify
  //           and enhance the experience of accessing academic results. It served
  //           as a powerful proxy between the JNTUA university results website and
  //           its users, offering a range of features that made result analysis
  //           faster and more efficient. Here&apos;s what made it stand out:
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow images={[`${BASE_PATH}/jra/1.png`]} />
  //         <TypographyH3 className="my-4 mt-8">
  //           Effortless Results Retrieval
  //         </TypographyH3>
  //         {/* Effortless Results Retrieval: */}
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Search all your results using a single roll number, eliminating
  //             the tedious task of sifting through thousands of rows on the
  //             official site.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Class-Wise Results:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             class-wise results effortlessly by entering a roll number range.
  //             No more manual searches or filtering.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Faculty Features:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Faculty members could download batch results in Excel format,
  //             making administrative tasks a breeze.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">
  //           Enhanced Data Insights:
  //         </TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Each result came with additional features including:
  //             <ul className="list-disc font-mono ml-6">
  //               <li>
  //                 <strong>CGPA Calculations: </strong>Easily track your
  //                 cumulative grade point average.
  //               </li>
  //               <li>
  //                 <strong>Charts:</strong> Visualize your academic performance
  //                 with comprehensive charts.
  //               </li>
  //               <li>
  //                 <strong>Future Projections:</strong> Get insights into
  //                 potential future outcomes based on current performance.
  //               </li>
  //               <li>
  //                 <strong> Backlog Counts: </strong>Keep track of your backlog
  //                 subjects at a glance.
  //               </li>
  //             </ul>
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Performance:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             The application was significantly faster and more efficient than
  //             the official site, providing a smoother user experience.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Downfall:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Unfortunately, as of May 2022, the tool stopped working due to the
  //             introduction of CAPTCHA on the official JNTUA results site, which
  //             disrupted the seamless functionality of the app. JNTUA Results
  //             Analyzer transformed the way students and faculty interacted with
  //             academic results, making it a must-have tool until its unexpected
  //             shutdown.
  //           </li>
  //         </ul>
  //       </div>
  //     );
  //   },
  // },

];
export default projects;
