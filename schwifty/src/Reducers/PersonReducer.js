const personReducer = (state = {
    id: '',
    name: '',
    messages: '',
    loggedIn: false
}, action) => {
    switch(action.type){
        case 'GET_USER':
            return{
                id: action.id,
                name: action.name,
                messages: action.messages,
                loggedIn: true 
            }
        case 'LOGOUT':
            return{
                id: '',
                name: '',
                messages: '',
                loggedIn: false
            }
        case 'NEW_MESSAGE':
            return{
                ...state
            }
        default:
            return{
                ...state
            }
    }
}

export default personReducer