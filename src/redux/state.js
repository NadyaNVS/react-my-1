let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 15},
                {id: 2, message: "It's my first post", likes: 55},
            ],
            newPostText: ""
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
            ],
            newMessageText: "",
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
    },
    _callSubscriber() {
        console.log('state is changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addPost() {
    //     let newPost = {
    //         id: 3,
    //         message: this._state.profilePage.newPostText,
    //         likes: 0,
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = "";
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // addMessage() {
    //     let newMessage = {
    //         id: 7,
    //         message: this._state.dialogsPage.newMessageText,
    //     };
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = ""
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageText(newTextMessage) {
    //     this._state.dialogsPage.newMessageText = newTextMessage;
    //     this._callSubscriber(this._state);
    // },
    dispatch(action) { //{type: 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likes: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = ""
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newTextMessage;
            this._callSubscriber(this._state);
        }
    },

}


export default store;
