import React,{useContext} from 'react'
import {Route,Redirect} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

function PrivateRouteAccount({component: Component,...rest}){
    const {currUser}= useContext(AuthContext)

    return(
        <Route {...rest} render ={()=>{return currUser? <Redirect to = '/'/>:<Component/> }}/>
            
    )
    
}






export default PrivateRouteAccount