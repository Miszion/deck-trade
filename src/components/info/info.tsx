import './info.scss'

const Info = (props: any) => {

    return (
        <div className='info'>
            <div className='info-circle'>
                {props.children}
            </div>
            <div className='info-title'>
                {props.title}
            </div>
            <div className='info-subtitle'>
                {props.subtitle}
            </div>
        </div>
    )
}

export default Info;