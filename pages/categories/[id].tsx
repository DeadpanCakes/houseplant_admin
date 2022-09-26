import { useState } from "react";
import LabeledInput from "../../components/LabeledInput";

const Category = (props) => {
  const category = JSON.parse(props.category);
  const nameState = useState(category.name);
  const [name] = nameState;
  const descriptionState = useState(category.description);
  const [description] = descriptionState;
  const submitHandler = () => console.log({ name, description });
  return (
    <>
      <h1>Category {category._id}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <LabeledInput fieldName="Name" state={nameState} />
        <LabeledInput fieldName="Description" state={descriptionState} />
        <button>Submit</button>
      </form>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { category } = await fetch(
    process.env.LOCAL_API + "/categories/" + context.params.id
  ).then((res) => res.json());
  return { props: { category: JSON.stringify(category) } };
};

export default Category;
