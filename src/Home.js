import React from 'react'
import Users from './users.json'
import { Link } from 'react-router-dom'

function Home(prop){
    return (
    <div id='home'>
    <h1 className="peeps">My Peeps</h1>
        {Users.map(list => (
        <Link style={{ textDecoration: 'none'}} key={'user-link-' + list.id} to={'/person/' + list.id}>
        <div id="between">
         <img className="thumbnail" src={list.picture.thumbnail}/>
        <p className="names">&nbsp; {list.name.title} &nbsp;</p>
        <p className="names">{list.name.first} &nbsp;</p> 
        <p className="names">{list.name.last}</p>
        </div>
        </Link> 
        ))}
      </div> 
    )
}
export default Home
