import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

const UserPopup = ({ setShowUserPopup, setShowSignOutPopup }: any) => {
	const { data: session } = useSession()

	return (
		<div className='userPopup'>
			{session && (
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
			)}
			<div className='userPopup__addAcc'>
				<Link href='/auth/signin'>Add an existing account</Link>
			</div>
			{session ? (
				<div
					onClick={() => {
						setShowSignOutPopup(true)
						setShowUserPopup(false)
					}}
					className='userPopup__logout'
				>
					Log Out
				</div>
			) : (
				<div className='userPopup__logout'>
					<Link href='/auth/signup'>Sign Up</Link>
				</div>
			)}
		</div>
	)
}

export default UserPopup
