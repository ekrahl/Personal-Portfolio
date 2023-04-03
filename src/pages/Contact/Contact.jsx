import { useRef, useState, useEffect } from 'react'
import { useInView } from "framer-motion";
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import './Contact.css'

const SERVICE_ID = 'service_n3ajqs9'
const USER_ID = '8PSCxwab4y0Af4mls'
const TEMPLATE_ID = 'template_d6v42qo'

const Contact = () => {
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
            ref.current.querySelectorAll("form").forEach((el) => {
                el.classList.add("grow");
            });
        } else {
            ref.current.querySelectorAll("form").forEach((el) => {
                el.classList.remove("grow");
            });
        }
    }, [isIntersecting]);

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((res) => {
                console.log(res.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully, Thanks!'
                })
            }, (error) => {
                console.log(error.text)
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            })
        e.target.reset()
    }

    return (
        <div className="contact-container" id="contact" ref={ref}>
            <div className="contact-title-wrapper">
                <div
                    style={{
                        transform: isInView ? "none" : "translateX(-400px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                    }}>
                    <h1 className="contact-title">CONTACT</h1>
                </div>

                <div
                    className="contact-title-line"
                    style={{
                        transform: isInView ? "none" : "translateX(-400px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                        transitionDelay: "0.6s"
                    }}>
                    <div className="contact-line"></div>
                </div>
            </div>
            <h2>Let's Connect!</h2>
            <div className="form-container grow" id="form">
                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        name="user_name"
                        placeholder="Name"
                        required
                    />
                    <input
                        name="user_email"
                        placeholder="Email"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        required
                    />
                    <button type="submit" className="form-btn">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;