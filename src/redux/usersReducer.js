const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET-USERS"

let initialState = {
    users: [
        // {id: 1, avatar: 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp', followed: false, fullName: 'Dmitry', status: 'I am looking for a job', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, avatar: 'https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png', followed: true, fullName: 'Olga', status: 'I like football', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, avatar: 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp', followed: true, fullName: 'Andrew', status: 'I\'m on vacation', location: {city: 'Philadelphia', country: 'United States'}},
        // {id: 4, avatar: 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp', followed: false, fullName: 'Sergei', status: 'I\'m a frontend developer', location: {city: 'Minsk', country: 'Belarus'}},
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                }),
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;
