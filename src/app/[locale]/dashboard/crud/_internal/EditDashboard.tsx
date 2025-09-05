"use client";

import { deleteProduct, editProduct } from "@/tanstack/dashboard/editDelete";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

type Product = {
  id: string;
  name: string;
};

interface EditFieldProps {
  item: Product;
}
interface ProductProps {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  category?: string;
  name?: string;
}
export default function EditField({ item }: EditFieldProps) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState<string>(item.name);
  const router = useRouter();
  async function handleEdit(id: number | undefined, newValue: ProductProps) {
    try {
      const numericId = typeof id === "string" ? parseInt(id) : id;
      const { data, error } = await editProduct("/api/edit", {
        id: numericId,
        newValue,
      });
      if (error) {
        console.error("Edit failed:", error);
        return;
      }
      toast.success(typeof data === "string" ? data : "Successfully Updated");
      router.refresh();
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  }

  async function handleDelete(id: string): Promise<void> {
    // console.log("Delete:", id);
    try {
      const { data, error } = await deleteProduct("/api/delete", Number(id));
      if (error) {
        console.error("Edit failed:", error);
        return;
      }
      toast.success(typeof data === "string" ? data : "Successfully deleted");
      router.refresh();
    } catch (err) {
      console.error("Unexpected error:", err);
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
