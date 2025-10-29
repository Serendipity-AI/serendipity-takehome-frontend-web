type KeyIssueCardProps = {
  name: string;
  description?: string;
};

export const KeyIssueCard = ({ name, description }: KeyIssueCardProps) => {
  return (
    <div className="inline-block h-32 rounded-lg bg-neutral-200 p-3 dark:bg-neutral-800">
      <h3 className="font-bold text-neutral-800 dark:text-neutral-200">
        {name}
      </h3>
      <p className="line-clamp-1 text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
};
