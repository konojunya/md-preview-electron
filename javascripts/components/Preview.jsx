import React from "react";
import marked from "marked";
import { remote } from "electron";
import fs from "fs"

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
		remote.dialog.showSaveDialog({
      type: 'info',
      buttons: ['OK', 'Cancel'],
      detail: '本当に保存しますか？',
      properties: ['openFile', 'multiSelections']
    },(filepath)=>{
    	if(filepath){
				fs.writeFile(filepath,this.props.data,(err)=>{
					if (err) throw err
				})
			}
		})
	}

}