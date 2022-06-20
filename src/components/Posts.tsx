import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import Post from './Post'
import { db } from '../../firebase'
import { v4 } from 'uuid'

const Posts = () => {
	const [posts, setPosts] = useState([])

	useEffect(
		() =>
			onSnapshot(
				query(collection(db, 'posts'), orderBy('createdAt', 'desc')),
				snapshot => {
					setPosts(snapshot.docs.map(doc => doc.data()))
				}
			),

		[]
	)

	const secs = posts[0]?.createdAt
	let time = new Date(secs)
	let normalDate = new Date(secs).toLocaleString('en-GB', { timeZone: 'UTC' })
	console.log(normalDate)

	return (
		<section className='posts'>
			{posts.map(post => (
				<Post
					key={v4()}
					user={post?.user}
					username={post?.username}
					userImage={post?.userImage}
					text={post?.text}
					image={post?.image}
					createdAt={post?.createdAt}
					id={post?.id}
				/>
			))}
		</section>
	)
}

export default Posts
