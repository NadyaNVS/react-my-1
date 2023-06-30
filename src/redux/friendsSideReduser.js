let initialState = {
    friends: [
        {
            id: 1,
            src: 'https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
            alt: 'ava',
        },
        {
            id: 2,
            src: 'https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
            alt: 'ava',
        },
        {
            id: 3,
            src: 'https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
            alt: 'ava',
        },
    ]
}

const friendsSideReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.friends = [...state.friends]
    // return stateCopy;
    return state;
}

export default friendsSideReducer;
