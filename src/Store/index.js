import { createStore } from 'redux';
import PostReducers from './PostReducers';

const store = createStore(PostReducers);

export default store;