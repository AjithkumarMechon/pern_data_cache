"use client";

// import { deleteProduct, editProduct } from "@/tanstack/dashboard/editDelete";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { ProductProps } from "../page";
import { AppDispatch, AppStore } from "@/redux/store";
import { deleteProduct, putProducts } from "@/redux/crud/redux.action";
import { useDispatch, useSelector } from "react-redux";

type Product = {
  id: string;
  name: string;
};

interface EditFieldProps<T extends { id: string | number; name: string }> {
  item: T;
}

export default function EditField({ item }: EditFieldProps<Product>) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState<string>(item.name);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  async function handleEdit(
    id: number | undefined,
    newValue: { name: string }
  ) {
    try {
      const numericId = typeof id === "string" ? parseInt(id) : id;

      const resultAction = await dispatch(
        putProducts({
          payload: { id: numericId, newValue },
        })
      );

      if (putProducts.rejected.match(resultAction)) {
        console.error(
          "Edit failed:",
          resultAction.payload || resultAction.error.message
        );
        toast.error("Edit failed");
        return;
      }
      if (putProducts.fulfilled.match(resultAction)) {
        toast.success("Successfully Updated");
        router.refresh();
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("Unexpected error occurred");
    }
  }

  async function handleDelete(id: string): Promise<void> {
    try {
      const numericId = typeof id === "string" ? parseInt(id) : id;

      const resultAction = await dispatch(deleteProduct({ id: numericId }));

      if (deleteProduct.rejected.match(resultAction)) {
        console.error(
          "Edit failed:",
          resultAction.payload || resultAction.error.message
        );
        toast.error("Edit failed");
        return;
      }
      if (deleteProduct.fulfilled.match(resultAction)) {
        toast.success("Successfully Updated");
        router.refresh();
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("Unexpected error occurred");
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleEdit(Number(item.id), { name: text });
    setEditing(false);
  };

  return (
    <div style={{ padding: "0.5rem 0" }}>
      {editing ? (
        <form onSubmit={handleSubmit} style={{ display: "inline" }}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={() => setEditing(false)}
            autoFocus
          />
        </form>
      ) : (
        <>
          <span onClick={() => setEditing(true)} style={{ cursor: "pointer" }}>
            {item.name}
          </span>
          <form
            action={() => handleDelete(item.id)}
            style={{ display: "inline", marginLeft: "0.5rem" }}
          >
            <button type="submit" style={{ color: "red" }}>
              X
            </button>
          </form>
        </>
      )}
    </div>
  );
}
