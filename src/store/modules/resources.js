import Vue from 'vue';
import {
	RESOURCES_REQUEST,
	RESOURCES_SUCCESS,
	RESOURCES_ERROR,
	ADD_RESOURCE_REQUEST,
	ADD_RESOURCE_SUCCESS,
	ADD_RESOURCE_ERROR,
} from '../actions/resources';
import { getResources, addResource } from '../../services/apiSrv';

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
	[ADD_RESOURCE_REQUEST]: ({ commit, dispatch }, resource) => {
		return new Promise((resolve, reject) => {
			commit(ADD_RESOURCE_REQUEST);
			addResource(resource)
				.then((resp) => {
					console.log('MY RESOURCE added', resp);
					commit(ADD_RESOURCE_SUCCESS, resp);
					dispatch(RESOURCES_REQUEST);
					Vue.$toast.open({
						message: resp.message,
						type: 'success',
					});
					resolve(resp);
				})
				.catch(async (err) => {
					let error = await err;
					commit(ADD_RESOURCE_ERROR);
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
		state.resources = resp.resource;
	},
	[RESOURCES_ERROR]: (state) => {
		state.loading = false;
	},
	[ADD_RESOURCE_REQUEST]: (state) => {
		state.loading = true;
	},
	[ADD_RESOURCE_SUCCESS]: (state) => {
		state.loading = false;
	},
	[ADD_RESOURCE_ERROR]: (state) => {
		state.loading = false;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
