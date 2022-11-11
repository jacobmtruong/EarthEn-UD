import { Link } from 'react-router-dom'
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

                <div>
                    
                </div>
            </div>

            <div className='header-banner'>
                <div className='navbar-container'>
                    <div className='navbar'>
                        <Link><img className='logo-img' src={logo} alt="logo" /></Link>
                        <div className='navbar-list'>
                            <Link className='nav-item'>Home</Link>
                            <Link className='nav-item'>About</Link>
                            <Link className='nav-item'>Solutions</Link>
                            <Link className='nav-item'>Media</Link>
                            <Link className='nav-item'>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header