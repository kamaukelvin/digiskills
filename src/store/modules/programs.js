import {
	PROGRAMS_REQUEST,
	PROGRAMS_ERROR,
	PROGRAMS_SUCCESS,
	SINGLE_PROGRAM_REQUEST,
	SINGLE_PROGRAM_SUCCESS,
	SINGLE_PROGRAM_ERROR,
	COURSE_REQUEST,
	COURSE_ERROR,
	COURSE_SUCCESS,
} from '../actions/programs';
import { getPrograms, getProgramById, addCourse } from '../../services/apiSrv';
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

	[COURSE_REQUEST]: ({ commit }, course) => {
		commit(COURSE_REQUEST);
		addCourse(course)
			.then((resp) => {
				commit(COURSE_SUCCESS, resp);
			})
			.catch(() => {
				commit(COURSE_ERROR);
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

	[COURSE_REQUEST]: (state) => {
		state.loading = true;
	},
	[COURSE_SUCCESS]: (state) => {
		state.loading = false;
	},
	[COURSE_ERROR]: (state) => {
		state.loading = false;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
