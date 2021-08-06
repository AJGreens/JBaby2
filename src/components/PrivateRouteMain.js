import React,{useContext} from 'react'
import {Route,Redirect} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

function PrivateRouteMain({component: Component,...rest}){
    const {currUser}= useContext(AuthContext)
    return(
        <Route {...rest} render ={()=>{return currUser? <Component/> : <Redirect to = '/signin'/>  }}/>
            
    )
    
}






export default PrivateRouteMain