
import { SET_BOARD_DATA, SET_BOARD_FETCH_ERROR } from "../CONSTANTS";

const initialState = {

    loading: true,
    user: [],
    error: '',
    boardData: [],
}


const Reducers = (state = { ...initialState }, action) => {
    switch (action.type) {

        case SET_BOARD_DATA:
            return {
                ...state,
                boardData: action.payload,
                loading: false,
                error: ''
            }

        case SET_BOARD_FETCH_ERROR:
            return {
                ...state,
                boardData: [],
                loading: false,
                error: action.payload
            }


        // case FETCH_USERS_REQUEST:
        //     return {
        //         ...state,
        //         loading: true
        //     }
        // case FETCH_USERS_SUCCESS:
        //     return {
        //         loading: false,
        //         users: action.payload,
        //         error: ''
        //     }
        // case FETCH_USERS_FAILURE:
        //     return {
        //         loading: false,
        //         user: [],
        //         error: action.payload
        //     }
        default: return state
    }

}

export default Reducers;



