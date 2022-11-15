import { Link } from 'react-router-dom'
import '../header/header.css'
import logo from '../../images/whitelogo.png'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='navbar-container'>
                <div>
                    <Link><img className='logo-img' src={logo} alt="logo" /></Link>
                </div>
                <div className='navbar-list'>
                    <Link className='nav-item'>
                        <p className='navbar-leaf'>Home</p>
                    </Link>
                    <Link className='nav-item'>
                        <p className='navbar-leaf'>About</p>
                    </Link>
                    <Link className='nav-item'>
                        <p className='navbar-leaf'>Solutions</p>
                    </Link>
                    <Link className='nav-item'>
                        <p className='navbar-leaf'>Media</p>
                    </Link>
                    <Link className='nav-item'>
                        <p className='navbar-leaf'>Contact</p>
                    </Link>
                </div>
            </div>

            <div className='banner-text'>
                <h1 style={{ fontSize: "60px", color: "white" }}>THE <span style={{ color: "#9aeba6" }}>FUTURE</span> OF <span style={{ color: "#9aeba6" }}>ENERGY</span></h1>
                <p style={{ fontSize: "30px", color: "white", marginTop: "10px" }}>Enabling Renewable Energy 24/7 for a Carbon-Free Earth</p>


                <div className='buttons-group'>
                    <button className='learnmore-button'>Learn More</button>
                    <button className='donate-button'>Donate</button>
                </div>
            </div>
        </div>
    )
}

export default Header