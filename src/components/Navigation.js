import React, { useState }  from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Project from "./Project";

function Navigation({currentPage, handlePageChange}) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    href="#home"
                    onClick={() => handlePageChange("HomePage")}
                    className={currentPage === "HomePage" ? "nav-link active" : "nav-link"}
                >
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange("AboutPage")}
                    className={currentPage === "AboutPage" ? "nav-link active" : "nav-link"}
                >
                    About
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => handlePageChange("ContactPage")}
                    className={currentPage === "ContactPage" ? "nav-link active" : "nav-link"}
                >
                    Contact
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#resume"
                    onClick={() => handlePageChange("ResumePage")}
                    className={currentPage === "ResumePage" ? "nav-link active" : "nav-link"}
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default Navigation;