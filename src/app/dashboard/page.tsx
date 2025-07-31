import { getProducts } from "@/lib/getProducts";
import React from "react";
import EditField from "./_internal/EditDashboard";
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

  type Product = {
    id: string;
    name: string;
  };

  const productList: Product[] = Array.isArray(products)
    ? products
    : Array.isArray((products as { data?: Product[] })?.data)
    ? (products as { data: Product[] }).data
    : [];

  return (
    <div style={{ display: "block" }}>
      <h1
        style={{
          fontWeight: 700,
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem", // optional enhancement
        }}
      >
        Products
      </h1>
      {productList.length > 0 ? (
        productList.map((item) => <EditField key={item.id} item={item} />)
      ) : (
        <p style={{ textAlign: "center", color: "gray" }}>No products found.</p>
      )}
    </div>
  );
};

export default Page;
