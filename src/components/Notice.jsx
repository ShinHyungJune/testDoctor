import React, {Fragment, useEffect, useState} from 'react';
import {Route, Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from "../actions/commonActions";

const Notice = ({item, changeTarget, target, ...rest}) => {
    // ...rest는 props 기타등등 이라는 뜻
    // location은 라우터의 현재 위치

    let [itemClass, setItemClass] = useState("notice");

    useEffect(() => {
        target && target.notice_idx == item.notice_idx
            ? setItemClass("notice active")
            : setItemClass("notice");
    }, [target]);

    return (
        <div className={itemClass} onClick={() => changeTarget(item)}>
            <p className="id">{item.notice_idx}</p>
            <p className="title">{item.title}</p>
            <p className="date">{item.reg_date.substr(0, 10)}</p>
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

export default connect(mapState, mapDispatch)(Notice);
