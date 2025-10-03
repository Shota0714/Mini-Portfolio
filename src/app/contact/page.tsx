'use client';

import PageTitle from "../components/PageTitle";
import { useState } from "react";

export default function Contact() {
    const [ fullName, setFullName ] = useState<string>('');
    const [ phoneNumber, setPhoneNumber ] = useState<integer>('');
    const [ message, setMessage ] = useState<string>('');
    const [ confirmation, setConfirmation ] = useState<string>('');

    const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value);
    }
    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    }
    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }
    const handleSubmit = () => {
        setConfirmation(`Thank you ${fullName}, I will get back to you as soon as possible!`);
        // send the user back to bio page after 2 seconds
        setTimeout(() => {
            window.location.href = '/bio';
        }, 2000);
    }

    return (
        <main>
            <PageTitle title="Contact" />
            <h1>Contact Me</h1>
            <p>Send me a message below</p>
            <form>
                <div>
                    <label>Full Name:</label>
                    <input type="text" placeholder="Your Name" value={fullName} onChange={handleFullNameChange} />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="tel" placeholder="Your Phone Number" value={phoneNumber} onChange={handlePhoneNumberChange} />
                </div>
                <div>
                    <label>Message:</label>
                    <input type="text" placeholder="Your Message" value={message} onChange={handleMessageChange} />
                </div>
                <div>
                    <button type="button" onClick={handleSubmit}>Submit</button>
                    <p>{confirmation}</p>
                </div>
            </form>
        </main>
    );
}