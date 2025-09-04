import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "C/C++",
    "Python",
    "Java",
    "SQL",
    "HTML",
    "CSS"
];

const labelsSecond = [
    "Flask",
    "React",
    "Node.js",
    "FastAPI",
    "REST API"
];

const labelsThird = [
    "Git",
    "Docker",
    "Visual Studio",
    "PyCharm",
    "Eclipse",
    "Pandas",
    "NumPy",
    "Figma",
    "Linux"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have experience building web applications using frameworks like React, Flask, Node.js, and FastAPI, with strong proficiency in frontend and backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Languages & Frameworks:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Libraries:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Development Tools</h3>
                    <p>I utilize tools like Git and Docker for version control, containerization, and deployment automation to support efficient development workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & IDEs:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Analysis & AI</h3>
                    <p>Experienced in using Pandas and NumPy for data analysis, and familiar with AI tools and frameworks to build intelligent applications.</p>
                    {/* 설명  */}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
