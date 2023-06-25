import { Paper, Stack, Text } from '@mantine/core'
import { NavLink } from 'react-router-dom'

export const HomePageCard = ({ img, title, path, children }) => {
	return (
		<Paper withBorder style={{ backgroundColor: 'white', padding: '.25rem' }}>
			<Stack>
				<NavLink to={`${path}`}>
					<img src={img} width='100%' />
				</NavLink>
				<Text fz='lg' style={{ color: '#333', margin: 'auto .5rem' }}>
					{title}
				</Text>
				<Text style={{ color: '#333', margin: 'auto .5rem' }}>{children}</Text>
			</Stack>
		</Paper>
	)
}
