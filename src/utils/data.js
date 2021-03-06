import React from 'react';
import {
  FaGitAlt,
  FaGlobe,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaGithub,
} from 'react-icons/fa';
import frapp from '../assets/frapp-thumbnail.gif';
import cryptoDapp from '../assets/crypto-dapp.gif';
import personalPortfolio from '../assets/personal-portfolio.gif';

export const projectsData = [
  {
    key: 1,
    title: 'Frapp & Co.',
    subtitle: 'Coffee shop e-commerce website',
    techStack: (
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
        <li>NODE.JS</li>
      </ul>
    ),
    description: (
      <p>
        Built this ecommerce website from scratch using React.js. On the
        ecommerce part, I used Commercejs' API to handle the back-end, and
        Stripe's API to handle the payment process.
        <br />
        <br /> Other tools/libraries used: Material UI, Styled-Components.
      </p>
    ),
    image: `${frapp}`,
    seeLive: (
      <span>
        <FaGlobe /> Live
      </span>
    ),
    sourceCode: (
      <span>
        <FaGithub /> Code
      </span>
    ),
    seeLiveLink: 'https://frappand.co',
    sourceCodeLink: 'https://github.com/davidkhk/frapp-and-co',
  },
  {
    key: 2,
    title: 'Crypto App',
    subtitle: 'Connect your MetaMask wallet and start sending crypto',
    techStack: (
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
        <li>SOLIDITY</li>
      </ul>
    ),
    description: (
      <p>
        A full fledged web 3.0 application built in React.js that allows users
        to send transactions through the blockchain. Pair your MetaMask ethereum
        wallet and start sending crypto! Each real transaction is paired with a
        gif and you can check its details on etherscan. Here I also familiarized
        with the Solidity programming language.
        <br />
        <br />
        Other tools/libraries used: Tailwind CSS, React Context.
      </p>
    ),
    image: `${cryptoDapp}`,
    seeLive: (
      <span>
        <FaGlobe /> Live
      </span>
    ),
    sourceCode: (
      <span>
        <FaGithub /> Code
      </span>
    ),
    seeLiveLink: 'https://dk-crypto-dapp.netlify.app/',
    sourceCodeLink: 'https://github.com/davidkhk/dk-crypto-dapp',
  },
  {
    key: 3,
    title: 'Personal portfolio',
    subtitle: 'My personal portfolio showcasing my projects',
    techStack: (
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
        <li>NODE.JS</li>
      </ul>
    ),
    description: (
      <p>
        My first project as a software engineer. Designed and built from scratch
        using React.js, the challenge was to put in practice everything I
        learned and build a modern and fully responsive personal portfolio that
        clearly showcases my projects, skills and personality.
        <br />
        <br />
        Other tools/libraries used: Styled-Components.
      </p>
    ),
    image: `${personalPortfolio}`,
    seeLive: (
      <span>
        <FaGlobe /> Live
      </span>
    ),
    sourceCode: (
      <span>
        <FaGithub /> Code
      </span>
    ),
    seeLiveLink: 'https://www.davidkang.me',
    sourceCodeLink: 'https://github.com/davidkhk/personal-portfolio',
  },
];

export const AboutData = {
  mainText: {
    paragraph1: (
      <p>
        Born and raised in <span>S??o Paulo, Brazil</span>. Studied Finance at
        CUNY-Baruch College (New York City). Worked in consulting for 6 years.
      </p>
    ),
    paragraph2: (
      <p>
        Self taught programmer, I'm currently working as a{' '}
        <span>frontend web developer</span> at{' '}
        <a href='https://d3.do' target='_blank' rel='noreferrer'>
          D3_Company
        </a>
        .
      </p>
    ),
    paragraph3: (
      <p>
        Aside from coding, I'm interested in <span>entrepreneurship</span>. I
        opened a mini coffee shop business in 2020.
      </p>
    ),
  },
  technicalSkills: [
    { skill: 'HTML', icon: <FaHtml5 /> },
    { skill: 'CSS', icon: <FaCss3Alt /> },
    { skill: 'Javascript', icon: <FaJsSquare /> },
    { skill: 'Node.js', icon: <FaNodeJs /> },
    { skill: 'React.js', icon: <FaReact /> },
    { skill: 'Git', icon: <FaGitAlt /> },
  ],
  softSkills: [
    {
      title: 'As a finance consultant:',
      skills: [
        'Critical thinking',
        'Teamwork',
        'Communication',
        'Project/time management',
      ],
    },
    {
      title: 'As a self taught developer:',
      skills: [
        'Ability to learn',
        'Developed curiosity',
        'Dedication',
        'Discipline',
      ],
    },
    {
      title: 'As an entrepreneur:',
      skills: [
        'Strategic thinking',
        'Resiliance',
        'Resourcefulness',
        'Efficiency',
      ],
    },
  ],
};
