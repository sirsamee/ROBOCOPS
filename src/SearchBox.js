import React from 'react';

const SearchBox = ({searchfields,searchChange}) =>{
	return(
		<div className='pa2'>
		<input 
		className='pa3 ba b--green hover-bg-lightest-blue'
		type='search'
		placeholder='search Robocops'
		onChange= {searchChange}
		/>
		</div>
	);
}
export default SearchBox;