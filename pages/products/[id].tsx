import { useState } from "react";
import LabeledInput from "../../components/LabeledInput";
import CounterInput from "../../components/CounterInput";
import BooleanInput from "../../components/BooleanInput";
import CategoryList from "../../components/CategoryList";

const Product = (props) => {
  const product = JSON.parse(props.product);
  const categories = JSON.parse(props.categories);
  const nameState = useState(product.name);
  const descriptionState = useState(product.description);
  const stockState = useState(product.stock);
  const priceState = useState(product.price);
  const discountState = useState(product.discount);
  const categoriesState = useState(
    categories.filter((category) => {
      return product.categories.some((id) => category._id === category._id);
    })
  );
  const isPublishedState = useState(product.isPublished);
  return (
    <>
      <h1>Product {product._id}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <LabeledInput fieldName={"Name"} state={nameState} />
        <LabeledInput fieldName={"Description"} state={descriptionState} />
        <CounterInput fieldName={"Stock"} state={stockState} />
        <CounterInput fieldName={"Price"} state={priceState} />
        <CounterInput fieldName={"Discount"} state={discountState} />
        <CategoryList categoriesState={categoriesState} />
        <BooleanInput fieldName={"Is Published"} state={isPublishedState} />
      </form>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const endpoint = process.env.LOCAL_API;
  const { product } = await fetch(`${endpoint}/products/${id}`).then((res) =>
    res.json()
  );
  const { categories } = await fetch(`${endpoint}/categories`).then((res) =>
    res.json()
  );
  return {
    props: {
      product: JSON.stringify(product),
      categories: JSON.stringify(categories),
    },
  };
};

export default Product;
