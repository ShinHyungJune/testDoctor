import React, {useState} from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import {login, setUser} from "../actions/commonActions";
import {Link} from "react-router-dom";

const Login = ({login, history}) => {
	let [form, setForm] = useState({
		id: "",
		pw: ""
	});

	const changeForm = (event) => {
		setForm({
			...form,
			[event.target.name] : event.target.value
		});
	};

	const submit = (event) => {
		event.preventDefault();

		axios.post(window.domain + "/api/admin/login", form)
			.then(response => {
				login({id: form.id, type:"admin"}, response.data.accessToken, onLogin);

				/*axios.get(window.domain + "/api/admin")
					.then(response => {
						setUser(response.data.data);
					});*/
			}).catch(error => {
				alert(error.response.data.message);
		});
	};

	const onLogin = () => {
		history.push("/admin/notices");
	};

	return (
			<div className="area-login">
				<div className="wrap-small">
					<img src="/img/logo-1.png" alt="" className="logo"/>

						<form onSubmit={submit}>
							<div className="m-input-text type01">
								<input type="text" placeholder="아이디 입력" name={"id"} onChange={changeForm} />
							</div>

							<div className="mt-16"></div>

							<div className="m-input-text type01">
								<input type="password" placeholder="비밀번호 입력" name={"pw"} onChange={changeForm} />
							</div>

							<div className="mt-24"></div>

							<button className="m-btn type01 width-100">로그인</button>

							{/*<div className="mt-16"></div>

							<div className="utils">
								<Link to="/register" className="util">회원가입</Link>
							</div>*/}
						</form>
				</div>
			</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: (user, token, onLogin) => {
			return dispatch(login(user, token, onLogin));
		},

		setUser: (data) => {
			return dispatch(setUser(data));
		},
	}
};

export default connect(null, mapDispatchToProps)(Login);