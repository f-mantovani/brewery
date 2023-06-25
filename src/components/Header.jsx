import { Center } from '@mantine/core'
import { IconHome } from '@tabler/icons-react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
	return (
		<Center style={{ backgroundColor: 'var(--bg-clr)', width: '100%' }}>
			<NavLink to='/' >
				<IconHome size='5rem' stroke={1} style={{color: 'var(--font-clr)'}} />
			</NavLink>
		</Center>
	)
}
