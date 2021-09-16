import React,{useContext} from 'react'
import {Nav,Navbar, Container,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext'
import '../style/dashboard.css'
import logo from '../img/logo.png'



function MyNav(props){
    const {signOut}= useContext(AuthContext)
    return(
        <Navbar expand="lg" style={{background:"#004E64"}} className = 'customNav'  variant="dark" >
            <Container>
                <Navbar.Brand as={Link} to="/">
                            <img
                                alt=""
                                style={{borderRadius:"50%"}}
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            /> Platesome
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link  eventKey="1" as={Link} active={props.dActive}  to="/">Dashboard</Nav.Link>
                        <Nav.Link eventKey="2"as={Link} active={props.sActive} to="/summary">Summary </Nav.Link>
                    </Nav>
                    <Button  className= "ms-auto" variant="outline-light" onClick={signOut}>Sign Out</Button>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>    
    )

   
}


export default MyNav