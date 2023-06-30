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
        {id: 1, userId: 'Herman', name: 'Herman'},
        {id: 2, userId: 'Joe', name: 'Joe'},
        {id: 3, userId: 'Love', name: 'Love'},
        {id: 4, userId: 'Anna', name: 'Anna'},
        {id: 5, userId: 'Maria', name: 'Maria'},
        {id: 6, userId: 'Alex', name: 'Alex'},
    ],
    newMessageText: "",
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 7,
                message: state.newMessageText,
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = "";
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newTextMessage;
            return stateCopy;
        }

        default:
            return state;
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextCreator = (message) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: message});

export default dialogsReducer;
