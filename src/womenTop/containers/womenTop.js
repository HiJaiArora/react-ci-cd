import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/actions";

function WomenTop() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  return (
    <div className="App">
      <header className="App-header">
        WOMEN TOP'S- {data}
        <button onClick={() => dispatch(fetchData())}>inc</button>
      </header>
    </div>
  );
}

export default WomenTop;
