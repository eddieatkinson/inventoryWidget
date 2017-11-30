// I'm dumb....
// We still need react, but not Component because it's not going to be a class.
// But, react still needs to make it a component.
import React from 'react';

function ProductRow(props){
	var productClass = "";
	if(props.item.inStock){
		productClass = "text-success";
	}else{
		productClass = "text-danger";
	}

	return(
		<tr>
			<td className={productClass}>{props.item.name}</td>
			<td>{props.item.price}</td>
		</tr>
	);
}

export default ProductRow