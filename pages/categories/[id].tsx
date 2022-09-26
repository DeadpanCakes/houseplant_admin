const Category = (props) => {
  const category = JSON.parse(props.category);
  return <h1>Category {category._id}</h1>;
};

export const getServerSideProps = async (context) => {
  const { category } = await fetch(
    process.env.LOCAL_API + "/categories/" + context.params.id
  ).then((res) => res.json());
  return { props: { category: JSON.stringify(category) } };
};

export default Category;
