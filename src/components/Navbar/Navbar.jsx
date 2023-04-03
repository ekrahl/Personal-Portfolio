import { useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import classNames from 'classnames'
import useSticky from '../useSticky'

import './Navbar.css'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const { sticky, stickyRef } = useSticky()

    return (
        <>
            <nav ref={stickyRef} className={classNames('nav', { sticky })}>
                <ul className="nav-links" >
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#portfolio">PORTFOLIO</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>

                <div className="nav-smallscreen">
                    <GiHamburgerMenu color="#fff" fontSize={27} className="overlay__open" onClick={() => setToggleMenu(true)} />
                    {toggleMenu && (
                        <div className="nav-smallscreen-overlay slide-bottom">
                            <MdClose className="overlay__close" onClick={() => setToggleMenu(false)} />
                            <ul className="nav-smallscreen-links">
                                <li><a href="#home" onClick={() => setToggleMenu(false)}>HOME</a></li>
                                <li><a href="#about" onClick={() => setToggleMenu(false)}>ABOUT</a></li>
                                <li><a href="#portfolio" onClick={() => setToggleMenu(false)}>PORTFOLIO</a></li>
                                <li><a href="#contact" onClick={() => setToggleMenu(false)}>CONTACT</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
            <div
                style={{
                    height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
                }}
            />
        </>
    )
}