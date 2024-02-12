import React, { useState } from 'react'
import Button from './Button';

export default function Users() {
    const [users , setUsers] = useState([{
        firstName : "Arjun" , 
        lastName : "Solanki" , 
        _id : 1 
    }]) ;
  return (
    <>
      <div>
        Users
      </div>
      <div>
        <input type="text" placeholder='search users...' />
      </div>
      <div>
        {users.map(user=> <User user={user}/>)}
      </div>
    </>
  )
}


function User ({user}){
    return (
        <>
          <div>
            {user.firstName[0]}
          </div>
          <div>
            {user.firstName}{user.lastName}
          </div>
          
          <div>
            <Button label={"Send Money"}></Button>
          </div>
        </>
    )
}
