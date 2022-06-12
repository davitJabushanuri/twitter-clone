import React from 'react'
import SidebarMenu from './SidebarMenuI'
import { FaTwitter } from 'react-icons/fa'

const Sidebar = () => {
	return (
		<section className='sidebar'>
			{/* Logo */}
			<div className='sidebar__Logo'>
				<FaTwitter />
			</div>

			{/* Menu */}
			<SidebarMenu />
		</section>
	)
}

export default Sidebar
