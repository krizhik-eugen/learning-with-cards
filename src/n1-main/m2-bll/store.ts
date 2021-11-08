import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { loginReducer } from '../../n2-features/f1-auth/a1-login/login-reducer';
import { authReducer } from '../../n2-features/f1-auth/auth-reducer';
import { profileReducer } from '../../n2-features/f2-profile/profile-reducer';


const reducers = combineReducers({
    auth: authReducer,
    login: loginReducer,
    profile: profileReducer,
})

export type AppStoreType = ReturnType<typeof reducers>

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))