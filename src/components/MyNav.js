import React,{useContext} from 'react'
import {Nav,Navbar, Container,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext'
import logoPic from '../img/logocirc.png'



function MyNav(props){
    const {signOut}= useContext(AuthContext)
    return(
        <Navbar bg="primary" variant="dark" style={{height:"7vh"}}>
            <Container>
                <Nav>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt=""
                            src={logoPic}
                            width="32"
                            height="30"
                            className="d-inline-block align-top"
                        />App Name</Navbar.Brand>
                    <Nav.Link as={Link} active={props.dActive}  to="/">Dashboard</Nav.Link>
                    <Nav.Link as={Link} active={props.sActive} to="/summary">Summary </Nav.Link>
                </Nav>
                <Button variant="success" onClick={signOut}>Sign Out</Button>
            </Container>
        </Navbar>    
    )

   
}








export default MyNav