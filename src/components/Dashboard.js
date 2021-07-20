import React,{useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'
import {Button} from 'react-bootstrap'

function Dashboard(){
    const {currUser,signOut}=useContext(AuthContext)


    return(
        <>
            <h1>Hello, {currUser.displayName}</h1>
            <Button onClick={signOut}>Sign Out</Button>
        </>
    )
}
export default Dashboard