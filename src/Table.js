import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import products from './products.js';

class Table extends Component {
	render() {
		var productsArray = this.props.productsArr.map((product, index)=>{
			return(<div>
						<div key={index + 1} className="col-sm-6">{product.name}</div>
						<div key={-index} className="col-sm-6">{product.price}</div>
				   </div>);
		});
		return(
			productsArray
		);
	}
}

export default Table;
