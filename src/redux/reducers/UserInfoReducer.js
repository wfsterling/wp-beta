import * as types from '../types';

const initialState = {
    username: 'test_user',
    firstName: 'Test',
    lastName: 'User'
};

export default function userInfoReducer(state = initialState, action) {
    switch(action.type) {
        case types.SET_USER_INFO:
            return {
                ...state,
                selectedCountry: action.name
            };
        default:
            return state;
    }
}
