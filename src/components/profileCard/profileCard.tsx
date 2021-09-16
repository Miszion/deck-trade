import './profileCard.scss'
import {ReactComponent as Close} from '../../assets/images/close.svg'
const ProfileCard = (props: any) => {

    const {card, setSelectedCard} = props

    return (
        <div className='profile-card-container'>
            <div className='profile-card-modal'>
                <div className='profile-card-modal-content'>
                    <div className='profile-card-bottom'>
                        <div className='profile-card-image'>
                            <div className='profile-card-close' onClick={() => setSelectedCard(undefined)}>
                                    <Close/>
                            </div>
                            <img src={card.image_url} alt={card.name}/>
                        </div>
                        <div className='profile-card-content'>
                            <div className='profile-card-title'>
                                {card.name}
                            </div>
                            <div className='profile-card-info-list'>
                                <div className='profile-card-fact'>
                                    Set: {card.set}
                                </div>
                                <div className='profile-card-fact'>
                                    Rarity: {card.rarity}
                                </div>
                                <div className='profile-card-fact'>
                                    Edition: {card.edition}
                                </div>
                                <div className='profile-card-fact'>
                                    Condition: {card.condition}
                                </div>
                            </div>
                            <div className='profile-card-description'>
                                <div className='profile-card-description-title'>
                                    Description
                                </div>
                                <div className='profile-card-description-text'>
                                    {card.desc}
                                </div>
                            </div>
                            <div className='profile-card-photo'>
                                <div className='profile-card-photo-title'>
                                    Photos
                                </div>
                                <div className='profile-card-photo-space'>
                                    <div className='profile-card-photos'>
                                        {card.photos.map((element: any, i:number) => 
                                            <img key={i} src={`${process.env.REACT_APP_S3_USERS_URL}/${element}`}></img>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard