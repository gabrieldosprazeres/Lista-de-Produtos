import { z } from "zod";

export const deleteProductSchema = z.object({
  productId: z.number().int(),
});

export type DeleteProductSchema = z.infer<typeof deleteProductSchema>;
