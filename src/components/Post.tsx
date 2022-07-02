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

import { db, storage } from '../../firebase'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { deleteObject, getMetadata, ref } from 'firebase/storage'
import CommentModal from './CommentModal'

const Post = ({
	user,
	username,
	userImage,
	text,
	image,
	createdAt,
	id,
	userId,
}: any) => {
	const router = useRouter()
	const { data: session } = useSession()
	const [likes, setLikes] = useState([])
	const [comments, setComments] = useState([])
	const [hasLiked, setHasLiked] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [deleteModal, setDeleteModal] = useState(false)
	const [commentModal, setCommentModal] = useState(false)

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
		const unsubscribe = onSnapshot(
			collection(db, 'posts', id, 'comments'),
			(snapshot: any) => {
				setComments(snapshot.docs.map((doc: any) => doc.data()))
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

	const deletePost = async () => {
		//delete post from firestore
		deleteDoc(doc(db, 'posts', id))

		// delete post image from storage if it exists
		if (image) deleteObject(ref(storage, `posts/${id}/image`))
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
								{session?.user?.id === userId && (
									<div
										onClick={() => {
											setShowModal(false)
											setDeleteModal(true)
										}}
										className='delete'
									>
										<HiOutlineTrash />
										<span>Delete</span>
									</div>
								)}

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
						{deleteModal && (
							<div className='deleteModal'>
								<div className='deleteModal__content'>
									<h1 className='deleteModal__content__title'>Delete Tweet?</h1>
									<p className='deleteModal__content__paragraph'>
										This can’t be undone and it will be removed from your
										profile, the timeline of any accounts that follow you, and
										from Twitter search results.
									</p>

									<button
										onClick={deletePost}
										className='deleteModal__content__deleteButton'
									>
										Delete
									</button>
									<button
										onClick={() => setDeleteModal(false)}
										className='deleteModal__content__cancelButton'
									>
										Cancel
									</button>
								</div>
							</div>
						)}
					</span>
				</div>

				{text && <p className='post__content__text'>{text}</p>}
				<div className='post__content__image'>
					{image && <img src={image} alt='post' />}
				</div>

				<div className='post__content__actions'>
					<button className='post__content__actions__comment'>
						<div onClick={() => setCommentModal(true)} className='ActionsIcon'>
							<FaRegComment />
						</div>
						{comments.length > 0 && <span>{comments.length}</span>}
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
			{commentModal && (
				<CommentModal id={id} setCommentModal={setCommentModal} />
			)}
		</div>
	)
}

export default Post
