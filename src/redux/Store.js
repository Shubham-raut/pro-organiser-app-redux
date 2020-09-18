import { createStore } from 'redux';

// import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducers from './Reducers/Reducers';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import { persistStore } from 'redux-persist';
// import rootReducer from './rootReducer';

const Store = createStore(Reducers, composeWithDevTools());

export default Store;


// export const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(logger, thunk))
// );

// export const persistor = persistStore(store);

// // export default store;
// export default { store, persistor };