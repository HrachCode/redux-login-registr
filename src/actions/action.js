import axios from 'axios'


export const loader  = (newGoods)=>{
    return {
        type: 'LOADED',
        payload: newGoods   
    }
}

export const error = (err) =>{
  return { type: 'ERROR', payload: err }
}



export const fetchData = (fetch)=> async (dispatch)=>{
   try {
   
    const data = await axios.get(fetch);
   
   

   } catch (error) {
     console.log(error);
     
   }

}

export const userload  = (newGoods)=>{
  return {
      type: 'USER_LOADED',
      payload: newGoods   
  }
}
