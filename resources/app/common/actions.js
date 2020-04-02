import { SUBSCRIPTION_LOADED, API } from "./constants";

export function fetchSubscription(user) {
    console.log(user);
    return function (dispatch) {
        return $.ajax({
            url: `${API}/payments/subscription/user/${user.id}`,
            method: 'get',
            dataType: 'json',
            success: function (res) {
                dispatch ({ type: SUBSCRIPTION_LOADED, payload: res });
            }.bind(this)
        })
    };
}
