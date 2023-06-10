import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { timelineCreateReducer, timelineListReducer, timelineOpenReducer, timelineUpdateReducer } from './reducers/timelineReducers';
import { viewModeHomeReducer } from './reducers/uiReducers';

const reducer = combineReducers({
    timelineList: timelineListReducer,
    viewModeHome: viewModeHomeReducer,
    timelineCreate: timelineCreateReducer,
    timelineUpdate: timelineUpdateReducer,
    timelineOpen: timelineOpenReducer
});

const getViewModeHomeLocalStorage = () => {
    if (localStorage.getItem('viewModeHome')) {
        return localStorage.getItem('viewModeHome');
    } else {
        return 'grid';
    }
};

const initialState = {
    viewModeHome: { viewModeHome: getViewModeHomeLocalStorage() }
}

const middleware = [thunk];

const store = createStore(
    reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))
);

export default store;