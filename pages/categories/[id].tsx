import { useState } from "react";
import LabeledInput from "../../components/LabeledInput";

const Category = (props) => {
  const category = JSON.parse(props.category);
  const nameState = useState(category.name);
  const descriptionState = useState(category.description);
  return (
    <>
      <h1>Category {category._id}</h1>
      <form>
        <LabeledInput fieldName="Name" state={nameState} />
        <LabeledInput fieldName="Description" state={descriptionState} />
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
