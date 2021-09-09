import './input.scss'

const Input = (props: any) => {

    const { label, type, onChange, fontSize } = props

    return (
        <div className='input'>
            <label style={{fontSize: fontSize}}>{label}</label>
            <input type={type} style={{fontSize: fontSize}} onChange={(e) => {
                onChange(e.target.value)
            }}></input>
        </div>
    )


}

export default Input