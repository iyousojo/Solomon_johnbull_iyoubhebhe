import { 
  Terminal, Database, Layout, ShieldCheck 
} from 'lucide-react';

/**
 * ASSET IMPORTS
 */
import smartAdmin from '../assets/projects/smart-attendance-admin20PM.png';
import studentApp from '../assets/projects/studentattendanceapp(screenshot).jpg';
import studentApi from '../assets/projects/studentattendanceapi(screenshot).png';
import notifyClient from '../assets/projects/studentnotification(screenshot).png';
import notifyApi from '../assets/projects/studentnotificationapi(screenshot).png';
import ebook from '../assets/projects/Academic Digital Resources - Google Chrome 20-Apr-26 5_11_49 PM.png';
import bookEcom from '../assets/projects/bookecommercesystem.png';
import projectApp from '../assets/projects/projectmanagementapp(screenshot).jpg';
import projectApi from '../assets/projects/projectmangerapi(screenshot).png';
import libaryApi from '../assets/projects/libarymanagemetsyem.api(screenshot).png';
import libaryweb from '../assets/projects/Access LibroFlow _ Secure Login - .png';

export const projects = [
  {
    id: 1,
    title: "Smart Attendance Ecosystem",
    description: "Enterprise-grade solution with a React Native app for students and a React admin dashboard, powered by a secure Node.js API.",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    githubLink: "https://github.com/iyousojo/student-attendance-app",
    apiLink: "https://studentattendanceapi-v4hq.onrender.com",
    adminLink: "https://smart-attendance-admin-one.vercel.app/",
    downloadLink: "https://mega.nz/file/EikhhA4Q#umu5_7CRNExSCWTx0e0_x4Uk1w66rCGRsLQrQlnjw10", 
    screenshots: [smartAdmin, studentApp, studentApi],
    featured: true,
  },
  {
    id: 2,
    title: "Student Notification System",
    description: "Real-time communication hub delivering academic alerts via a dual-layered architecture (Client & Backend).",
    tags: ["JavaScript", "Node.js", "Push Alerts"],
    githubLink: "https://github.com/iyousojo/student-notify",
    apiLink: "https://student-notification-system-1.onrender.com",
    liveLink: "https://student-notify.vercel.app/", 
    screenshots: [notifyClient, notifyApi],
    featured: true,
  },
  {
    id: 3,
    title: "FinTech E-Book Platform",
    description: "Digital marketplace featuring Paystack integration for automated payment verification and secure content delivery.",
    tags: ["HTML", "CSS", "Node.js", "Paystack"], // Updated Tech
    githubLink: "https://github.com/iyousojo/book-shop-payment-management-",
    apiLink: "https://bookshop-api-jbl4.onrender.com",
    liveLink: "https://daniel-six-rust.vercel.app/",
    screenshots: [ebook , bookEcom],
    featured: true,
  },
  {
    id: 4,
    title: "Academic Project Manager",
    description: "A workflow tool for student-supervisor milestone tracking with robust Role-Based Access Control.",
    tags: ["React Native", "Node.js", "RBAC"], // Updated Tech
    githubLink: "https://github.com/iyousojo/projectmanager",
    apiLink: "https://projectmanagerapi-o885.onrender.com",
    downloadLink: "https://mega.nz/file/4qlgnCrR#TRAdFE23zXab_a3hPZ8xdGI2HwA5VsLoEvZQavXp5k8", 
    screenshots: [projectApp, projectApi],
    featured: true,
  },
  {
    id: 5,
    title: "Libroflow",
    description: "Automated library system for massive inventory tracking and circulation management.",
    tags: ["HTML", "CSS", "Node.js", "Inventory"], // Updated Tech
    githubLink: "https://github.com/iyousojo/library-managent-system",
    apiLink: "https://libroflow-admin.onrender.com",
    liveLink: "https://library-managent-system.vercel.app/", 
    screenshots: [libaryweb, libaryApi],
    featured: true,
  }
];

export const skills = [
  { category: "Frontend", icon: Layout, items: ["React", "React Native", "Tailwind CSS", "Expo"] },
  { category: "Backend", icon: Terminal, items: ["Node.js", "Express", "PHP", "REST APIs"] },
  { category: "Databases", icon: Database, items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: "Security & Tools", icon: ShieldCheck, items: ["Paystack API", "JWT", "Postman", "Git/GitHub"] }
];

export const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];