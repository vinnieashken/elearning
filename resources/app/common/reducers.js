import {SUBJECTS_LOADED, SUBSCRIPTION_LOADED} from "./constants";

const initialState = {
    subscription: {},
    subjects: [],
    tenants: [],
    movies: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SUBSCRIPTION_LOADED:
            return Object.assign({}, state, {
                subscription: action.payload
            });

        case SUBJECTS_LOADED:
            return Object.assign({}, state, {
                subjects: action.payload
            });

        default:
            return state;
    }
}

export default rootReducer;
