const initialstate = {
    goods: false,
    loader:false,
}

const reduser = (state = initialstate, action) => {
    switch (action.type) {
        case 'GOODS_LOADED':
        
            return {
                ...state,
                goods:action.payload
            };
        case 'FETCHIN_DATA':
            
            return {
                
            ...state,
            goods:action.payload
            };
        case 'LOADED':
            console.log(action.payload);
          if (action.payload === 'start' ) {
            
              
              return {
                  ...state,loader:true
              }
          } else {
            return {
                ...state,loader:false
            }
          }
          
        default:
            return state
    }

}

export default reduser