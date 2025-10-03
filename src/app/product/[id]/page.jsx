import React from "react";
import getProductById from "../../../APIs/GetProductById";
import ProductCardDetails from "_/app/_Components/ProductCardDetails/ProductCardDetails";

export default async function ProductID({ params }) {
  const {id} =await params;
  const { data } = await getProductById(id);
  return (
    <>
       <ProductCardDetails data={data}/>
    </>
  );
}
