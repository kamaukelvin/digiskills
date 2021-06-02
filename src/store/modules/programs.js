import { PROGRAMS_REQUEST, PROGRAMS_ERROR, PROGRAMS_SUCCESS } from '../actions/programs';
import { getPrograms } from '../../services/apiSrv';
import Vue from 'vue';

const state = { loading: false, programs: [] };

const getters = {
	getPrograms: (state) => state.programs,
	isProgramsLoaded: (state) => state.loading,
};

const actions = {
	[PROGRAMS_REQUEST]: ({ commit }) => {
		commit(PROGRAMS_REQUEST);
		getPrograms()
			.then((resp) => {
				commit(PROGRAMS_SUCCESS, resp);
			})
			.catch(() => {
				commit(PROGRAMS_ERROR);
			});
	},
};

const mutations = {
	[PROGRAMS_REQUEST]: (state) => {
		state.loading = true;
	},
	[PROGRAMS_SUCCESS]: (state, resp) => {
		state.loading = false;
		Vue.set(state, 'programs', resp.programs);
	},
	[PROGRAMS_ERROR]: (state) => {
		state.loading = false;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
