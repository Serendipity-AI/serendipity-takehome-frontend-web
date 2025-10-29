import { Dimension } from "@/types/dimensionTypes";
import { ImageFormat } from "@/types/imageTypes";

export type Provider = {
  type: "User" | "Organization";
  name?: string;
  images?: ImageFormat;
  id: string;
};

export type TopicMeta = {
  id: string;
  name: string;
  is_new: boolean;
  description?: string;
  subtitle?: string;
  provider?: Provider;
  image_url?: string;
  images?: ImageFormat;
};

export type Topic = TopicMeta & {
  dimensions?: Dimension[];
};
