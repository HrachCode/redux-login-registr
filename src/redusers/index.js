const initialstate = {
    err: false,
    loader:false,
}

const reduser = (state = initialstate, action) => {
    switch (action.type) {
        case 'ERROR':
        
            return {
                ...state,
                err:action.payload
            };
        case 'FETCHIN_DATA':
            
            return {
                
            ...state,
            goods:action.payload
            };
        case 'LOADED':
            return {
                ...state,loader:action.payload
            }
          
        default:
            return state
    }

}

export default reduser