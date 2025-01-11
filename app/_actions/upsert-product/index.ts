"use server";

import { db } from "@/app/_lib/prisma";

import { revalidatePath } from "next/cache";
import { upsertProductSchema } from "./schema";

interface UpsertProductParams {
  id?: number;
  name: string;
  price: number;
  quantity: number;
}

export const upsertProduct = async (params: UpsertProductParams) => {
  upsertProductSchema.parse(params);

  await db.product.upsert({
    update: { ...params },
    create: { ...params },

    where: {
      id: params?.id ?? 0,
    },
  });

  revalidatePath("/");
};
