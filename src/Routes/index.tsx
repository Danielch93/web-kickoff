import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './../Pages/Home'

const RouterApp = () => (
    <Router>
        <div>
            <Route exact path='/' component={Home} />
        </div>
    </Router>
)
export default RouterApp