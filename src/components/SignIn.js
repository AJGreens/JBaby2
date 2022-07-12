import React,{useState,useContext,useRef, useEffect} from 'react'
import {Card,Form,Alert,Button} from 'react-bootstrap'
import { AuthContext } from '../contexts/AuthContext'
import {Link,useHistory} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import '../style/sign.css'
import logo from '../img/logo.png'
import {app} from './Firebase'


function SignIn(){
    const{signIn,signInGoogle,signUp, dummyAccount, setDummyAccount, signOut, currUser}=useContext(AuthContext)

    const emailRef=useRef()
    const passwordRef=useRef()
    const history= useHistory()

    const[error,setError]=useState()


    async function handleSubmit(e){
        setDummyAccount("no")
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
        setDummyAccount("no")
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


    function makeRandEmail() {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 10; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       const randEmail = result+"@it.com";
       console.log(randEmail)
       return randEmail;
    }

    function makeRandPassword() {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 6; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       const randPassword = result;
       return randPassword;
    }



   async function handleDummy(){
    setDummyAccount("yes")
    try{
        await signUp(makeRandEmail(),makeRandPassword())
        history.push('/')
    }
    catch{
        setError('Email already in use')
    }
        
    }


    return(
        
            <div className="parent">
                <div className="child">
                    <div className="headings">
                        <img src={logo} alt="Playtful"/>
                        <h1>Platesome</h1>
                    </div>
                    <Container className="containForm">
                            <Card>
                                <Card.Body>
                                    <Form id="signForm" onSubmit={handleSubmit}>
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
                                            <p style = {{marginBottom: '0px'}}>Or click <button type = "button" className="link" onClick = {handleDummy}>here</button> to login with a dummy account!</p>
                        
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                    </Container>
            </div>
      </div>

    )
}

export default SignIn