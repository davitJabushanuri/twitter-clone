import { useState } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaUserAlt } from 'react-icons/fa'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

import UserPopup from './UserPopup'
import SignOutPopup from '../components/SignOutPopup'

const User = ({ setShowSignOutPopup }: any) => {
	const { data: session } = useSession()

	const [showUserPopup, setShowUserPopup] = useState(false)

	return (
		<div className='userContainer'>
			<div onClick={() => setShowUserPopup(prev => !prev)} className='user'>
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
			{showUserPopup && (
				<UserPopup
					setShowUserPopup={setShowUserPopup}
					setShowSignOutPopup={setShowSignOutPopup}
				/>
			)}
		</div>
	)
}

export default User
