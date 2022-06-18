import { useState } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaUserAlt } from 'react-icons/fa'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

import UserPopup from './userPopup'

const User = () => {
	const { data: session } = useSession()

	const [showUserPopup, setShowUserPopup] = useState(false)

	return (
		<div
			onClick={() => setShowUserPopup(prev => !prev)}
			className='userContainer'
		>
			<div className='user'>
				<div className='user__photo'>
					<button className='user__photo__avatar'>
						{session ? (
							<img src={session?.user?.image} alt='' />
						) : (
							<Link href='/auth/signin'>
								<FaUserAlt />
							</Link>
						)}
					</button>
				</div>
				<div className='user__bio'>
					<div className='user__bio__info'>
						<span className='user__bio__info__name'>
							{session ? session?.user?.name : 'Sign in'}
						</span>
						<span className='user__bio__info__username'>
							{session && session?.user?.email}
						</span>
					</div>
					<button className='user__bio__button'>
						<FiMoreHorizontal />
					</button>
				</div>
			</div>
			{showUserPopup && <UserPopup />}
		</div>
	)
}

export default User
