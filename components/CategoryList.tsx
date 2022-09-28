const CategoryList = ({ categoriesState }) => {
  const [categories, setCategories] = categoriesState;
  const deleteHandler = (id) => {
    setCategories((prevState) => {
      return prevState.filter((category) => category._id !== id);
    });
  };
  return (
    <ul>
      {categories.map((category) => {
        return (
          <li>
            <p>{category.name}</p>
            <button onClick={() => deleteHandler(category._id)}>X</button>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
