export const personReducer = (state = {
    user: {
        id: '',
        name: '',
        status: '',
        image: '',
        species: '',
        location: '',
        type: '',
        messages: '',
        posts: [],
        loggedIn: false
    },
    users: []
}, action) => {
    switch(action.type){
        case 'GET_USER':
            let user = action.user
            debugger
            return{
                ...state,
                user: {
                    id: user.person._id,
                    name: user.person.name,
                    image: user.person.image,
                    status: user.person.status,
                    species: user.person.species,
                    location: user.person.location,
                    type: user.person.type,
                    posts: [...user.posts],
                    loggedIn: true
                }
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
