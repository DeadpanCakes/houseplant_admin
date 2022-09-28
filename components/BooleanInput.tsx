const BooleanInput = ({ fieldName, state }) => {
  const [boolean, setBoolean] = state;
  const toggleBoolean = () => setBoolean((prevState) => !prevState);
  return (
    <>
      <label>{fieldName}</label>
      <input type="checkbox" onChange={toggleBoolean} checked={boolean} />
    </>
  );
};

export default BooleanInput;
