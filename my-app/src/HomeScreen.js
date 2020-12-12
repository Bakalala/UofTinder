import React from "react";
import Login from "./Login.js"
import Signup from "./Signup.js"
import firebase from "./fire.js";


class HomeScreen extends React.Component {
    constructor(props) {
      super(props);
      // the initial application state
      this.state = {
        user: {},
      };
  
    }
  
  
    authenticate(user){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
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
            <Login onSignIn={this.signIn.bind(this)} />{" "}
            <Signup onSignUp={this.signUp.bind(this)} />{" "}
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
  
  export default HomeScreen;