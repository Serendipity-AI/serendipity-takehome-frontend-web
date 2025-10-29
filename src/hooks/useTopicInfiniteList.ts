import {
  type InfiniteData,
  type QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { QUERY_LIMIT } from "@/api/constants";
import { fetchTopics } from "@/api/topicApi";
import type { TopicMeta } from "@/types/topicTypes";

export const useTopicInfiniteList = () => {
  return useInfiniteQuery<
    TopicMeta[],
    Error,
    InfiniteData<TopicMeta[]>,
    QueryKey,
    number
  >({
    queryKey: ["topics"],
    queryFn: async ({ pageParam }) => fetchTopics({ page: pageParam }),
    getNextPageParam: (lastPage, _allPages, lastPageParam) =>
      lastPage.length < QUERY_LIMIT ? undefined : lastPageParam + 1,
    initialPageParam: 1,
    staleTime: 1000,
  });
};
