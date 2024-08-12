import { useReducer, useState } from "react";
import "./styles.css";

export default function App() {
  initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };

      case "Decrement":
        return { count: state.count - 1 };

      default:
        return state;
    }
  };

  const INITIALSTATE = {
    INCREMENT: "Increment",
    DECREMENT: "Decrement",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    dispatch({ type: INITIALSTATE.INCREMENT });
  };
  const handleDecrement = () => {
    dispatch({ type: INITIALSTATE.DECREMENT });
  };
  return (
    <div className="App">
      <h1>Reducer</h1>
      <h3>Count:{state.count}</h3>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}
