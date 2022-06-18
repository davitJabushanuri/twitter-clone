import React from 'react'
import { useSession, signOut } from 'next-auth/react'

const UserPopup = () => {
	const { data: session } = useSession()

	return (
		<div className='userPopup'>
			<div className='userPopup__header'>
				<img src={session?.user?.image} alt='' />
				<div className='userPopup__header__info'>
					<span className='userPopup__header__info__name'>
						{session?.user?.name}
					</span>
					<span className='userPopup__header__info__username'>
						{session?.user?.email}
					</span>
				</div>
			</div>
			<button className='userPopup__addAcc'>Add an existing account</button>
			<button
				onClick={() => session && signOut({ callbackUrl: '/auth/signin' })}
				className='userPopup__logout'
			>
				Log Out
			</button>
		</div>
	)
}

export default UserPopup
