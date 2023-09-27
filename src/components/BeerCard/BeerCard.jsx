import { Image, Text } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export const BeerCard = ({ _id, name, tagline, contributed_by, image_url }) => {
	return (
		<li className='beer-card'>
			<div className='beer-wrapper'>
				<Image src={image_url} />
			</div>
			<div className='stacker'>
				<Text>{name}</Text>
				<Text color='dimmed' component='p'>
					{tagline}
				</Text>
				<Text>{contributed_by?.split('<')[0]}</Text>
				<NavLink to={`/beers/${_id}`}> More details </NavLink>
			</div>
		</li>
	)
}

BeerCard.propTypes = {
	_id: PropTypes.string,
	name: PropTypes.string,
	tagline: PropTypes.string,
	contributed_by: PropTypes.string,
	image_url: PropTypes.string,
}
