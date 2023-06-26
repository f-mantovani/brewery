import { useState, useEffect } from 'react'
import { Beer } from '../../components/Beer/Beer.jsx'
import beersConnection from '../../utils/beersConnection.js'

export const RandomBeer = () => {
	const [beer, setBeer] = useState(undefined)

	useEffect(() => {
		const controller = new AbortController()
		beersConnection
			.getRandomBeer()
			.then(({ data }) => setBeer(data))
			.catch(e => console.log(e))

		return () => {
			controller.abort()
		}
	}, [])
	return <Beer {...beer}/>
}
