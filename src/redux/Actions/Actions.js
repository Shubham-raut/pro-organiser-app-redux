import { SET_BOARD_DATA, SET_BOARD_FETCH_ERROR } from '../CONSTANTS';

export const setBoardData = (data) => {
    return {
        type: SET_BOARD_DATA,
        payload: data,
    }
}

export const setBoardFetchError = (error) => {
    return {
        type: SET_BOARD_FETCH_ERROR,
        payload: error,
    }
}



// export const setLoading = () => {
//     return {
//         type:SET_LOADING
//     }
// }



// export const actionRequest = () => {
//     return {
//         type: 'ACTION_REQUEST'
//     }
// }

// export const actionSuccess = (data) => {
//     return {
//         type: 'ACTION_SUCCESS',
//         payload: data
//     }
// }

// export const actionFailure = (error) => {
//     return {
//         type: 'ACTION_FAILURE',
//         payload: error
//     }
// }




// export const fetchUsersRequest = () => {
//     return {
//         type: FETCH_USERS_REQUEST
//     }
// }

// export const fetchUsersSuccess = (users) => {
//     return {
//         type: FETCH_USERS_SUCCESS,
//         payload: users
//     }
// }

// export const fetchUsersFailure = (error) => {
//     return {
//         type: FETCH_USERS_FAILURE,
//         payload: error
//     }
// }

// export const fetchUsers = () => {
//     return (dispatch) => {
//         dispatch(fetchUsersRequest)
//         axios.get('https://jsonplaceholder.typicode.com/users/')
//             .then(response => {
//                 const users = response.data
//                 dispatch(fetchUsersSuccess(users))

//             })
//             .catch(error => {
//                 const errorMsg = error.message
//                 dispatch(fetchUsersFailure(errorMsg))
//             })
//     }
// }