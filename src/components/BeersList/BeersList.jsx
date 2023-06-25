import { List } from '@mantine/core'
import { useState, useEffect } from 'react'
import beerConnect from '../../utils/beersConnection.js'

export const BeersList = () => {
	const [beersList, setBeersList] = useState(undefined)

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

	console.log(beersList && beersList[0])

	return (
		<List>
			{beersList ? (
				beersList.map(beer => <p key={beer._id}>{beer.name}</p>)
			) : (
				<p> nothing at the moment</p>
			)}
		</List>
	)
}
