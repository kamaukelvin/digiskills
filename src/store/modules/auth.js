import {
	REG_REQUEST,
	REG_ERROR,
	REG_SUCCESS,
	AUTH_REQUEST,
	AUTH_ERROR,
	AUTH_SUCCESS,
	AUTH_LOGOUT,
	VERIFY_REQUEST,
	VERIFY_ERROR,
	VERIFY_SUCCESS,
} from '../actions/auth';
// import { USER_REQUEST } from '../actions/user';
import { register, login, verify } from '../../services/apiSrv';

const state = {
	token: localStorage.getItem('user-token') || '',
	status: '',
	hasLoadedOnce: false,
	loading: true,
};

const getters = {
	isAuthenticated: (state) => !!state.token,
	authStatus: (state) => state.status,
};

const actions = {
	[REG_REQUEST]: ({ commit }, user) => {
		return new Promise((resolve, reject) => {
			commit(REG_REQUEST);
			register(user)
				.then((resp) => {
					commit(REG_SUCCESS, resp);
					resolve(resp);
				})
				.catch(async (err) => {
					let error = await err;
					reject(error);
				});
		});
	},
	[AUTH_REQUEST]: ({ commit }, user) => {
		return new Promise((resolve, reject) => {
			commit(AUTH_REQUEST);
			login(user)
				.then((resp) => {
					localStorage.setItem('user-token', resp.access_token);
					commit(AUTH_SUCCESS, resp);
					// dispatch(USER_REQUEST);
					resolve(resp);
				})
				.catch(async (err) => {
					let error = await err;
					commit(AUTH_ERROR, error);
					localStorage.removeItem('user-token');
					reject(err);
				});
		});
	},
	[VERIFY_REQUEST]: ({ commit }, otp) => {
		return new Promise((resolve, reject) => {
			commit(VERIFY_REQUEST);
			verify(otp)
				.then((resp) => {
					commit(VERIFY_SUCCESS, resp);
					resolve(resp);
				})
				.catch(async (err) => {
					let error = await err;
					commit(VERIFY_ERROR, error);
					reject(err);
				});
		});
	},
	[AUTH_LOGOUT]: ({ commit }) => {
		return new Promise((resolve) => {
			commit(AUTH_LOGOUT);
			localStorage.removeItem('user-token');
			resolve();
		});
	},
};

const mutations = {
	[REG_REQUEST]: (state) => {
		state.status = 'loading';
	},
	[REG_SUCCESS]: (state, resp) => {
		state.status = 'success';
		state.token = resp.token;
		state.hasLoadedOnce = true;
	},
	[REG_ERROR]: (state) => {
		state.status = 'error';
		state.hasLoadedOnce = true;
	},

	[AUTH_LOGOUT]: (state) => {
		state.token = '';
	},
	[AUTH_REQUEST]: (state) => {
		state.status = 'loading';
	},
	[AUTH_SUCCESS]: (state, resp) => {
		state.status = 'success';
		state.token = resp.token;
		state.hasLoadedOnce = true;
	},
	[AUTH_ERROR]: (state) => {
		state.status = 'error';
		state.hasLoadedOnce = true;
	},

	[VERIFY_REQUEST]: (state) => {
		state.status = 'loading';
	},
	[VERIFY_SUCCESS]: (state, resp) => {
		state.status = 'success';
		state.token = resp.token;
		state.hasLoadedOnce = true;
	},
	[VERIFY_ERROR]: (state) => {
		state.status = 'error';
		state.hasLoadedOnce = true;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
