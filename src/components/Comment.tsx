import Moment from 'react-moment'
import { BsDot } from 'react-icons/bs'
import { HiDotsHorizontal } from 'react-icons/hi'

const Comment = ({ comment, user, username, userImage, createdAt }: any) => {
	return (
		<div className='comment'>
			<div className='comment__userImage'>
				<img src={userImage} alt='user' />
			</div>
			<div className='comment__content'>
				<div className='comment__content__user'>
					<div className='comment__content__user__name'>{user}</div>
					<div className='comment__content__user__username'>{username}</div>
					<BsDot />
					<div className='comment__content__user__timestamp'>
						<Moment unix fromNow ago>
							{createdAt}
						</Moment>
					</div>
					<div className='comment__content__user__options'>
						<HiDotsHorizontal />
					</div>
				</div>
				<div className='comment__content__text'>{comment}</div>
			</div>
		</div>
	)
}

export default Comment
