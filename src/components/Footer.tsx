import React from 'react'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<a href='#' className='footer__container__item'>
					Terms of Service
				</a>
				<a href='#' className='footer__container__item'>
					Privacy Policy
				</a>
				<a href='#' className='footer__container__item'>
					Cookie Policy
				</a>
				<a href='#' className='footer__container__item'>
					Accessibility
				</a>
				<a href='#' className='footer__container__item'>
					Ads info
				</a>
				<button className='footer__container__button'>More...</button>
			</div>
			<p className='footer__container__copyright'>© 2022 Twitter, Inc.</p>
		</footer>
	)
}

export default Footer
