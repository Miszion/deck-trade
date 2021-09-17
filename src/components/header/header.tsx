import './header.scss'
import Logo from '../../assets/logos/logo'
import { Link } from 'react-router-dom'
import Button from '../button/button'
import { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import UserContext from '../../context/userContext'
import { useCookies, withCookies } from 'react-cookie'

const Header = (props: any) => {

    const history = useHistory()
    const [menu, toggleMenu] = useState(false)

    const [cookie, setCookie, removeCookie] = useCookies(['token'])


    return (
        <div className='header'>
            <div className='header-container-desktop'>
                <div className='header-logo-container'>
                    <Link to='/' className='logo-link'>
                        <Logo className='header-logo' color="#20232a"></Logo>
                    </Link>
                </div>
                <div className='header-right'>
                    <div className='menu-items'>
                        <Link to='/' className='header-item'>Trade</Link>
                        <Link to={cookie.token ? `/search` : '/signin'} className='header-item'>Collections</Link>
                        <Link to={cookie.token ? `/profile/${cookie.token.userName}` : '/signin'} className='header-item'>Profile</Link>
                    </div>
                    <Button color="#ffffff" textColor="#20232a" text={cookie.token ? 'Sign Out' : 'Sign In'} onClick={() => {removeCookie('token')}} link={cookie.token ? '/' : '/signin'}></Button>
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
            <div className='side-menu' style={{left: menu ? '0px': '-301px'}}>
                <div className='menu-items-mobile'>
                    <Link to='/' className='header-item'>Trade</Link>
                    <Link to={cookie.token ? `/search` : '/signin'} className='header-item'>Collections</Link>
                    <Link to={cookie.token ? `/profile/${cookie.token.userName}` : '/signin'} className='header-item'>Profile</Link>
                </div>
                <div className='side-menu-button'>
                    <Button text={cookie.token ? 'Sign Out' : 'Sign In'} color="#8B16D3" textColor='#ffffff' onClick={() => {
                        if (cookie.token) {
                            toggleMenu(!menu)
                            removeCookie('token')
                            history.push('/')
                        }
                        else {
                            toggleMenu(!menu)
                            history.push('/signin')
                        }
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default withCookies(Header)