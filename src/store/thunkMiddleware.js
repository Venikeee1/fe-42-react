function createThunkMiddleware(extraArgument) {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  const middleware =
    ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      // The thunk middleware looks for any functions that were passed to `store.dispatch`.
      // If this "action" is really a function, call it and return the result.
      if (typeof action === 'function') {
        // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
        return action(dispatch, getState, extraArgument);
      }

      // Otherwise, pass the action down the middleware chain as usual
      return next(action);
    };
  return middleware;
}

const thunk = createThunkMiddleware();
// Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
