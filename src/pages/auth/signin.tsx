import { FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'

import { getProviders } from 'next-auth/react'
import Image from 'next/image'

const signIn = ({ providers }: any) => {
	console.log(providers)
	return (
		<div className='signin'>
			<section className='signin__actions'>
				<div className='signin__actions__logo'>
					<FaTwitter />
				</div>
				<h1 className='signin__actions__title'>Happening now</h1>
				<p className='signin__actions__paragraph'>Join Twitter today.</p>
				<button className='signin__actions__google'>
					<FcGoogle />
					Sign in with Google
				</button>
				<button className='signin__actions__apple'>
					<BsApple />
					Sign in with Apple
				</button>
				<div className='signin__actions__divider'>
					<span className='signin__actions__divider__text'></span>
					<p className='signin__actions__divider__text'>or</p>
					<span className='signin__actions__divider__text'></span>
				</div>
				<button className='signin__actions__signup'>
					Sign up with phone or email
				</button>
				<span className='signin__actions__terms'>
					By signing up, you agree to our <a href='#'>Terms of Service</a> and
					<a href='#'> Privacy Policy</a>. Including <a href='#'>Cookie Use</a>.
				</span>

				<p className='signin__actions__haveAnAcc'>Already have an account?</p>
				<button className='signin__actions__signinButton'>Sign in</button>
			</section>
			<section className='signin__wallpaper'>
				<FaTwitter />
			</section>
			<footer className='signin__footer'>
				<a href='#' className='signin__footer__link'>
					About
				</a>
				<a href='#' className='signin__footer__link'>
					Help Center
				</a>
				<a href='#' className='signin__footer__link'>
					Terms of Service
				</a>
				<a href='#' className='signin__footer__link'>
					Privacy Policy
				</a>
				<a href='#' className='signin__footer__link'>
					Cookie Policy
				</a>
				<a href='#' className='signin__footer__link'>
					Accessibility
				</a>
				<a href='#' className='signin__footer__link'>
					Ads info
				</a>
				<a href='#' className='signin__footer__link'>
					Blog
				</a>
				<a href='#' className='signin__footer__link'>
					Status
				</a>
				<a href='#' className='signin__footer__link'>
					Careers
				</a>
				<a href='#' className='signin__footer__link'>
					Brand Resources
				</a>
				<a href='#' className='signin__footer__link'>
					Advertising
				</a>
				<a href='#' className='signin__footer__link'>
					Marketing
				</a>
				<a href='#' className='signin__footer__link'>
					Twitter for business
				</a>
				<a href='#' className='signin__footer__link'>
					Developers
				</a>
				<a href='#' className='signin__footer__link'>
					Directory
				</a>
				<a href='#' className='signin__footer__link'>
					Settings
				</a>
				<span className='signin__footer__copyright'>© 2022 Twitter, Inc.</span>
			</footer>
		</div>
	)
}

export async function getServerSideProps() {
	const providers = await getProviders()
	return {
		props: {
			providers,
		},
	}
}

export default signIn
