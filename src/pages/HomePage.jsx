import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import beersList from '../assets/beers.png'
import { Center, Stack } from '@mantine/core'
import { HomePageCard } from '../components/HomePageCard.jsx'

export const HomePage = () => {
	return (
		<Center>
			<Stack>
				<HomePageCard img={beersList} title={`All Beers`} path={`/beers`}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error fuga dolor ab
					quae possimus sint a animi incidunt dolorem?
				</HomePageCard>
				<HomePageCard img={randomBeer} title={`Random Beer`} path={`/random-beer`}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. A perferendis iste soluta magni
					accusantium cumque architecto officia aspernatur ullam culpa.
				</HomePageCard>
				<HomePageCard img={newBeer} title={`Create a beer`} path={`/new-beer`}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae vel perspiciatis
					eius atque rem, deleniti ab maiores voluptas possimus perferendis.
				</HomePageCard>
			</Stack>
		</Center>
	)
}
