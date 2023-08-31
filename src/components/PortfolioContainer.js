import React, { useState }  from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("HomePage");

    const renderPage = () => {
        if (currentPage === "HomePage") {
            return <HomePage />;
        }
        if (currentPage === "AboutPage") {
            return <AboutPage />;
        }
        if (currentPage === "ResumePage") {
            return <ResumePage />;
        }
        if (currentPage === "ContactPage") {
            return <ContactPage />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {<Navigation currentPage={currentPage} handlePageChange={handlePageChange} />}
            {renderPage()}
            <Footer />
        </div>
    );
}
