import React from 'react'
import './Contact.css';
import Mgicon from '../../assets/images/Mgicon.png';
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import WhiteDark from '../../assets/images/White_arrow.jpg';
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1f1b77fc-a8fe-4020-845c-534b344acad6");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message send Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className='contact ' id='Contact'>
            <div className="contactc0l">
                <h3>Send us a message <img src={Mgicon} alt="" /></h3>
                <p>We’re here to help you with any questions or feedback you may have. Please fill out the form with your details,
                    and we’ll respond as soon as possible. Your message is important to us,
                    and we look forward to connecting with you!</p>
                <ul >
                    <li><IoIosMail />makesh.p.ad@care.ac.in</li>
                    <li><MdOutlinePhoneInTalk /> +91 8148360766</li>
                    <li> <FaLocationDot />#27, Thayanoor, Dindigul Main Road, Trichy – 620 009.</li>
                </ul>


            </div>
            <div className="contactc0l">
                <form onSubmit={onSubmit}>
                    <label >Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label >Your Phone</label>
                    <input type="tel" name='phone' placeholder='Enter your phone number' required />
                    <label >Your Message</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button className='btn dark_btn' type='submit' >Send Message <img src={WhiteDark} alt="" /></button>
                </form>
                <span>{result}</span>

            </div>

        </div>
    )
}

export default Contact
