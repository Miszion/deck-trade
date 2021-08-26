import './input.scss'

const Input = (props: any) => {

    const { label, type } = props

    return (
        <div className='input'>
            <label>{label}</label>
            <input type={type}></input>
        </div>
    )


}

export default Input