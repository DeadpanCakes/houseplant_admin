const CounterInput = ({ fieldName, state }) => {
  const [value, setValue] = state;
  const increment = () => {
    setValue((prevState) => {
      return prevState < 99 ? prevState + 1 : prevState;
    });
  };
  const decrement = () =>
    setValue((prevState) => {
      return prevState > 1 ? prevState - 1 : prevState;
    });
  return (
    <>
      <label>{fieldName}</label>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input
        value={value}
        onChange={(e) => {
          const newValue = Number(e.target.value);
          if (newValue > 99) {
            return setValue(99);
          } else if (newValue < 1) {
            return setValue(1);
          }
          setValue(e.target.value);
        }}
      />
    </>
  );
};

export default CounterInput;
