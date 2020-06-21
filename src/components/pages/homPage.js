import React from 'react'
import {connect} from 'react-redux'
import { fetchData,loader,userload } from '../../actions/action'
import Register from './cartPage';
import Login from './login'
import './style.css'


 class Hompage extends React.Component {
    state={
        name:'',
        email:'',
        password:'',
        visibility:''
    }
    visibility = (prop)=>{
        this.setState({visibility:prop})
    }
   profile = (prop)=>{
       this.props.history.push(prop)
   }
    render() {
    const { visibility } = this.state
        return (
            <div>
                <div className = {'header'}>
                    <p onClick = {()=>this.visibility('')}>login</p>
                    <p onClick = {()=>this.visibility(true)}>registeratin</p>
                </div>
            <div className = "center">
             {visibility? <Register visibility={this.visibility}/>:<Login profile={this.profile} userload={this.props.userload}/>} 
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        magazine: state.reduser,
        myloader:state.reduser.loader
    }
}
const mapDispatchToProps = {
    loader ,
    fetchData,
    userload
}

export default connect(mapStateToProps, mapDispatchToProps)(Hompage)