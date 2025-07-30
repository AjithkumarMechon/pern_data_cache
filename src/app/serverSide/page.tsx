import { getProducts } from "@/lib/getProducts";
import React from "react";
interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  name?: string;
}

export interface ProductResponse extends ProductProps {
  id: number;
}

export interface ProductListProps {
  data: ProductProps[];
}

const Page = async () => {
  const { data: products, error: getError } = await getProducts(
    "/api/dashboard"
  );

  if (getError) {
    return (
      <p style={{ color: "red" }}>
        {typeof getError === "string" ? getError : "Failed to fetch products."}
      </p>
    );
  }

  const productList = Array.isArray(products)
    ? products
    : Array.isArray(products?.data)
    ? products.data
    : [];

  return (
    <div style={{ display: "block" }}>
      <h1
        style={{
          fontWeight: 700,
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Products
      </h1>
      {productList.length > 0 ? (
        productList.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Page;
