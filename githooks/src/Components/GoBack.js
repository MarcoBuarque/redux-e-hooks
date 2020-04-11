import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

function GoBack({ previousPage }) {
  console.log('aaaa previousPage', previousPage)
  return !previousPage ? null :
  (
    <div>
      <Link to={previousPage}> 
          <FiArrowLeft size={16} />
          {`Voltar para ${previousPage}`}
      </Link>
    </div>
  )
}

export default memo(GoBack)