import React from 'react';
import Frapp from '../images/frapp-thumbnail.jpg';
import Mudax from '../images/covid19.jpeg';
import PersonalPortfolio from '../images/personal-portfolio.gif';

const projectsData = [
    {
        key: 1,
        title: 'Frapp & Co.',
        subtitle: 'Coffee shop business WordPress e-commerce website',
        techStack: <ul><li>HTML</li><li>CSS</li><li>JS</li><li>REACT</li></ul>,
        description: 'Learned how to develop a WordPress theme from scratch using React, and WordPress for the backend.',
        image: `${Frapp}`,
        seeLive: 'See Live',
        sourceCode: 'Source Code',
        seeLiveLink: 'https://frappand.co',
        sourceCodeLink: 'https://github.com/davidkhk/frapp-and-co'
    },
    {
        key: 2,
        title: 'Mudax - Comércio de EPI',
        subtitle: 'WordPress e-commerce website',
        techStack: <ul><li>HTML</li><li>CSS</li></ul>,
        description: 'The challenege was to build an e-commerce website as quicly as possible.',
        image: `${Mudax}`,
        seeLive: 'See Live',
        sourceCode: <s>Source Code</s>,
        seeLiveLink: 'https://www.mudax.com.br',
        sourceCodeLink: null
    },{
        key: 3,
        title: 'Personal portfolio',
        subtitle: 'My personal portfolio showcasing my work and projects',
        techStack: <ul><li>HTML</li><li>CSS</li><li>JS</li><li>REACT</li><li>EXPRESS</li></ul>,
        description: 'My first project as a web developer. Designed and built from scratch, the challenge was to put in practice everything I learned and build a modern and fully responsive personal portfolio that clearly showcases my projects, skills and personality.',
        image: `${PersonalPortfolio}`,
        seeLive: 'See Live',
        sourceCode: 'Source Code',
        seeLiveLink: 'https://www.davidkang.me',
        sourceCodeLink: 'https://github.com/davidkhk/personal-portfolio'
    },
]

export default projectsData;