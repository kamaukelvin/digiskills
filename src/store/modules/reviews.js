import {
	REVIEWS_REQUEST,
	REVIEWS_SUCCESS,
	REVIEWS_ERROR,
	ADD_REVIEWS_REQUEST,
	ADD_REVIEWS_SUCCESS,
	ADD_REVIEWS_ERROR,
} from '../actions/reviews';
import { addReview, getReviews } from '../../services/apiSrv';

const state = {
	loading: false,
	reviews: [],
	error: '',
};

const getters = {
	isLoadingReviews: (state) => state.loading,
	getReviews: (state) => state.reviews,
};

const actions = {
	[REVIEWS_REQUEST]: ({ commit }, id) => {
		return new Promise((resolve, reject) => {
			commit(REVIEWS_REQUEST);
			getReviews(id)
				.then((resp) => {
					console.log('MY RESP', resp);
					commit(REVIEWS_SUCCESS, resp);
					resolve(resp);
				})
				.catch(async (err) => {
					let error = await err;
					commit(REVIEWS_ERROR);
					reject(error);
				});
		});
	},
	[ADD_REVIEWS_REQUEST]: ({ commit }, review) => {
		return new Promise((resolve, reject) => {
			commit(ADD_REVIEWS_REQUEST);
			addReview(review)
				.then((resp) => {
					commit(ADD_REVIEWS_SUCCESS, resp);
					resolve(resp);
				})
				.catch(async (err) => {
					let error = await err;
					commit(ADD_REVIEWS_ERROR);
					reject(error);
				});
		});
	},
};

const mutations = {
	[REVIEWS_REQUEST]: (state) => {
		state.loading = true;
	},
	[REVIEWS_SUCCESS]: (state, resp) => {
		state.loading = false;
		state.reviews = resp.reviews;
	},
	[REVIEWS_ERROR]: (state) => {
		state.loading = false;
	},

	[ADD_REVIEWS_REQUEST]: (state) => {
		state.loading = true;
	},
	[ADD_REVIEWS_SUCCESS]: (state) => {
		state.loading = false;
	},
	[ADD_REVIEWS_ERROR]: (state) => {
		state.loading = false;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
