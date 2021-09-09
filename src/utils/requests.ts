import axios from 'axios'

const signUp = async (user: any) => {

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/signup`, {
            userName: user.userName,
            password: user.password,
            phoneNumber: user.phoneNumber,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,    
            birthDate: user.birthDate
        })
        return response.status
    }
    catch(err) {
        return 500
    }
}

export default signUp