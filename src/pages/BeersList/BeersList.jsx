import { Center } from '@mantine/core'
import { useState, useEffect } from 'react'

import { BeerCard } from '../../components/BeerCard/BeerCard.jsx'
import beerConnect from '../../utils/beersConnection.js'

import './BeerList.css'

export const BeersList = () => {
	const [beersList, setBeersList] = useState(null)

	useEffect(() => {
		const controller = new AbortController()

		beerConnect
			.getBeers({ signal: controller.signal })
			.then(result => {
				setBeersList(result.data)
			})
			.catch(error => console.log(error))

		return () => {
			controller.abort()
		}
	}, [])

	return (
		<Center>
			<ul className='beer-list'>
				{beersList ? (
					beersList.map(beer => <BeerCard key={beer._id} {...beer} />)
				) : (
					<p> Nothing at the moment!</p>
				)}
			</ul>
		</Center>
	)
}
