export const personReducer = (state = {
    id: '',
    name: '',
    messages: '',
    loggedIn: false
}, action) => {
    switch(action.type){
        case 'GET_USER':
            let user = action.user
            return{
                id: user._id,
                name: user.name,
                image: user.image,
                status: user.status,
                species: user.species,
                location: user.location,
                type: user.type,
                loggedIn: true 
            } //add messages later
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
