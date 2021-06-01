async function handle_api_error(error) {
	try {
		console.log('WE LANDED IN THAT PAGE FOR REAL', error);
		// UNAUTHORISED;

		return error.err_msg;
	} catch (err) {
		return err;
	}
}

export { handle_api_error };
