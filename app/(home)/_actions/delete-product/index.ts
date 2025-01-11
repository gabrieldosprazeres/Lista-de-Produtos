"use server";

import { db } from "@/app/_lib/prisma";
import { DeleteProductSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const deleteProduct = async ({ productId }: DeleteProductSchema) => {
  await db.product.delete({
    where: {
      id: productId,
    },
  });

  revalidatePath("/");
};
