import { Container, Image, Paper, Stack, Text } from '@mantine/core'
import './Beer.css'
import PropTypes from 'prop-types'

export const Beer = ({
	attenuation_level,
	brewers_tips,
	contributed_by,
	description,
	first_brewed,
	image_url,
	name,
	tagline,
}) => {
	return (
		<Container>
			<Paper className='single-beer'>
				<div className='beer-wrapper'>
					<Image src={image_url} />
				</div>
				<Stack>
					<div className='row'>
						<Stack>
							<Text component='h6'>{name} </Text>
							<Text component='p' color='dimmed'>
								<Text component='p'> Tagline: </Text>
								{tagline}
							</Text>
						</Stack>

						<Stack>
							<Text component='span' color='dimmed'>
								<Text component='p'> Attenuation: </Text>
								{attenuation_level}
							</Text>
							<Text component='span' fw='bold'>
								<Text component='p'> First Brewed: </Text>
								{first_brewed}
							</Text>
						</Stack>
					</div>

					<Text component='p'>{description} </Text>
					<Text component='p' color='dimmed'>{brewers_tips} </Text>
					<Text component='p' color='dimmed'>{contributed_by} </Text>
				</Stack>
			</Paper>
		</Container>
	)
}

Beer.propTypes = {
	_id: PropTypes.string,
	name: PropTypes.string,
	tagline: PropTypes.string,
	contributed_by: PropTypes.string,
	image_url: PropTypes.string,
	description: PropTypes.string,
	first_brewed: PropTypes.string,
	attenuation_level: PropTypes.string,
	brewers_tips: PropTypes.string,
}
