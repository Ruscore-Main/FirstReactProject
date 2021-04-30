const
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg/280px-The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg', followed: true, fullName: 'Ruslan', status: 'I am a boss', location: {city: 'Kazan', country: 'Russia'}},
        // {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg/280px-The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg', followed: false, fullName: 'Stas', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg/280px-The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg', followed: false, fullName: 'Alex', status: 'I am a boss', location: {city: 'Washington', country: 'USA'}},
    ]
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default: return state
    }
}

export const followAC = userId => ({type: FOLLOW, userId})
export const unfollowAC = userId => ({type: UNFOLLOW, userId})
export const setUsersAC = users => ({type: SET_USERS, users})

export default usersReducer;