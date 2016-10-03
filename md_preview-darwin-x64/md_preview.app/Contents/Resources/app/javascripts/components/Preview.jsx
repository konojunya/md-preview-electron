import React from "react";
import marked from "marked";

export default class Preview extends React.Component{

	constructor(props){
		super(props);
	}

	componentDidUpdate(){
		var ul = this.refs.preview;
		ul.scrollTop = ul.scrollHeight;
	}

	render(){
		return(
			<div id="preview" ref="preview">
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