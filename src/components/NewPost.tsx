import { FaUserAlt } from 'react-icons/fa'
import { AiOutlinePicture, AiOutlineGif } from 'react-icons/ai'
import { BsEmojiSmile } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const NewPost = () => {
	return (
		<section className='newPost'>
			<button className='newPost__user'>
				<FaUserAlt />
			</button>
			<form className='newPost__form' action=''>
				<textarea
					className='newPost__form__textarea'
					placeholder='What’s happening?'
				/>
				<div className='newPost__form__actions'>
					<AiOutlinePicture />
					<AiOutlineGif />
					<BsEmojiSmile />
					<HiOutlineLocationMarker />

					<button type='button' className='newPost__form__actions__button'>
						Tweet
					</button>
				</div>
			</form>
		</section>
	)
}

export default NewPost
