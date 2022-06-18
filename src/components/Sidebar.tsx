import React from 'react'
import SidebarMenu from './SidebarMenuI'
import { FaTwitter } from 'react-icons/fa'
import { RiQuillPenFill } from 'react-icons/ri'

import { useSession } from 'next-auth/react'

import User from './User'

const Sidebar = () => {
	const { data: session } = useSession()

	return (
		<section className='sidebar'>
			{/* Logo */}
			<div className='sidebar__logo'>
				<FaTwitter />
			</div>

			{/* Menu */}
			<SidebarMenu />

			{/* Tweet Button */}
			{session && (
				<button className='sidebar__button'>
					<RiQuillPenFill className='sidebar__button__icon' />
					<span className='sidebar__button__text'>Tweet</span>
				</button>
			)}

			{/* User */}
			<User />
		</section>
	)
}

export default Sidebar
