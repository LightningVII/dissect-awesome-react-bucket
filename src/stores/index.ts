import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState = {}) {
    const enhancer = composeWithDevTools(applyMiddleware());
    const store = createStore(reducer, initialState, enhancer);
    return store
}
