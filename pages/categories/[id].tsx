import Link from "next/link";
import { useState } from "react";
import LabeledInput from "../../components/LabeledInput";

const Category = (props) => {
  const category = JSON.parse(props.category);
  const products = JSON.parse(props.products);
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
      <ul>
        {products.map((p) => {
          return (
            <li key={p._id}>
              <Link href={`/products/${p._id}`}>
                <a>{p.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const localAPI = process.env.LOCAL_API;
  const fetchJSON = async (endpoint) =>
    await fetch(endpoint).then((res) => res.json());

  const { category } = await fetchJSON(
    `${localAPI}/categories/${context.params.id}`
  );
  const { products } = await fetchJSON(`${localAPI}/products`);
  const categoryProducts = products.filter((product) => {
    return product.categories.find((catID) => catID === category._id);
  });
  return {
    props: {
      category: JSON.stringify(category),
      products: JSON.stringify(categoryProducts),
    },
  };
};

export default Category;
