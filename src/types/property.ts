import { z } from "zod";
import { PropertySchema } from "../schemas/properties";

export type Property = z.infer<typeof PropertySchema>;

