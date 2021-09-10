import { useState } from 'react'
import './dropDown.scss'

const DropDown = (props: any) => {

    const { options, selector} = props;

    const [selected, setSelected] = useState(options[0].value)

    return (
        <div className='dropdown'>
            
        </div>
    )

}