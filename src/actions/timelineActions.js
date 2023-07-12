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
  TIMELINE_DELETE_REQUEST,
  TIMELINE_DELETE_SUCCESS,
  TIMELINE_DELETE_FAIL,
  TIMELINE_UPDATE_REQUEST,
  TIMELINE_UPDATE_SUCCESS,
  TIMELINE_UPDATE_FAIL,
} from '../constants/timelineConstants';

import {
  EVENT_CREATE_REQUEST,
  EVENT_CREATE_SUCCESS,
  EVENT_CREATE_FAIL,
  EVENT_UPDATE_REQUEST,
  EVENT_UPDATE_SUCCESS,
  EVENT_UPDATE_FAIL,
  EVENT_DELETE_REQUEST,
  EVENT_DELETE_SUCCESS,
  EVENT_DELETE_FAIL,
} from '../constants/eventConstants';

import axios from 'axios';

// get all the timelines for the home page
export const listTimelines = (orderBy, search) => async (dispatch) => {
  try {
    dispatch({ type: TIMELINE_LIST_REQUEST });
    const params = { orderBy, search };
    const { data } = await axios.get('/api/timelines', { params });
    console.log(data);
    dispatch({
      type: TIMELINE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TIMELINE_LIST_FAIL,
      payload:
        error.response && error.response.data.details
          ? error.response.data.details
          : error.message,
    });
  }
};

// get all the items of a timeline
export const openTimeline = (id) => async (dispatch) => {
  try {
    dispatch({ type: TIMELINE_OPEN_CLEAR });

    dispatch({ type: TIMELINE_OPEN_REQUEST });
    const { data } = await axios.get(`/api/timelines/${id}/items/`);

    dispatch({
      type: TIMELINE_OPEN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TIMELINE_OPEN_FAIL,
      payload:
        error.response && error.response.data.details
          ? error.response.data.details
          : error.message,
    });
  }
};

export const createTimeline =
  ({
    title,
    description,
    imageUrl,
    bgColor,
    textColor,
    titleColor,
    borderColor,
  }) =>
  async (dispatch) => {
    try {
      dispatch({ type: TIMELINE_CREATE_REQUEST });

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const { data } = await axios.post('api/timelines/create/', {
        title,
        description,
        imageUrl,
        bgColor,
        textColor,
        titleColor,
        borderColor,
      });

      dispatch({
        type: TIMELINE_CREATE_SUCCESS,
        payload: data,
      });

      console.log(data);
    } catch (error) {
      dispatch({
        type: TIMELINE_CREATE_FAIL,
        payload:
          error.response && error.response.data.details
            ? error.response.data.details
            : error.message,
      });
    }
  };

export const deleteTimeline = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TIMELINE_DELETE_REQUEST,
    });

    const { data } = await axios.delete(`api/timelines/${id}/delete/`);

    dispatch({
      type: TIMELINE_DELETE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TIMELINE_DELETE_FAIL,
      payload:
        error.response && error.response.data.details
          ? error.response.data.details
          : error.message,
    });
  }
};

export const updateTimeline =
  ({
    id,
    title,
    description,
    imageUrl,
    bgColor,
    textColor,
    titleColor,
    borderColor,
  }) =>
  async (dispatch) => {
    try {
      dispatch({ type: TIMELINE_UPDATE_REQUEST });

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      console.log('data is:', id, title);
      const { data } = await axios.put(`api/timelines/${id}/update/`, {
        id,
        title,
        description,
        imageUrl,
        bgColor,
        textColor,
        titleColor,
        borderColor,
      });

      console.log(data);
      dispatch({
        type: TIMELINE_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TIMELINE_UPDATE_FAIL,
        payload:
          error.response && error.response.data.details
            ? error.response.data.details
            : error.message,
      });
    }
  };

export const createEvent =
  (
    title,
    fontSize,
    fontStyle,
    fontWeight,
    content,
    start,
    end,
    type,
    bgColor,
    textColor,
    borderColor,
    notesDetails,
    id
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: EVENT_CREATE_REQUEST });

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      console.log(id);
      const { data } = await axios.post(`/api/timelines/${id}/items/create/`, {
        title: title,
        content: content,
        start: start,
        end: end,
        type: type,
        style: `background-color: ${bgColor}; color: ${textColor}; border-color: ${borderColor}; border-radius: 7px; font-size: ${fontSize}; font-style: ${fontStyle}; font-weight: ${fontWeight}; `,
        notesDetails: notesDetails,
        bgColor: bgColor,
        textColor: textColor,
        borderColor: borderColor,
        fontSize: fontSize,
        fontStyle: fontStyle,
        fontWeight: fontWeight,
      });
      console.log(data.item);

      dispatch({
        type: EVENT_CREATE_SUCCESS,
        payload: data.item,
      });
    } catch (error) {
      dispatch({
        type: EVENT_CREATE_FAIL,
        payload:
          error.response && error.response.data.details
            ? error.response.data.details
            : error.message,
      });
    }
  };

export const deleteEvent = (timelineID, itemID) => async (dispatch) => {
  try {
    dispatch({
      type: EVENT_DELETE_REQUEST,
    });

    const { data } = await axios.delete(
      `/api/timelines/${timelineID}/items/delete/${itemID}`
    );

    dispatch({
      type: EVENT_DELETE_SUCCESS,
      payload: itemID,
    });
  } catch (error) {
    dispatch({
      type: EVENT_DELETE_FAIL,
      payload:
        error.response && error.response.data.details
          ? error.response.data.details
          : error.message,
    });
  }
};
