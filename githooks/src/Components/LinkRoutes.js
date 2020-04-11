import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { routesArray } from './../Utils/routesUtils'

function LinkRoutes() {
    return (
      <div>
        {routesArray.map(route => {return (
            <button key={route}>
              <text>{route}</text>
              <Link to={route}/>
            </button>
          )}
        )}
      </div>
    )
}

export default memo(LinkRoutes)