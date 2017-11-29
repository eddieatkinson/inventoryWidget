import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import products from './products.js';
import ProductCategoryRow from './ProductCategoryRow';
// console.log(products)

class Table extends Component {
	constructor(){
		super();
		this.products = products;
		this.state = {
			productsByCategory: {}
		}
	}

	componentDidMount(){
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
		});
		// console.log(tempProducts);
		this.setState({
			productsByCategory: tempProducts
		});
	}

	render() {
		var rows = [];
		for(var key in this.state.productsByCategory){
			console.log(this.state.productsByCategory[key]);
			rows.push(<ProductCategoryRow header={key} />);
		}
		return(
			<div className="product-table">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Product</th>
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
