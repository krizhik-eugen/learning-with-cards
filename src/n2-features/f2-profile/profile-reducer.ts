import {Dispatch} from 'redux'

const initialState = {}

export const profileReducer = (state = initialState, action: ActionsType): any => {
    switch (action.type) {

        default:
            return state
    }
}







// actions
export const firstProfileReducerAC = (payload: any) => ({type: 'some-type', payload} as const)


// thunks
export const firstProfileReducerTC = (payload: string) => (dispatch: Dispatch) => {
    //servers requests
}



// types

type ActionsType =
    | ReturnType<typeof firstProfileReducerAC>

type ThunkDispatch = any
