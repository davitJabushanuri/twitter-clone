import React from 'react'
import { FaTwitter } from 'react-icons/fa'

import { useSession, signOut } from 'next-auth/react'

const SignOutPopup = ({ setShowSignOutPopup }) => {
	const { data: session } = useSession()

	return (
		<div className='signoutModal'>
			<div className='signoutModal__logo'>
				<FaTwitter />
			</div>
			<h2 className='signoutModal__title'>Log out of Twitter?</h2>
			<p className='signoutModal__text'>
				You can always log back in at any time. If you just want to switch
				accounts, you can do that by adding an existing account.{' '}
			</p>

			<button
				onClick={() => {
					session && signOut({ callbackUrl: '/auth/signin' })
					setShowSignOutPopup(false)
				}}
				className='signoutModal__signOut'
			>
				Log Out
			</button>
			<button
				onClick={() => setShowSignOutPopup(false)}
				className='signoutModal__cancel'
			>
				Cancel
			</button>
		</div>
	)
}

export default SignOutPopup
