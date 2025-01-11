"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import UpsertProductDialog from "./upsert-product-dialog";

interface AddProductButtonProps {
  userCanAddProduct?: boolean;
  className?: string;
}

const AddProductButton = ({
  userCanAddProduct,
  className,
}: AddProductButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <div className={className}>
      <Button
        className="rounded-full font-bold"
        onClick={() => setDialogIsOpen(true)}
        disabled={!userCanAddProduct}
      >
        Adicionar produto
        <ArrowDownUpIcon />
      </Button>
      <UpsertProductDialog isOpen={dialogIsOpen} setIsOpen={setDialogIsOpen} />
    </div>
  );
};

export default AddProductButton;
