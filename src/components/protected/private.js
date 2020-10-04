import React,{ Fragment,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isAuth } from '../../actions/auth';

const Private = ({ children }) => {
    const history = useHistory();
    useEffect(() => {
        if (!isAuth()) {
            history.push(`/`);
        }
    }, []);
    return <Fragment>{children}</Fragment>;
};

export default Private;
