const initialState = {
  cars: [],
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CARS":
      return { cars: action.payload };
    default:
      return state;
  }
};

export default carsReducer;
