export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export function CarStateReducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case "TOGGLE_ADD":
      return {
        ...state,
        price: state.car.price + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
        store: state.store.filter(
          ({ id }) =>
            ![
              ...state.car.features.map(({ id }) => id),
              action.payload.id,
            ].includes(id)
        ),
        //map filter remove from one array and add to other array
      };
    case "TOGGLE_REMOVE":
      return {
        ...state,
        car: {
          ...state.car,
          price: state.car.price - action.payload.price,
          features: state.car.features.filter(
            ({ id }) =>
              ![...state.store.map(({ id }) => id), action.payload.id].includes(
                id
              )
          ),
        },
        store: [...state.store, action.payload],
      };
    default:
      return state;
  }
}
