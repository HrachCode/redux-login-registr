const initialstate = {
   user:''
}

const user = (state = initialstate, action) => {
    switch (action.type) {
        case 'USER_LOADED':
        
            return {
                ...state,
                user:action.payload
            };
      
        default:
            return state
    }

}

export default user