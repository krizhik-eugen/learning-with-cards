import {Dispatch} from 'redux'

const initialState = {}

export const registerReducer = (state = initialState, action: ActionsType): any => {
    switch (action.type) {

        default:
            return state
    }
}







// actions
export const firstRegisterReducerAC = (payload: any) => ({type: 'some-type', payload} as const)


// thunks
export const firstRegisterReducerTC = (payload: string) => (dispatch: Dispatch) => {
    //servers requests
}



// types

type ActionsType =
    | ReturnType<typeof firstRegisterReducerAC>

type ThunkDispatch = any
