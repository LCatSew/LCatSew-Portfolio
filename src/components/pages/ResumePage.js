import React from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ResumePage() {
    <div>
        <Navigation />
        <h1>Resume</h1>
        <h3> Download my resume <a href="RESUME HERE"><span>here</span></a></h3>
        <h2>Front-end Proficiencies</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React UI</li>
        </ul>
        <h2>Back-end Proficiencies</h2>
        <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>SQL, MySQL, Sequelize</li>
            <li>NoSQL, MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
            <li>Progressive Web Applications (PWA)</li>
            <li>Webpack</li>
        </ul>
        <h2>Education</h2>
        <div>
            <h4>University of Texas: Full Stack Web Development Certification</h4>
            <p>Graduated: August 31 2023</p>
        </div>
        <h2>Experience</h2>
        <div>
            <h4>Showroom Manager</h4>
            <p>Company: Lovesac</p>
            <p>Location: Austin, TX</p>
            <p>Duration: Oct 2020 - Present</p>
            <p>Was promoted each year due to exceptional progress against KPIs and my ability to adapt to new environments, as well as learn quickly</p>
            <p>Managed a team of 5 employees</p>
            <p>Increased net sales 22% from LY</p>
            <p></p>
        <Footer />
    </div>
}




