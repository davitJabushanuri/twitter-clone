import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'

const Trends = () => {
	return (
		<section className='trends'>
			<h3 className='trends__title'>Trends for you</h3>
			<div className='trends__list'>
				<a href='#' className='trends__list__item'>
					<div className='trends__list__item__link'>
						<span className='trends__list__item__link__category'>
							Technology
						</span>
						<p className='trends__list__item__link__hashtag'>#coding</p>
						<span className='trends__list__item__link__tweets'>
							22.4k tweets
						</span>
					</div>
					<button className='trends__list__item__options'>
						<FiMoreHorizontal />
					</button>
				</a>
				<a href='#' className='trends__list__item'>
					<div className='trends__list__item__link'>
						<span className='trends__list__item__link__category'>
							Technology
						</span>
						<p className='trends__list__item__link__hashtag'>#coding</p>
						<span className='trends__list__item__link__tweets'>
							22.4k tweets
						</span>
					</div>
					<button className='trends__list__item__options'>
						<FiMoreHorizontal />
					</button>
				</a>
				<a href='#' className='trends__list__item'>
					<div className='trends__list__item__link'>
						<span className='trends__list__item__link__category'>
							Technology
						</span>
						<p className='trends__list__item__link__hashtag'>#coding</p>
						<span className='trends__list__item__link__tweets'>
							22.4k tweets
						</span>
					</div>
					<button className='trends__list__item__options'>
						<FiMoreHorizontal />
					</button>
				</a>
				<a href='#' className='trends__list__item'>
					<div className='trends__list__item__link'>
						<span className='trends__list__item__link__category'>
							Technology
						</span>
						<p className='trends__list__item__link__hashtag'>#coding</p>
						<span className='trends__list__item__link__tweets'>
							22.4k tweets
						</span>
					</div>
					<button className='trends__list__item__options'>
						<FiMoreHorizontal />
					</button>
				</a>
				<a href='#' className='trends__list__item'>
					<div className='trends__list__item__link'>
						<span className='trends__list__item__link__category'>
							Technology
						</span>
						<p className='trends__list__item__link__hashtag'>#coding</p>
						<span className='trends__list__item__link__tweets'>
							22.4k tweets
						</span>
					</div>
					<button className='trends__list__item__options'>
						<FiMoreHorizontal />
					</button>
				</a>
			</div>
			<button className='trends__showMore'>Show more</button>
			{/* <div className='trends__showMore'>
			</div> */}
		</section>
	)
}

export default Trends
