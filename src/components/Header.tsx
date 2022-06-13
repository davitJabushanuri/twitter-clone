import React from 'react'
import { BsStars } from 'react-icons/bs'

const Header = () => {
	return (
		<header className='header'>
			<h1 className='header__title'>Home</h1>
			<button className='header__icon'>
				<BsStars />
			</button>
		</header>
	)
}

export default Header
