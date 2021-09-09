import './loading.scss'

const Loading = (props: any) => {

    return (
        <div className='loading'>
            <div className='loading-modal'>
                <div className='loading-dot' style={{animationDelay: '.1s', backgroundColor: '#1679D3'}}/>
                <div className='loading-dot' style={{animationDelay: '.3s', backgroundColor: '#5148D3'}}/>
                <div className='loading-dot' style={{animationDelay: '.5s', backgroundColor: '#8B16D3'}}/>
            </div>
        </div>
    )
}

export default Loading