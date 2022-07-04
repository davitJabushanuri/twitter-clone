import Moment from 'react-moment'
import { BsDot } from 'react-icons/bs'
import { HiDotsHorizontal } from 'react-icons/hi'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useSession } from 'next-auth/react'

const Comment = ({
	commentId,
	postId,
	comment,
	user,
	username,
	userImage,
	createdAt,
}: any) => {
	const { data: session } = useSession()
	console.log(session.user.id)

	const deleteComment = () => {
		deleteDoc(doc(db, 'posts', postId, 'comments', commentId))
	}

	return (
		<div className='tweetComment'>
			<div className='tweetComment__userImage'>
				<img src={userImage} alt='user' />
			</div>
			<div className='tweetComment__content'>
				<div className='tweetComment__content__user'>
					<div className='tweetComment__content__user__name'>{user}</div>
					<div className='tweetComment__content__user__username'>
						{username}
					</div>
					<BsDot />
					<div className='tweetComment__content__user__timestamp'>
						<Moment unix fromNow ago>
							{createdAt}
						</Moment>
					</div>
					<div
						onClick={deleteComment}
						className='tweetComment__content__user__options'
					>
						<HiDotsHorizontal />
					</div>
				</div>
				<div className='tweetComment__content__text'>{comment}</div>
			</div>
		</div>
	)
}

export default Comment
