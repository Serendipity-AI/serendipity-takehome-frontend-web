"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { TopicCard } from "@/components/TopicCard";
import { useTopicInfiniteList } from "@/hooks/useTopicInfiniteList";

export const HomePage = () => {
  const {
    data: paginatedTopics,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useTopicInfiniteList();

  const topics = paginatedTopics?.pages.flat() || [];

  const bottomOfSearchResultsRef = useRef(null);

  const loadNextPage = useCallback(async () => {
    if (hasNextPage && !isFetchingNextPage) await fetchNextPage();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleIntersection = useCallback(
    async (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        await loadNextPage();
      }
    },
    [loadNextPage]
  );

  useEffect(() => {
    const element = bottomOfSearchResultsRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        handleIntersection(entry);
      },
      { threshold: 1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [handleIntersection]);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Discover Topics</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <TopicCard key={topic.id} id={topic.id} name={topic.name} />
          ))}
          <div ref={bottomOfSearchResultsRef} />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
};
