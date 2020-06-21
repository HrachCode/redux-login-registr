import  React from 'react';
import  ProductServises  from '../hok/ProductServises'
import  { Route, Switch} from 'react-router-dom'
import { Homepage,Profile,NotFound } from '../pages'

   

const App = ({ ServiceProvider })=>{
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