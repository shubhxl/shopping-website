import React, { Component } from 'react';
import './sign-in.scss';
import Forminput from '../form-input/forminput';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {

    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ email: '', password:''})
    }

    handleChange = e => {
        const {name, value} = e.target;
        console.log(name)
        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with email and password</span>
               
                <form onSubmit={this.handleSubmit}>
                    <Forminput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label="Email"
                        required 
                    />
                   
                    <Forminput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label="Password"
                        required 
                    />
                    
                    <div className="buttons">
                    <CustomButton type="submit" > 
                        Sign In
                    </CustomButton>

                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                        Sign In with Google
                    </CustomButton>
                    </div>

                </form>
            
            </div>
        )
    }
}
