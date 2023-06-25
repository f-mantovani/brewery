import axios from 'axios'

class beerConnect {
	constructor() {
		this.api = axios.create({
			baseURL: import.meta.env.VITE_BASE_URL,
		})
		this.api.interceptors.request.use(
			config => {
				return config
			},
			error => {
				return Promise.reject(error)
			}
		)

		this.api.interceptors.response.use(
			response => {
				return response
			},
			error => {
				return Promise.reject(error)
			}
		)
	}

	getBeers(signal) {
		return this.api.get('/', signal)
	}
}

export default new beerConnect()
