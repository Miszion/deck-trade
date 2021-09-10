import { useEffect, useState } from 'react'
import { useCookies, withCookies } from 'react-cookie'
import { useParams } from 'react-router'
import Loading from '../../components/loading/loading'
import { getUser } from '../../utils/requests'
import './profile.scss'

const Profile = (props: any) => {

    const { userName } = useParams<{ userName: string }>();
    
    const [cookies, setCookie] = useCookies(['token'])

    const [userData, setUserData] = useState({
        user_name: undefined,
        profile_image: undefined,
        banner_image: undefined,
        description: undefined
    })

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        async function fetchUser() {
            setLoading(true)
            const response = await getUser(userName, cookies.token.token)
            setUserData(response.message)
            setLoading(false)
        }
        fetchUser()

    }, [])

    return (
        <div className='profile'>
            {loading ? <Loading transparent/> : (
            <div className='profile-loaded'>
                <div className='profile-banner'></div>
                <div className='profile-content'>
                    <div className='profile-info'>
                        <div className='profile-image'>
                            {userData.profile_image && <img src={userData.profile_image} alt='Profile Picture'></img>}
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
                                    {userData.description}       
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile-collection'>
                        <div className='profile-collection-header'>
                            Collections
                        </div>
                        <div className='profile-search'>

                        </div>
                        <div className='profile-collection'></div>
                    </div>
                </div>
            </div>)}
        </div>
    )

}

export default withCookies(Profile)