import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import firebase from "./fire.js";

// const Welcome = ({ user, onSignOut }) => {
//   // This is a dumb "stateless" component
//   return (
//     <div>
//       Welcome <strong> {user.username} </strong>!{" "}
//       <a href="javascript:;" onClick={onSignOut}>
//         {" "}
//         Sign out{" "}
//       </a>{" "}
//     </div>
//   );
// };

class LoginForm extends React.Component {
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

class SignupForm extends React.Component {
  // Using a class based component here because we're accessing DOM refs

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

class App extends React.Component {
  constructor(props) {
    super(props);
    // the initial application state
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        this.setState({ user });
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
      } else {
        this.setState({ user: null });
      }
    });
  }

  // App "actions" (functions that modify state)
  signUp(username, password) {
    // This is where you would call firebasebase, an API etc...
    // calling setState will re-render the entire app (efficiently!)
    firebase
      .auth()
      .createUserWithEmailAndPassword(username, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code);
        console.log(error.message);
        // ...
      });
  }

  signIn(username, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // console.log(error.message);
        // ...
      });
  }

  // signOut() {
  //   // clear out user from state
  //   this.setState({
  //     user: null,
  //   });
  // }

  render() {
    // Here we pass relevant state to our child components
    // as props. Note that functions are passed using `bind` to
    // make sure we keep our scope to App
    return (
      <div>
        {/* {" "}
        {this.state.user ? (
          <Welcome user={this.state.user} onSignOut={this.signOut.bind(this)} />
        ) : ( */}
        <React.Fragment>
          <LoginForm onSignIn={this.signIn.bind(this)} />{" "}
          <SignupForm onSignUp={this.signUp.bind(this)} />{" "}
        </React.Fragment>
        {/* )}{" "} */}
      </div>
    );
  }
  // render() {
  //   // Here we pass relevant state to our child components
  //   // as props. Note that functions are passed using `bind` to
  //   // make sure we keep our scope to App
  //   return (
  //     <div>
  //       <h1>My cool App</h1>
  //       {
  //         (this.state.user) ?
  //           <Welcome
  //            user={this.state.user}
  //            onSignOut={this.signOut.bind(this)}
  //           />
  //         :
  //           <LoginForm
  //            onSignIn={this.signIn.bind(this)}
  //           />
  //       }
  //     </div>
  //   )

  // }
}

ReactDOM.render(<App />, document.getElementById("root"));
