import React,{useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'
import {Button} from 'react-bootstrap'

function Dashboard(){
    const {currUser,signOut}=useContext(AuthContext)
    

    return(
        <>
            <h1>Hello, {currUser.displayName}</h1>
            <Button onClick={signOut}>Sign Out</Button>
            <h3>Veggies</h3>
            
            <div className = 'dropdown' style = {{height: '30px', overflow: 'hidden'}} >
                
                <select>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                </select>
            

            </div>
 
            <Button>Add</Button>



        </>
    )
}
export default Dashboard