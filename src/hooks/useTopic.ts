import { useQuery } from "@tanstack/react-query";
import { fetchMapData } from "@/api/topicApi";
import type { Topic } from "@/types/topicTypes";

export const useTopic = (topicId: string) => {
  return useQuery<Topic, Error>({
    queryKey: ["topic", topicId],
    queryFn: () => fetchMapData({ topicId }),
  });
};
