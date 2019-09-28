import React from 'react';
import { auth,signInWithGoogle} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import  './sign-in.styles.scss';

class SignIn extends React.Component {
   constructor(props){
       super(props);
       this.state = {
          email: '',
          password: ''
       }
   }

   handleSubmit = async (event) => {
       event.preventDefault();
       const { email, password } = this.state;
       try {
         auth.signInWithEmailAndPassword(email,password);
         this.setState({email: '', password: ''});
       } catch (error) {
          console.log('user sign in error', error);
       }
       

       
   }

   handleChange =(event) => {
       const { name, value} = event.target;
       this.setState({[name]: value});
   }

   render(){
     const { email, password } = this.state;
    return (
        <div className='sign-in'>
          <h2 className='title'>I already have an account</h2>
          <span>Sign in with your email and password </span>

          <form onSubmit={this.handleSubmit}>
            
            <FormInput 
               type='email' 
               name='email' 
               value={email}
               handleChange = {this.handleChange}
               label='Email' 
               required
              />
             
            
            <FormInput 
               type='password' 
               name='password' 
               value={password}
               handleChange = {this.handleChange}
               label='Password' 
               required 
            />
            
            <div className='buttons'>
                <CustomButton type='submit'>
                   Sign In
                </CustomButton>
                <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>
                   Sign in with Google
                </CustomButton>
            </div>
            
          </form>
        </div>
    );
   }
}

export default SignIn;