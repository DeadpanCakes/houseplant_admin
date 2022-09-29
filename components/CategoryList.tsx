import { useState } from "react";

const CategoryList = ({ categoriesState }) => {
  const [categories, setCategories] = categoriesState;
  const [newCategory, setNewCategory] = useState("");
  const addHandler = async () => {
    const { categories } = await fetch("/api/categories").then((res) =>
      res.json()
    );
    const existing = categories.find(
      (category) => category.name === newCategory
    );
    if (categories.includes(existing)) {
      console.log(
        "Draw attention to fact that it is already on the list with css"
      );
    } else if (existing) {
      setCategories((prevState) => prevState.concat(existing));
    } else {
      console.log(
        "Open popup form to make new category, once made, concat it to categories arr"
      );
    }
    setNewCategory("");
  };
  const deleteHandler = (id) => {
    setCategories((prevState) => {
      return prevState.filter((category) => category._id !== id);
    });
  };
  return (
    <>
      <input
        value={newCategory}
        onChange={(e) => {
          setNewCategory(e.target.value);
        }}
      />
      <button onClick={addHandler}>Add</button>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category._id}>
              <p>{category.name}</p>
              <button onClick={() => deleteHandler(category._id)}>X</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CategoryList;
