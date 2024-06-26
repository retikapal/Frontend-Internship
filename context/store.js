import { createStore } from 'context';
import rootReducer from './reducers';


const store = createStore(rootReducer);

export default store;