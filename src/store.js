import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension"; // 크롬 디버깅 도와줌
import thunk from "redux-thunk"; // 비동기 action도 가능하게 도와줌
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

// store 생성 및 reducer와 연결
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;