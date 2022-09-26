const LabeledInput = ({ fieldName, state }) => {
  const [value, setValue] = state;
  return (
    <>
      <label>{fieldName}</label>
      <input
        value={value}
        onChange={(e) => {
          return setValue(e.target.value);
        }}
      />
    </>
  );
};

export default LabeledInput;
