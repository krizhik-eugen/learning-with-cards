import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { TestPage } from '../../../n2-features/f0-test/TestPage';
import { Login } from '../../../n2-features/f1-auth/a1-login/Login';
import { Registration } from '../../../n2-features/f1-auth/a2-register/Registration';
import { PassRecovering } from '../../../n2-features/f1-auth/a3-pass-recovering/PassRecovering';
import {NewPasswordCreation} from '../../../n2-features/f1-auth/a4-newpass-creation/NewPassCreation';
import { Profile } from '../../../n2-features/f2-profile/Profile';
import {Error404} from '../../../n2-features/f2-profile/Error404';

export const path = {
    login: '/login',
    registration: "/registration",
    profile: "/profile",
    recovering: "/recovering",
    newPassword: '/newpassword',
    404: '/404',
    testPage: '/testpage',
}

export const RoutesComponent = () => {
    return (
        <Routes>
            <Route path={path.login} element={<Login/>}/>
            <Route path={path.registration} element={<Registration/>}/>
            <Route path={path.profile} element={<Profile/>}/>
            <Route path={path.recovering} element={<PassRecovering/>}/>
            <Route path={path.newPassword} element={<NewPasswordCreation/>}/>
            <Route path={path['404']} element={<Error404/>}/>
            <Route path={path.testPage} element={<TestPage/>}/>
            {/*<Route path={'*'} element={<Redirect to={path['404']}/>}/>*/}
        </Routes>
    )
}