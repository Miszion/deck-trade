import './confirm.scss'
import Verify from '../../components/verify/verify'
import { useState } from 'react'
import Loading from '../../components/loading/loading'
import { ReactComponent as X} from '../../assets/images/x.svg'
import { ReactComponent as Check} from '../../assets/images/check.svg'

const Confirm = (props: any) => {

    const [status, setStatus] = useState('')

    return (
        <div className='confirm'>
            {status === 'loading' && <Loading/>}
            <div className='confirm-circle'>
                {status === 'success' ? <Check/> : (status === 'failed' ? <X/> : '') }
            </div>
            <div className='confirm-headline'>
                Please verify your email
            </div>
            <div className='confirm-subtext'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa est, gravida non tellus in, laoreet eleifend eros. Maecenas neque lorem, laoreet nec fringilla vel, pulvinar sagittis mi. 
            </div>
            <div className='verify-headline'>
                Enter the verification email
            </div>
            <div className='verify-subtext'>
                6-Digit Verification Code
            </div>
            <Verify setStatus={setStatus}/>
        </div>
    )

}

export default Confirm