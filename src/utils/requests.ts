import axios from 'axios'

export const signUp = async (user: any) => {

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

export const confirm = async (userName: string, code: string) => {

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/confirm`, {
            userName: userName,
            code: code
        })
        return response.status
    }
    catch(err) {
        return 500
    }
}

export const login = async (userName: string, password: string) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/auth`, {
            userName: userName,
            password: password
        })
        return response.data
    }
    catch(err) {
        return 500
    }
}

export const getUser = async (userName: string, token: string) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/user/${userName}`, {
            headers: {
                "Authorization": token
            }
        })
        return response.data
    }
    catch(err) {
        return 500
    }
}

export const uploadProfilePicture = async (userName: string, file: File, token: string) => {
    try {
        const data = new FormData()
        data.append('file', file)
        const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/uploadProfilePicture/${userName}`, data, 
        { 
            headers: {
                "Authorization": token
            }
        })
        return response.data
    }
    catch(err) {
        return 500
    }
}

export const uploadBannerPicture = async (userName: string, file: File, token: string) => {
    try {
        const data = new FormData()
        data.append('file', file)
        const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/uploadBannerPicture/${userName}`, data, 
        { 
            headers: {
                "Authorization": token
            }
        })
        return response.data
    }
    catch(err) {
        return 500
    }
}

export const updateUserDescription = async (userName: string, description: string, token: string) => {
    try {
        const response = await axios.patch(`${process.env.REACT_APP_API_ENDPOINT}/updateUserDesc/`, {
            userName: userName,
            description: description
        },
        { 
            headers: {
                "Authorization": token
            }
        })
        return response.data
    }
    catch(err) {
        return 500
    }
}

export const fetchCards = async (fname: string, monsterType: string, race: string, cardType: string, level: string, attribute: string) => {

    try {
        const fullSearch = await axios.get(`${process.env.REACT_APP_YGO_API_URL}`)
        return fullSearch.data
    }
    catch(err) {
        return {}
    }

}

export const createCard = async (userName: string, cardName: string, imageUrl: string, imageUrlSmall: string, desc: string, edition: string, condition: string, rarity: string, set: string, files: File[]) => {
    try {
        const data = new FormData()

        for (var i in files) {
            data.append(`file ${i}`, files[i])
        }

        data.append('cardName', cardName)
        data.append('imageUrl', imageUrl)
        data.append('imageUrlSmall', imageUrlSmall)
        data.append('desc', desc)
        data.append('edition', edition)
        data.append('condition', condition)
        data.append('rarity', rarity)
        data.append('set', set)

        const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/addCard/${userName}`, data)
        return response.data
    }
    catch(err) {
        return 500
    }

}

export const getUserCards = async (userName: string) => {

    try {
        const fullSearch = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/cards/${userName}`)
        return fullSearch.data.message
    }
    catch(err) {
        return []
    }

}
