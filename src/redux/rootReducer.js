import { combineReducers } from 'redux'
import userReducer from './user/user-reducer';
import directoryReducer from './directory/directory-reducer';
import shopReducer from './shop/shop.reducer';
import cartReducer from './cart/cart-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryReducer,
  shop: shopReducer,
  cart: cartReducer
});

export default rootReducer;