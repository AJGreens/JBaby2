import React,{useState,useContext,useRef} from 'react'
import {Card,Form,Alert,Button} from 'react-bootstrap'
import { AuthContext } from '../contexts/AuthContext'

function SignIn(){
    const{signIn,signInGoogle}=useContext(AuthContext)

    const emailRef=useRef()
    const passwordRef=useRef()

    const[error,setError]=useState()

    async function handleSubmit(e){
        e.preventDefault()
        try{
            setError('')
            await signIn(emailRef.current.value,passwordRef.current.value)
        }
        catch{
            setError('Failed to Login')
        }
    }



    return(
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <h3>Sign In</h3>
                    {error&& <Alert variant="danger">{error}</Alert>}
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef}/>
                    </Form.Group>
                    <Button type="submit" variant="primary">Sign In</Button>
                    <Button onClick={signInGoogle} variant="success">Sign In With Google</Button>
                </Form>
            </Card.Body>

        </Card>

    )
}

export default SignIn