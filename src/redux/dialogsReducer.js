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
        {id: 1, name: 'Herman'},
        {id: 2, name: 'Joe'},
        {id: 3, name: 'Love'},
        {id: 4, name: 'Anna'},
        {id: 5, name: 'Maria'},
        {id: 6, name: 'Alex'},
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
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newTextMessage;
            return state;

        default:
            return state;
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextCreator = (message) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: message});

export default dialogsReducer;
