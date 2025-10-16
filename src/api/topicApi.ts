import { apiClient } from "@/api/apiClient";
import { QUERY_LIMIT } from "@/api/constants";

export const fetchTopics = async ({ page }: { page: number }) => {
  const offset = (page - 1) * QUERY_LIMIT;

  const response = await apiClient.get(`/topic/curated`, {
    params: {
      offset,
      limit: QUERY_LIMIT,
    },
  });

  return response.data;
};

export const fetchMapData = async ({ topicId }: { topicId: string }) => {
  const response = await apiClient.get(`/map/${topicId}`);

  return response.data;
};
