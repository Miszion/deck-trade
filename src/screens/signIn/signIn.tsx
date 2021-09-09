import './signIn.scss'
import Logo from '../../assets/logos/logo'
import Input from '../../components/input/input';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'
import Button from '../../components/button/button';
import { login } from '../../utils/requests';
import UserContext from '../../context/userContext';
import Loading from '../../components/loading/loading';

const SignIn = (props: any) => {

    const history = useHistory()
    const context = useContext(UserContext)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    return (
        <div className='sign-in'>
            {loading && <Loading/>}
            <div className='sign-in-image'>
                <div className='deck-trade-open'>
                    <div className='deck-trade-logo'>
                        <Logo color="#ffffff"></Logo>
                    </div>
                    <div className='deck-trade-sign-in-text'>
                        A new way to trade and buy cards online
                    </div>
                </div>
            </div>
            <div className='sign-in-section'>
                <div className='sign-in-headline'>
                    Sign In
                </div>
                <div className='sign-in-input'>
                    <Input label='Username' fontSize="18px" onChange={setUserName}></Input>
                </div>
                <div className='sign-in-input'>
                    <Input label='Password' type="password" fontSize="18px" onChange={setPassword}></Input>
                </div>
                <Link to='/signup'>Don’t have an account? Sign up here</Link>
                <div className='sign-in-button'>
                    <Button text='Sign In' color="#8B16D3" textColor="white" onClick={ async () => {
                        setLoading(true)
                        const response = await login(userName, password)

                        if (response.message) {
                            setError('')
                            setLoading(false)
                            context.userName = userName
                            context.token = response.message.AccessToken
                            history.push('/profile')
                        }
                        else {
                            setLoading(false)
                            setError("Incorrect username or password")
                        }

                    }}></Button>
                </div>
                <div className='sign-in-error'>
                    {error !== '' && error}
                </div>
            </div>
        </div>
    )
}

export default SignIn;