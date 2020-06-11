import {HOME_VIDEOS_UPDATED, SELECTED_VIDEO_UPDATED, SUBSCRIPTION_UPDATED,} from "../constants/academy";

const initialState = {
    subscription: {},
    homeVideos: [],
    selectedVideo: {}
};

function academyReducer(state = initialState, action) {
    switch (action.type) {

        case SUBSCRIPTION_UPDATED:
            return Object.assign({}, state, {
                subscription: action.payload
            })

        case HOME_VIDEOS_UPDATED:
            return Object.assign({}, state, {
                homeVideos: action.payload
            });

        case SELECTED_VIDEO_UPDATED:
            return Object.assign({}, state, {
                selectedVideo: action.payload
            })

        default:
            return state;
    }
}

export default academyReducer;
