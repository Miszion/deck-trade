import './search.scss'
import Dropdown from '../dropDown/dropDown'
import { useEffect, useState } from 'react'
import { constructLevelList, constructTypeList, constructAttributeList, constructCardTypeList, constructMonsterTypeList } from '../../data/yugioh'
import Input from '../input/input'
import {ReactComponent as Close} from '../../assets/images/close.svg'
import { fetchCards } from '../../utils/requests'
import { useHistory } from 'react-router'
import { useCookies } from 'react-cookie'

const Search = (props: any) => {


    const [category, setCategory] = useState('yugioh')
    const [level, setLevel] = useState('')
    const [type, setType] = useState('')
    const [monsterType, setMonsterType] = useState('')
    const [attribute, setAttribute] = useState('')
    const [cardType, setCardType] = useState('')
    const [cardName, setCardName] = useState('')
    const [cardList, setCardList] = useState<[]>([])
    const [cookies, setCookies] = useCookies(['token'])
    const history = useHistory()
    useEffect(() => {

        async function getCards() {
            const response = await fetchCards(cardName, monsterType, type, cardType, level, attribute)

            if (response && response.data) {
                setCardList(response.data)
            }
            else {
                setCardList([])
            }
        }

        getCards()


    }, [level, type, monsterType, attribute, cardType, cardName])


    const { toggleMenu } = props

    return (
        <div className='search'>
            <div className='search-box'>
                <div className='search-content'>
                    <div className='close-menu' onClick={() => {cookies.token.token ? history.push(`/profile/${cookies.token.userName}`) : '/'}}>
                        <Close/>
                    </div>
                    <Dropdown options={[
                        {
                            name: "Yu-Gi-Oh",
                            value: "yugioh"
                        },
                        {
                            name: "Pokemon",
                            value: "pokemon"
                        }
                    ]}  selector={setCategory}/>
                    <div className='filter-headline'>Filters</div>
                    <div className='filter-list'>
                        <Dropdown options={constructLevelList()} width="60px" fontSize="18px" label="Level" selector={setLevel}/>
                        <Dropdown options={constructTypeList()}  width="150px" fontSize="18px" label="Type" selector={setType}/>
                        <Dropdown options={constructAttributeList()} label="Attribute" width="130px" fontSize="18px" selector={setAttribute}/>
                            <div className='type-section'>
                                <Dropdown options={constructCardTypeList()}  label="Card" width="130px" fontSize="18px"selector={setCardType}/>
                                {cardType === 'monster' && 
                                    <Dropdown options={constructMonsterTypeList()}  label="Monster Type" width="130px" fontSize="18px"selector={setMonsterType}/>
                                }
                        </div>
                    </div>
                    <div className='lookup-name'>
                        <Input label='Card Name' type='text' fontSize="18px" onChange={setCardName}></Input>
                    </div>
                </div>
                <div className='card-grid'>
                    {cardList && cardList.length !== 0 && cardList.map((i: any) => 
                        <div className='card'>
                            <img src={i.card_images[0].image_url_small}></img>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}

export default Search