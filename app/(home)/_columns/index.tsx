"use client";

import { product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import EditProductButton from "../_components/edit-product-button";
import DeleteProductButton from "../_components/delete-product-button";

const calculateTotal = (products: product[]) => {
  return products.reduce((total, product) => {
    return total + Number(product.price) * Number(product.quantity);
  }, 0);
};

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
    accessorKey: "totalPrice",
    header: "Preço Total",
    cell: ({ row: { original: product } }) => (
      <div className="whitespace-nowrap">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(Number(product.price) * Number(product.quantity))}
      </div>
    ),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row: { original: product } }) => {
      return (
        <div className="space-x-1 flex justify-center">
          <EditProductButton product={product} />
          <DeleteProductButton productId={product.id} />
        </div>
      );
    },
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ table, row }) => {
      const total = calculateTotal(
        table.getRowModel().rows.map((row) => row.original)
      );
      if (row.index === table.getRowModel().rows.length - 1) {
        return (
          <div className="whitespace-nowrap font-bold text-end">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total)}
          </div>
        );
      }
      return null;
    },
  },
];
