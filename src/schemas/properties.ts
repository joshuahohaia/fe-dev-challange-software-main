import { z } from "zod";

export const PropertySchema = z.object({
  id: z.string(),
  image: z.string().url(),
  bedrooms: z.number().min(1).max(10),
  address: z.string(),
  price: z.string(),
  status: z.enum(["active", "expired"]),
});
