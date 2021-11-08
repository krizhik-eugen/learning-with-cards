import {Dispatch} from 'redux'

const initialState = {}

export const newPassReducer = (state = initialState, action: ActionsType): any => {
    switch (action.type) {

        default:
            return state
    }
}







// actions
export const firstNewPassReducerAC = (payload: any) => ({type: 'some-type', payload} as const)


// thunks
export const firstNewPassReducerTC = (payload: string) => (dispatch: Dispatch) => {
    //servers requests
}



// types

type ActionsType =
    | ReturnType<typeof firstNewPassReducerAC>

type ThunkDispatch = any
