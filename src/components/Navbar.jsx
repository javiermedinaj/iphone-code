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
                        <a className="link-styled" href="/">Store</a>
                    </li>
                    <li>
                        <a className="link-styled" href="/">Mac</a>
                    </li>
                    <li>
                        <a className="link-styled" href="/">Ipad</a>
                    </li>
                    <li>
                        <a className="link-styled" href="/">Iphone</a>
                    </li>
                    <li>
                        <a className="link-styled" href="/">Watch</a>
                    </li>
                    <li>
                        <a className="link-styled" href="/">Airpods</a>
                    </li>
                    <li>
                        <a className="link-styled" href="/">TV & Home</a>
                    </li>
                    <li>
                        <a className="link-styled" href="/">Entertanment</a>
                    </li>
                    <li>
                        <a className="link-styled" href="/">Accesories</a>
                    </li>
                    <li>
                        <a className="link-styled" href="/">Support</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
