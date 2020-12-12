import React from "react";



class Login extends React.Component {
  // Using a class based component here because we're accessing DOM refs

  handleSignIn(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    this.props.onSignIn(username, password);
  }

  render() {
    return (
      <form onSubmit={this.handleSignIn.bind(this)}>
        <h3> Login </h3>{" "}
        <input type="text" ref="username" placeholder="enter you username" />
        <input type="password" ref="password" placeholder="enter password" />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;




