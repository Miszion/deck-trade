import { useState } from 'react'
import './dropDown.scss'
import { ReactComponent as Triangle } from '../../assets/images/triangle.svg'
const Dropdown = (props: any) => {

    const { options, selector, label, width, fontSize} = props;

    const [selected, setSelected] = useState(options[0])

    const [menu, toggleMenu] = useState(false)

    return (
        <div className='dropdown-container'>
            {label && <div className='dropdown-label'>{label}</div>}
            <div className='dropdown' style={{width: width}}>
            <div className='dropdown-content' style={{justifyContent: selected.name === '' ? 'flex-end' : 'center', marginRight: selected.name === '' ? '20px' : '0px'}} onClick={() => {toggleMenu(!menu)}}>
                {selected.name !== '' && <div className='dropdown-selected' style={{fontSize: fontSize}}>{selected.name}</div>}
                <Triangle/>
            </div>
            {menu && <div className='dropdown-options' style={{width: width}}>
                {options.map((i : any) => 
                    <div className='dropdown-option' onClick={() => {
                        setSelected(i)
                        selector(i.value)
                        toggleMenu(!menu)
                    }}>{i.name}</div>
                )}
            </div>}
        </div>
        </div>
    )

}

export default Dropdown