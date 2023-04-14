import React from 'react'
import Logo from '../assets/images/logo.svg'



const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                        <img src={Logo} />
                    </li>
                    <li>
                        <a className="link-styled" href="https://github.com/javiermedinaj/iphone-code" target='_blank' rel="noopener noreferrer" >Code</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar
