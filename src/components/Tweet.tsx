import { doc, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../../firebase'

import { HiDotsHorizontal } from 'react-icons/hi'
import { BsDot } from 'react-icons/bs'

import Moment from 'react-moment'

const Tweet = ({ id }: any) => {
	const [tweet, setTweet] = useState(null)

	const time = tweet?.createdAt?.seconds
	console.log(tweet)

	useEffect(() => {
		const unsubscribe = onSnapshot(doc(db, 'posts', id), (snapshot: any) => {
			setTweet(snapshot.data())
		})

		return () => unsubscribe()
	}, [db, id])

	return (
		<div className='Tweet'>
			<div className='Tweet__content'>
				<div className='Tweet__content__user'>
					<div className='Tweet__content__user__image'>
						<img src={tweet?.userImage} alt='user' />
					</div>
					<div className='Tweet__content__user__name'>
						<p>{tweet?.user}</p>
						<p className='Tweet__content__user__name__username'>
							{tweet?.username}
						</p>
					</div>
					<div className='Tweet__content__user__options'>
						<HiDotsHorizontal />
					</div>
				</div>

				<div className='Tweet__content__text'>
					<p>{tweet?.text}</p>
					<img src={tweet?.image} alt='' />
				</div>
				<div className='Tweet__content__timestamp'>
					<Moment unix format='LT' trim>
						{time}
					</Moment>
					<BsDot />
					<Moment unix format='ll' trim>
						{time}
					</Moment>
				</div>
			</div>
		</div>
	)
}

export default Tweet
