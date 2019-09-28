import { LOGIN_USER } from './user-types';

export const loginUser = (user) => ({
    type: LOGIN_USER,
    payload: user
    }
);