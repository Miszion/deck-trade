import './verify.scss'
import DigitInput from '../digitInput/digitInput'
import Button from '../button/button'
import { useContext, useEffect, useState } from 'react'
import { confirm, login } from '../../utils/requests'
import { useHistory } from 'react-router'
import UserContext from '../../context/userContext'

const isFilled = (digitArray: Array<string>) => {

    for (var i in digitArray) {
        if (digitArray[i] === '') {
            return false
        }
    }
    return true
}

const Verify = (props: any) => {

    const { setStatus } = props

    const history = useHistory()
    const context = useContext(UserContext)
    const [firstDigit, setFirstDigit] = useState('')
    const [secondDigit, setSecondDigit] = useState('')
    const [thirdDigit, setThirdDigit] = useState('')
    const [fourthDigit, setFourthDigit] = useState('')
    const [fifthDigit, setFifthDigit] = useState('')
    const [sixthDigit, setSixthDigit] = useState('')
    const [filled, setFilled] = useState(false)
    const [loaded, setLoaded] = useState('')

    useEffect(() => {
        console.log('setting filled')
        setFilled(isFilled([firstDigit, secondDigit, thirdDigit, fourthDigit, fifthDigit, sixthDigit]))
    }, [firstDigit, secondDigit, thirdDigit, fourthDigit, fifthDigit, sixthDigit])

    return (
        <div className='verify'>
            <div className='verify-panel'>
                <DigitInput autoFocus={true} onChange={setFirstDigit}></DigitInput>
                <DigitInput focus={firstDigit !== ''} onChange={setSecondDigit}></DigitInput>
                <DigitInput focus={secondDigit !== ''} onChange={setThirdDigit}></DigitInput>
                <DigitInput focus={thirdDigit !== ''} onChange={setFourthDigit}></DigitInput>
                <DigitInput focus={fourthDigit !== ''} onChange={setFifthDigit}></DigitInput>
                <DigitInput focus={fifthDigit !== ''} onChange={setSixthDigit}></DigitInput>
            </div>
            <div className='verify-error'>
                {loaded === 'failed' ? 'Could not verify email. Please enter a valid confirmation code': ''}
            </div>
            <Button text={loaded !== 'success' ? 'Verify Email' : 'Login'} textColor={filled ? "#ffffff" : '#434343'} color={!filled ? '#c4c4c4' : (loaded === 'success' ? '#50B104' : '#8B16D3')} onClick={ async () => {
                if (loaded !== 'success') {

                    setLoaded('loading')
                    setStatus('loading')

                    const response = await confirm(context.userName, `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}${fifthDigit}${sixthDigit}`)
                    
                    if (response === 200) {
                        setLoaded('success')
                        setStatus('success')
                    }
                    else {
                        setLoaded('failed')
                        setStatus('failed')
                    }

                }
                else {

                    const userName = context.userName
                    const password = context.password

                    setLoaded('loading')
                    setStatus('loading')

                    const response = await login(userName, password)

                    setLoaded('success')
                    setStatus('success')

                    if (response.message) {
                        context.password = ''
                        context.token = response.message.AccessToken
                        history.push('/profile')
                    }
                }
            }}></Button>
        </div>
    )

}

export default Verify