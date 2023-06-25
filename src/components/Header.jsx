import { Center, NavLink } from '@mantine/core'
import { IconHome2 } from '@tabler/icons-react'

export const Header = () => {
	return (
		<Center>
			<NavLink icon={<IconHome2 size='8rem' stroke={1.5} />} href='/' component='a' />
		</Center>
	)
}
