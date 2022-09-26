import { useState } from "react";

const Category = (props) => {
  const category = JSON.parse(props.category);
  const [name, setName] = useState(category.name);
  const [description, setDescription] = useState(category.description);
  return (
    <>
      <h1>Category {category._id}</h1>
      <form>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => {
            return setName(e.target.value);
          }}
        />
        <label>Description</label>
        <input
          value={description}
          onChange={(e) => {
            return setDescription(e.target.value);
          }}
        />
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
