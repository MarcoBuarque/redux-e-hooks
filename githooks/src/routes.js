import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Index from './Pages/Index/Index'
import InitHooks from './Pages/InitHooks/InitHooks'
import ReactMemo from './Pages/ReactMemo/ReactMemo'



export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/InitHooks' component={InitHooks} />
          <Route path='/ReactMemo' component={ReactMemo} />
        </Switch>
      </BrowserRouter>
    )
}