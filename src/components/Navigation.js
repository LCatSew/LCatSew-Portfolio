import React from "react";

function Navigation({currentPage, handlePageChange}) {
    return (
        <nav className="navbar navbar-expand-lg" id="navigation">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home" onClick={() => handlePageChange("HomePage")}> <img src="./public/LC-HeadShot-MK-icon.png" alt="Headhshot of LC Sewell"></img></a>
                <div className="collapse navbar-collapse" id="navbarHamburger">
                    <ul className="navbar-nav">
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
                </div>
            </div>
        </nav>
    );
}

export default Navigation;