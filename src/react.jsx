import React from "react";
import ReactDOM from "react-dom";


//React Component

class HelloWorld extends React.Component {

    render() {
        //react element
        return (
            <div><h1>hello rhythm..!!! Welcome</h1></div>
        )
    }
}

//Instantiate
//Create a react Element from a react component
//JSX style
//HW- pre JSX
var r_e = <div/>
var r_e = <HelloWorld/>


var node = document.getElementById("app");

ReactDOM.render(r_e,node);