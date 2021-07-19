import React,{useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'


function Dashboard(){
    const {currUser}=useContext(AuthContext)


    return(
        <h1>Hello, {currUser.email}</h1>
    )
}
export default Dashboard