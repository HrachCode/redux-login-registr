import axios from 'axios'


export const loader  = (newGoods)=>{
    return {
        type: 'LOADED',
        payload: newGoods   
    }
}

export const load = (newGoods) =>{
  return { type: 'GOODS_LOADED', payload: newGoods }
}



export const fetchData = (fetch)=> async (dispatch)=>{
   try {
   
    const data = await axios.get(fetch);
    dispatch(load(data.data))
   

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
