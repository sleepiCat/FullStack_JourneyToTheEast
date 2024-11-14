import React from "react";
import { useReducer } from "react";

type State = {
  count: number;
};

type Action = {
  type: string;
};

export const UseReducerComponent = () => {
  const initialState: State = {
    count: 0,
  };
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "inc":
        return { count: state.count + 1 };
      case "dec":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "dec" });
        }}
      >
        Decrement
      </button>
    </div>
  );
};
