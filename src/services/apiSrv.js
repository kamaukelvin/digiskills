import { handle_api_error } from './errorHandler';
import axios from 'axios';

let api_url = 'http://127.0.0.1:8000/api/v1/';

function register() {
	return new Promise(function(resolve, reject) {
		try {
			let config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			let endpoint = 'register';

			const body = {
				name: 'Kosgei',
				email: 'kosgeiwilson9900@gmail.com',
				password: '12345678',
				phone: '0717890426',
			};

			let response = call_api(endpoint, body, config);
			return resolve(response);
		} catch (err) {
			return reject(err);
		}
	});
}

async function call_api(endpoint, body, config) {
	return new Promise(function(resolve, reject) {
		axios
			.post(api_url + endpoint, body, config)
			.then(function(response) {
				return resolve(response.data.result);
			})
			.catch(function(error) {
				if (error.response) {
					// handle error
					if (error.response.status === 500) {
						return reject(handle_api_error(error.response.data));
					}
				} else {
					return reject(error);
				}
			});
	});
}

export { register };
