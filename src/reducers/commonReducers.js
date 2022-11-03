import {getLocalToken, getLocalUser} from "../utils/auth";

let user = getLocalUser();
let token = getLocalToken();

const initialState = { // 초기값
	user: user,
	token: token,
	loading: false,
	flash: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;

		case "SET_USER":
			return {
				...state,
				user: action.payload
			};

		case "SET_TOKEN":
			return {
				...state,
				token: action.payload
			};

		case "SET_FLASH":
			return {
				...state,
				flash: action.payload
			};

		case "SET_LOADING":
			return {
				...state,
				loading: action.payload
			}
	}
}