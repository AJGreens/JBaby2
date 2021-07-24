import React,{useState,useContext,useRef} from 'react'
import {Card,Form,Alert,Button} from 'react-bootstrap'
import { AuthContext } from '../contexts/AuthContext'
import {Link,useHistory} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import '../style/sign.css'
import fruitimg from '../img/fruits.jpg'
import fruitbowl from '../img/fruitbowl.jpg'
// import logo from '../img/logo.png'

function SignIn(){
    const{signIn,signInGoogle}=useContext(AuthContext)

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

{/* <img className = 'fruitImg' src = {fruitimg} alt = 'fruits'/> */}
        <div className = 'titleDiv'>
            <h1 style = {{fontSize: '40pt'}}>HealthFull</h1>
            {/* <img width = '200px' src = {logo} alt = 'logo'/> */}
            <br/>
            <h4>Eat Healthy.  Feel Full.  Start tracking your healthy food choices today.</h4>
        </div>

        {/* <div className = 'imgDiv' >
            <img className = 'fruitImg' src = {fruitbowl} alt = 'fruitbowl'/>
        </div> */}
        

        {/* className = 'd-flex align-items-center justify-content-center' */}
     <Container style = {{maxWidth: '400px', marginRight: '60px'}} >
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