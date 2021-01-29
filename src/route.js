import React from 'react'
import Home from './pages/home'
import Header from './pages/Header'
import CommentApp from './pages/CommentApp/index'

import {BrowserRouter as Router,Route} from 'react-router-dom'

function router() {
  return(
      <Router>
        {/*<Route path="/" component={Home}/>*/}
        {/*<Route path="/header" component={Header}/>*/}
        <Route path='/comment' component={CommentApp}></Route>
      </Router>
  )
}

export default router;