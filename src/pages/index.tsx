import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Twitter</title>
				<meta name='description' content='budget Twitter' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				{/* <Sidebar /> */}
				<Search />
			</main>
		</div>
	)
}

export default Home
