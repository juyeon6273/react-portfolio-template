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
                    <p>I have experience building full-stack web applications using frameworks such as React, Flask, Node.js, and FastAPI, and have spearheaded efforts to optimize scalable and modular architectures.</p>
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
                    <p>I utilize tools including Git and Docker to enable version control, containerization, and automated deployment, and leverage Linux environments as well as IDEs such as Visual Studio, PyCharm, and Eclipse to support efficient development workflows.</p>
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
                    <p>Experienced in data analysis using Pandas and NumPy, with practical expertise in NLP and machine learning frameworks to develop data-driven applications.</p>
                    {/* 설명  */}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
