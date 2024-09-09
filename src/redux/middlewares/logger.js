const logger = (store) => (next) => (action) => {
  let result;
  result = next(action);
  if (process.env.NODE_ENV === 'development') {
    console.group(action.type);
    console.info('Dispatch', action);
    console.log('New state', store.getState());
    console.groupEnd();
  }
  return result;
};

export default logger;
