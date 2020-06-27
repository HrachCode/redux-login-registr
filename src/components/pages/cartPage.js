import React from 'react'
import {connect} from 'react-redux'
import { fetchData,loader,error } from '../../actions/action'
import { Button,Form } from 'react-bootstrap';
import axios from 'axios'
import './style.css'
 class Register extends React.Component {
    state={
        name:'',
        email:'',
        password:'',
    }

    onchaing = (e)=>{
       
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    hendlSubmit = async(e)=>{
        e.preventDefault()
      try {
        const { name, email, password } = this.state
        const data = {
            name,
            email,
            password
        }
      const query = await axios.post('/registr',data)
      console.log(query);
      
      this.props.visibility('')
      
      } catch (error) {
          console.log(error);
          
      }
    }
    render() {
    
     
        return (
            <div className =  "center">
                {this.props.err && <h1>{this.props.err}</h1>}
                <Form onSubmit = {this.hendlSubmit}>
                    <Form.Group controlId="formBasicEmail">
                     
                        <Form.Control name="email" type="text"  placeholder="Enter email" onChange = {(this.onchaing)}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>


                    <Form.Group controlId="formBasicName">
                       
                        <Form.Control type="text" name="name" placeholder="Enter yor name" onChange = {this.onchaing}/>
                       
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    
                        <Form.Control name="password" type="password" placeholder="Password" onChange = {this.onchaing}/>
                    </Form.Group>
                   
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        magazine: state.reduser,
        myloader:state.reduser.loader,
        err:state.reduser.err
    }
}
const mapDispatchToProps = {
    loader ,
    fetchData,
    error
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)