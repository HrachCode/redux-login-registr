import React from 'react'
import {connect} from 'react-redux'


 function Profile({ history,user }) {
    
    
     if(!user.user){     
         history.push('/NotFound')
     }
     const { id,name,email } = user.user
     
    return (
        <div>
            <h3>{ name }</h3>
            <h3>{ email }</h3>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        user: state.user,
      
    }
}
export default connect(mapStateToProps)(Profile)