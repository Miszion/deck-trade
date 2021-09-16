import { useEffect, useState } from 'react'
import { useCookies, withCookies } from 'react-cookie'
import { useHistory, useParams } from 'react-router'
import Loading from '../../components/loading/loading'
import { getUser, uploadProfilePicture, uploadBannerPicture, getUserCards, updateUserDescription } from '../../utils/requests'
import { ReactComponent as Pencil } from '../../assets/images/pencil.svg'
import './profile.scss'
import Dropdown from '../../components/dropDown/dropDown'
import Input from '../../components/input/input'
import Button from '../../components/button/button'

const Profile = (props: any) => {

    const { userName } = useParams<{ userName: string }>();
    const [cookies, setCookie] = useCookies(['token'])

    const [profilePic, setProfilePic] = useState<File>();
    const [bannerPic, setBannerPic] = useState<File>();

    const [userData, setUserData] = useState<{
        user_name: string | undefined,
        profile_picture: string | undefined,
        banner_picture: string | undefined,
        description: string | undefined
    }>({
        user_name: undefined,
        profile_picture: undefined,
        banner_picture: undefined,
        description: undefined
    })

    const [cards, setCards] = useState([])

    const history = useHistory()
    const [loading, setLoading] = useState(false);
    const [transparentLoading, setTransparentLoading] = useState(false)
    const [editDescription, setEditDescription] = useState(false)
    const [category, setCategory] = useState('yugioh')
    const [searchString, setSearchString] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        
        async function fetchUser() {
            setLoading(true)
            const response = await getUser(userName, cookies.token.token)
            setUserData(response.message)

            const cards = await getUserCards(userName)
            setCards(cards)

            setLoading(false)
        }

        if (!cookies.token) {
            history.push('/')
        }
        else {
            fetchUser()
        }
        
    }, [userName])

    useEffect(() => {
        async function uploadProfilePic() {
            if (profilePic && cookies.token) {
                setTransparentLoading(true)
                await uploadProfilePicture(userName, profilePic, cookies.token.token)
                const userData = await getUser(userName, cookies.token.token)
                setUserData(userData.message)
                setTransparentLoading(false)
            }
        }

        if  (!cookies.token) {
            history.push('/')
        }

        uploadProfilePic()
    }, [profilePic])

    useEffect(() => {
        async function uploadBannerPic() {
            if (bannerPic && cookies.token) {
                setTransparentLoading(true)
                await uploadBannerPicture(userName, bannerPic, cookies.token.token)
                const userData = await getUser(userName, cookies.token.token)
                setUserData(userData.message)
                setTransparentLoading(false)
            }
        }

        if (!cookies.token) {
            history.push('/')
        }

        uploadBannerPic()
    }, [bannerPic])

    useEffect(() => {
        if (!cookies.token) {
            history.push('/')
        }
    }, [])

    return (
        <div className='profile'>
            {loading ? <Loading transparent/> : (
            <div className='profile-loaded'>
                {transparentLoading && <Loading transparent/>}
                <div className='profile-banner'>
                {userData && cookies.token && cookies.token.userName === userData.user_name && <input type='file' accept="image/*" onChange={async (e) => { e.target.files && setBannerPic(e.target.files[0]) }}></input>}
                {userData.banner_picture && <img src={`${process.env.REACT_APP_S3_USERS_URL}/${userData.banner_picture}?t=${new Date().getTime()}`} alt='Banner Picture'></img>}
                </div>
                <div className='profile-content'>
                    <div className='profile-info'>
                        <div className='profile-image'>
                            {userData && cookies.token && cookies.token.userName === userData.user_name && <input type='file' accept="image/*" onChange={async (e) => { e.target.files && setProfilePic(e.target.files[0]) }}></input>}
                            {userData.profile_picture && <img src={`${process.env.REACT_APP_S3_USERS_URL}/${userData.profile_picture}?t=${new Date().getTime()}`} alt='Profile Picture'></img>}
                        </div>
                        <div className='profile-text'>
                            <div className='profile-username'>
                                <div className='profile-username-header'>Username</div>
                                {userData.user_name}
                            </div>
                            <div className='profile-about'>
                                <div className='profile-about-header'>
                                    About
                                </div>
                                <div className='profile-about-description'>
                                    <div className='input-description'>
                                        {(cookies.token.userName === userData.user_name && editDescription) ? <textarea onChange={(e) => {setDescription(e.target.value)}} value={description || userData.description}></textarea> 
                                        : userData.description}
                                    </div>
                                    {cookies.token.userName === userData.user_name && <div className='input-pencil' onClick={async () => {
                                        if (editDescription) {
                                            userData.description = description
                                            setTransparentLoading(true)
                                            await updateUserDescription(userName, userData.description, cookies.token.token)
                                            setTransparentLoading(false)
                                            setEditDescription(!editDescription)
                                        }
                                        else {
                                            setEditDescription(!editDescription)
                                        }}}>
                                        <Pencil/>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile-collection'>
                        <div className='profile-collection-header'>
                            Collections
                        </div>
                        <div className='profile-search'>
                            <Dropdown options={[
                                {
                                    name: "Yu-Gi-Oh",
                                    value: "yugioh"
                                },
                                {
                                    name: "Pokemon",
                                    value: "pokemon"
                                }
                            ]}  selector={setCategory} width='150px' fontSize='16px'/>
                            <Input type="text" onChange={setSearchString}/>
                        </div>
                        <div className='profile-collection'>
                            <div className='profile-card-grid'>
                                {cards.map((element: any) => {
                                    if (searchString === '') {
                                        return (
                                            <div className='profile-card'>
                                                <img src={element.image_url_small} alt={element.name}/>
                                            </div>
                                        )
                                    }
                                    else {
                                        if (element.name.toLowerCase().startsWith(searchString.toLowerCase())) {
                                            return (
                                                <div className='profile-card'>
                                                    <img src={element.image_url_small} alt={element.name}/>
                                                </div>
                                            )
                                        }
                                        else {
                                            return null
                                        }
                                    }
                                }
                                )}
                            </div>
                            {cookies.token.userName === userName && <div className='add-card' onClick={() => history.push('/search')}>
                                <Button color='#8B16D3' textColor='#ffffff' text='Add a Card'/>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )

}

export default withCookies(Profile)