import React,{useState,useContext,useRef} from 'react'
import {Card,Form,Alert,Button} from 'react-bootstrap'
import { AuthContext } from '../contexts/AuthContext'
import {Link,useHistory} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import '../style/signin.css'
import logocirc from '../img/logocirc.png'
 
function SignIn(){
   const{signIn,signInGoogle,currUser}=useContext(AuthContext)
 
   const emailRef=useRef()
   const passwordRef=useRef()
   const history= useHistory()
 
   const[error,setError]=useState()
 
   async function handleSubmit(e){
       e.preventDefault()
       try{
           setError('')
           await signIn(emailRef.current.value,passwordRef.current.value)
           history.push('/')
       }
       catch{
           setError('Failed to Login')
       }
   }
   async function handleGoogle(e){
       e.preventDefault()
       try{
           setError('')
           await signInGoogle();
           history.push('/')
       }
       catch{
           setError('Failed to Login with Google')
       }
   }
 
 
   return(
       <div className = 'everythingDiv'>
           <div className = 'titleDiv blob'>
               <div className = 'imgDiv' style = {{display: 'inline-block'}} >
                   <img className = 'logoCirc' src = {logocirc} alt = 'logocirc'/>
               </div>
                   <h1 style = {{fontSize: '40pt', display: 'inline-block'}}>HealthFull</h1>
               <br/>
               <br/>
               <h4 className = 'text-center'>Eat Healthy.  Feel Full.  Start tracking your healthy food choices today.</h4>
           </div>

         
           <Container style = {{maxWidth: '400px', marginRight: '100px'}} className = 'blobB' >
               <div style = {{width: '100%'}}>
                   <Card style = {{background: 'linear-gradient( rgba(0, 0, 0, .4),  rgba(0, 0, 0, .4))', minWidth: '400px', border: 'white solid 0px'}}>
                       <Card.Body className = 'cardBody'>
                           <Form onSubmit={handleSubmit}>
                               <h3 className="text-center mb-3">Sign In</h3>
                               {error&& <Alert variant="danger">{error}</Alert>}
                               <Form.Group className="mb-3">
                                   <Form.Label>Email</Form.Label>
                                   <Form.Control type="email" ref={emailRef}/>
                               </Form.Group>
                               <Form.Group className="mb-3">
                                   <Form.Label>Password</Form.Label>
                                   <Form.Control type="password" ref={passwordRef}/>
                               </Form.Group>
                               <div className = 'text-center'>
                                   <Button className="mb-3" style={{width:"50%"}} type="submit" variant="primary">Sign In</Button>
                                   <br/>
                                   <Button style={{width:"50%"}} onClick={handleGoogle} variant="success">Google</Button>
                                   <p className = 'text-center mt-2'>Need an account? <Link to = '/signup' style = {{color: 'orange'}}>Sign Up</Link> </p>
                               </div>
                           </Form>
                       </Card.Body>
                   </Card>
               </div>
           </Container>
     </div>
 
   )
}
 
export default SignIn