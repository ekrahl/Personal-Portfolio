import './Footer.css'
import { SlSocialLinkedin, SlSocialGithub } from 'react-icons/sl'

const currentDate = new Date()

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="social-wrapper">
                <div className="social-box">
                    <a
                        href="https://linkedin.com/in/emily-k-8140221bb"
                        target="_blank"
                        rel="noreferrer noopener"
                    ><SlSocialLinkedin fontSize="2rem" /></a>
                </div>
                <div className="social-box">
                    <a
                        href="https://github.com/ekrahl"
                        target="_blank"
                        rel="noreferrer noopener"
                    ><SlSocialGithub fontSize="2rem" /></a>
                </div>
            </div>
            <div className="footer-text">
                <p>EMILY KRAHL</p>
                <span> © {currentDate.getFullYear()}</span>
            </div>
        </div>
    )
}

export default Footer