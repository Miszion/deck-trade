import React from 'react'
import './app.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import LandingPage from './screens/landing/landing'
import SignUp from './screens/signUp/signUp'
import Confirm from './screens/confirm/confirm'
import UserContext from './context/userContext'
import SignIn from './screens/signIn/signIn'

const App = (props: any) => {
    return (
        <UserContext.Provider value={{
            userName: '',
            token: '',
            password: ''
        }}>
            <div className='app'>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path='/'>
                            <LandingPage/>
                        </Route>
                        <Route exact path='/signup'>
                            <SignUp/>
                        </Route>
                        <Route exact path='/signin'>
                            <SignIn/>
                        </Route>
                        <Route exact path='/dashboard'>
                            <div className='home'>
                                This is the dashboard!
                            </div>
                        </Route>
                        <Route exact path='/profile/:user_id'>
                            <div className='home'>
                                This is the user's profile
                            </div>
                        </Route>
                        <Route exact path='/confirm'>
                            <Confirm></Confirm>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </div>
        </UserContext.Provider>
    )
}

export default App