import React from 'react';
import { MdStarRate } from 'react-icons/md';

interface StarRatingProps {
  numChecked: number;
}

const StarRating: React.FC<StarRatingProps> = ({ numChecked }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <div
      key={i + 'star'}
      title={numChecked + 'stars rating'}
      className='ml-[-3px] text-xl'
    >
      <MdStarRate
        style={{
          color: i + 1 > numChecked ? '#BABABB' : 'purple',
        }}
      />
    </div>
  ));

  return <div className='rating gap-0'>{stars}</div>;
};

export default StarRating;
