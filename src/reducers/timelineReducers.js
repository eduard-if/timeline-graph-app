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

export const timelineCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case TIMELINE_CREATE_REQUEST:
      return { loading: true, };
    case TIMELINE_CREATE_SUCCESS:
      return { loading: false, };
    case TIMELINE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  };
};

export const timelineOpenReducer = (state = { timeline: { items: [], groups: [], options: [] } }, action) => {
  switch (action.type) {
    case TIMELINE_OPEN_REQUEST:
      return { loading: true, ...state };
    case TIMELINE_OPEN_SUCCESS:
      return { loading: false, timeline: action.payload };
    case TIMELINE_OPEN_FAIL:
      return { loading: false, error: action.payload };
    case TIMELINE_OPEN_CLEAR:
      return {
        ...state, timeline: {}
      }
    default:
      return state;
  };
};

export const timelineListReducer = (state = { timelines: [] }, action) => {
  switch (action.type) {
    case TIMELINE_LIST_REQUEST:
      return { loading: true, timelines: [] };
    case TIMELINE_LIST_SUCCESS:
      return { loading: false, timelines: action.payload };
    case TIMELINE_LIST_FAIL:
      return { loading: false, error: action.payload };
    case TIMELINE_CREATE_SUCCESS:
      return { ...state, timelines: [action.payload, ...state.timelines] }
    case TIMELINE_DELETE_SUCCESS:
      return {
        ...state,
        timelines: state.timelines.filter(timeline => timeline.id !== action.payload)
      }
    case TIMELINE_UPDATE_SUCCESS:
      return {
        ...state,
        timelines: state.timelines.map(
          timeline => timeline.id === action.payload.id ? action.payload : timeline
        )
      }
    default:
      return state;
  };
};

export const timelineDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case TIMELINE_DELETE_REQUEST:
      return { loading: true };
    case TIMELINE_DELETE_SUCCESS:
      return { loading: false }
    case TIMELINE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const timelineUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case TIMELINE_UPDATE_REQUEST:
      return { loading: true, };
    case TIMELINE_UPDATE_SUCCESS:
      return { loading: false, };
    case TIMELINE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  };
};
