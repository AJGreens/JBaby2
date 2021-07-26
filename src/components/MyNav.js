import React,{useContext} from 'react'
import {Nav,Navbar, Container,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext'




function MyNav(){
    const {signOut}= useContext(AuthContext)
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                <Nav>
                    <Navbar.Brand as={Link} to="/">Dashboard</Navbar.Brand>
                    <Nav.Link as={Link} to="/summary">Summary </Nav.Link>
                </Nav>
                <Button variant="success" onClick={signOut}>Sign Out</Button>
            </Container>
        </Navbar>    
    )

   
}








export default MyNav