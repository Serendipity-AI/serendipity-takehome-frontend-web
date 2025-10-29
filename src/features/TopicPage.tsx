"use client";

import { useParams } from "next/navigation";
import { KeyIssueCard } from "@/components/KeyIssueCard";
import { useTopic } from "@/hooks/useTopic";

export const TopicPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: topic, isPending, error } = useTopic(id);

  if (error)
    return (
      <div className="flex min-h-[50vh] items-center justify-center p-3">
        <p className="text-center text-base text-red-500">
          Something went wrong. Please try again later.
        </p>
      </div>
    );

  if (isPending)
    return (
      <div className="flex min-h-[50vh] items-center justify-center p-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-neutral-300 border-t-neutral-900 dark:border-neutral-700 dark:border-t-neutral-100" />
      </div>
    );

  if (!topic)
    return (
      <div className="flex min-h-[50vh] items-center justify-center p-3">
        <p className="text-center text-base text-black dark:text-white">
          This topic does not exist
        </p>
      </div>
    );

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => window.history.back()}
        className="absolute left-3 top-3 z-50 flex items-center gap-2 rounded-full bg-neutral-300/80 px-3 py-1 backdrop-blur dark:bg-neutral-700/80"
      >
        <span className="text-xl leading-none text-black dark:text-white">
          ←
        </span>
        <span className="text-xl text-black dark:text-white">Back</span>
      </button>

      <div className="w-full">
        {topic.images?.original && (
          <img
            src={topic.images.original}
            alt={topic.name}
            className="h-64 w-full object-cover"
          />
        )}
        <div className="space-y-2 p-3">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            {topic.name}
          </h1>
          {topic.provider && (
            <p className="text-xl text-neutral-700 dark:text-neutral-300">
              {topic.provider.name}
            </p>
          )}
          {topic.description && (
            <p className="whitespace-pre-line text-base text-neutral-700 dark:text-neutral-300">
              {topic.description}
            </p>
          )}
        </div>

        {topic.dimensions && topic.dimensions.length > 0 && (
          <div className="space-y-2 p-3">
            <h2 className="text-xl font-bold text-black dark:text-white">
              Key Issues
            </h2>
            <div className="flex flex-row gap-3 overflow-x-scroll">
              {topic.dimensions.map((dimension) => (
                <KeyIssueCard
                  key={dimension.id}
                  name={dimension.name}
                  description={dimension.description}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
//
