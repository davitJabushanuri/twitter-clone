import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
	return (
		<form className='search' action=''>
			<label className='search__icon' htmlFor='search__input'>
				<FiSearch />
			</label>
			<input
				id='search__input'
				className='search__input'
				type='text'
				placeholder='Search Twitter'
			/>
		</form>
	)
}

export default Search
