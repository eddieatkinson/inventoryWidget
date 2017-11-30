import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import products from './products.js';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
// console.log(products)

class Table extends Component {
	constructor(){
		super();
		this.products = products;
		// this.safeProductData = Object.assign({}, products);
		this.safeProductData = {...products}; // "Spread" syntax
		this.state = {
			productsByCategory: {}
		}
	}

	componentDidMount(){
		this.formatData();
	}

	componentWillReceiveProps(newProps){
		const searchTerm = newProps.searchTerm.toLowerCase();
		var tempProducts = [];
		this.safeProductData.data.map((item)=>{
			var itemName = item.name.toLowerCase();
			if(itemName.indexOf(searchTerm) !== -1){
				tempProducts.push(item);
			}
			return null
		});
		this.products.data = tempProducts;
		this.formatData();
	}

	formatData(){
		var tempProducts = {};
		this.products.data.map((product)=>{
			// console.log(product.category);
			if(tempProducts[product.category] === undefined){
				tempProducts[product.category] = [];
			}
			tempProducts[product.category].push(product);
			return null;
		});
		// console.log(tempProducts);
		this.setState({
			productsByCategory: tempProducts
		});
	}

	render() {
		// console.log(this.props.searchTerm);
		var rows = [];
		// Outer for loop is going through the categories.
		for(var key in this.state.productsByCategory){
			// console.log(this.state.productsByCategory[key]);
			rows.push(<ProductCategoryRow key={key} header={key} />);
			// Internal map through the category.
			this.state.productsByCategory[key].map((item, index)=>{
				rows.push(<ProductRow key={index + item.name} item={item} />);
				return null;
			});
		}
		return(
			<div className="product-table">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
					{rows}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Table;
