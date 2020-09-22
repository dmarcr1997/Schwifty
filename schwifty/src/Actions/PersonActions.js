export const getUser = () => {
    return (dispatch) => {
        fetch('http://localhost:4000/person/1')
        .then(resp => resp.json())
        .then(data => {
            return dispatch({type: 'GET_USER', user: data})
        })
        .catch(error => console.log(error.message))
    }
}