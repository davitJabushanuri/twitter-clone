import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import NewPost from '../components/NewPost'
import Posts from '../components/Posts'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'
import Trends from '../components/Trends'
import WhatToFollow from '../components/WhatToFollow'

const Home: NextPage = () => {
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
				</section>
			</main>
		</div>
	)
}

export default Home
