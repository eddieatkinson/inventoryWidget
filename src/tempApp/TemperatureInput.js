import React, { Component } from 'react';

class TemperatureInput extends Component{
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.props.onChange(event.target.value);
	}

	render(){
		var temperature = this.props.temperature;
		return(
			<div>
				<legend>Scale: {this.props.scale}</legend>
				<input value={temperature} onChange={this.handleChange} />
			</div>
		)
	}
}

export default TemperatureInput;