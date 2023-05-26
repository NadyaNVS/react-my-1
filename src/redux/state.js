let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likes: 15},
            {id: 2, message: "It's my first post", likes: 55},
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How was your day?'},
            {id: 3, message: 'Nice, and you?'},
            {id: 4, message: 'Good, thanks'},
            {id: 5, message: 'Plan for weekend?'},
            {id: 6, message: 'No'},
        ],
        dialogs: [
            {id: 1, name: 'Herman'},
            {id: 2, name: 'Joe'},
            {id: 3, name: 'Love'},
            {id: 4, name: 'Anna'},
            {id: 5, name: 'Maria'},
            {id: 6, name: 'Alex'},
        ]
    },
    friendsSide: {
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
};

export default state;
