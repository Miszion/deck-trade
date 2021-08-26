import React from 'react'
import { ReactComponent as LandingImage} from '../../assets/images/landing-image.svg'
import { ReactComponent as CloudUpload} from '../../assets/images/cloud-upload.svg'
import { ReactComponent as MagnifyingGlass} from '../../assets/images/magnifying-glass.svg'
import { ReactComponent as Trade} from '../../assets/images/trade.svg'
import { ReactComponent as Business} from '../../assets/images/business.svg'
import Info from '../../components/info/info'
import Button from '../../components/button/button'
import Input from '../../components/input/input'

import './landing.scss'

const Landing = (props: any) => {
    return (
        <div className='landing'>
            <div className='landing-header'>
                <div className='landing-text'>
                    <div className='landing-headline'>
                        Lorem ipsum dolor sit amet
                    </div>
                    <div className='landing-subtitle'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </div>
                    <div className='button-landing'>
                        <Button text='Trade' color='#1679D3' textColor="#ffffff"></Button>
                    </div>
                </div>
                <div className='landing-image'>
                    <LandingImage></LandingImage>
                </div>
            </div>
            <div className='trading-panel'>
                <div className='trading-sub-title'>
                    TRADING MADE SIMPLE
                </div>
                <div className='trading-title'>
                    It's easier than ever to trade your favorite cards
                </div>
                <div className='trading-info'>
                    <Info title="Upload your cards" subtitle="You can upload your favorite cards to our online database with rarity, condition, and set">
                        <CloudUpload/>
                    </Info>
                    <Info title="Search for your favorites" subtitle="Search on our site for your favorite cards, confirm the rarity and condition of the offer">
                        <MagnifyingGlass/>
                    </Info>
                    <Info title="Trade" subtitle="Using our online platform, you can make a safe and secure offer online for your favorite cards">
                        <Trade/>
                    </Info>
                </div>
                <div className='landing-info-button'>
                    <Button text="LEARN MORE" color='#8B16D3' textColor='white'></Button>
                </div>
            </div>
            <div className='landing-info-panel'>
                <div className='landing-info-text'>
                    <div className='landing-info-headline'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    </div>
                    <div className='landing-info-subtext'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    </div>
                </div>
                <Business></Business>
            </div>
            <div className='landing-submission'>
                <div className='landing-submission-text'>
                    <div className='landing-submission-headline'>
                        Sign up for our mailing list
                    </div>
                    <div className='landing-submission-subtext'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    </div>
                </div>
                <div className='landing-submission-block'>
                    <div className='landing-submission-input'>
                        <Input label='Email' type='email'></Input>
                    </div>
                    <Button text="Sign Up" color='#8B16D3' textColor='white'></Button>
                </div>
            </div>
        </div>
    )
}

export default Landing;