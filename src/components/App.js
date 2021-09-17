import React from'react';
import DocumentMeta from 'react-document-meta';
import SignUp from './SignUp'
import SignIn from './SignIn';
import Dashboard from './Dashboard'
import PrivateRouteMain from './PrivateRouteMain';
import PrivateRouteAccount from './PrivateRouteAccount';
import {AuthProvider} from '../contexts/AuthContext'
import {HashRouter as Router,Switch} from 'react-router-dom'
import Summary from './Summary'

function App() {
  const meta = {
    title: 'Platesome',
    description: 'Platesome is a nutrition tracking website designed to keep track of your daily servings of fruits, vegetables, and dairy!  Track your progress and become healthier by eating your ideal daily servings.',
    canonical: 'https://platesome.com/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      }
    }
  };
  return (
  <DocumentMeta {...meta}>
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRouteMain path='/' exact component={Dashboard}/>
            <PrivateRouteAccount path='/signin' exact component={SignIn}/>
            <PrivateRouteAccount path='/signup' exact component={SignUp}/>
            <PrivateRouteMain path = '/summary' exact component = {Summary}/>
          </Switch>
        </Router>
      </AuthProvider>
  </DocumentMeta>
  
  );
}

export default App;
