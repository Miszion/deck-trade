import './button.scss'
import { Link } from 'react-router-dom'
const Button = (props: any) => {

    const {text, color, textColor, onClick, link, border, width} = props

    return (
        <div className='button' style={{color: textColor, backgroundColor: color, width: width}} onClick={onClick}>
            {link ? <Link to={link}>{text}</Link> : text }
        </div>
    )

}

export default Button