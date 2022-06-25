import { BiArrowBack } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'

interface Props {
	id: string
	setCommentModal: any
}

const CommentModal = ({ id, setCommentModal }: Props) => {
	console.log(window.innerWidth)
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
				{id}
			</div>
		</div>
	)
}

export default CommentModal
