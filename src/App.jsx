import './App.css'
import { Center, MantineProvider, Stack } from '@mantine/core'
import { Header } from './components/Header.jsx'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage.jsx'
import { BeersList } from './pages/BeersList/BeersList.jsx'
import { RandomBeer } from './pages/RandomBeer/RandomBeer.jsx'
import { OneBeer } from './pages/OneBeer/OneBeer.jsx'

function App() {
	return (
		<>
			<MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
					<Stack>
						<Center>
							<Header />
						</Center>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/beers' element={<BeersList />} />
							<Route path='/random-beer' element={<RandomBeer /> } />
							<Route path='/beers/:id' element={<OneBeer /> } />
							<Route path='/new-beer' element />
						</Routes>
					</Stack>
			</MantineProvider>
		</>
	)
}

export default App
