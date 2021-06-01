import { handle_api_error } from './errorHandler';
import axios from 'axios';

let api_url = 'http://178.62.120.221:86/api/v1/';

function register({ full_name, email, password, phone, user_type }) {
	return new Promise(function(resolve, reject) {
		try {
			let config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			let endpoint = 'register';

			const body = {
				user_type: user_type,
				name: full_name,
				email: email,
				password: password,
				phone: phone,
			};

			let response = call_api(endpoint, body, config);
			return resolve(response);
		} catch (err) {
			return reject(err);
		}
	});
}
function login({ email, password }) {
	return new Promise(function(resolve, reject) {
		try {
			let config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			let endpoint = 'login';

			const body = {
				email: email,
				password: password,
			};

			let response = call_api(endpoint, body, config);
			return resolve(response);
		} catch (err) {
			return reject(err);
		}
	});
}
function verify({ otp }) {
	return new Promise(function(resolve, reject) {
		try {
			let config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			let endpoint = 'confirm';

			const body = {
				code: otp,
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
				return resolve(response.data);
			})
			.catch(function(error) {
				if (error.response) {
					// handle error
					if (error.response.status >= 400) {
						return reject(handle_api_error(error.response.data));
					}
				} else {
					return reject(error);
				}
			});
	});
}

export { register, login, verify };
