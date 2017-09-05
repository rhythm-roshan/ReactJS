import React from "react"
import ReactDOM from "react-dom";
import data from "./data.js";
import MainBox from "./compenents/main-box.jsx";
import Thumbnail from "./compenents/thumbnail.jsx";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            current_title: data[0].title,
            current_url: data[0].url
        }
        this.setCurrent = this.setCurrent.bind(this);
    }

    setCurrent(title, url) {
        /*******************MODIFY the State************/
        var new_state = {current_title: title, current_url:url};
        this.setState(new_state);

    }

    render() {
        return (

            <div className="col-xs-5">
                <MainBox
                    title={this.state.current_title}
                    url={this.state.current_url}
                />

                {data.map(function (item) {

                        return (<Thumbnail
                            key={item.title}
                            title={item.title}
                            url={item.url}
                            setCurrent = {this.setCurrent}
                        />)
                    }.bind(this)
                )
                }

            </div>
        )


    }
}

var app = <App/>

var node = document.getElementById("app");
ReactDOM.render(app, node);

