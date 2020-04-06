import {ENV, NEXT_CHANGED, SUBJECTS_LOADED, SUBSCRIPTION_LOADED, SUBSCRIPTION_DELETED} from "./constants";

const initialState = {
    next: `${ENV}exams/modules`,
    loadingSubscription: true,
    subscription: {},
    subjects: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case NEXT_CHANGED:
            return Object.assign({
                next: action.payload
            });

        case SUBSCRIPTION_LOADED:
            return Object.assign({}, state, {
                subscription: action.payload,
                loadingSubscription: false
            });

        case SUBSCRIPTION_DELETED:
            return Object.assign({}, state, {
                subscription: {}
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
