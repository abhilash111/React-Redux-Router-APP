import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { setAuth } from './redux/actions/app'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    }
  }

  componentDidMount(){
    console.log('Default redux props', this.props.email);
  }

  authenticateUser(type) {

    let payload = {
      isAuth: false,
      name: '',
      email: ''
    }
    if (type === 'login') {
      payload.isAuth = true;
      payload.name = 'Abhilash Kulkarni';
      payload.email = 'abhilashkulkarni11@gmail.com'
    }
    this.props.setAuth(payload);
  }

  render() {
    const {isAuth, email, name} = this.props;
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          !isAuth ?
          <div>
            <p>
              Please Login
            </p>
            <button onClick={() => this.authenticateUser('login')}>Login</button>
          </div>
          :
          <div>
            <p>
              Welcome {name}
            </p>
            <button onClick={() => this.authenticateUser('logout')}>Logout</button>
          </div>
        }
      </header>
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
