import React, {Fragment, useEffect} from 'react';
import {Route, Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from "../actions/commonActions";

const Header = ({location, user, token, logout, ...rest}) => {
    // ...rest는 props 기타등등 이라는 뜻
    // location은 라우터의 현재 위치
    useEffect(() => {
        if(token){
            if(Date.now() >= Date.parse(token.expires_at))
                logout();
        }
    }, []);

    return (
            <div className="header">
                <div className="wrap">
                    <Link to={"#"} className="logo">
                        <img src="/img/logo.png" alt=""/>
                    </Link>

                    <div className="right">
                        <nav className="navs">
                            {
                                user ? (
                                     <Fragment>
                                         <div className="nav">
                                             <Link to="/notices" className="text">공지사항</Link>
                                         </div>

                                         <div className="nav">
                                             <Link to="/mypage" className="text">마이페이지</Link>
                                         </div>

                                         <div className="nav point">
                                             <button className="text" onClick={logout}>로그아웃</button>
                                         </div>
                                     </Fragment>
                                        ) :
                                        (
                                        <Fragment>
                                            <div className="nav point">
                                                <Link to="/login" className="text">로그인</Link>
                                            </div>
                                        </Fragment>
                                )
                            }
                        </nav>
                    </div>
                </div>
            </div>
    );
};

const mapState = (state) => {
    return {
        user: state.common.user,
        token: state.common.token
    }
};

const mapDispatch = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
};

export default connect(mapState, mapDispatch)(Header);
