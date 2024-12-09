import { legacy_createStore as createStore } from "redux";

import rootReduccer from '../Reducers/rootReducers';

const store = createStore(rootReduccer);

export default store;