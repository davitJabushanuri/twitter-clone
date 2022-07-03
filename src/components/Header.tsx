import React from 'react'
import { BsStars } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { BiArrowBack } from 'react-icons/bi'
import Link from 'next/link'

const Header = ({ isHomePage }: any) => {
	return (
		<header className='header'>
			{isHomePage && (
				<button className='header__user'>
					<FaUserAlt />
				</button>
			)}
			{!isHomePage && (
				<button className='header__backButton'>
					<Link href='/'>
						<a>
							<BiArrowBack />
						</a>
					</Link>
				</button>
			)}
			<h1 className='header__title'>{isHomePage ? 'Home' : 'Tweet'}</h1>
			{isHomePage && (
				<button className='header__icon'>
					<BsStars />
				</button>
			)}
		</header>
	)
}

export default Header
