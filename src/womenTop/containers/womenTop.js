import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/actions";
import Cards from "../containers/cards";

function WomenTop() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  const isLoaded = !!data;
  return (
    <div className="App">
      <h1>Women's Top</h1>;
      {isLoaded ? <Cards data={data} /> : <h1>loading...</h1>}
    </div>
  );
}

export default WomenTop;
