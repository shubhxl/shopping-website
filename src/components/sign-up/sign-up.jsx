import React, { Component } from 'react';
import './sign-up.scss';
import Forminput from '../form-input/forminput';
import CustomButton from '../custom-button/custom-button';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends Component {

    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Password don't match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, displayName)
            console.log(displayName)
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        } catch(err){
            console.log(err)
        }
    }

    handleChange = event => {
        const { name, value} = event.target;
        console.log(value)
        this.setState({ [name]: value })
    }
    

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className="title">I don't have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <Forminput type='text' name='displayName' label='Display Name' value={displayName} handleChange={this.handleChange} required />
                    <Forminput type='email' name='email' label='Email' value={email} handleChange={this.handleChange} required />
                    <Forminput type='password' name='password' label='Password' value={password} handleChange={this.handleChange} required />
                    <Forminput type='password' name='confirmPassword' label='Confirm Password' value={confirmPassword} handleChange={this.handleChange} required />
                    <CustomButton type='submit'> SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;
