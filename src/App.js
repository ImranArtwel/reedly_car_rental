import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from './redux/user/user-actions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import SignInAndSignUpPage from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component';
import './App.css';

class App extends React.Component{
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { authenticatedUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          authenticatedUser({
              id: snapshot.id,
              ...snapshot.data()
          });
        });
        
      }

      else {
        authenticatedUser(userAuth);
      }
      
      
      
    });
  }

  componentWillUnmount(){
     this.unsubscribeFromAuth();
  }

  render(){
    const { currentUser } = this.props;
    return (
      <div>
       <Header />
        <Switch>
          <Route exact path='/' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  authenticatedUser: user => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
