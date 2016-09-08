import React from "react";
import marked from "marked";


export default class Preview extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="preview" dangerouslySetInnerHTML={{__html: marked(this.props.data)}}></div>
		)
	}

}