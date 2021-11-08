import React from 'react';
import {NavLink} from 'react-router-dom';
import {path} from '../routes/Routes';


export const Header = () => {
    return (
        <div>
            Header
            <NavLink to={path.login}>Login</NavLink>
            <NavLink to={path.registration}>Registration</NavLink>
            <NavLink to={path.profile}>Profile</NavLink>
            <NavLink to={path.recovering}>Password recovering</NavLink>
            <NavLink to={path.newPassword}>New password creation</NavLink>
            <NavLink to={path.testPage}>Test page</NavLink>
            <NavLink to={path['404']}>404</NavLink>
        </div>
    )
}