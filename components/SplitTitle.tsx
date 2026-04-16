
import React from 'react';

interface SplitTitleProps {
  title: string;
}

const SplitTitle: React.FC<SplitTitleProps> = ({ title }) => {
  const words = title.split(' ');
  if (words.length <= 1) {
    return <>{title}</>;
  }
  
  const mid = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, mid).join(' ');
  const secondHalf = words.slice(mid).join(' ');

  return (
    <>
      {firstHalf}{' '}
      <span className="text-brand-secondary">{secondHalf}</span>
    </>
  );
};

export default SplitTitle;
