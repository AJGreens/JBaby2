import React,{useState,useRef,useContext} from 'react'
import {Card, Form, Button, Alert, Container} from 'react-bootstrap'
import {AuthContext} from '../contexts/AuthContext'
import {Link,useHistory} from 'react-router-dom'
import '../style/sign.css'
import logo from '../img/logo.png'

function SignUp(){
    const {signUp}= useContext(AuthContext)

    const emailRef= useRef()
    const passwordRef= useRef()
    const passwordConfirmRef=useRef()

    const history= useHistory()

    const [error,setError]= useState()

    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value!==passwordConfirmRef.current.value){
            setError('Passwords do not match')
        }
        else{
            setError('')
            try{
                await signUp(emailRef.current.value,passwordRef.current.value)
                history.push('/')
            }
            catch{
                setError('Failed to sign up')
            }
        }

    }


    return(
        <div className="parent">
            <div className="child">
                <div className="headings"><img src={logo} alt="Playtful"/></div>
                <Container>
                    <Card>
                        <Card.Body>
                            <Form onSubmit = {handleSubmit}>
                                <h3 className = 'mb-4 text-center'>Sign up</h3>
                                {error&& <Alert variant='danger'>{error}</Alert>}
                                <Form.Group className = 'mb-3'>
                                    <Form.Label> Username</Form.Label> 
                                    <Form.Control type = 'email' required ref = {emailRef}/>
                                </Form.Group>
                                <Form.Group className = 'mb-3'>
                                    <Form.Label>Password</Form.Label> 
                                    <Form.Control type = 'password' required ref={passwordRef}/>
                                </Form.Group>
                                <Form.Group className = 'mb-3'>
                                    <Form.Label>Confirm Password</Form.Label> 
                                    <Form.Control type = 'password'required ref={passwordConfirmRef}/>
                                </Form.Group>
                                <div className = 'text-center'>
                                    <Button className = 'mt-3' style = {{width: '50%'}} type = 'submit' >Sign up</Button>
                                    <p className = 'mt-2'>Already have an account? <Link to='/signin'>Sign In</Link></p>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </div>
        
    )
}





export default SignUp