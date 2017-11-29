// I'm dumb....
// We still need react, but not Component because it's not going to be a class.
// But, react still needs to make it a component.
import React from 'react';

function ProductCategoryRow(props){
	return(
		<tr>
			<th>{props.header}</th>
		</tr>
	);
}

export default ProductCategoryRow