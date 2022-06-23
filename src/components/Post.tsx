import { FaRegComment } from 'react-icons/fa'
import { FiMoreHorizontal, FiShare, FiFlag } from 'react-icons/fi'
import {
	AiOutlineRetweet,
	AiOutlineHeart,
	AiFillHeart,
	AiOutlinePushpin,
} from 'react-icons/ai'
import { HiOutlineTrash } from 'react-icons/hi'
import { ImEmbed2 } from 'react-icons/im'

import Moment from 'react-moment'
import {
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	setDoc,
} from 'firebase/firestore'

import { useSession } from 'next-auth/react'

import { db } from '../../firebase'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Post = ({
	user,
	username,
	userImage,
	text,
	image,
	createdAt,
	id,
}: any) => {
	const router = useRouter()
	const { data: session } = useSession()
	const [likes, setLikes] = useState([])
	const [hasLiked, setHasLiked] = useState(false)
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		const unsubscribe = onSnapshot(
			collection(db, 'posts', id, 'likes'),
			(snapshot: any) => {
				setLikes(snapshot.docs.map((doc: any) => doc.data()))
			}
		)

		return () => unsubscribe()
	}, [db])

	useEffect(() => {
		setHasLiked(likes.some((like: any) => like.id === session?.user?.id))
	}, [likes])

	const handleLike = async () => {
		if (session) {
			if (hasLiked) {
				await deleteDoc(doc(db, 'posts', id, 'likes', session?.user?.id))
			} else {
				const docRef = doc(db, 'posts', id, 'likes', session?.user?.id)
				const payload = {
					username: session!.user!.username,
					id: session!.user!.id,
				}
				await setDoc(docRef, payload)
			}
		} else {
			router.push('/auth/signin')
		}
	}

	return (
		<div className='post'>
			<button className='post__user'>
				<img src={userImage} alt='user' />
			</button>
			<div className='post__content'>
				<div className='post__content__userInfo'>
					<span className='post__content__userInfo__name'>{user}</span>
					<span className='post__content__userInfo__username'>{username}</span>
					<span className='post__content__userInfo__dot'></span>
					<span className='post__content__userInfo__postDate'>
						<Moment fromNow ago>
							{createdAt?.toDate()}
						</Moment>
					</span>
					<span className='post__content__userInfo__options'>
						{showModal && (
							<div className='post__content__userInfo__options__modal'>
								<div className='delete'>
									<HiOutlineTrash />
									<span>Delete</span>
								</div>

								<div className='pin'>
									<AiOutlinePushpin />
									<span>Pin to your profile</span>
								</div>

								<div className='embed'>
									<ImEmbed2 />
									<span>Embed Tweet</span>
								</div>

								<div className='report'>
									<FiFlag />
									<span>Report Tweet</span>
								</div>
							</div>
						)}

						<div
							onClick={() => setShowModal(prev => !prev)}
							className='post__content__userInfo__options__icon'
						>
							<FiMoreHorizontal />
						</div>
					</span>
				</div>

				{text && <p className='post__content__text'>{text}</p>}
				<div className='post__content__image'>
					{image && <img src={image} alt='post' />}
				</div>

				<div className='post__content__actions'>
					<button className='post__content__actions__comment'>
						<div className='ActionsIcon'>
							<FaRegComment />
						</div>
					</button>
					<button className='post__content__actions__retweet'>
						<div className='ActionsIcon'>
							<AiOutlineRetweet />
						</div>
					</button>
					<button onClick={handleLike} className='post__content__actions__like'>
						<div className='ActionsIcon'>
							{hasLiked ? (
								<AiFillHeart style={{ color: '#F91880' }} />
							) : (
								<AiOutlineHeart />
							)}
						</div>
						{likes.length > 0 && (
							<span className={hasLiked ? 'liked' : ''}>{likes.length}</span>
						)}
					</button>
					<button className='post__content__actions__share'>
						<div className='ActionsIcon'>
							<FiShare />
						</div>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Post
