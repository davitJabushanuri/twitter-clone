/* eslint-disable @next/next/no-img-element */
import Moment from 'react-moment'
import { BsDot } from 'react-icons/bs'
import { HiDotsHorizontal, HiOutlineTrash } from 'react-icons/hi'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useSession } from 'next-auth/react'

import { useState } from 'react'
import { AiOutlinePushpin } from 'react-icons/ai'
import { ImEmbed2 } from 'react-icons/im'
import { FiFlag, FiMoreHorizontal } from 'react-icons/fi'

const Comment = ({
	commentId,
	postId,
	userId,
	comment,
	user,
	username,
	userImage,
	createdAt,
}: any) => {
	const { data: session } = useSession()

	const [optionsModal, setOptionsModal] = useState(false)
	const [deleteModal, setDeleteModal] = useState(false)

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
					<div className='tweetComment__content__user__options'>
						{optionsModal && (
							<div className='tweetComment__content__user__options__modal'>
								{session?.user?.id === userId && (
									<div
										onClick={() => {
											setOptionsModal(false)
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
							onClick={() => setOptionsModal(prev => !prev)}
							className='tweetComment__content__user__options__icon'
						>
							<FiMoreHorizontal />
						</div>
					</div>
					{deleteModal && (
						<div className='deleteModal'>
							<div className='deleteModal__content'>
								<h1 className='deleteModal__content__title'>Delete Tweet?</h1>
								<p className='deleteModal__content__paragraph'>
									This can’t be undone and it will be removed from your profile,
									the timeline of any accounts that follow you, and from Twitter
									search results.
								</p>

								<button
									onClick={deleteComment}
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
				</div>
				<div className='tweetComment__content__text'>{comment}</div>
			</div>
		</div>
	)
}

export default Comment
