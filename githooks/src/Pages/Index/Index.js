import React from 'react'

import LinkRoutes from './../../Components/LinkRoutes'
import GoBack from './../../Components/GoBack'

export default function Index() {
  const previousPage = '/'
  // const previousPage = props.match.params.previousPage
  console.log('previousPage', previousPage)

    return (
      <div>
        <GoBack previousPage={previousPage} />
        <LinkRoutes currentPage='/' />
        <text>AE AE AE</text>

      </div>
    )
}