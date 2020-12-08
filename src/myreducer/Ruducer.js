const iState = {
    data: [],
}
const Reducer = (state = iState, action) => {
    switch (action.type) {

        case 'GET_DATA': return {
          
        
            data: action.payload

        }
        default: return state;
    }

}

export default Reducer;