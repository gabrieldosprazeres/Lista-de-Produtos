"use client";

import { product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import EditProductButton from "../_components/edit-product-button";
import DeleteProductButton from "../_components/delete-product-button";

export const productColumns: ColumnDef<product>[] = [
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row: { original: product } }) => (
      <div className="max-w-xs truncate">{product.name}</div>
    ),
  },
  {
    accessorKey: "price",
    header: "Preço",
    cell: ({ row: { original: product } }) => (
      <div className="whitespace-nowrap">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(Number(product.price))}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantidade",
    cell: ({ row: { original: product } }) => (
      <div className="max-w-xs truncate">{product.quantity}</div>
    ),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row: { original: product } }) => {
      return (
        <div className="space-x-1 flex justify-end">
          <EditProductButton product={product} />
          <DeleteProductButton productId={product.id} />
        </div>
      );
    },
  },
];
