import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaUserAlt } from 'react-icons/fa'

const User = () => {
	return (
		<div className='user'>
			<button className='user__avatar'>
				<FaUserAlt />
			</button>
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
