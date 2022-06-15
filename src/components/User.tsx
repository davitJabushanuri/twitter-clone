import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaUserAlt } from 'react-icons/fa'

const User = () => {
	return (
		<div className='user'>
			<div className='user__photo'>
				<button className='user__photo__avatar'>
					<FaUserAlt />
				</button>
			</div>

			<div className='user__bio'>
				<div className='user__bio__info'>
					<span className='user__bio__info__name'>John Doe</span>
					<span className='user__bio__info__username'>@John1995</span>
				</div>
				<button className='user__bio__button'>
					<FiMoreHorizontal />
				</button>
			</div>
		</div>
	)
}

export default User
