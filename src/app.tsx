import React from 'react'
import './app.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = (props: any) => {
    return (
        <div className='app'>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <div className='home'>
                            This is home!
                        </div>
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
            </Router>
        </div>
    )
}

export default App