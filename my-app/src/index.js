import React from "react";
import ReactDOM from "react-dom";
import HomeScreen from "./HomeScreen.js";
import "./index.css";




class App extends React.Component {


    render(){
        return (
            <React.Fragment>
            <HomeScreen/>
          </React.Fragment>        )
    }

}


ReactDOM.render(<App />, document.getElementById("root"));


