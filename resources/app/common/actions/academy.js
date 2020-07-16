import {
    SUBSCRIPTION_UPDATED
} from '../constants/academy';
import {API} from "../constants";

export function fetchSubscription(user) {
    return function (dispatch) {
        return $.ajax({
            url: `${API}/academy/subscription/active`,
            data: {
                user_id: user.user_id
            },
            method: 'get',
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            dataType: 'json',
            error: function (xhr, status, error) {
            }.bind(this),
            success: function (res) {
                console.log(res);
                dispatch({type: SUBSCRIPTION_UPDATED, payload: res});
            }.bind(this)
        })
    };
}
