
import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAuth } from './redux/actions/app'
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import Unauthorized from './components/Unauthorized';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    }
  }

  handleLogin = e => {
    e.preventDefault();
    this.props.setAuth({
      isAuth: true,
      name: 'Abhilash Kulkarni',
      email: 'abhilashkulkarni11@gmail.com'
    })
  }
  handleLogout = e => {
    e.preventDefault();
    this.props.setAuth({
      isAuth: false,
      name: '',
      email: ''
    })
  }

  render(){
    const {name, isAuth} = this.props;
    return(
      <div className="App">
      <Router>
        <Route exact path='/' handleLogin={this.handleLogin} render={
          props => <Landing {...props} user={isAuth.toString()} handleLogin={this.handleLogin} />} />
        <ProtectedRoute exact path='/dashboard' user={isAuth} handleLogout={this.handleLogout} component={Dashboard} />
        <Route exact path='/unauthorized' component={Unauthorized} />
      </Router>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuth: state.app.isAuth,
  name: state.app.name,
  email: state.app.email
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setAuth,
  },
  dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
