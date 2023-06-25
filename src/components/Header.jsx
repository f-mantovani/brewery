import { Center } from '@mantine/core'
import { IconHome } from '@tabler/icons-react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
	return (
		<Center style={{ backgroundColor: 'rgb(231, 226, 226)', width: '100%' }}>
			<NavLink to='/' >
				<IconHome size='5rem' stroke={1} style={{color: '#322121'}} />
			</NavLink>
		</Center>
	)
}
