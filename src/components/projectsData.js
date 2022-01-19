import React from 'react';
import { FaGitAlt, FaGlobe } from 'react-icons/fa';
import Frapp from '../assets/frapp-thumbnail.gif';
import PersonalPortfolio from '../assets/personal-portfolio.gif';

const projectsData = [
    {
        key: 1,
        title: 'Frapp & Co.',
        subtitle: 'Coffee shop e-commerce website',
        techStack: <ul><li>HTML</li><li>CSS</li><li>JAVASCRIPT</li><li>REACT</li><li>NODE.JS</li></ul>,
        description: <p>Built this ecommerce website from scratch using React. On the ecommerce part, I used Commercejs' API to handle the back-end, and Stripe's API to handle the payment process.<br/><br/> Other tools/libraries used: Material UI, Cors, Express, Google APIs, Nodemailer, React-Reveal, Styled-Components.</p>,
        image: `${Frapp}`,
        seeLive: <span><FaGlobe/> Live</span>,
        sourceCode: <span><FaGitAlt/> Code</span>,
        seeLiveLink: 'https://frappand.co',
        sourceCodeLink: 'https://github.com/davidkhk/frapp-and-co'
    },
    // {
    //     key: 2,
    //     title: 'Mudax - Comércio de EPI',
    //     subtitle: 'WordPress e-commerce website',
    //     techStack: <ul><li>HTML</li><li>CSS</li></ul>,
    //     description: <p>Built this ecommerce website from an existing theme on WordPress. The challenge was to deliver a modern and functional ecommerce website as quickly as possible.</p>,
    //     image: `${Mudax}`,
    //     seeLive: <span><FaGlobe/> Live</span>,
    //     sourceCode: <span><FaGitAlt/> Code</span>,
    //     seeLiveLink: 'https://www.mudax.com.br',
    //     sourceCodeLink: null
    // },
    {
        key: 2,
        title: 'Personal portfolio',
        subtitle: 'My personal portfolio showcasing my projects',
        techStack: <ul><li>HTML</li><li>CSS</li><li>JAVASCRIPT</li><li>REACT</li><li>NODE.JS</li></ul>,
        description: <p>My first project as a software engineer. Designed and built from scratch using React, the challenge was to put in practice everything I learned and build a modern and fully responsive personal portfolio that clearly showcases my projects, skills and personality.<br/><br/>Other tools/libraries used: Cors, Express, Nodemailer, React-Spring, React-Reveal, Google APIs, Styled-Components</p>,
        image: `${PersonalPortfolio}`,
        seeLive: <span><FaGlobe/> Live</span>,
        sourceCode: <span><FaGitAlt/> Code</span>,
        seeLiveLink: 'https://www.davidkang.me',
        sourceCodeLink: 'https://github.com/davidkhk/personal-portfolio'
    },
]

export default projectsData;