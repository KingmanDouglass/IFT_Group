import React, { Component } from 'react';
import { connect } from 'react-redux';


class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
      // if (this.state.username==='kingmand'){
      // this.props.history.push('/home')
      // } else {
      //   this.props.history.push('/volunteer-landing')
      // }
      this.props.history.push('/home');
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
          <div className="nav_one_col">
              <h3 className="navH3">IMMIGRANT FAMILIES TOGETHER</h3>
          </div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <center>
        
        <form onSubmit={this.login}>
          <h1>LOGIN</h1>
          
            <label htmlFor="username">
              USERNAME:
              </label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
          
            <label htmlFor="password">
              PASSWORD:
              </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
      
      
            <input 
              className="formButton"
              type="submit"
              name="submit"
              value="LOG IN"
            />
      
        </form>
          {/* <button
            type="button"
            className="formButton"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            REGISTER
          </button> */}
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
