import GARAGE_DATA from './cars';

const INITIAL_STATE = {
    cars: GARAGE_DATA
};

const garageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default garageReducer;