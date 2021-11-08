import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { loginReducer } from '../../n2-features/f1-auth/a1-login/login-reducer';
import { profileReducer } from '../../n2-features/f2-profile/profile-reducer';
import {registerReducer} from '../../n2-features/f1-auth/a2-register/register-reducer';
import {recoveringPassReducer} from '../../n2-features/f1-auth/a3-pass-recovering/recoveringpass-reducer';
import { newPassReducer } from '../../n2-features/f1-auth/a4-newpass-creation/newpass-reducer';


const reducers = combineReducers({
    login: loginReducer,
    registration: registerReducer,
    recover: recoveringPassReducer,
    newPass: newPassReducer,
    profile: profileReducer,

})

export type AppStoreType = ReturnType<typeof reducers>

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))