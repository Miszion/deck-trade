import './button.scss'
const Button = (props: any) => {

    const {text, color, textColor, onClick} = props

    return (
        <div className='button' style={{color: textColor, backgroundColor: color}} onClick={onClick}>
            {text}
        </div>
    )

}

export default Button