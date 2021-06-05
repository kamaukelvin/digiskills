import { POST_PROFILE_REQUEST, POST_PROFILE_SUCCESS, POST_PROFILE_ERROR } from '../actions/profile';
import { postProfile } from '../../services/apiSrv';

const state = {
	loading: false,
	error: '',
};

const getters = {
	isLoadingProfile: (state) => state.loading,
};

const actions = {
	[POST_PROFILE_REQUEST]: ({ commit }, profile) => {
		return new Promise((resolve, reject) => {
			commit(POST_PROFILE_REQUEST);
			postProfile(profile)
				.then((resp) => {
					console.log('MY RESP FROM POST PROFILE', resp);
					commit(POST_PROFILE_SUCCESS, resp);
					resolve(resp);
				})
				.catch(async (err) => {
					let error = await err;
					commit(POST_PROFILE_ERROR);
					reject(error);
				});
		});
	},
};

const mutations = {
	[POST_PROFILE_REQUEST]: (state) => {
		state.loading = true;
	},
	[POST_PROFILE_SUCCESS]: (state) => {
		state.loading = false;
	},
	[POST_PROFILE_ERROR]: (state) => {
		state.loading = false;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
