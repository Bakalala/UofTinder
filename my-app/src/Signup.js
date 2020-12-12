import React from "react";


class Signup extends React.Component {
    // Using a class based component here because we're accessing DOM refs
  ls
    handleSignUp(e) {
      e.preventDefault();
      let username = this.refs.username.value;
      let password = this.refs.password.value;
      this.props.onSignUp(username, password);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSignUp.bind(this)}>
          <h3> Sign Up </h3>{" "}
          <input type="text" ref="username" placeholder="enter you username" />
          <input type="password" ref="password" placeholder="enter password" />
          <input type="submit" value="Signup" />
        </form>
      );
    }
  }

export default Signup;




  