import Image from 'next/image'
import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'

const User = () => {
	return (
		<div className='user'>
			<Image src='/avatar.png' alt='user' height='40px' width='40px' />
			<div className='user__info'>
				<span className='user__info__name'>John Doe</span>
				<span className='user__info__username'>@John1995</span>
			</div>
			<div className='user__button'>
				<FiMoreHorizontal />
			</div>
		</div>
	)
}

export default User
