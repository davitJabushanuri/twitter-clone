import React from 'react'
import Comment from './Comment'

const Comments = ({ comments, postId }: any) => {
	return (
		<div>
			{comments.map((comment: any) => {
				return (
					<Comment
						key={comment.id}
						commentId={comment.id}
						postId={postId}
						userId={comment.userId}
						comment={comment.comment}
						user={comment.user}
						username={comment.username}
						userImage={comment.userImage}
						createdAt={comment.createdAt.seconds}
					/>
				)
			})}
		</div>
	)
}

export default Comments
