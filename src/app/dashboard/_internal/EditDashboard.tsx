"use client";

import { editProduct } from "@/lib/editDelete";
import { useState } from "react";

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

      console.log("Edit successful:", data);
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  }

  // function handleDelete(id: string): Promise<void> {
  //   console.log("Delete:", id);
  //   // Example: await db.product.delete({ where: { id } })
  // }

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
            // action={() => handleDelete(item.id)}
            style={{ display: "inline", marginLeft: "0.5rem" }}
          >
            <button type="submit" style={{ color: "red" }}>
              {/* X */}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
