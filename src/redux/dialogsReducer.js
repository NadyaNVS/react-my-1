const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How was your day?'},
        {id: 3, message: 'Nice, and you?'},
        {id: 4, message: 'Good, thanks'},
        {id: 5, message: 'Plan for weekend?'},
        {id: 6, message: 'No'},
    ],
    dialogs: [
        {id: 1, userId: 'Herman', avatar: 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp', name: 'Herman'},
        {id: 2, userId: 'Joe', avatar: 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp', name: 'Joe'},
        {id: 3, userId: 'Love', avatar: 'https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png', name: 'Love'},
        {id: 4, userId: 'Anna', avatar: 'https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png', name: 'Anna'},
        {id: 5, userId: 'Maria', avatar: 'https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png', name: 'Maria'},
        {id: 6, userId: 'Alex', avatar: 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp', name: 'Alex'},
    ],
    newMessageText: "",
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: "",
            };


        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newTextMessage,
            };


        default:
            return state;
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextCreator = (message) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: message});

export default dialogsReducer;
