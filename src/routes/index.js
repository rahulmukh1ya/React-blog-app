import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Contact from 'components/pages/contact'
import MainPage from 'components/pages/main'
import Blog from 'components/pages/blog'


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/contact" exact component={Contact} />
        <Route path ="/blog" exact component ={Blog} />
      </Switch>
    </Router>
  )
}

export default Routes