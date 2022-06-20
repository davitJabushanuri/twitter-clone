import { FaUserAlt } from 'react-icons/fa'
import { AiOutlinePicture, AiOutlineGif } from 'react-icons/ai'
import { BsEmojiSmile } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdClear } from 'react-icons/md'

import { useState, useRef } from 'react'
import { db, storage } from '../../firebase'
import {
	addDoc,
	collection,
	serverTimestamp,
	updateDoc,
	doc,
} from 'firebase/firestore'

import { useSession } from 'next-auth/react'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'

const NewPost = () => {
	const { data: session } = useSession()

	const [post, setPost] = useState('')
	const [image, setImage] = useState(null)
	const postPhotoRef = useRef(null)

	const addImage = (e: any) => {
		const reader = new FileReader()
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0])
		}
		reader.onload = readerEvent => {
			setImage(readerEvent.target.result)
		}
	}

	const savePost = async () => {
		const docRef = addDoc(collection(db, 'posts'), {
			text: post,
			user: session!.user!.name,
			username: session!.user!.username,
			userImage: session!.user!.image,
			id: session!.user!.id,
			createdAt: serverTimestamp(),
		})

		const imageRef = ref(storage, `posts/${(await docRef).id}/image`)

		if (image) {
			await uploadString(imageRef, image, 'data_url').then(async () => {
				const downloadURL = await getDownloadURL(imageRef)
				await updateDoc(doc(db, 'posts', (await docRef).id), {
					image: downloadURL,
				})
			})
		}

		setPost('')
		setImage(null)
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
				{image && (
					<div onClick={() => setImage(null)} className='newPost__form__image'>
						<MdClear className='newPost__form__image__clear' />
						<img src={image} alt='' />
					</div>
				)}
				padding: 1rem;
				<div className='newPost__form__actions'>
					<div
						onClick={() => postPhotoRef.current.click()}
						className='newPost__form__actions__item'
					>
						<AiOutlinePicture />
						<input
							className='newPost__form__actions__item__input'
							type='file'
							ref={postPhotoRef}
							onChange={addImage}
						/>
					</div>
					<div className='newPost__form__actions__item'>
						<AiOutlineGif />

						<input
							className='newPost__form__actions__item__input'
							type='file'
						/>
					</div>
					<div className='newPost__form__actions__item'>
						<BsEmojiSmile />

						<input
							className='newPost__form__actions__item__input'
							type='file'
						/>
					</div>
					<div className='newPost__form__actions__item'>
						<HiOutlineLocationMarker />

						<input
							className='newPost__form__actions__item__input'
							type='file'
						/>
					</div>

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
