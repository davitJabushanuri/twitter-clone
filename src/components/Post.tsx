import { FaUserAlt, FaRegComment } from 'react-icons/fa'
import { FiMoreHorizontal, FiShare } from 'react-icons/fi'
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'

const Post = ({ user, username, userImage, text, image, createdAt, id }) => {
	return (
		<div className='post'>
			<button className='post__user'>
				<FaUserAlt />
			</button>
			<div className='post__content'>
				<div className='post__content__userInfo'>
					<span className='post__content__userInfo__name'>{user}</span>
					<span className='post__content__userInfo__username'>{username}</span>
					<span className='post__content__userInfo__dot'></span>
					<span className='post__content__userInfo__postDate'>10h</span>
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
						<FaRegComment />
					</button>
					<button className='post__content__actions__retweet'>
						<AiOutlineRetweet />
					</button>
					<button className='post__content__actions__like'>
						<AiOutlineHeart />
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
