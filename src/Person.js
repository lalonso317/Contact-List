import React from 'react'
import Users from './users.json'
import { Link } from 'react-router-dom'
function UserList(props){
   const id = props.match.params.id

   const user = Users.find(user => user.id == id)

    return(
    <div id='personal'>
      <p className="arrow"><Link style={{ textDecoration: 'none'}} to={'/'}>&#8592;</Link></p>
      <div id="own">
      <img className="round"src={user.picture.large}/>
       </div>
       <p className="b">{user.name.title} {user.name.first} {user.name.last}</p>
       <p className="b">{user.email}</p>
       <p  className="b">{user.cell}</p>
       <p className="b">{user.location.street}</p>
      </div>
    )
}
export default UserList