import React from "react";
import EditField from "./_internal/EditDashboard";
import { getProducts } from "@/tanstack/dashboard/getProducts";
import { Link } from "@/i18n/navigation";

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

export const dynamic = "force-dynamic";

interface PageProps {
  params: {
    locale?: string;
  };
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
    <>
      <div className="block">
        <h1 className="font-bold text-2xl flex justify-center mb-4">
          Products
        </h1>
        {productList.length > 0 ? (
          productList
            .sort((a, b) => Number(a.id) - Number(b.id))
            .map((item) => <EditField key={item.id} item={item} />)
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>

      <Link href="/dashboard/resume" className="fixed bottom-4 right-4">
        Resume
      </Link>
    </>
  );
};

export default Page;
