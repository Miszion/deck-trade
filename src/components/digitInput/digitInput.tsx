import './digitInput.scss'
import { useEffect, useRef } from 'react'
const DigitInput = (props: any) => {

    const { onChange, focus, autoFocus } = props 

    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (focus && ref.current) {
            ref.current.focus()
        }
    }, [focus])

    return (
        <div className='digit-input'>
            <input autoFocus={autoFocus} ref={ref} type="text" maxLength={1} onChange={(e) => {onChange(e.target.value)}}></input>
        </div>
    )

}

export default DigitInput