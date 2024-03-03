import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


export default function Navbar() {
    const [clicked, setClicked] = useState(false);

    return (
        <>
            <nav className='Navigator'>
            <img src={require('../../images/logo.png')} alt='image not found' />
                <div>
                    <ul className={clicked ? 'navbar active' : 'navbar'}>
                        <li><Link to="/Home" className='active'>Home</Link></li>
                        <li><a href="about.html">About Me</a></li>
                        <li><a href="myservices.html">My Services</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><Link to="/Contact">Contact</Link> </li>
                    </ul>
                </div>

                <div className="humberger">
                    <i id='bar' className={clicked ? "fas fa-times" : "fas fa-bars"} onClick={() => setClicked(!clicked)}></i>
                </div>
            </nav>
        </>
    )
}
