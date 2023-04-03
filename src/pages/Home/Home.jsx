import { motion } from 'framer-motion'
import { RxArrowRight } from "react-icons/rx";
import './Home.css'

export default function Home() {
    return (
        <>
            <div
                className="home-container" id="home">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >Hello, I'm <span className="my-name">Emily Krahl</span>.</motion.h1>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 2 }}
                >I'm a frontend web developer.</motion.h1>

                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 3.5 }}
                    className="btn"
                >
                    <a href="#about">View my work<RxArrowRight className="btn-arrow" fontSize="1.5rem" /></a>
                </motion.button>
            </div>
        </>
    )
}
