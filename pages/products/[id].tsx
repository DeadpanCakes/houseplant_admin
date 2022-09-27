import { useState } from "react";
import LabeledInput from "../../components/LabeledInput";
import CounterInput from "../../components/CounterInput";

const Product = (props) => {
  console.log(JSON.parse(props.product));
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const endpoint = `${process.env.LOCAL_API}/products/${id}`;
  const { product } = await fetch(endpoint).then((res) => res.json());
  return { props: { product: JSON.stringify(product) } };
};

export default Product;
