import { SUBSCRIPTION_LOADED, SUBJECTS_LOADED, API } from "./constants";

export function fetchSubscription(user) {
    return function (dispatch) {
        return $.ajax({
            url: `${API}/payments/subscription/user/${user.id}`,
            method: 'get',
            dataType: 'json',
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
