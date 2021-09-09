import './signUp.scss'
import Radio from '../../components/radio/radio';
import { useContext, useState } from 'react';
import Input from '../../components/input/input';
import Button from '../../components/button/button'
import { signUp } from '../../utils/requests'
import { useHistory } from 'react-router';
import Loading from '../../components/loading/loading'
import UserContext from '../../context/userContext'

const SignUp = (props: any) => {

    const history = useHistory()
    const context = useContext(UserContext)
    const [type, setType] = useState('Individual')
    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [emailNotif, setEmailNotif] = useState(true)
    const [loading, setLoading] = useState(false)

    return (
        <div className='sign-up'>
            {loading && <Loading></Loading>}
            <div className='sign-up-headline'>
                Sign up
            </div>
            <div className='sign-up-subtext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa est, gravida non tellus in, laoreet eleifend eros. Maecenas neque lorem, laoreet nec fringilla vel, pulvinar sagittis mi. 
            </div>
            <Radio options={[
                {
                    value: 'Individual',
                    label: 'I am an individual'
                },
                {
                    value: 'Business',
                    label: 'I am a business'
                }
            ]} onClick={setType}></Radio>
            <div className='sign-up-subheadline'>
                Basic Info
            </div>
            <div className='sign-up-inputs'>
                <Input label={"Full Name"} fontSize='18px' onChange={setFullName}></Input>
                <Input label={"Username"} fontSize='18px' onChange={setUserName}></Input>
                <Input label={"Password"} type='password' fontSize='18px' onChange={setPassword}></Input>
                <Input label={"Birthdate"} fontSize='18px' onChange={setBirthdate}></Input>
                <Input label={"Email Address"} fontSize='18px' onChange={setEmail}></Input>
                <Input label={"Phone Number"} fontSize='18px' type='tel' onChange={setPhoneNumber}></Input>
            </div>
            <div className='sign-up-subheadline'>
                Additional Questions
            </div>
            <div className='sign-up-notifications'>
                Sign up for additional emails and newsletters as we continue to roll out new features
            </div>
            <Radio options={[
                {
                    value: true,
                    label: 'Yes'
                },
                {
                    value: false,
                    label: 'No'
                }
            ]} onClick={setEmailNotif} alignment="column"></Radio>
            <div className='submit-button'>
                <Button text='Sign Up' textColor='#ffffff' color='#8B16D3' onClick={
                    async () => {
                        const user = {
                            userName: userName,
                            password: password,
                            phoneNumber: `+1${phoneNumber}`,
                            email: email,
                            firstName: `${fullName.split(' ')[0]}`,
                            lastName: `${fullName.split(' ')[1]}`,
                            birthDate: birthdate
                        }

                        setLoading(true)

                        const response = await signUp(user)

                        setLoading(false)

                        if (response === 200) {
                            context.userName = userName
                            context.password = password
                            history.push('/confirm')
                        }
                        else {
                            alert('Error')
                        }

                    }
                }></Button>
            </div>
        </div>
    )
}

export default SignUp;