import React from 'react'
import './app.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import LandingPage from './screens/landing/landing'

const App = (props: any) => {
    return (
        <div className='app'>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path='/'>
                        <LandingPage></LandingPage>
                    </Route>
                    <Route exact path='/signup'>
                        <div className='home'>
                            This is sign up!
                        </div>
                    </Route>
                    <Route exact path='/signin'>
                        <div className='home'>
                            This is sign in!
                        </div>
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
                    <Route exact path='/verify'>
                        <div className='home'>
                            This is the verification page!
                        </div>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </div>
    )
}

export default App