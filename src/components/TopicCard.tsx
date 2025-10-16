type TopicCardProps = {
  name: string;
};

export const TopicCard = ({ name }: TopicCardProps) => (
  <div className="border border-solid border-black/[.08] dark:border-white/[.145] rounded-lg p-4 hover:shadow-lg transition-shadow">
    <h2 className="text-lg font-semibold mb-2">{name}</h2>
  </div>
);
