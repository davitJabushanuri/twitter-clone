import React from 'react'
import { BsStars } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import UserPopup from './userPopup'

const Header = () => {
	return (
		<header className='header'>
			<button className='header__user'>
				<FaUserAlt />
				<UserPopup />
			</button>
			<h1 className='header__title'>Home</h1>
			<button className='header__icon'>
				<BsStars />
			</button>
		</header>
	)
}

export default Header
