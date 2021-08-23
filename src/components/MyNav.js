import React,{useContext} from 'react'
import {Nav,Navbar, Container,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext'
import logoPic from '../img/logocirc.png'
import '../style/dashboard.css'



function MyNav(props){
    const {signOut}= useContext(AuthContext)
    return(
        // style={{height:"7vh",background:"linear-gradient(120deg, rgba(72,151,216,1) 65%, rgba(255,219,92,1) 65%)"}}
        // background:"#2A7EC3"
        <Navbar variant="dark" style={{background:"#2A7EC3"}}>
            <Container >
                <Nav className="me-auto myNav">
                    <Navbar.Brand as={Link} to="/" className="myNav" >
                        <img 
                            alt=""
                            src={logoPic}
                            width="32"
                            height="30"
                            className="logo"
                        />App Name</Navbar.Brand>
                    <Nav.Link as={Link} active={props.dActive}  to="/">Dashboard</Nav.Link>
                    <Nav.Link as={Link} active={props.sActive} to="/summary">Summary </Nav.Link>
                </Nav>
                <Button className="myNav" variant="outline-light" onClick={signOut} style = {{float: 'right'}}>Sign Out</Button>
            </Container>
        </Navbar>    
    )

   
}








export default MyNav