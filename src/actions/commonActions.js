import axios from 'axios';

export const login = (user, token, onLogin) => {
	return (dispatch) => {
		
		// 토큰 설정
		dispatch({
			type: "SET_TOKEN",
			payload: token
		});

		localStorage.setItem("token", JSON.stringify(token));
		localStorage.setItem("user", JSON.stringify(user));

		// 사용자 설정
		if(user.type === 'admin')
			return onLogin();

		axios.get(window.domain + "/api/" + user.type)
			.then(response => {
				dispatch({
					type: "SET_USER",
					payload: {
						...user,
						...response.data.data
					}
				});

				onLogin();
			});

		// 사용자 설정
		/*axios.get(window.domain + "/api/doctor")
				.then(response => {
					dispatch({
						type: "SET_USER",
						payload: response.data.data
					});

					localStorage.setItem("user", JSON.stringify(response.data.data));

					onLogin();
				});*/
	}
};

export const setUser = (data) => {
	return (dispatch) => {
		dispatch({
			type: "SET_USER",
			payload: data
		});

		localStorage.setItem("user", JSON.stringify(data));
	}
};

export const setFlash = (data) => {
	return (dispatch) => {
		dispatch({
			type: SET_FLASH,
			payload: data
		})
	}
};

export const setLoading = (data) => {
	return (dispatch) => {
		dispatch({
			type: "SET_LOADING",
			payload: data
		});

	}
};

export const logout = () => {
	return (dispatch) => {
		dispatch({
			type: "SET_USER",
			payload: null
		});

		dispatch({
			type: "SET_TOKEN",
			payload: null
		});

		localStorage.removeItem("user");
		localStorage.removeItem("token");

		/* axios.post("/logout").then(response => {
			dispatch({
				type: "SET_USER",
				payload: null
			});

			dispatch({
				type: "SET_TOKEN",
				payload: null
			});

			localStorage.removeItem("user");
			localStorage.removeItem("token");
		});

		 */
	}
};
