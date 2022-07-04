import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../../firebase'

import { HiDotsHorizontal } from 'react-icons/hi'
import { BsDot } from 'react-icons/bs'

import Moment from 'react-moment'
import Comments from './Comments'

const Tweet = ({ id }: any) => {
	const [tweet, setTweet] = useState(null)
	const [comments, setComments] = useState([])

	const time = tweet?.createdAt?.seconds

	useEffect(
		() =>
			id &&
			onSnapshot(doc(db, 'posts', id), (snapshot: any) => {
				setTweet(snapshot.data())
			}),

		[db, id]
	)

	useEffect(() => {
		if (id) {
			const q = query(
				collection(db, 'posts', id, 'comments'),
				orderBy('createdAt', 'desc')
			)

			const unsubscribe = onSnapshot(q, (snapshot: any) => {
				setComments(
					snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
				)
			})

			return () => unsubscribe()
		}
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
			<Comments comments={comments} postId={id} />
		</div>
	)
}

export default Tweet
