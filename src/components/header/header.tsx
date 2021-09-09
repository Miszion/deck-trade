import './header.scss'
import Logo from '../../assets/logos/logo'
import { Link } from 'react-router-dom'
import Button from '../button/button'
import { useState } from 'react'
import { useHistory } from 'react-router'

const Header = (props: any) => {

    const history = useHistory()
    const [menu, toggleMenu] = useState(false)

    return (
        <div className='header'>
            <div className='header-container-desktop'>
                <div className='header-logo-container'>
                    <Link to='/' className='logo-link' onClick={() => {toggleMenu(!menu)}}>
                        <Logo className='header-logo' color="#20232a"></Logo>
                    </Link>
                </div>
                <div className='header-right'>
                    <div className='menu-items'>
                        <Link to='/' className='header-item' onClick={() => {toggleMenu(!menu)}}>Trade</Link>
                        <Link to='/' className='header-item' onClick={() => {toggleMenu(!menu)}}>Company</Link>
                        <Link to='/' className='header-item' onClick={() => {toggleMenu(!menu)}}>Account</Link>
                    </div>
                    <Button color="#ffffff" textColor="#20232a" text="Sign In" link='/signin'></Button>
                </div>
            </div>
            <div className='header-container-mobile'>
                <div className='header-hamburger-container'>
                    <div className='header-hamburger' onClick={() => {toggleMenu(!menu)}}>
                        {[0,1,2].map((i) => 
                            <div className='hamburger-line' key={i}/>
                        )}
                    </div>
                </div>
                <div className='center-logo-container'>
                    <Link to='/' className='logo-link'>
                        <Logo className='header-logo' color="#20232a"></Logo>
                    </Link>
                </div>
            </div>
            <div className='side-menu' style={{left: menu ? '0px': '-300px'}}>
                <div className='menu-items-mobile'>
                    <Link to='/' className='header-item'>Trade</Link>
                    <Link to='/' className='header-item'>Company</Link>
                    <Link to='/' className='header-item'>Account</Link>
                </div>
                <div className='side-menu-button'>
                    <Button text='Sign In' color="#8B16D3" textColor='#ffffff' onClick={() => {
                        toggleMenu(!menu)
                        history.push('/signin')
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default Header