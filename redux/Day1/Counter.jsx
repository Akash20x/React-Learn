import React from "react";

const Counter = (props) => {
    const {setCount,count} = props;

//   const [count, setCount] = React.useState(0);

  const increment = () => {
      setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ backgroundColor: "grey", margin: "10px" }}>
      {/* <h3> {`Count: ${count}`} </h3> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={increment}> Increment </button>
        <button onClick={decrement}> Decrement </button>
      </div>
    </div>
  );
};

export default Counter;
