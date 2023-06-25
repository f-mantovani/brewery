import { Card, Image, Text } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import './HomePageCard.css'

export const HomePageCard = ({ img, title, path, children }) => {
	return (
		<NavLink to={`${path}`} className='home-card'>
			<Card withBorder shadow='sm' padding='lg' radius='sm'>
				<Card.Section>
					<Image src={img} />

					<Text fz='lg' component='h6'>
						{title}
					</Text>

					<Text component='p' color='dimmed'>
						{children}
					</Text>
				</Card.Section>
			</Card>
		</NavLink>
	)
}

HomePageCard.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	path: PropTypes.string,
	children: PropTypes.node,
}
