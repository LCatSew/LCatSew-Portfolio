import React from "react";

// import Header from "../Header";
// import Navigation from "../Navigation";
// import Footer from "../Footer";

export default function Contact() {
    return (
        <div>
            <Navigation />
        <h1>Contact</h1>
        <form className="contact-form" action="submit">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
            <label for="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" placeholder="Your phone number.."></input>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Your email.."></input>
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Write something.."></textarea>
            <input type="submit" value="Submit"></input>
        </form>
        <Footer />
        </div>
    );
}