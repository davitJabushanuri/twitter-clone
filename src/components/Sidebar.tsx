import React from 'react'
import SidebarMenu from './SidebarMenuI'
import { FaTwitter } from 'react-icons/fa'
import { RiQuillPenFill } from 'react-icons/ri'

import User from './User'

const Sidebar = () => {
	return (
		<section className='sidebar'>
			{/* Logo */}
			<div className='sidebar__logo'>
				<FaTwitter />
			</div>

			{/* Menu */}
			<SidebarMenu />

			{/* Tweet Button */}
			<button className='sidebar__button'>{<RiQuillPenFill />}</button>

			{/* User */}
			<User />
		</section>
	)
}

export default Sidebar