import { doc, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'
import { db } from '../../firebase'

interface Props {
	id: string
	setCommentModal: any
}

const CommentModal = ({ id, setCommentModal }: Props) => {
	const [post, setPost] = useState({})

	console.log(post)

	useEffect(
		() =>
			onSnapshot(doc(db, 'posts', id), snapshot => {
				setPost(snapshot?.data())
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
						{window.innerWidth < 768 ? <BiArrowBack /> : <VscChromeClose />}
					</div>
				</div>
				<button className='comment__reply'>Reply</button>
				{post.username}
			</div>
		</div>
	)
}

export default CommentModal
