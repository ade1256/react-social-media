import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from '../../app/routes'
import HomePage from '../Home'

const LayoutPage = () => {
  return (
    <>
     <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          {
            routes.map((route, index) => (
              <Route key={index} path={route.path} component={route.component} exact={route.exact} />
            ))
          }
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default LayoutPage
