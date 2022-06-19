import { FaUserAlt } from 'react-icons/fa'
import { AiOutlinePicture, AiOutlineGif } from 'react-icons/ai'
import { BsEmojiSmile } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import { useState } from 'react'
import { db } from '../../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

import { useSession } from 'next-auth/react'

const NewPost = () => {
	const { data: session } = useSession()
	console.log(session)

	const [post, setPost] = useState('')

	const savePost = async () => {
		console.log(post)
		const docRef = addDoc(collection(db, 'posts'), {
			text: post,
			user: session!.user!.name,
			username: session!.user!.username,
			userImage: session!.user!.image,
			userId: session!.user!.id,
			createdAt: serverTimestamp(),
		})
	}

	return (
		<section className='newPost'>
			<button className='newPost__user'>
				<FaUserAlt />
			</button>
			<form className='newPost__form' action=''>
				<textarea
					value={post}
					onChange={e => setPost(e.target.value)}
					className='newPost__form__textarea'
					placeholder='What’s happening?'
				/>
				<div className='newPost__form__actions'>
					<AiOutlinePicture />
					<AiOutlineGif />
					<BsEmojiSmile />
					<HiOutlineLocationMarker />

					<button
						onClick={savePost}
						disabled={!post.trim()}
						type='button'
						className='newPost__form__actions__button'
					>
						Tweet
					</button>
				</div>
			</form>
		</section>
	)
}

export default NewPost
