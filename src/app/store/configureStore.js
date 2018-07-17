import { createStore, applyMiddleware, compose } from 'redux'



const configureStore = (preloadedState) => {
  const middlewares =[];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers =[middlewareEnhancer];
  
  const composedEnhancer = compose(...storeEnhancers);
  
   const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancer

  );
  return store;
}

export default configureStore
