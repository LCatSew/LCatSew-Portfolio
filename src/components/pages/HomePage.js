import React from "react";

import Navigation from "../Navigation";
import Footer from "../Footer";

export default function HomePage() {
    return (
        <div>
            <Navigation />
            <main>
                <header className="masthead" id="page-top">
                    <div className="container" id="bio">
                        <h1>LC Sewell</h1>
                        <h2>Junior Software Developer with a special interest in UX/UI, Databases, and Data Structures </h2>
                    </div>
                </header>
            </main>
            
            <Footer />
        </div>
    );
}
