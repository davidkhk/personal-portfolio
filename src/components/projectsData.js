import React from 'react';
import { FaGitAlt, FaGlobe } from 'react-icons/fa';
import frapp from '../assets/frapp-thumbnail.gif';
import travelAdvisor from '../assets/travel-advisor.gif';
import personalPortfolio from '../assets/personal-portfolio.gif';

const projectsData = [
    {
        key: 1,
        title: 'Frapp & Co.',
        subtitle: 'Coffee shop e-commerce website',
        techStack: <ul><li>HTML</li><li>CSS</li><li>JAVASCRIPT</li><li>REACT</li><li>NODE.JS</li></ul>,
        description: <p>Built this ecommerce website from scratch using React. On the ecommerce part, I used Commercejs' API to handle the back-end, and Stripe's API to handle the payment process.<br/><br/> Other tools/libraries used: Material UI, Cors, Express, Google APIs, Nodemailer, React-Reveal, Styled-Components.</p>,
        image: `${frapp}`,
        seeLive: <span><FaGlobe/> Live</span>,
        sourceCode: <span><FaGitAlt/> Code</span>,
        seeLiveLink: 'https://frappand.co',
        sourceCodeLink: 'https://github.com/davidkhk/frapp-and-co'
    },
    {
        key: 2,
        title: 'Travel Advisor App',
        subtitle: 'Find the best restaurants, hotels and attractions anywhere in the world.',
        techStack: <ul><li>HTML</li><li>CSS</li><li>JAVASCRIPT</li><li>REACT</li></ul>,
        description: <p>This is a personal project I built to learn and improve on advanced react best practices, such as folder and file structure, hooks, and refs, and fetching data from sources using RapidAPI and Google Maps API. Hosted on Netlify.<br/><br/>Other tools/libraries used: Material UI, Axios</p>,
        image: `${travelAdvisor}`,
        seeLive: <span><FaGlobe/> Live</span>,
        sourceCode: <span><FaGitAlt/> Code</span>,
        seeLiveLink: 'https://dk-travel-app.netlify.app/',
        sourceCodeLink: 'https://github.com/davidkhk/travel-app'
    },
    {
        key: 2,
        title: 'Personal portfolio',
        subtitle: 'My personal portfolio showcasing my projects',
        techStack: <ul><li>HTML</li><li>CSS</li><li>JAVASCRIPT</li><li>REACT</li><li>NODE.JS</li></ul>,
        description: <p>My first project as a software engineer. Designed and built from scratch using React, the challenge was to put in practice everything I learned and build a modern and fully responsive personal portfolio that clearly showcases my projects, skills and personality.<br/><br/>Other tools/libraries used: Cors, Express, Nodemailer, React-Spring, React-Reveal, Google APIs, Styled-Components</p>,
        image: `${personalPortfolio}`,
        seeLive: <span><FaGlobe/> Live</span>,
        sourceCode: <span><FaGitAlt/> Code</span>,
        seeLiveLink: 'https://www.davidkang.me',
        sourceCodeLink: 'https://github.com/davidkhk/personal-portfolio'
    },
]

export default projectsData;