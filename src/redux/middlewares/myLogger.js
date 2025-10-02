import rootReducuer from "../rootReducer";
//Creating a custom middleware
const myLogger = (state) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(state.getState())}`);

  const upcomingState = [action].reduce(rootReducuer, state.getState());
  console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);
  //Pass the action to the next middleware or to the reducer
  return next(action);
};

export default myLogger;