import {
    ENV,
    NEXT_CHANGED,
    SUBJECTS_LOADED,
    SUBSCRIPTION_LOADED,
    SUBSCRIPTION_DELETED,
    LOADING_SUBSCRIPTION,
    CLASSES_LOADED,
    USER_UPDATED, EXAMS_LOADED
} from "./constants";

const initialState = {
    next: `${ENV}exams/modules`,
    loadingSubscription: false,
    user: {},
    subscription: {},
    subjects: [],
    uniqueSubjects: [],
    classes: [],
    uniqueClasses: [],
    exams: [],
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
            const subjectArray = {}
            action.payload.forEach(el => {
                subjectArray[`${el.subject}`] = `${el.subject}`
            })
            return Object.assign({}, state, {
                subjects: action.payload,
                uniqueSubjects: subjectArray
            });

        case CLASSES_LOADED:
            const classArray = {}
            action.payload.forEach(el => {
                classArray[el.class] = el.class
            })
            return Object.assign({}, state, {
                classes: action.payload,
                uniqueClasses: classArray
            })

        case EXAMS_LOADED:
            return Object.assign({}, state, {
                exams: action.payload
            })

        default:
            return state;
    }
}

export default rootReducer;
