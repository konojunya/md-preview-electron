import React from "react";
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/markdown';
import 'brace/theme/textmate';

export default class Editor extends React.Component{
	
	constructor(props){
		super(props)
		this._onChange = this._onChange.bind(this);
	}

	render(){
		return(
			<AceEditor
				mode="markdown"
				theme="textmate"
				width="45%"
				height="100%"
				name="editor"
				tabSize={2}
				showPrintMargin={false}
				highlightActiveLine={false}
				editorProps={{$blockScrolling: true}}
				onChange={this._onChange}
				value={this.props.value}
			/>
		)
	}

	_onChange(text){
		this.props.edit(text);
	}

}