import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Search from '../../components/Search'
import Sidebar from '../../components/Sidebar'
import Trends from '../../components/Trends'
import Tweet from '../../components/Tweet'
import WhatToFollow from '../../components/WhatToFollow'

import { useRouter } from 'next/router'

const TweetPage = () => {
	const router = useRouter()
	const { id } = router.query

	console.log(id)

	return (
		<div className='TweetPage'>
			<main>
				<section className='sidebar-container'>
					<Sidebar />
				</section>
				<section className='feed'>
					<Header isHomePage={false} />
					<Tweet id={id} />
				</section>
				<section className='widgets'>
					<Search />
					<Trends />
					<WhatToFollow />
					<Footer />
				</section>
			</main>
		</div>
	)
}

export default TweetPage
