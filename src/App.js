import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import DoctorLogin from './pages/DoctorLogin';
import DoctorRegister from './pages/DoctorRegister';
import Main from './pages/Main';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import UserInfo from './보관/UserInfo';
import Header from "./components/Header";
import AdminLogin from "./pages/AdminLogin";
import NoticesIndex from "./pages/NoticesIndex";
import DoctorAuthRoute from "./components/DoctorAuthRoute";
import AdminAuthRoute from "./components/AdminAuthRoute";

window.store = store;

const App = () => {

	return (
		<Provider store={store}>

			<BrowserRouter>
				<Header />

				<Switch>
					<DoctorAuthRoute exact path={"/"} component={Main} />
					<DoctorAuthRoute exact path={"/userInfo"} component={UserInfo} />

					<AdminAuthRoute exact path={"/admin/notices"} component={NoticesIndex} />

					<Route exact path={"/login"} component={DoctorLogin} />
					<Route exact path={"/admin/login"} component={AdminLogin} />
					<Route exact path={"/register"} component={DoctorRegister} />
				</Switch>
			</BrowserRouter>

		</Provider>
	);
};

export default App;
