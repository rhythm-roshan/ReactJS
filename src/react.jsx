import React from "react";
import ReactDOM from "react-dom";


//React Component

class HelloWorld extends React.Component {

    render() {
        var title = "hey";

        //react element
        return (
            <div><h1>{title}</h1></div>
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