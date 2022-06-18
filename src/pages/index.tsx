import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NewPost from '../components/NewPost'
import Posts from '../components/Posts'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'
import Trends from '../components/Trends'
import WhatToFollow from '../components/WhatToFollow'

import { useSession, signIn, signOut } from 'next-auth/react'

const Home: NextPage = () => {
	const { data: session } = useSession()

	console.log(session)

	return (
		<div>
			<Head>
				<title>Twitter</title>
				<meta name='description' content='budget Twitter' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<section className='sidebar-container'>
					<Sidebar />
				</section>
				<section className='feed'>
					<Header />
					<NewPost />
					<Posts />
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

export default Home
