const logger = (store) => (next) => (action) => {
  let result;
  if (process.env.NODE_ENV === 'development') {
    console.group(action.type);
    console.info('Dispatch', action);
    result = next(action);
    console.log('New state', store.getState());
    console.groupEnd();
  }
  return result;
};

export default logger;
