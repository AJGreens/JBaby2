import React from'react';
import SignUp from './SignUp'
import SignIn from './SignIn';
import Dashboard from './Dashboard'
import {AuthProvider} from '../contexts/AuthContext'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
  <div>
    <AuthProvider>
      <Router>
      <Container style = {{height: '100vh'}} className = 'd-flex align-items-center justify-content-center'>

      <div style = {{width: '100%', maxWidth: '400px'}} >
        <Switch>
          <Route path='/' exact component={Dashboard}/>
          <Route path='/signin' exact component={SignIn}/>
          <Route path='/signup' exact component={SignUp}/>
        </Switch>
      </div>
      </Container>
      </Router>
    </AuthProvider>

  </div>
  
  );
}

export default App;
