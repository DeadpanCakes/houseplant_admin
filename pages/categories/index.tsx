import Link from "next/link";

const Categories = (props) => {
  const categories = JSON.parse(props.categories);
  return (
    <div>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category._id}>
              <Link href={`/categories/${category._id}`}>
                <a>{category.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { categories } = await fetch(
    process.env.LOCAL_API + "/categories"
  ).then((res) => res.json());
  return { props: { categories: JSON.stringify(categories) } };
};

export default Categories;
