import {FETCHING, SUCCESS} from './actions'

export const INITIAL_STATE = {
    address: '',
    district: '',
    city: '',
    state: '',
    code: '',
    status: 1,
    isFetching: false,
};

const address = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case SUCCESS:
            return {
                ...state,
                ...action.payload,
                isFetching: false,
            };
        default :
            return state
    }

};

export default address;
