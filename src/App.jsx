import './App.css'
import { Center, Container, MantineProvider, Stack } from '@mantine/core'
import { Header } from './components/Header.jsx'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage.jsx'

function App() {
	return (
		<>
			<MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
				<Container style={{ margin: '2rem auto' }}>
					<Center>
						<Stack>
							<Header />
							<Routes>
								<Route path='/' element={<HomePage />} />
								<Route path='/new-beer' element />
								<Route path='/random-beer' element />
								<Route path='/beers' element />
							</Routes>
						</Stack>
					</Center>
				</Container>
			</MantineProvider>
		</>
	)
}

export default App
