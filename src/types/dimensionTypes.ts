import { ImageFormat } from "@/types/imageTypes";

export type Dimension = {
  id: string;
  name: string;
  description: string;
  images?: ImageFormat;
  co_curator?: string;
};
