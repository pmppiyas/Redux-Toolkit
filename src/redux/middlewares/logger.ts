const loggerMiddleware = (state) => (next) => (action) => {
  console.log("Dispatching action:", action);
  const result = next(action);
  console.log("Next state:", state.getState());
  return result;
};

export default loggerMiddleware;
