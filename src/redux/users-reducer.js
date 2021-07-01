import {usersAPI} from './../api/api.js';

const
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [
        // {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg/280px-The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg', followed: true, fullName: 'Ruslan', status: 'I am a boss', location: {city: 'Kazan', country: 'Russia'}},
        // {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg/280px-The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg', followed: false, fullName: 'Stas', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg/280px-The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg', followed: false, fullName: 'Alex', status: 'I am a boss', location: {city: 'Washington', country: 'USA'}},
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 4,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => u.id == action.userId ? {...u, followed: true} : u)
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => u.id == action.userId ? {...u, followed: false} : u)
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default: return state
    }
}

export const followAC = userId => ({type: FOLLOW, userId})
export const unfollowAC = userId => ({type: UNFOLLOW, userId})
export const setUsersAC = users => ({type: SET_USERS, users})
export const setCurrentPageAC = currentPage => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalCountAC = totalCount => ({type: SET_TOTAL_COUNT, totalCount})
export const toggleIsFetchingAC = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})


// thunk objects
export const getUsersThunkCreator = (currentPage, pageSize) => dispatch => {
    dispatch(toggleIsFetchingAC(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetchingAC(false));
        dispatch(setTotalCountAC(data.totalCount));
        dispatch(setUsersAC(data.items));
    });
}

export const followThunkCreator = u => dispatch => {
    usersAPI.follow(u)
    .then(response => {
        if (response.data.resultCode == 0) {
            dispatch(unfollowAC(u.id))
        }
    });
}

export const unfollowThunkCreator = u => dispatch => {
    usersAPI.unfollow(u)
    .then(response => {
        if (response.data.resultCode == 0) {
            dispatch(followAC(u.id))
        }
    });
}

export default usersReducer;