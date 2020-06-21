import React from 'react'
import { ServiceConsumer } from '../servises'


const ProductServises = () => ( Wraped ) =>{
    return (props)=>{
        return  (
           <ServiceConsumer>
                {
                    (serviceProvider)=>{
                      return  <Wraped {...props} ServiceProvider={serviceProvider}/>
                    }
                }
           </ServiceConsumer>
        )
    }
}

export default ProductServises

