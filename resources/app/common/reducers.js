import {ENV, NEXT_CHANGED, SUBJECTS_LOADED, LOADING_SUBSCRIPTION, SUBSCRIPTION_LOADED, SUBSCRIPTION_DELETED} from "./constants";

const initialState = {
    next: `${ENV}exams/modules`,
    loadingSubscription: false,
    subscription: {},
    subjects: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case NEXT_CHANGED:
            return Object.assign({
                next: action.payload
            });

        case LOADING_SUBSCRIPTION:
            return Object.assign({}, state, {
                loadingSubscription: action.payload
            });

        case SUBSCRIPTION_LOADED:
            const loading = action.payload.hasOwnProperty('id') ? false : state.loadingSubscription;
            return Object.assign({}, state, {
                subscription: action.payload,
                loadingSubscription: loading
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
