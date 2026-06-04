import { useState } from "react";
import "../index.css";
import Footer from "../components/Footer";

function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        alert("Message sent!");
    }

    return (
        <div>

            <div className="contact-title" >
                <img src="/images/contact-image.jpeg" alt="contact" />

                <h1>How can we help?</h1>

                    <p>Send us a message!</p>

            </div>

            <div className="info">
                <form id="contactForm" onSubmit={handleSubmit}>

                    <fieldset>
                        <legend>Contact form</legend>

                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Your name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />

                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Your surname"
                            value={formData.lastName}
                            onChange={handleChange}
                        />

                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="john@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <label>Message:</label>
                        <textarea
                            name="message"
                            placeholder="Write your message..."
                            value={formData.message}
                            onChange={handleChange}
                        />

                        <button type="submit">Send</button>
                    </fieldset>

                </form>
            </div>


<Footer/>
        </div>
    );
}

export default Contact;