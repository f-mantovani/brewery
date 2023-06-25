import { Center, NavLink } from '@mantine/core'
import { IconHome } from '@tabler/icons-react'


export const Header = () => {
	return (
		<Center>
			<NavLink icon={<IconHome size='5rem' stroke={1} />} href='/' component='a' />
		</Center>
	)
}
