import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({ currentUser, hidden}) => (
 <div className='header'>
  <Link className='logo-container' to='/'>
    <Logo className='logo' />
  </Link>

  <div className='options'>
    
    {
       currentUser ?
        <div className='option' onClick = {() => auth.signOut()}><span className='user'>{currentUser.displayName}</span>SIGN OUT</div>
        :
        <Link className='option' to='/signin'> SIGN IN </Link>
    }

    <CartIcon />
    
  </div>
  {
    hidden 
       ? null
       : <CartDropdown />
  }
  
  
 </div>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps) (Header);
