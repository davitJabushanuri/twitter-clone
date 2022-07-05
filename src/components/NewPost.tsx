/* eslint-disable @next/next/no-img-element */
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
	const { data: session }: any = useSession()

	const [post, setPost] = useState('')
	const [image, setImage] = useState(null)
	const postPhotoRef: any = useRef(null)

	const addImage = (e: any) => {
		const reader = new FileReader()
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0])
		}
		reader.onload = (readerEvent: any) => {
			setImage(readerEvent.target.result)
		}
	}

	const savePost = async () => {
		const collectionRef = collection(db, 'posts')
		const payload = {
			text: post,
			user: session!.user!.name,
			username: session!.user!.username,
			userImage: session!.user!.image,
			userId: session!.user!.id,
			createdAt: serverTimestamp(),
		}
		// add post to posts collection
		const docRef = await addDoc(collectionRef, payload)
		// create a reference to the location of the image
		const imageRef = ref(storage, `posts/${docRef.id}/image`)

		if (image) {
			// upload image to storage and get url
			await uploadString(imageRef, image, 'data_url').then(async () => {
				const downloadURL = await getDownloadURL(imageRef)
				// update post with image url
				await updateDoc(doc(db, 'posts', docRef.id), {
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
					<div className='newPost__form__image'>
						<MdClear
							className='newPost__form__image__clear'
							onClick={() => setImage(null)}
						/>
						<img className='newPost__form__image__img' src={image} alt='' />
					</div>
				)}
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
