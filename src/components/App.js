import React from'react';
import SignUp from './SignUp'
import SignIn from './SignIn';
import Dashboard from './Dashboard'
import PrivateRouteMain from './PrivateRouteMain';
import PrivateRouteAccount from './PrivateRouteAccount';
import {AuthProvider} from '../contexts/AuthContext'
import {Container} from 'react-bootstrap'
import {HashRouter as Router,Switch} from 'react-router-dom'

function App() {
  return (
  <div>
    <AuthProvider>
      <Router>
      <Container style = {{height: '100vh'}} className = 'd-flex align-items-center justify-content-center'>
      <div style = {{width: '100%', maxWidth: '400px'}} >
        <Switch>
          <PrivateRouteMain path='/' exact component={Dashboard}/>
          <PrivateRouteAccount path='/signin' exact component={SignIn}/>
          <PrivateRouteAccount path='/signup' exact component={SignUp}/>

        </Switch>
      </div>
      </Container>
      </Router>
    </AuthProvider>

  </div>
  
  );
}

export default App;
