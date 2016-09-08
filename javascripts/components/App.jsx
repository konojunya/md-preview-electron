import React from "react";

import Editor from "./Editor.jsx"
import Preview from "./Preview.jsx"

export default class App extends React.Component{

	constructor(){
		super();
		this._edit = this._edit.bind(this);
		this.state = {
			value: ""
		}
	}

	render(){
		return(
			<div className="clearfix" id="app">
				<Editor
					edit={this._edit}
					value={this.state.value}
				/>
				<Preview
					data={this.state.value}
				/>
			</div>
		);
	}

	_edit(text){
		this.setState({ value: text })
	}

}