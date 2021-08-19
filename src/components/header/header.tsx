import './header.scss'
import Logo from '../../assets/logos/logo'
import { Link } from 'react-router-dom'
import Button from '../button/button'

const Header = (props: any) => {
    return (
        <div className='header'>
            <div className='header-container'>
                <Link to='/' className='logo-link'>
                    <Logo className='header-logo' color="#434343"></Logo>
                </Link>
                <div className='menu-items'>
                    <Link to='/' className='header-item'>Trade</Link>
                    <Link to='/' className='header-item'>Company</Link>
                    <Link to='/' className='header-item'>Account</Link>
                </div>
                <Button color="#ffffff" textColor="#434343" text="Sign Up"></Button>
            </div>
        </div>
    )
}

export default Header