import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

//import { selectCurrentUser } from '../../redux/user/user.selectors';
//import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
//import CartIcon from '../cart-icon/cart-icon.component';
//import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({ currentUser, hidden}) => (
 <div className='header'>
  <Link className='logo-container' to='/'>
    <Logo className='logo' />
  </Link>

  <div className='options'>
    <Link className='option' to='/garage'>
      GARAGE
    </Link>
    <Link className='option' to='/shop'>
      CONTACT
    </Link>
    {
       currentUser ?
        <div className='option' onClick = {() => auth.signOut()}><span className='user'>{currentUser.displayName}</span>SIGN OUT</div>
        :
        <Link className='option' to='/signin'> SIGN IN </Link>
    }
    
  </div>
  
  
 </div>
);

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps) (Header);
