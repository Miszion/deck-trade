import './loading.scss'

const Loading = (props: any) => {

    const { transparent } = props

    return (
        <div className='loading' style={{background: transparent ? 'transparent' : 'rgba(0, 0, 0, 0.3)'}}>
            <div className='loading-modal'>
                <div className='loading-dot' style={{animationDelay: '.1s', backgroundColor: '#1679D3'}}/>
                <div className='loading-dot' style={{animationDelay: '.3s', backgroundColor: '#5148D3'}}/>
                <div className='loading-dot' style={{animationDelay: '.5s', backgroundColor: '#8B16D3'}}/>
            </div>
        </div>
    )
}

export default Loading