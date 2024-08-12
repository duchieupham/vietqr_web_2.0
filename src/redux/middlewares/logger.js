const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('Dispatch', action);
  const result = next(action);
  console.log('New state', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
