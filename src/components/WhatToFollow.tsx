/* eslint-disable @next/next/no-img-element */
import React from 'react'

const WhatToFollow = () => {
	return (
		<section className='follow'>
			<h3 className='follow__title'>What to follow</h3>
			<div className='follow__list'>
				<a href='#' className='follow__list__item'>
					<div className='follow__list__item__image'>
						<img
							src='https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg'
							alt='avatar'
						/>
					</div>
					<div className='follow__list__item__info'>
						<p>Microsoft Azure</p>
						<span>@Azure</span>
					</div>
					<button className='follow__list__item__button'>Follow</button>
				</a>
				<a href='#' className='follow__list__item'>
					<div className='follow__list__item__image'>
						<img
							src='https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg'
							alt='avatar'
						/>
					</div>
					<div className='follow__list__item__info'>
						<p>Kubernetes</p>
						<span>@kubernetesio</span>
					</div>
					<button className='follow__list__item__button'>Follow</button>
				</a>
			</div>

			<button className='follow__showMore'>Show more</button>
		</section>
	)
}

export default WhatToFollow
