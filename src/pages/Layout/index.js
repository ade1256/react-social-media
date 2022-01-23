import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { routes } from '../../app/routes'
import HomePage from '../Home'
import { LayoutContainer } from './style'

const LayoutPage = () => {
  const history = useHistory()
  return (
    <LayoutContainer>
      <div className='navbar'>
        <span onClick={() => window.location.href = "/"}>HOME</span>
      </div>
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
