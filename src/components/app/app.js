import  React,{ useEffect } from 'react';
import  ProductServises  from '../hok/ProductServises'
import  { Route, Switch} from 'react-router-dom'
import { Homepage,Profile,NotFound } from '../pages'
import axios from 'axios'
   

const App = ({ ServiceProvider })=>{
    useEffect(() => {
        const accessToken = localStorage.getItem('accssesToken');
        const refreshToken = localStorage.getItem('refreshToken')
        if (accessToken) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
          fetchingAccsses()
        }
      }, []);
    
    const fetchingAccsses =  async ()=> {
      const data = await axios.post('/auth')
      console.log(data);
      
    }  
    console.log(ServiceProvider.getproduct());
    
    return (
       <Switch>
           <Route path='/' component={Homepage} exact/>

           <Route path='/profile' component={ Profile } exact/>
           <Route path="*" component={NotFound} />
       </Switch>
    )
}

export default ProductServises()(App)