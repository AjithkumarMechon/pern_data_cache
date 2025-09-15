import React from "react";
import EditField from "./_internal/EditDashboard";
import { ProductType } from "@/redux/crud/redux.action";
import { Link } from "@/i18n/navigation";
import { getServerSideProducts } from "@/redux/dashboard/getServerSideProducts";

export interface ProductProps {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  category?: string;
  name?: string | undefined;
}

interface PageProps {
  params: { locale: string } | Promise<{ locale: string }>;
}
export interface ProductResponse extends ProductProps {
  id: number;
}

export interface ProductListProps {
  data: ProductProps[];
}

const CRUD = async ({ params }: PageProps) => {
  const { locale } = await params;
  // const { data: products, error: getError } = await getProducts(
  //   "/api/dashboard"
  // );

  const state = await getServerSideProducts();
  const { products, error } = state.dashboard;

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
      <Link
        href="/dashboard"
        locale={locale}
        className="fixed bottom-4 right-4"
      >
        Dashboard
      </Link>
    </>
  );
};

export default CRUD;
