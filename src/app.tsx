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
import Profile from './screens/profile/profile'
import TopScroll from './components/topScroll/topScroll'
import { withCookies, useCookies } from 'react-cookie'
import Search from './screens/search/search'

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
                    <div className='app-body'>
                        <TopScroll/>
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
                            <Route exact path='/profile/:userName'>
                                <Profile></Profile>
                            </Route>
                            <Route exact path='/confirm'>
                                <Confirm></Confirm>
                            </Route>
                            <Route exact path='/search'>
                                <Search/>
                            </Route>
                        </Switch>
                    </div>
                    <Footer></Footer>
                </Router>
            </div>
        </UserContext.Provider>
    )
}

export default withCookies(App)