import React from "react";
import Iceland from "./iceland.gif";

const projectsList = [
    {
        id: 1,
        title: "Frapp & Co.",
        techStack: "...",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: <img src={Iceland} alt="..." />,
        seeLive:"https://github.com/davidkhk/personal-portfolio",
        sourceCode:"https://github.com/davidkhk/personal-portfolio"
    },
    {
        id: 2,
        title: "Tia Sun e-commerce",
        techStack: "...",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imageURL: "-",
        seeLive: "See live link",
        sourceCode: "Source code button"
    },{
        id: 3,
        title: "This personal portfolio",
        techStack: <ul><li>HTML</li><li>CSS</li><li>JS</li><li>REACT</li><li>EXPRESS</li></ul>,
        description: "My first project as a web developer. Designed and built from scratch, the challenge was to put in practice everything I learned and build a modern, responsive personal portfolio clearly showcasing my skills and personality. I learned quite a bit about HTML, CSS, REACT and EXPRESS.",
        imageURL: "-",
        seeLive: "See live link",
        sourceCode: "Source code button"
    },{
        id: 4,
        title: "Web app 2",
        techStack: "...",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imageURL: "-",
        seeLive: "See live link",
        sourceCode: "Source code button"
    },
]

export default projectsList;