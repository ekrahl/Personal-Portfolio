import { useRef, useState } from "react"
import tacotoo from "../../assets/tacotoo.jpg"
import tacotoo2 from "../../assets/tacotoo2.jpg"
import tacotoo3 from "../../assets/tacotoo3.jpg"
import tacotoo4 from "../../assets/tacotoo4.jpg"
import menumodx from "../../assets/menumodx.jpg"
import menumodx2 from "../../assets/menumodx2.jpg"
import menumodx3 from "../../assets/menumodx3.jpg"
import menumodx4 from "../../assets/menumodx4.jpg"
import { motion, useInView } from "framer-motion"
import Modal from 'react-modal'
import { GrClose } from 'react-icons/gr'
import { BiLinkExternal } from 'react-icons/bi'
import './Portfolio.css'

const Portfolio = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    function toggleModal1() {
        setIsOpen1(!isOpen1);
    }

    function toggleModal2() {
        setIsOpen2(!isOpen2);
    }

    return (
        <div>
            <div className="portfolio-container" id="portfolio" ref={ref}>
                <div className="portfolio-title-wrapper">
                    <div
                        style={{
                            transform: isInView ? "none" : "translateX(400px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                        }}>
                        <h1 className="portfolio-title">PROJECTS</h1>
                    </div>

                    <div
                        className="portfolio-title-line"
                        style={{
                            transform: isInView ? "none" : "translateX(400px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                            transitionDelay: "0.8s"
                        }}>
                        <div className="portfolio-line"></div>
                    </div>
                </div>

                <div className="portfolio-wrapper">
                    <div className="project-img"
                        style={{
                            transform: isInView ? "none" : "translateY(400px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                        }}>
                        <img src={tacotoo} alt="Taco Too" />
                        <motion.div
                            className="overlay"
                            whileInView={{ y: [0, -50, 75], opacity: [0, 0, 1] }}
                            transition={{ duration: 0.5 }}>
                            <div className="slide-effect">
                                <div className="slideDown">
                                    <p className="project-title">Taco Too</p>
                                    <p className="project-desc">React Js</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="overlay"
                            whileInView={{ y: [0, 250, 200], opacity: [0, 0, 1] }}
                            transition={{ duration: 0.5 }}>
                            <div className="slide-effect">
                                <div className="slideUp">
                                    <button className="project-btn" type="button" onClick={toggleModal1}>
                                        LEARN MORE
                                    </button>
                                    <Modal
                                        isOpen={isOpen1}
                                        onRequestClose={toggleModal1}
                                        ariaHideApp={false}
                                        contentLabel="Taco Too"
                                        style={{
                                            content: {
                                                overflow: 'hidden',
                                                width: '700px',
                                                height: '700px',
                                                padding: '0',
                                                margin: '4rem auto'
                                            }
                                        }}
                                    >
                                        <div className='modal-info-wrapper'>
                                            <section className="carousel">
                                                <ol className="carousel-viewport">
                                                    <li id="carousel-slide1"
                                                        tabIndex="0"
                                                        className="carousel-slide">
                                                        <img src={tacotoo} alt="Taco Too" />
                                                        <a href="#carousel-slide4" className="carousel-prev">
                                                            Go to last slide
                                                        </a>
                                                        <a href="#carousel-slide2" className="carousel-next">
                                                            Go to next slide
                                                        </a>
                                                    </li>
                                                    <li id="carousel-slide2"
                                                        tabIndex="0"
                                                        className="carousel-slide">
                                                        <img src={tacotoo2} alt="Taco Too" />
                                                        <a href="#carousel-slide1" className="carousel-prev">
                                                            Go to last slide
                                                        </a>
                                                        <a href="#carousel-slide3" className="carousel-next">
                                                            Go to next slide
                                                        </a>
                                                    </li>
                                                    <li id="carousel-slide3"
                                                        tabIndex="0"
                                                        className="carousel-slide">
                                                        <img src={tacotoo3} alt="Taco Too" />
                                                        <a href="#carousel-slide2" className="carousel-prev">
                                                            Go to last slide
                                                        </a>
                                                        <a href="#carousel-slide4" className="carousel-next">
                                                            Go to next slide
                                                        </a>
                                                    </li>
                                                    <li id="carousel-slide4"
                                                        tabIndex="0"
                                                        className="carousel-slide">
                                                        <img src={tacotoo4} alt="Taco Too" />
                                                        <a href="#carousel-slide3" className="carousel-prev">
                                                            Go to last slide
                                                        </a>
                                                        <a href="#carousel-slide1" className="carousel-next">
                                                            Go to next slide
                                                        </a>
                                                    </li>
                                                </ol>
                                            </section>
                                            <div className="modal-title-wrapper">
                                                <h1 className="modal-project-title">Taco Too</h1>
                                                <h2 className="modal-project-subtitle">MEXICAN RESTAURANT WEBSITE</h2>
                                            </div>
                                            <p className="modal-project-desc">A modern, responsive landing page for a Mexican restaurant in Tyson's Corner, Virginia.</p>
                                            <div className="modal-btn-container">
                                                <button className="modal-site-btn">
                                                    <a
                                                        href="http://ilovetacotoo.com"
                                                        target="_blank"
                                                        rel="noreferrer noopener">
                                                        <BiLinkExternal fontSize="1rem" />VIEW SITE
                                                    </a>
                                                </button>
                                                <button className='modal-close-btn' onClick={toggleModal1}><GrClose /></button>
                                            </div>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="project-img"
                        style={{
                            transform: isInView ? "none" : "translateY(400px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                        }}>
                        <img src={menumodx} alt="MenuModx" />
                        <motion.div
                            className="overlay"
                            whileInView={{ y: [0, -50, 75], opacity: [0, 0, 1] }}
                            transition={{ duration: 0.5 }}>
                            <div className="slide-effect">
                                <div className="slideDown">
                                    <p className="project-title">MenuModx</p>
                                    <p className="project-desc">React Js / MySQL</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="overlay"
                            whileInView={{ y: [0, 250, 200], opacity: [0, 0, 1] }}
                            transition={{ duration: 0.5 }}>
                            <div className="slide-effect">
                                <div className="slideUp">
                                    <button className="project-btn" type="button" onClick={toggleModal2}>LEARN MORE</button>
                                    <Modal
                                        isOpen={isOpen2}
                                        onRequestClose={toggleModal2}
                                        ariaHideApp={false}
                                        contentLabel="MenuModx"
                                        style={{
                                            content: {
                                                overflow: 'hidden',
                                                width: '700px',
                                                height: '700px',
                                                padding: '0',
                                                margin: '4rem auto'
                                            }
                                        }}
                                    >
                                        <div className='modal-info-wrapper'>

                                            <section className="carousel">
                                                <ol className="carousel-viewport">
                                                    <li id="carousel-slide1"
                                                        tabIndex="0"
                                                        className="carousel-slide">
                                                        <img src={menumodx} alt="Menu Modx" />
                                                        <a href="#carousel-slide4" className="carousel-prev">
                                                            Go to last slide
                                                        </a>
                                                        <a href="#carousel-slide2" className="carousel-next">
                                                            Go to next slide
                                                        </a>
                                                    </li>
                                                    <li id="carousel-slide2"
                                                        tabIndex="0"
                                                        className="carousel-slide">
                                                        <img src={menumodx2} alt="Menu Modx" />
                                                        <a href="#carousel-slide1" className="carousel-prev">
                                                            Go to last slide
                                                        </a>
                                                        <a href="#carousel-slide3" className="carousel-next">
                                                            Go to next slide
                                                        </a>
                                                    </li>
                                                    <li id="carousel-slide3"
                                                        tabIndex="0"
                                                        className="carousel-slide">
                                                        <img src={menumodx3} alt="Menu Modx" />
                                                        <a href="#carousel-slide2" className="carousel-prev">
                                                            Go to last slide
                                                        </a>
                                                        <a href="#carousel-slide4" className="carousel-next">
                                                            Go to next slide
                                                        </a>
                                                    </li>
                                                    <li id="carousel-slide4"
                                                        tabIndex="0"
                                                        className="carousel-slide">
                                                        <img src={menumodx4} alt="Menu Modx" />
                                                        <a href="#carousel-slide3" className="carousel-prev">
                                                            Go to last slide
                                                        </a>
                                                        <a href="#carousel-slide1" className="carousel-next">
                                                            Go to next slide
                                                        </a>
                                                    </li>
                                                </ol>
                                            </section>
                                            <div className="modal-title-wrapper">
                                                <h1 className="modal-project-title">MenuModx</h1>
                                                <h2 className="modal-project-subtitle">MENU BUILDING APPLICATION</h2>
                                            </div>
                                            <p className="modal-project-desc">MenuModx is a web application that lets managers generate, organize and maintain dynamic restaurant food and beverage menus for print and digital use.</p>
                                            <div className="modal-btn-container">
                                                <button className="modal-site-btn">
                                                    <a
                                                        href="http://menumodx.com"
                                                        target="_blank"
                                                        rel="noreferrer noopener">
                                                        <BiLinkExternal fontSize="1rem" />VIEW SITE
                                                    </a>
                                                </button>
                                                <button className='modal-close-btn' onClick={toggleModal2}><GrClose /></button>
                                            </div>
                                        </div>
                                    </Modal>

                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;