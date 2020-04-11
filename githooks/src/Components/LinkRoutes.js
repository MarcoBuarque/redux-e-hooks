import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { routesArray } from './../Utils/routesUtils'

function LinkRoutes({ currentPage = '/', previousPage }) {
  
  function renderItem(route) {
    const routeName = route === '/' ? 'index' : route
    if(route === currentPage || route === previousPage) {
      return null
    }
    return (
      <div key={route}>
        <Link to={`${route}?previousPage=${currentPage}`}>
          Ir pata {routeName}
        </Link>
      </div>
    )
  }

  return (
    <div>
      {routesArray.map(route => renderItem(route))}
    </div>
  )
}

export default memo(LinkRoutes)