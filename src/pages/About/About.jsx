import { useRef, useState, useEffect } from 'react'
import profilepic from "../../assets/profilepic.png";
import { useInView } from "framer-motion";
import './About.css'

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        });
        console.log(isIntersecting);
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isIntersecting) {
            ref.current.querySelectorAll("div.bar").forEach((el) => {
                el.classList.add("fill");
            });
        } else {
            ref.current.querySelectorAll("div.bar").forEach((el) => {
                el.classList.remove("fill");
            });
        }
    }, [isIntersecting]);

    return (
        <div>
            <div className="about-container" id="about" ref={ref}>
                <div className="about-title-wrapper">
                    <div style={{
                        transform: isInView ? "none" : "translateX(-400px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                    }}>
                        <h1 className="about-title">ABOUT</h1>
                    </div>

                    <div
                        className="about-title-line"
                        style={{
                            transform: isInView ? "none" : "translateX(-400px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                            transitionDelay: "0.8s"
                        }}>
                        <div className="about-line"></div>
                    </div>
                </div>

                <div className="about-wrapper">

                    <div
                        className="profile-wrapper"
                        style={{
                            transform: isInView ? "none" : "translateX(-400px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                            transitionDelay: "0.5s"
                        }}>
                        <div className="about-img">
                            <div className="img-background">
                                <img src={profilepic} alt="Profile Pic" />
                            </div>
                        </div>

                        <div className="about-me">
                            <h2>Who Am I?</h2>
                            <p>I'm a Frontend Web Developer in Washington, DC with a passion for designing and creating intuitive, functional user experiences. Check out my latest web projects.</p>
                        </div>

                    </div>


                    <div
                        className="bar-container"
                        style={{
                            transform: isInView ? "none" : "translateX(400px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                            transitionDelay: "0.5s"
                        }}>

                        <div className="bar-wrap">
                            <div className="bar fill" style={{ width: '90%' }}>
                                <div className="label">HTML</div>
                            </div>
                            <span>90%</span>
                        </div>

                        <div className="bar-wrap">
                            <div className="bar fill" style={{ width: '90%', animationDelay: '.1s' }}>
                                <div className="label">CSS</div>
                            </div>
                            <span>90%</span>
                        </div>

                        <div className="bar-wrap">
                            <div className="bar fill" style={{ width: '75%', animationDelay: '.15s' }}>
                                <div className="label">JavaScript</div>
                            </div>
                            <span>75%</span>
                        </div>
                        <div className="bar-wrap">
                            <div className="bar fill" style={{ width: '80%', animationDelay: '.2s' }}>
                                <div className="label">React</div>
                            </div>
                            <span>80%</span>
                        </div>
                        <div className="bar-wrap">
                            <div className="bar fill" style={{ width: '50%', animationDelay: '.25s' }}>
                                <div className="label">Node.js</div>
                            </div>
                            <span>50%</span>
                        </div>
                        <div className="bar-wrap">
                            <div className="bar fill" style={{ width: '50%', animationDelay: '.3s' }}>
                                <div className="label">Express.js</div>
                            </div>
                            <span>50%</span>
                        </div>
                        <div className="bar-wrap">
                            <div className="bar fill" style={{ width: '55%', animationDelay: '.35s' }}>
                                <div className="label">MongoDB</div>
                            </div>
                            <span>55%</span>
                        </div>
                        <div className="bar-wrap">
                            <div className="bar fill" style={{ width: '70%', animationDelay: '.4s' }}>
                                <div className="label">SQL</div>
                            </div>
                            <span>70%</span>
                        </div>
                        <div className="bar-wrap">
                            <div className="bar fill" style={{ width: '45%', animationDelay: '.45s' }}>
                                <div className="label">Java</div>
                            </div>
                            <span>45%</span>
                        </div>
                        <div className="bar-wrap">
                            <div className="bar fill" style={{ width: '30%', animationDelay: '.5s' }}>
                                <div className="label">Python</div>
                            </div>
                            <span>30%</span>
                        </div>
                        <div className="bar-wrap">
                            <div className="bar fill" style={{ width: '55%', animationDelay: '.55s' }}>
                                <div className="label">Adobe</div>
                            </div>
                            <span>55%</span>
                        </div>
                        <div className="bar-wrap">
                            <div className="bar fill" style={{ width: '65%', animationDelay: '.6s' }}>
                                <div className="label">Git/Github</div>
                            </div>
                            <span>65%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
