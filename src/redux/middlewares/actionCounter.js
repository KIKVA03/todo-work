const actionCounter = (store) => (next) => (action) => {
  next(action);
  next({ type: "counter/increaseActionsValue", payload: 5 });
};
export default actionCounter;
