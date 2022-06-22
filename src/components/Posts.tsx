import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import Post from './Post'
import { db } from '../../firebase'
import { v4 } from 'uuid'

const Posts = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
		const unsubscribe = onSnapshot(q, snapshot => {
			setPosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
		})
		return () => unsubscribe()
	}, [])

	return (
		<section className='posts'>
			{posts.map(post => (
				<Post
					key={post?.id}
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
