import './contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mailIcon from '../../assets/mail_icon.svg';
import locationIcon from '../../assets/location_icon.svg';
import callIcon from '../../assets/call_icon.svg';
export default function Contact() {
    return (
        <div className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I am currently looking for an internshipship.</p>
                    <div className="contact-details">
                        <div className="contact-info">
                            <img src={mailIcon} alt="" /> <p>shamel.rai@gmail.com</p>
                        </div>
                        <div className="contact-info">
                            <img src={callIcon} alt="" /><p>+977 9813663550</p>
                        </div>
                        <div className="contact-info">
                            <img src={locationIcon} alt="" /><p>Thasikhel, Lalitpur</p>
                        </div>
                    </div>
                </div>
                <form className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor=""> Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' />
                    <label htmlFor="">Enter your Message</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>
        </div>
    )
}