import {
  AcademicCapIcon,
  // CalendarIcon,
  DownloadIcon,
  // FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import blogImage from '../images/blog.webp';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  BlogSection,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Abraham Lincoln',
  description: "Abraham Lincoln Okaalo's Front-end Developer Portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Blogs: 'blogs',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hey! Abraham here.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A <strong className="text-stone-100">front-end developer</strong>, with a keen eye for
        <strong className="text-stone-100"> design</strong> and a love for crafting beautiful, intuitive user experiences.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me experimenting with new <strong className="text-stone-100">front-end technologies</strong>,
        and <strong className="text-stone-100">frameworks</strong> in the industry. Or exploring beautiful{' '}
        <strong className="text-stone-100">destinations</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a React Front-end Developer passionate about creating dynamic engaging and scalable user interfaces that enhance the user experience.
   With a strong understanding of React and its ecosystem and experience with HTML, CSS, and JavaScript.
   My interests include exploring new design patterns, writing clean and maintainable code, and collaborating with other developers to build innovative and user-friendly applications.`,
  aboutItems: [
    {label: 'Location', text: 'London, UK', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Kenya', Icon: FlagIcon},
    {label: 'Interests', text: 'Battlefield, Krav Maga, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'Africa Nazarene University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'A Plus Business Solutions', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Redux',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Express',
        level: 5,
      },
      {
        name: 'TypeScript',
        level: 4,
      },
    ],
  },
  {
    name: 'Automation & Testing',
    skills: [
      {
        name: 'React Testing Library',
        level: 7,
      },
      {
        name: 'Webpack',
        level: 5,
      },
      {
        name: 'Jest',
        level: 3,
      },
    ],
  },
  {
    name: 'Others',
    skills: [
      {
        name: 'APIs (REST)',
        level: 8,
      },
      {
        name: 'Git (Github)',
        level: 8,
      },
      {
        name: 'Cloud Platforms (AWS)',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2021',
    location: 'freeCodeCamp',
    title: 'JavaScript Algorithms and Data Structures',
    content: <p>At freeCodeCamp, I had an immersive experience with their 
      JavaScript Data Structures and Algorithms course. I learned about various 
      data structures and algorithms commonly used in programming.</p>,
  },
  {
    date: 'October 2019',
    location: 'OpenClassrooms',
    title: 'Go Full-Stack With Node.js, Express, and MongoDB',
    content: <p>I had an excellent learning experience with their Go Full-Stack With Node.js,
       Express, and MongoDB course. This course gave me a comprehensive understanding of
       full-stack web development using Node.js, Express, and MongoDB.</p>,
  },
  {
    date: 'October 2017',
    location: 'Africa Nazarene University',
    title: 'BSc. Business and Information Technology (Networking Option)',
    content: <p>This program gave me a comprehensive understanding of the intersection between 
      business and technology. Its robust business and technology foundation helped me become 
      a well-rounded professional.</p>,
  }, 
];

export const experience: TimelineItem[] = [
  {
    date: 'Sep 2018 - Nov 2022',
    location: 'A Plus Business Solutions',
    title: 'Frontend Developer',
    content: (
      <p>
        {/* Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know. */}
        As a frontend developer working on a school management system, I gained experience creating intuitive and 
        user-friendly interfaces for web applications used by teachers, students, and administrators. 
        I was responsible for designing and implementing various features such as attendance tracking, 
        grade management, and scheduling tools. <br/><br/> 
        
        Additionally, I collaborated with the design and backend 
        teams to ensure seamless integration of frontend and backend systems. I also worked on enhancing 
        website performance and ensuring cross-browser compatibility. <br/><br/>
        
        I gained valuable experience creating practical user experiences for educational software applications.
      </p>
    ),
  },
  {
    date: 'May 2017 - Aug 2017',
    location: 'Nairobi City County Government',
    title: 'Network Support Intern',
    content: (
      <p>
        {/* Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know. */}
        As a Network Support Intern at their IT support department, I provided technical support for the county's network
        infrastructure, troubleshooting network issues and assisting with maintaining and administrating network systems.
        <br/><br/>

        I also worked on special projects, such as upgrading the county's wireless network and implementing a new network 
        security protocol. Some notable achievements include reducing network downtime, implementing a new ticketing system,
        and developing training materials for new IT staff members. 
        <br/><br/>

        I gained experience with various tools and platforms, including Cisco networking equipment, Windows and Linux 
        operating systems, and network monitoring and management software.
      </p>
    ),
  },
];

/**
 * Blog section
 */
export const blog: BlogSection = {
  imageSrc: blogImage,
  blogs: [
    {
      name: 'Coming soon',
      href: 'https://www.freecodecamp.org/blog/javascript-algorithms-and-data',
      text: 'Data structures and algorithms are two fundamental concepts in computer science that every programmer must learn to write efficient and effective code. Data structures are used to organize and store data in a way that makes it easy to access and manipulate, while algorithms are a set of step-by-step instructions used to solve a particular problem. In this blog post.....',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Read More',
      href: 'https://www.freecodecamp.org/blog/javascript-algorithms-and-data',
      text: 'We will explore the basics of data structures and algorithms using JavaScript.JavaScript is a popular programming language that can be used to implement a wide range of data structures and algorithms. In JavaScript, arrays are used to store and manipulate ordered collections of data, while objects can be used to represent key-value pairs....',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Read More',
      href: 'https://www.freecodecamp.org/blog/javascript-algorithms-and-data',
      text: 'One of the most basic data structures is the array. An array is a collection of elements of the same type, stored in contiguous memory locations. In JavaScript, arrays are declared using square brackets, and elements are accessed using their index......',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Reach Out Today',
  description: 'Request My Services:',
  items: [
    {
      type: ContactType.Email,
      text: 'abrahamokaalo@gmail.com',
      href: 'mailto:abrahamokaalo@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'London, UK',
      href: 'https://www.google.com/maps/place/London/@51.5203269,-0.0420458,11z',
    },
    {
      type: ContactType.Twitter,
      text: '@____abu',
      href: 'https://twitter.com/____abu/',
    },
    {
      type: ContactType.Github,
      text: 'lincoln-O',
      href: 'https://github.com/lincoln-O',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/lincoln-O'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/13589058/abrahamlincoln'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/abrahamokaalo/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/___abu___404/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/____abu'},
];
