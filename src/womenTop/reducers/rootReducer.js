const initialState = {
  data: 0,
};

function rootReducers(state = initialState, action) {
  switch (action.type) {
    case "FETCHED":
      return { data: state.data + 1 };
    default:
      return initialState;
  }
}

export default rootReducers;
