import {
    SUBSCRIPTION_LOADED,
    LOADING_SUBSCRIPTION,
    SUBJECTS_LOADED,
    CLASSES_LOADED,
    API,
    EXAMS_LOADED
} from "../constants";

export function fetchSubscription(user) {
    return function (dispatch) {
        // if (user.email && ['dkarimi@standardmedia.co.ke','mshahi@standardmedia.co.ke', 'lkinyanjui@standardmedia.co.ke', 'dennismwagiru@ymail.com', 'mbuthiaw001@gmail.com'].includes((user.email.toLowerCase()))) {
        //     dispatch ({ type: SUBSCRIPTION_LOADED, payload: {id: 1} });
        // } else if(parseInt(user.institution_id) === 11 && (parseInt(user.owner) === 1 || parseInt(user.teacher) === 1)) {
        //     dispatch ({ type: SUBSCRIPTION_LOADED, payload: {id: 1} });
        // } else {
            dispatch({type: LOADING_SUBSCRIPTION, payload: true});
            return $.ajax({
                // url: `${API}/payments/subscription/user/2`,
                url: `${API}/payments/subscription/user/${user.user_id}`,
                method: 'get',
                headers: {
                    'appkey': 'ELE-2020-XCZ3'
                },
                dataType: 'json',
                error: function (xhr, status, error) {
                    dispatch({type: LOADING_SUBSCRIPTION, payload: false});
                }.bind(this),
                success: function (res) {
                    console.log(res);
                    dispatch({type: SUBSCRIPTION_LOADED, payload: res});
                }.bind(this)
            })
        // }
    };
}

export function fetchSubjects() {
    return function (dispatch) {
        return $.ajax({
            url: `${API}/subjects/list`,
            method: 'get',
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            dataType: 'json',
            success: function (res) {
                dispatch ({ type: SUBJECTS_LOADED, payload: res });
            }.bind(this)
        })
    };
}

export function fetchClasses() {
    return function (dispatch) {
        return $.ajax({
            url: `${API}/classes/list`,
            method: 'get',
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            dataType: 'json',
            success: function (res) {
                dispatch ({ type: CLASSES_LOADED, payload: res });
            }.bind(this)
        })
    };
}

export function fetchExams() {
    return function (dispatch) {
        return $.ajax({
            url: `${API}/modules/list`,
            method: 'get',
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            dataType: 'json',
            success: function (res) {
                dispatch ({ type: EXAMS_LOADED, payload: res });
            }.bind(this)
        })
    };
}
