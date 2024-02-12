import React from 'react'

export default function InputBox({label , placeholder}) {
  return (
    <>
       <div>
        {label}
       </div>
       <div>
        <input type="text" placeholder={placeholder} />
       </div>
    </>
  )
}
