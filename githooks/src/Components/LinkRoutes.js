import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { routesArray } from './../Utils/routesUtils'

function LinkRoutes({ currentPage = '/' }) {
  return (
    <div>
      {routesArray.map(
        route => { return route === currentPage ? null :
           (
            <div>
              <Link to={`${route}?previousPage=${currentPage}`}>
                {route}
              </Link>
            </div>
          )
      }
      )}
    </div>
  )
}

export default memo(LinkRoutes)