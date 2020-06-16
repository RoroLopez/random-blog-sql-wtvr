import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

const Navigation = () => {
    return (
        <div>
            <Link to={ROUTES.SIGNUP}></Link>
            <Link to={ROUTES.ACCOUNT}></Link>
        </div>
    );
}

export default Navigation;