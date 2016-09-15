import React from "react";
import marked from "marked";

export default class Preview extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="preview">
				<div dangerouslySetInnerHTML={{__html: marked(this.props.data)}}></div>
				<button className="menu-btn" onClick={this._exportFile.bind(this)}>
					+
				</button>
			</div>
		)
	}

	_exportFile(){
		var file = "File";
		console.log(`Export ${file}`)
	}

}