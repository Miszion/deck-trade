import React from 'react'

const UserContext = React.createContext({
    userName: '',
    password: '',
    token: ''
})

export default UserContext