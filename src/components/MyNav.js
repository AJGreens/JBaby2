import React,{useContext, useEffect} from 'react'
import {Nav,Navbar, Container,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext'
import '../style/dashboard.css'
import logo from '../img/logo.png'
import {app} from './Firebase'


function MyNav(props){
    const {signOut, currUser, dummyAccount, setDummyAccount}= useContext(AuthContext)


function deleteDummy(){
        const ref= app.database().ref(currUser.uid)
        ref.remove()
    setDummyAccount("no")
    signOut()
}


useEffect(()=>{
        const dummyRef= app.database().ref(currUser.uid+'/Dummy')
        dummyRef.on('value',snapshot=>{
            const val=snapshot.val()
            if(val!==null){
                if (val["dummy"]==="yes"){
                    setDummyAccount("yes")
                }
            }
        })
    
})



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
                    <Button  className= "ms-auto" variant="outline-light" onClick={dummyAccount ==="yes"? deleteDummy : signOut}>Sign Out</Button>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>    
    )

   
}


export default MyNav