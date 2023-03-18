import { legacy_createStore as createStore } from 'redux';
import shopReducer from './shopReducer';
//import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(shopReducer);

export default store;