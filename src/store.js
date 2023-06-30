import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { eventCreateReducer, eventDeleteReducer, eventUpdateReducer, timelineCreateReducer, timelineDeleteReducer, timelineListReducer, timelineOpenReducer, timelineUpdateReducer } from './reducers/timelineReducers';

const reducer = combineReducers({
    timelineList: timelineListReducer,
    timelineCreate: timelineCreateReducer,
    timelineUpdate: timelineUpdateReducer,
    timelineDelete: timelineDeleteReducer,
    timelineOpen: timelineOpenReducer,
    eventCreate: eventCreateReducer,
    eventDelete: eventDeleteReducer,
    eventupdate: eventUpdateReducer,
});

const initialState = {
}

const middleware = [thunk];

const store = createStore(
    reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))
);

export default store;