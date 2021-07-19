import React from'react';
import SignUp from './SignUp'
import {AuthProvider} from '../contexts/AuthContext'
import {Container} from 'react-bootstrap'
import SignIn from './SignIn';

function App() {
  return (
  <div>
    <AuthProvider>
      <Container style = {{height: '100vh'}} className = 'd-flex align-items-center justify-content-center'>

      <div style = {{width: '100%', maxWidth: '400px'}} >
        {/* <SignUp/> */}
        <SignIn/>
      </div>
      </Container>
    </AuthProvider>

  </div>
  
  );
}

export default App;
