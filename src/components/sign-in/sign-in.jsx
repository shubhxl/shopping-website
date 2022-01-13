import React, { Component } from 'react';
import './sign-in.scss';
import Forminput from '../form-input/forminput';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {

    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password:''})
        } catch(e){
            console.log(e)
        }

        
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

                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> 
                        Sign In with Google
                    </CustomButton>
                    </div>

                </form>
            
            </div>
        )
    }
}
