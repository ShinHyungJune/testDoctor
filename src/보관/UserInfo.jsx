import React, {Component} from 'react';
import {connect} from "react-redux";

const UserInfo = ({user}) => {
	return (
		<div>
			로그인 사용자만 들어올 수 있는 페이지입니다.

			<br/>
			{user.email}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.common.user
	}
};

export default connect(mapStateToProps,null)(UserInfo);