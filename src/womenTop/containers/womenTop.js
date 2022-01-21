import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/actions";

function WomenTop() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {console.log("fetch", data)}
        WOMEN TOP'S-
      </header>
    </div>
  );
}

export default WomenTop;
