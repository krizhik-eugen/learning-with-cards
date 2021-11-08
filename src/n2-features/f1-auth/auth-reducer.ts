import {Dispatch} from 'redux'

const initialState = {}

export const authReducer = (state = initialState, action: ActionsType): any => {
    switch (action.type) {

        default:
            return state
    }
}







// actions
export const firstAuthReducerAC = (payload: any) => ({type: 'some-type', payload} as const)


// thunks
export const firstAuthReducerTC = (payload: string) => (dispatch: Dispatch) => {
    //servers requests
}



// types

type ActionsType =
    | ReturnType<typeof firstAuthReducerAC>

type ThunkDispatch = any
