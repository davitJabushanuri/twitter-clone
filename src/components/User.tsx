import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaUserAlt } from 'react-icons/fa'

import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const User = () => {
	const { data: session } = useSession()
	console.log(session)

	return (
		<div className='user'>
			<div className='user__photo'>
				<button className='user__photo__avatar'>
					{session ? (
						<img src={session?.user?.image} />
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
				<button
					onClick={() => session && signOut({ callbackUrl: '/auth/signin' })}
					className='user__bio__button'
				>
					<FiMoreHorizontal />
				</button>
			</div>
		</div>
	)
}

export default User
