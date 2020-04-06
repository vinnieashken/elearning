import { SUBSCRIPTION_LOADED, LOADING_SUBSCRIPTION, SUBJECTS_LOADED, API } from "./constants";

export function fetchSubscription(user) {
    return function (dispatch) {
        dispatch ({ type: LOADING_SUBSCRIPTION, payload: true });
        return $.ajax({
            url: `${API}/payments/subscription/user/${user.id}`,
            method: 'get',
            dataType: 'json',
            error: function (xhr, status, error) {
                dispatch ({ type: LOADING_SUBSCRIPTION, payload: false });
            }.bind(this),
            success: function (res) {
                console.log(res);
                dispatch ({ type: SUBSCRIPTION_LOADED, payload: res });
            }.bind(this)
        })
    };
}

export function fetchSubjects() {
    return function (dispatch) {
        return $.ajax({
            url: `${API}/subjects/list`,
            method: 'get',
            dataType: 'json',
            success: function (res) {
                dispatch ({ type: SUBJECTS_LOADED, payload: res });
            }.bind(this)
        })
    };
}
