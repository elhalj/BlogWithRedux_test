import { legacy_createStore as createStore } from "redux";

// import rootReduccer from '../Reducers/rootReducers';
import rootReducer from "../Reducers/rootReducers";

const store = createStore(rootReducer);

export default store;