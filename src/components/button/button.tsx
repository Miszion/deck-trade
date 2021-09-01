import './button.scss'
import { Link } from 'react-router-dom'
const Button = (props: any) => {

    const {text, color, textColor, onClick, link} = props

    return (
        <div className='button' style={{color: textColor, backgroundColor: color}} onClick={onClick}>
            {link ? <Link to={link}>{text}</Link> : text }
        </div>
    )

}

export default Button