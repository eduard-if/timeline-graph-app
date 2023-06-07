import {
    GRID_VIEW_MODE_HOME,
    LIST_VIEW_MODE_HOME,
    TABLE_VIEW_MODE_HOME,
} from "../constants/uiConstants";

export const gridView = () => (dispatch) => {
    dispatch({
        type: GRID_VIEW_MODE_HOME,
        payload: 'grid'
    });

    localStorage.setItem('viewModeHome', 'grid');
};

export const listView = () => (dispatch) => {
    dispatch({
        type: LIST_VIEW_MODE_HOME,
        payload: 'list'
    });

    localStorage.setItem('viewModeHome', 'list');
};

export const tableView = () => (dispatch) => {
    dispatch({
        type: TABLE_VIEW_MODE_HOME,
        payload: 'table'
    });

    localStorage.setItem('viewModeHome', 'table');
};