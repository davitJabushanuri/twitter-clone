import Image from 'next/image'
import React from 'react'
import { FaRegListAlt } from 'react-icons/fa'
import { HiOutlineHashtag, HiHome } from 'react-icons/hi'
import { BsBell, BsBookmark, BsPerson } from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'

const SidebarMenu = () => {
	return (
		<ul className='sidebarMenu'>
			<li className='sidebarMenu__item'>
				<div className='sidebarMenu__item__text'>
					<HiHome />
					<span>Home</span>
				</div>
			</li>
			<li className='sidebarMenu__item sidebarMenu__search'>
				<div className='sidebarMenu__item__text'>
					<FiSearch />
					<span>Search</span>
				</div>
			</li>

			<li className='sidebarMenu__item hide-tablet'>
				<div className='sidebarMenu__item__text'>
					<HiOutlineHashtag />
					<span>Explore</span>
				</div>
			</li>
			<li className='sidebarMenu__item'>
				<div className='sidebarMenu__item__text'>
					<BsBell />
					<span>Notifications</span>
				</div>
			</li>
			<li className='sidebarMenu__item'>
				<div className='sidebarMenu__item__text'>
					<MdOutlineEmail />
					<span>Messages</span>
				</div>
			</li>
			<li className='sidebarMenu__item hide-tablet'>
				<div className='sidebarMenu__item__text'>
					<BsBookmark />
					<span>Bookmarks</span>
				</div>
			</li>
			<li className='sidebarMenu__item hide-tablet'>
				<div className='sidebarMenu__item__text'>
					<FaRegListAlt />
					<span>Lists</span>
				</div>
			</li>
			<li className='sidebarMenu__item hide'>
				<div className='sidebarMenu__item__text'>
					<BsPerson />
					<span>Profile</span>
				</div>
			</li>
			<li className='sidebarMenu__item hide'>
				<div className='sidebarMenu__item__text'>
					<CgMoreO />
					<span>More</span>
				</div>
			</li>
		</ul>
	)
}

export default SidebarMenu
