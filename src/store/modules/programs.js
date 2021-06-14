import {
	PROGRAMS_REQUEST,
	PROGRAMS_ERROR,
	PROGRAMS_SUCCESS,
	SINGLE_PROGRAM_REQUEST,
	SINGLE_PROGRAM_SUCCESS,
	SINGLE_PROGRAM_ERROR,
	ADD_PROGRAM_REQUEST,
	ADD_PROGRAM_ERROR,
	ADD_PROGRAM_SUCCESS,
} from '../actions/programs';
import { getPrograms, getProgramById, addProgram } from '../../services/apiSrv';
import Vue from 'vue';

const state = { loading: false, programs: [], program: {} };

const getters = {
	getPrograms: (state) => state.programs,
	getSingleProgram: (state) => state.program,
	isProgramsLoaded: (state) => state.loading,
	isFeatured: (state) => state.programs.filter((program) => program.featured === 1),
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

	[SINGLE_PROGRAM_REQUEST]: ({ commit }, id) => {
		commit(SINGLE_PROGRAM_REQUEST);
		getProgramById(id)
			.then((resp) => {
				commit(SINGLE_PROGRAM_SUCCESS, resp);
			})
			.catch(() => {
				commit(SINGLE_PROGRAM_ERROR);
			});
	},

	[ADD_PROGRAM_REQUEST]: ({ commit }, program) => {
		commit(ADD_PROGRAM_REQUEST);
		addProgram(program)
			.then((resp) => {
				commit(ADD_PROGRAM_SUCCESS, resp);
			})
			.catch(() => {
				commit(ADD_PROGRAM_ERROR);
			});
	},
};

const mutations = {
	// fetch all programs

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

	// program by ID

	[SINGLE_PROGRAM_REQUEST]: (state) => {
		state.loading = true;
	},
	[SINGLE_PROGRAM_SUCCESS]: (state, resp) => {
		state.loading = false;
		Vue.set(state, 'program', resp);
	},
	[SINGLE_PROGRAM_ERROR]: (state) => {
		state.loading = false;
	},
	// Add a program

	[ADD_PROGRAM_REQUEST]: (state) => {
		state.loading = true;
	},
	[ADD_PROGRAM_SUCCESS]: (state) => {
		state.loading = false;
	},
	[ADD_PROGRAM_ERROR]: (state) => {
		state.loading = false;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
