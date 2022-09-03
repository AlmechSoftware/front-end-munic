import React, { Component } from "react";
import axios from 'axios'
import './Login.css';

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
        username : '',
        password : ''
    };

    this.handleRequest = this.handleRequest.bind(this);
}
handleRequest = async () => {
    const response = await axios({
        method: 'post',
        url: 'http://localhost:9090/login',
        data: {
            username: this.state.username,
            password: this.state.password
        }
    });
    console.log(response);
};
  
  render() {
    return (
      <div >
        <div className="container" >
          <div id="main-outer-div" style={{background: "#b3cccc"}}>
            <div id="title-div">
               
              <h4 className="title">Sign in</h4>
            </div>

            <div id="outer-login-form-div">
              <form action="" method="" onSubmit={this.props.onSubmit}>
                  <input className="login-form-input"
                    type="text"
                    placeholder="Email"
                    required="required"
                    name={'username'}
                    value={this.state.username}
                    onChange={(e) => {this.setState({username: e.target.value})}}
                  />

                  <input className="login-form-input"
                    type="password"
                    placeholder="password"
                    required="required"
                    name={'password'}
                    value={this.state.password}
                    onChange={(e) => {this.setState({password: e.target.value})}}
                  />

                  <input className="login-form-input"
                    type="submit"
                    value="Sign in"
                    id="submitBtn"
                    onClick={this.handleRequest}
                  />
                
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
