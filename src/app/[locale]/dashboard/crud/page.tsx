import React from "react";
import EditField from "./_internal/EditDashboard";
import { getProducts } from "@/tanstack/dashboard/getProducts";
import { reduxstore } from "@/redux/store";
import { getFetchProducts, ProductType } from "@/redux/crud/redux.action";

export interface ProductProps {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  category?: string;
  name?: string | undefined;
}

export interface ProductResponse extends ProductProps {
  id: number;
}

export interface ProductListProps {
  data: ProductProps[];
}

const CRUD = async () => {
  // const { data: products, error: getError } = await getProducts(
  //   "/api/dashboard"
  // );
  const store = reduxstore();
  await store.dispatch(getFetchProducts());
  // Extract state
  const state = store.getState().dashboard;
  const products = state.products;
  const error = state.error;

  console.log("products", products);

  if (error) {
    return (
      <p style={{ color: "red" }}>
        {typeof error === "string" ? error : "Failed to fetch products."}
      </p>
    );
  }

  const productList: ProductType[] = Array.isArray(products)
    ? products
    : Array.isArray((products as { data?: ProductType[] })?.data)
    ? (products as { data: ProductType[] }).data
    : [];

  return (
    <>
      <div className="block">
        <h1 className="font-bold text-2xl flex justify-center mb-4">
          Products
        </h1>
        {productList.length > 0 ? (
          [...productList]
            .sort((a, b) => Number(a.id) - Number(b.id))
            .map((item) => (
              <EditField
                key={item.id}
                item={{
                  ...item,
                  id: item.id.toString(),
                  name: item.name ?? "",
                }}
              />
            ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </>
  );
};

export default CRUD;
