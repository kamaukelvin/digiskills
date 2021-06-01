async function handle_api_error(error) {
	try {
		return error.message;
	} catch (err) {
		return err;
	}
}

export { handle_api_error };
