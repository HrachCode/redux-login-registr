import React from 'react'
import {connect} from 'react-redux'
import {fetchData, error} from '../../actions/action'
import {Button, Form} from 'react-bootstrap';
import axios from 'axios'
import './style.css'
class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }
    
    onchaing = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    hendlSubmit = async(e) => {
        const { userload,profile } = this.props
        e.preventDefault()
        try {
            const {email, password} = this.state
            const data = { email,password }
            const query = await axios.post('/login', data)
            localStorage.setItem('refreshtoken',query.data.refreshToken)
            localStorage.setItem('accssesToken',query.data.accessToken)
            console.log(query.data.refreshToken);
            
            userload(query.data.user)
            console.log(query.data.user);
            
            if (query.data.user) {

               profile('/profile')
        }
        } catch (error) {
           if(error){
               
            this.props.error(error.message)
           }
            
        }
    }
    
    
    render() {

        return (
            <div className="center">
                {this.props.err && <h1>{this.props.err}</h1> }
                <Form onSubmit={this.hendlSubmit}>
                    <Form.Group controlId="formBasicEmail">

                        <Form.Control
                            name="email"
                            type="text"
                            placeholder="Enter email"
                            onChange={(this.onchaing)}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">

                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={this.onchaing}/>
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
    return {err: state.reduser.err, myloader: state.reduser.loader}
}
const mapDispatchToProps = {
    error,
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)