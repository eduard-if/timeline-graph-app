import {
  GRID_VIEW_MODE_HOME,
  LIST_VIEW_MODE_HOME,
  TABLE_VIEW_MODE_HOME,
} from "../constants/uiConstants";

export const viewModeHomeReducer = (state = { viewModeHome: {} }, action) => {
  switch (action.type) {
    case GRID_VIEW_MODE_HOME:

      return {

        viewModeHome: action.payload
      };
    case LIST_VIEW_MODE_HOME:

      return {

        viewModeHome: action.payload
      };

    case TABLE_VIEW_MODE_HOME:

      return {

        viewModeHome: action.payload
      };
    default:
      return state;
  };
};
