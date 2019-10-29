import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import UserList from './Person'
import Home from './Home'
import './App.css'


function App(props) {
  return (
    <Router>
      <div id="container">
      <Route exact path="/" component={Home} />
      <Route path="/person/:id" component={UserList}/>
      </div>  
    </Router>
  )
}
export default App;
