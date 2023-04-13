import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg'
import IphoneHand from '../assets/images/iphone-hand.png'

const Jumbotron = () => {

    const handleLearnMore = () => {
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">
                New
            </h2>
            <img className="logo" src={Iphone} />
            <p className="text">
                Big and bigger.
            </p>
            <span className="description">
                From $9,12 per month or $20,18 before trade-in
            </span>
            <ul className="links">
                <li>
                    <button className="button">
                        Buy
                    </button>
                </li>
                <li>

                    <a onClick={handleLearnMore} className="link">
                        Learn More
                    </a>

                </li>
            </ul>
            <img className="iphone-img" src={IphoneHand} />
        </div>
    )
}

export default Jumbotron