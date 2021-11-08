import {Dispatch} from 'redux'

const initialState = {}

export const recoveringPassReducer = (state = initialState, action: ActionsType): any => {
    switch (action.type) {

        default:
            return state
    }
}







// actions
export const firstRecoveringPassReducerAC = (payload: any) => ({type: 'some-type', payload} as const)


// thunks
export const firstRecoveringPassReducerTC = (payload: string) => (dispatch: Dispatch) => {
    //servers requests
}



// types

type ActionsType =
    | ReturnType<typeof firstRecoveringPassReducerAC>

type ThunkDispatch = any
