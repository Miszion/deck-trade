import { useEffect, useState } from 'react'
import { useCookies, withCookies } from 'react-cookie'
import { useHistory, useParams } from 'react-router'
import Loading from '../../components/loading/loading'
import { getUser, uploadProfilePicture, uploadBannerPicture } from '../../utils/requests'
import { ReactComponent as Plus } from '../../assets/images/plus.svg'
import { ReactComponent as Pencil } from '../../assets/images/pencil.svg'
import './profile.scss'

const Profile = (props: any) => {

    const { userName } = useParams<{ userName: string }>();
    const [cookies, setCookie] = useCookies(['token'])

    const [profilePic, setProfilePic] = useState<File>();
    const [bannerPic, setBannerPic] = useState<File>();

    const [userData, setUserData] = useState({
        user_name: undefined,
        profile_picture: undefined,
        banner_picture: undefined,
        description: undefined
    })

    const history = useHistory()
    const [loading, setLoading] = useState(false);
    const [pictureLoading, setPictureLoading] = useState(false)
    const [editDescription, setDescription] = useState(false)

    useEffect(() => {
        
        async function fetchUser() {
            setLoading(true)
            const response = await getUser(userName, cookies.token.token)
            setUserData(response.message)
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
                setPictureLoading(true)
                await uploadProfilePicture(userName, profilePic, cookies.token.token)
                const userData = await getUser(userName, cookies.token.token)
                setUserData(userData.message)
                setPictureLoading(false)
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
                setPictureLoading(true)
                await uploadBannerPicture(userName, bannerPic, cookies.token.token)
                const userData = await getUser(userName, cookies.token.token)
                setUserData(userData.message)
                setPictureLoading(false)
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
                {pictureLoading && <Loading transparent/>}
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
                                        {(cookies.token.userName === userData.user_name && editDescription) ? <textarea value={userData.description}></textarea> 
                                        : userData.description}
                                    </div>
                                    {cookies.token.userName === userData.user_name && <div className='input-pencil' onClick={() => {setDescription(!editDescription)}}>
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
                        </div>
                        <div className='profile-collection'>
                            <div className='add-card' onClick={() => history.push('/search')}>
                                <Plus></Plus>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )

}

export default withCookies(Profile)