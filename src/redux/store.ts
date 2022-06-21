import { createStore, compose} from "redux";
import reducer from './reducers/index';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
    const configureStore = (preloadedState: any) => createStore(
        reducer,
        preloadedState,
        composeEnhancers(),
    );

    const store = configureStore({});

    export default store;