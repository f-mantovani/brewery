import { useParams } from 'react-router-dom'
import { Beer } from '../../components/Beer/Beer.jsx'
import beersConnection from '../../utils/beersConnection.js'
import { useEffect, useState } from 'react'

export const OneBeer = () => {
	const { id } = useParams()

	const [beer, setBeer] = useState(null)

	useEffect(() => {
		const controller = new AbortController()
		beersConnection
			.getOneBeer(id, { signal: controller.signal })
			.then(result => setBeer(result.data))
			.catch(e => console.log(e))

		return () => {
			controller.abort()
		}
	}, [id])

	return <Beer {...beer} />
}
