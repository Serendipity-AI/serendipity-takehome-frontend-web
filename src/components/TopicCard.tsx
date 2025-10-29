import Link from "next/link";

type TopicCardProps = {
  id: string;
  name: string;
};

export const TopicCard = ({ id, name }: TopicCardProps) => (
  <Link
    href={`/topics/${id}`}
    className="border border-solid border-black/[.08] dark:border-white/[.145] rounded-lg p-4 hover:shadow-lg transition-shadow"
  >
    <h2 className="text-lg font-semibold mb-2">{name}</h2>
  </Link>
);
