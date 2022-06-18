import Image from 'next/image'
import React from 'react'
import { FaRegListAlt } from 'react-icons/fa'
import { HiOutlineHashtag, HiHome } from 'react-icons/hi'
import { BsBell, BsBookmark, BsPerson } from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'

import { useSession } from 'next-auth/react'

const SidebarMenu = () => {
	const { data: session } = useSession()

	return (
		<ul className='sidebarMenu'>
			<li className='sidebarMenu__item'>
				<div className='sidebarMenu__item__text'>
					<span className='icon'>
						<HiHome />
					</span>
					<span className='text'>Home</span>
				</div>
			</li>
			<li className='sidebarMenu__item sidebarMenu__search'>
				<div className='sidebarMenu__item__text'>
					<span className='icon'>
						<FiSearch />
					</span>
					<span className='text'>Search</span>
				</div>
			</li>

			<li className='sidebarMenu__item hide-tablet'>
				<div className='sidebarMenu__item__text'>
					<span className='icon'>
						<HiOutlineHashtag />
					</span>
					<span className='text'>Explore</span>
				</div>
			</li>

			{session && (
				<>
					<li className='sidebarMenu__item'>
						<div className='sidebarMenu__item__text'>
							<span className='icon'>
								<BsBell />
							</span>
							<span className='text'>Notifications</span>
						</div>
					</li>
					<li className='sidebarMenu__item'>
						<div className='sidebarMenu__item__text'>
							<span className='icon'>
								<MdOutlineEmail />
							</span>
							<span className='text'>Messages</span>
						</div>
					</li>
					<li className='sidebarMenu__item hide-tablet'>
						<div className='sidebarMenu__item__text'>
							<span className='icon'>
								<BsBookmark />
							</span>
							<span className='text'>Bookmarks</span>
						</div>
					</li>
					<li className='sidebarMenu__item hide-tablet'>
						<div className='sidebarMenu__item__text'>
							<span className='icon'>
								<FaRegListAlt />
							</span>
							<span className='text'>Lists</span>
						</div>
					</li>
					<li className='sidebarMenu__item hide'>
						<div className='sidebarMenu__item__text'>
							<span className='icon'>
								<BsPerson />
							</span>
							<span className='text'>Profile</span>
						</div>
					</li>
				</>
			)}

			<li className='sidebarMenu__item hide'>
				<div className='sidebarMenu__item__text'>
					<span className='icon'>
						<CgMoreO />
					</span>
					<span className='text'>More</span>
				</div>
			</li>
		</ul>
	)
}

export default SidebarMenu
