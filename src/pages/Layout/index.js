import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from '../../app/routes'
import HomePage from '../Home'
import { LayoutContainer } from './style'

const LayoutPage = () => {
  return (
    <LayoutContainer>
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
    </LayoutContainer>
  )
}

export default LayoutPage
