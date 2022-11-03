import React, {Fragment, useEffect} from 'react';
import {Route, Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from "../actions/commonActions";

const Time = ({time, index}) => {
    let dayOfWeeks = [
        "월",        
        "화",        
        "수",        
        "목",        
        "금",        
        "토",        
        "일",
    ];
    
    useEffect(() => {

    }, []);

    return (
            <div className="time"><span className="date">{dayOfWeeks[index]}</span>{time.open}~{time.close}</div>
    );
};

const mapState = (state) => {
    return {

    }
};

const mapDispatch = (dispatch) => {
    return {

    }
};

export default connect(mapState, mapDispatch)(Time);
