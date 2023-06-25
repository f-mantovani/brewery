import './App.css'
import { Center, MantineProvider, Stack } from '@mantine/core'
import { Header } from './components/Header.jsx'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage.jsx'

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
							<Route path='/new-beer' element />
							<Route path='/random-beer' element />
							<Route path='/beers' element />
						</Routes>
					</Stack>
			</MantineProvider>
		</>
	)
}

export default App
