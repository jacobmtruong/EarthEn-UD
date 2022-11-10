import React from 'react'
import '../header/header.css'
import pin from '../../images/pin.png'
import logo from '../../images/whitelogo.png'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='above-banner'>
                <div className='location-text'>
                    <img className='pin-img' src={pin} alt="pin-location" />
                    <p>California, United States</p>
                </div>
            </div>

            <div className='header-banner'>
                <div className='navbar-container'>
                    <img className='logo-img' src={logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Header