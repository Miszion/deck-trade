import { useState } from 'react'
import './radio.scss'

const Radio = (props: any) => {

    const [selected, setSelected] = useState('')

    const { alignment, options, onClick} = props

    return (
        <div className='radio-group' style={{flexDirection: alignment}}>
            {options.map((i: any, index: number) =>
                <div className='radio' style={{width: alignment === 'column' ? '300px' : '200px'}}>
                    <div className='radio-circle' onClick={() => {
                        onClick(i.value)
                        setSelected(i.value)
                    }}>
                        {(selected === i.value || (selected === '' && index == 0)) && <div className='selected-circle'/>}
                    </div>
                    <label className='radio-label'>
                        {i.label}
                    </label>
                </div>
            )}
        </div>
    )
}

export default Radio