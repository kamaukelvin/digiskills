import { handle_api_error } from './errorHandler';
import axios from 'axios';

let api_url = 'http://digi-skills.herokuapp.com/api/v1/';

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

			let response = post_api(endpoint, body, config);
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

			let response = post_api(endpoint, body, config);
			return resolve(response);
		} catch (err) {
			return reject(err);
		}
	});
}
function logout() {
	return new Promise(function(resolve, reject) {
		try {
			const token = localStorage.getItem('user-token');
			let config = {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};

			let endpoint = 'logout';

			const body = {};

			let response = post_api(endpoint, body, config);
			return resolve(response);
		} catch (err) {
			return reject(err);
		}
	});
}
function verify(otp) {
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

			let response = post_api(endpoint, body, config);
			return resolve(response);
		} catch (err) {
			return reject(err);
		}
	});
}
function getPrograms() {
	return new Promise(function(resolve, reject) {
		try {
			const token = localStorage.getItem('user-token');
			let config = {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};

			let endpoint = 'programs';

			let response = get_api(endpoint, config);
			return resolve(response);
		} catch (err) {
			return reject(err);
		}
	});
}
function getProgramById(id) {
	return new Promise(function(resolve, reject) {
		try {
			const token = localStorage.getItem('user-token');
			let config = {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};

			let endpoint = `programs/${id}`;

			let response = get_api(endpoint, config);
			return resolve(response);
		} catch (err) {
			return reject(err);
		}
	});
}

function addReview(form) {
	return new Promise(function(resolve, reject) {
		try {
			const token = localStorage.getItem('user-token');
			let config = {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${token}`,
				},
			};
			const formData = new FormData();
			Object.keys(form).forEach((key) => {
				formData.append(key, form[key]);
			});

			let endpoint = 'reviews';

			let response = post_api(endpoint, formData, config);
			return resolve(response);
		} catch (err) {
			return reject(err);
		}
	});
}
function addCourse({ title, cost, location, duration, description, program }) {
	return new Promise(function(resolve, reject) {
		try {
			const token = localStorage.getItem('user-token');
			let config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};
			const body = {
				title: title,
				average_cost: cost,
				duration: duration,
				description: description,
				program: program,
				location: location,
			};

			let endpoint = 'course';

			let response = post_api(endpoint, body, config);
			return resolve(response);
		} catch (err) {
			return reject(err);
		}
	});
}
function addProgram(form) {
	return new Promise(function(resolve, reject) {
		try {
			const token = localStorage.getItem('user-token');
			let config = {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${token}`,
				},
			};
			const formData = new FormData();
			Object.keys(form).forEach((key) => {
				formData.append(key, form[key]);
			});

			let endpoint = 'programs';

			let response = post_api(endpoint, formData, config);
			return resolve(response);
		} catch (err) {
			return reject(err);
		}
	});
}

function getReviews(id) {
	return new Promise(function(resolve, reject) {
		try {
			const token = localStorage.getItem('user-token');
			let config = {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};

			let endpoint = `reviews/${id}`;

			let response = get_api(endpoint, config);
			return resolve(response);
		} catch (err) {
			return reject(err);
		}
	});
}

function getResources() {
	return new Promise(function(resolve, reject) {
		try {
			const token = localStorage.getItem('user-token');
			let config = {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};

			let endpoint = `add-resources`;

			let response = get_api(endpoint, config);
			return resolve(response);
		} catch (err) {
			return reject(err);
		}
	});
}
function postProfile(form) {
	return new Promise(function(resolve, reject) {
		try {
			const token = localStorage.getItem('user-token');
			let config = {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${token}`,
				},
			};
			const formData = new FormData();
			Object.keys(form).forEach((key) => {
				formData.append(key, form[key]);
			});

			let endpoint = 'organizations';

			let response = post_api(endpoint, formData, config);
			return resolve(response);
		} catch (err) {
			return reject(err);
		}
	});
}
function addResource({ title, author_name, institution, text }) {
	return new Promise(function(resolve, reject) {
		try {
			const token = localStorage.getItem('user-token');
			let config = {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};
			const body = {
				title: title,
				author_name: author_name,
				institution: institution,
				text: text,
				date: new Date(),
			};

			let endpoint = 'resources';

			let response = post_api(endpoint, body, config);
			return resolve(response);
		} catch (err) {
			return reject(err);
		}
	});
}

async function post_api(endpoint, body, config) {
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
async function get_api(endpoint, config) {
	return new Promise(function(resolve, reject) {
		axios
			.get(api_url + endpoint, config)
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

export {
	register,
	login,
	logout,
	verify,
	getPrograms,
	getProgramById,
	addReview,
	addCourse,
	getReviews,
	getResources,
	postProfile,
	addProgram,
	addResource,
};
