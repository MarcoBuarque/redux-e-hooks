import React from 'react'

import { useQuery } from './../../Utils/routesUtils'

import LinkRoutes from './../../Components/LinkRoutes'
import GoBack from './../../Components/GoBack'

export default function Index() {
  const query = useQuery()
  const previousPage = query.get('previousPage')
  console.log('previousPage', previousPage)

    return (
      <div>
        <GoBack previousPage={previousPage} />
        <LinkRoutes currentPage='/' previousPage={previousPage}/>
        <text>AE AE AE</text>

      </div>
    )
}