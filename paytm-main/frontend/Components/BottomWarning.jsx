import React from 'react'
import { Link } from 'react-router-dom'

export default function BottomWarning({label , to , buttonText}) {
  return (
    <>
      <div>
        {label}
      </div>
      <div>
        <Link to={to}>
          {buttonText}
        </Link>
      </div>
    </>
  )
}
