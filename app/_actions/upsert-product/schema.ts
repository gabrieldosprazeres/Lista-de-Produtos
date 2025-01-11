import { z } from "zod";

export const upsertProductSchema = z.object({
  name: z.string().trim().min(1),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});
