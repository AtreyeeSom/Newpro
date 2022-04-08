import React from 'react'
import {Route,Switch,BrowserRouter as Router} from "react-router-dom"
import { Header } from '../header'
import { Post } from '../post'
export const Routes = () => {
  return (
    <div>
   <Router>
     <Header/>
       <Switch>
           <Route path="/post" component={Post}/>
       </Switch>
   </Router>
    </div>
  )
}
