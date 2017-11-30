import React, { Component } from 'react';
import $ from 'jquery';
// import logo from './logo.svg';
// import './App.css';
// import products from './products.js';


class SearchBar extends Component{
	constructor(){
		super();
		// this.state = {
		// 	searchTerm: ""
		// }
		this.handleChange = this.handleChange.bind(this);
		this.checkCheck = this.checkCheck.bind(this);
	}
	handleChange(event){
		this.props.onChange(event.target.value);
		// this.setState({
		// 	searchTerm: event.target.value
		// })
		// var value = document.getElementById('searchTerm').value;
		// console.log(`User entered: ${value}!`);
	}
	checkCheck(event){
		// console.log($('#checkbox').prop('checked'));
		this.props.onCheck($('#checkbox').prop('checked'));
	}
	render(){
		// const searchTerm = this.props.searchTerm;
		// var uniqueCategories = []
		// products.data.map((product)=>{
		// 	if(uniqueCategories.indexOf(product.category) === -1){
		// 		uniqueCategories.push(product.category);
		// 		// console.log("New one!")
		// 	}
		// 	return null
		// });
		// var uniqueCategoryLinks = uniqueCategories.map((category, index)=>{
		// 	return(<a>{category}</a>)
		// });
		// console.log(`uniqueCategoryLinks = ${uniqueCategoryLinks}`)
		// console.log(`Unique Categories = ${uniqueCategories}`);
		return(
			<form className="search-bar">
				<input onChange={this.handleChange} id="searchTerm" type="text" placeholder="Search..." />
				<div>
					<input id="checkbox" onChange={this.checkCheck} type="checkbox" />Only show products in stock.
				</div>
			</form>
		);
	}
}

export default SearchBar;
