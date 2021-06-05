import { RESOURCES_REQUEST, RESOURCES_SUCCESS, RESOURCES_ERROR } from '../actions/resources';
import { getResources } from '../../services/apiSrv';

const state = {
	loading: false,
	resources: [],
	error: '',
};

const getters = {
	isLoadingResources: (state) => state.loading,
	getResources: (state) => state.resources,
};

const actions = {
	[RESOURCES_REQUEST]: ({ commit }, id) => {
		return new Promise((resolve, reject) => {
			commit(RESOURCES_REQUEST);
			getResources(id)
				.then((resp) => {
					console.log('MY RESOURCES', resp);
					commit(RESOURCES_SUCCESS, resp);
					resolve(resp);
				})
				.catch(async (err) => {
					let error = await err;
					commit(RESOURCES_ERROR);
					reject(error);
				});
		});
	},
};

const mutations = {
	[RESOURCES_REQUEST]: (state) => {
		state.loading = true;
	},
	[RESOURCES_SUCCESS]: (state, resp) => {
		state.loading = false;
		state.resources = resp;
	},
	[RESOURCES_ERROR]: (state) => {
		state.loading = false;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
