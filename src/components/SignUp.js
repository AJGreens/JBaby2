import React,{useState,useRef,useContext} from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import {AuthContext} from '../contexts/AuthContext'
import {Link,useHistory} from 'react-router-dom'

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
        <Card style = {{maxWidth: '400px'}}>
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
                    <Button className = 'mt-3' style = {{width: '100%'}} type = 'submit' >Sign up</Button>
                    <p className = 'text-center mt-2'>Already have an account? <Link to='/signin'>Sign In</Link></p>
                </Form>
            </Card.Body>
        </Card>
        
    )
}





export default SignUp