import React,{useState,useContext,useRef} from 'react'
import {Card,Form,Alert,Button} from 'react-bootstrap'
import { AuthContext } from '../contexts/AuthContext'
import {Link,useHistory} from 'react-router-dom'

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
        <Card>
            <Card.Body>
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
                        <p className = 'text-center mt-2'>Need an account? <Link to = '/signup'>Sign Up</Link> </p>
                    </div>
                </Form>
            </Card.Body>

        </Card>

    )
}

export default SignIn