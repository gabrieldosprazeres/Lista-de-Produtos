"use client";

import { useState } from "react";
import { PencilIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { product } from "@prisma/client";
import UpsertProductDialog from "@/app/_components/upsert-product-dialog";

interface EditProductButtonProps {
  product: product;
}

const EditProductButton = ({ product }: EditProductButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <PencilIcon />
      </Button>
      <UpsertProductDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{
          ...product,
          price: Number(product.price),
          quantity: Number(product.quantity),
        }}
        productId={product.id}
      />
    </>
  );
};

export default EditProductButton;
