const Category = (props) => {
  const category = JSON.parse(props.category);
  return <h1>Category {category._id}</h1>;
};

export const getServerSideProps = (context) => {
  const category = { _id: context.params.id };
  return { props: { category: JSON.stringify(category) } };
};

export default Category;
