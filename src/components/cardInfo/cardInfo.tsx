import { useEffect, useState } from 'react'
import Dropdown from '../dropDown/dropDown'
import './cardInfo.scss'
import {ReactComponent as Close} from '../../assets/images/close.svg'
import Plus from '../../assets/images/plus'
const AddCard = (props: any) => {

    const { card, setSelectedCard } = props

    const [rarityList, setRarityList] = useState<
        {
            name: string,
            value: string
        }[]
    >()

    const [cardSetList, setCardSetList] = useState<
    {
        name: string,
        value: string
    }[]
    >()

    const [editionList, setEditionList] = useState<
    {
        name: string,
        value: string
    }[]
    >()

    const [conditionList, setConditionList] = useState<
    {
        name: string,
        value: string
    }[]
    >()

    const [setSelected, setSet] = useState('')
    const [raritySelected, setRarity] = useState('')
    const [editionSelected, setEdition] = useState('')
    const [conditionSelected, setCondition] = useState('')
    const [photos, setPhotos] = useState<File[]>([])

    useEffect(() => {

        const rarity = []
        const cardSet = []
        const editions = []
        const conditions = []

        rarity.push({
            name: '',
            value: ''
        })
        cardSet.push({
            name: '',
            value: ''
        })
        editions.push({
            name: '',
            value: ''
        })
        conditions.push({
            name: '',
            value: ''
        })


        for (var i in card.card_sets) {
            const selectedRarity : string = card.card_sets[i].set_rarity
            rarity.push({
                name: selectedRarity,
                value: selectedRarity
            })
            const selectedCardSet : string = card.card_sets[i].set_code
            
            cardSet.push({
                name: selectedCardSet,
                value: selectedCardSet
            })
        }

        editions.push({
            name: 'First Edition',
            value: 'First Edition'
        })

        editions.push({
            name: 'Limited Edition',
            value: 'Limited Edition'
        })

        editions.push({
            name: 'Unlimited',
            value: 'Unlimited'
        })

        conditions.push({
            name: 'Near Mint',
            value: 'Near Mint'
        })

        conditions.push({
            name: 'Lightly Played',
            value: 'Lightly Played'
        })

        conditions.push({
            name: 'Moderately Played',
            value: 'Moderately Played'
        })

        conditions.push({
            name: 'Heavy Played',
            value: 'Heavy Played'
        })

        conditions.push({
            name: 'Damaged',
            value: 'Damaged'
        })

        setRarityList(rarity)
        setCardSetList(cardSet)
        setEditionList(editions)
        setConditionList(conditions)

    }, [])

    return (
        <div className='card-info'>
            <div className='card-info-modal'>
                <div className='card-info-modal-content'>
                    <div className='card-info-close' onClick={() => setSelectedCard(undefined)}>
                        <Close/>
                    </div>
                    <div className='card-info-bottom'>
                        <div className='card-info-image'>
                            <img src={card.card_images[0].image_url} alt={card.name}/>
                        </div>
                        <div className='card-info-content'>
                            <div className='card-info-title'>
                                {card.name}
                            </div>
                            {cardSetList && rarityList && editionList && conditionList && 
                            <div className='card-info-dropdown-list'>
                                <div className='card-info-dropdowns'>
                                    <Dropdown options={cardSetList} width="150px" fontSize="16px" label="Set" selector={setSet}/>
                                    <Dropdown options={rarityList} width="150px" fontSize="16px" label="Rarity" selector={setRarity}/>
                                </div>
                                <div className='card-info-dropdowns'>
                                    <Dropdown options={editionList} width="150px" fontSize="16px" label="Condition" selector={setEdition}/>
                                    <Dropdown options={conditionList} width="150px" fontSize="16px" label="Edition" selector={setCondition}/>
                                </div>
                            </div>}
                            <div className='card-info-description'>
                                <div className='card-info-description-title'>
                                    Description
                                </div>
                                <div className='card-info-description-text'>
                                    {card.desc}
                                </div>
                            </div>
                            <div className='card-info-photo'>
                                <div className='card-info-photo-title'>
                                    Photos
                                </div>
                                <div className='card-info-photo-space'>
                                        <div className='card-info-upload-photo'>
                                            <div className='card-info-upload-photo-svg-container'>
                                                <Plus color="green"/>
                                            </div>
                                            <input type='file' accept='image/*' onChange={async (e) => { 
                                                if (e.target.files) {
                                                    let fileArray = []
                                                    
                                                    for (var i in photos) {
                                                        fileArray.push(photos[i])
                                                    }

                                                    fileArray.push(e.target.files[0])
                                                    setPhotos(fileArray)

                                                }}}
                                            ></input>
                                        </div>
                                        <div className='card-info-card-photos'>
                                            {photos.map((element) => 
                                                <img src={element && URL.createObjectURL(element)}></img>
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

export default AddCard