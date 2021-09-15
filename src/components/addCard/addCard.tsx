import { useEffect, useState } from 'react'
import Dropdown from '../dropDown/dropDown'
import './addCard.scss'
const AddCard = (props: any) => {

    const { card } = props

    const [rarityList, setRarityList] = useState<[]>([])
    const [cardSetList, setCardSetList] = useState([])
    const [editionList, setEditionList] = useState([])
    const [conditionList, setConditionList] = useState([])

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
            const selectedCardSet : string = card.card_sets[i].set_name
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

        //setRarityList(rarity)



    }, [])

    return (
        <div className='add-card'>
            <div className='add-card-modal'>
                <div className='add-card-image'>
                    <img src={card.card_images[0].image_url} alt={card.name}/>
                </div>
                <div className='add-card-information'>
                    <div className='add-card-title'>
                        {card.name}
                    </div>
                    <div className='add-card-dropdowns-1'>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AddCard