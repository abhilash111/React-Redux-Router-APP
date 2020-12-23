import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAuth } from '../redux/actions/app'

class Dashboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isAuth: false
      }
    }

    handleLogout() {
        let payload = {
            isAuth: false,
            name: '',
            email: ''
          }
        this.props.setAuth(payload);
        this.props.handleLogout();
    }

    render(){
        const { name }  = this.props;
        return (
            <div>
            <h1>Dashboard Page</h1>
            <p>Welcome {name}</p>
            <button onClick={this.props.handleLogout}>Log Out</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
