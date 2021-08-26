import Logo from '../../assets/logos/logo'
import './footer.scss'
const Footer = (props: any) => {
    return (
        <footer>
            <div className='footer'>
                <div className='footer-elements'>
                    <Logo color="#ffffff"></Logo>
                    <div className='footer-list'>
                        <div className='footer-menu'>
                            <div className='footer-menu-header'>
                               Company 
                            </div>
                            <div className='footer-menu-item'>
                                About Us
                            </div>
                            <div className='footer-menu-item'>
                                Careers
                            </div>
                        </div>
                        <div className='footer-menu'>
                            <div className='footer-menu-header'>
                               Trade 
                            </div>
                            <div className='footer-menu-item'>
                                Get Started
                            </div>
                        </div>
                        <div className='footer-menu'>
                            <div className='footer-menu-header'>
                               Account
                            </div>
                            <div className='footer-menu-item'>
                                Sign Up
                            </div>
                            <div className='footer-menu-item'>
                                Help
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-terms'>
                    <div className='footer-terms-item' style={{fontWeight: 800}}>
                        © Decktrade 2021
                    </div>
                    <div className='footer-terms-item'>
                        |
                    </div>
                    <div className='footer-terms-item'>
                        Privacy Policy
                    </div>
                    <div className='footer-terms-item'>
                        |
                    </div>
                    <div className='footer-terms-item'>
                        Terms and Conditions
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;