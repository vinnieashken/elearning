import {
    ENV,
    NEXT_CHANGED,
    SUBJECTS_LOADED,
    SUBSCRIPTION_LOADED,
    SUBSCRIPTION_DELETED,
    LOADING_SUBSCRIPTION,
    CLASSES_LOADED,
    USER_UPDATED
} from "./constants";

const initialState = {
    next: `${ENV}exams/modules`,
    loadingSubscription: false,
    user: {},
    subscription: {},
    subjects: [],
    classes: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case USER_UPDATED:
            return Object.assign({
                user: action.payload
            })

        case NEXT_CHANGED:
            return Object.assign({
                next: action.payload
            });

        case LOADING_SUBSCRIPTION:
            return Object.assign({}, state, {
                loadingSubscription: action.payload
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

        case CLASSES_LOADED:
            console.log(action)
            return Object.assign({}, state, {
                classes: action.payload
            })

        default:
            return state;
    }
}

export default rootReducer;
