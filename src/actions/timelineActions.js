import {
    TIMELINE_CREATE_REQUEST,
    TIMELINE_CREATE_SUCCESS,
    TIMELINE_CREATE_FAIL,

    TIMELINE_OPEN_REQUEST,
    TIMELINE_OPEN_SUCCESS,
    TIMELINE_OPEN_FAIL,
    TIMELINE_OPEN_CLEAR,

    TIMELINE_LIST_REQUEST,
    TIMELINE_LIST_SUCCESS,
    TIMELINE_LIST_FAIL,
} from '../constants/timelineConstants';
import axios from 'axios';

export const listTimelines = () => async (dispatch) => {
    try {
        dispatch({ type: TIMELINE_LIST_REQUEST });
        const { data } = await axios.get('/api/timelines/');
        console.log(data)
        dispatch({
            type: TIMELINE_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: TIMELINE_LIST_FAIL,
            payload: error.response && error.response.data.details
                ? error.response.data.details
                : error.message,
        });
    };
};