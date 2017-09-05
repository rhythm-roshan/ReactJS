import React from "react";

export default class Thumbnail extends React.Component{

    onThumbnailClickHandler(events){
        console.log(events);
        console.log("clicked");
        console.log(this.props.title);
        this.props.setCurrent(this.props.title,this.props.url);
    }
    render()
    {
var breath = {marginLeft: "5px", marginRight : "5px"}
        return (

            <button className="btn btn-lg breath" onClick={this.onThumbnailClickHandler.bind(this)}>{this.props.title}</button>
        )

    }

}