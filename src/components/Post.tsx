import { FaRegComment } from 'react-icons/fa'
import { FiMoreHorizontal, FiShare } from 'react-icons/fi'
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
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
						<FiMoreHorizontal />
					</span>
				</div>

				{text && <p className='post__content__text'>{text}</p>}
				<div className='post__content__image'>
					{image && <img src={image} alt='post' />}
				</div>

				<div className='post__content__actions'>
					<button className='post__content__actions__comment'>
						<FaRegComment className='ActionsIcon' />
					</button>
					<button className='post__content__actions__retweet'>
						<AiOutlineRetweet className='ActionsIcon' />
					</button>
					<button onClick={handleLike} className='post__content__actions__like'>
						{hasLiked ? (
							<AiFillHeart className='ActionsIcon' style={{ color: 'red' }} />
						) : (
							<AiOutlineHeart className='ActionsIcon' />
						)}
						{likes.length && (
							<span style={{ color: `${hasLiked ? 'red' : 'black'}` }}>
								{likes.length}
							</span>
						)}
					</button>
					<button className='post__content__actions__share'>
						<FiShare />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Post
