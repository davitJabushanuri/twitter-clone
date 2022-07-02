import {
	addDoc,
	collection,
	doc,
	onSnapshot,
	serverTimestamp,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'
import { db } from '../../firebase'
import Moment from 'react-moment'

import { useSession } from 'next-auth/react'

interface Props {
	id: string
	setCommentModal: any
}

const CommentModal = ({ id, setCommentModal }: Props) => {
	const [post, setPost] = useState({})
	const [comment, setComment] = useState('')
	const { data: session } = useSession()

	const addComment = async () => {
		await addDoc(collection(db, 'posts', id, 'comments'), {
			comment,
			user: session?.user?.name,
			username: session?.user?.username,
			userImage: session?.user?.image,
			createdAt: serverTimestamp(),
		})

		setComment('')
		setCommentModal(false)
	}

	useEffect(
		() =>
			onSnapshot(doc(db, 'posts', id), snapshot => {
				setPost(snapshot.data())
			}),
		[id, db]
	)

	return (
		<div className='commentContainer'>
			<div className='comment'>
				<div className='comment__header'>
					<div
						onClick={() => setCommentModal(false)}
						className='comment__header__close'
					>
						{window.innerWidth < 700 ? <BiArrowBack /> : <VscChromeClose />}
					</div>
				</div>
				<button
					onClick={addComment}
					disabled={comment.length === 0}
					className='comment__reply'
				>
					Reply
				</button>
				<div className='postInfo'>
					<div className='postInfo__userImage'>
						<img src={post.userImage} alt='' />
						<div className='postInfo__userImage__line'>
							<span></span>
						</div>
					</div>
					<div className='postInfo__content'>
						<div className='postInfo__content__userInfo'>
							<p className='postInfo__content__userInfo__name'>{post?.user}</p>
							<p className='postInfo__content__userInfo__username'>
								{post?.username}
							</p>
							<div className='postInfo__content__userInfo__dot'></div>
							<p className='postInfo__content__userInfo__date'>
								<Moment fromNow ago>
									{post.createdAt?.toDate()}
								</Moment>
							</p>
						</div>
						<div className='postInfo__content__tweet'>{post?.text}</div>
						<div className='postInfo__content__replying'>
							Replaying to <span>{post?.username}</span>
						</div>
					</div>
				</div>
				<div className='replyTweet'>
					<div className='replyTweet__userImage'>
						<img src={session?.user?.image} alt='' />
					</div>
					<div className='replyTweet__content'>
						<textarea
							className='replyTweet__content__textarea'
							placeholder='Tweet your reply'
							value={comment}
							onChange={(e: any) => setComment(e.target.value)}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CommentModal
