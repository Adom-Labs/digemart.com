import React, { Dispatch, SetStateAction, useState } from 'react';

const SelectReviewStars = ({
  selectedRating,
  setSelectedRating,
}: {
  selectedRating: number;
  setSelectedRating: Dispatch<SetStateAction<number>>;
}) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleStarHover = (rating: number) => {
    setHoveredRating(rating);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };
  return (
    <div>
      <div className='flex items-center gap-2'>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            onClick={() => handleStarClick(rating)}
            onMouseEnter={() => handleStarHover(rating)}
            onMouseLeave={handleStarLeave}
            className={`pb-1 bg-transparent btn-xs outline-none border-0 px-0 text-3xl md:text-4xl btn hover:bg-transparent hover:text-yellow-500 cursor-pointer focus:outline-none ${
              rating <= (hoveredRating || selectedRating)
                ? 'text-yellow-500'
                : 'text-gray-300'
            }`}
          >
            ★
          </button>
        ))}
      </div>
      <span className='block italic poppins font-semi-bold pt-3'>
        {(hoveredRating || selectedRating) === 1 && 'i hate it.'}
        {(hoveredRating || selectedRating) === 2 && "i don't like it."}
        {(hoveredRating || selectedRating) === 3 && 'i have mixed feelings.'}
        {(hoveredRating || selectedRating) === 4 && 'i like it.'}
        {(hoveredRating || selectedRating) === 5 && 'i love it!'}
      </span>
    </div>
  );
};

export default SelectReviewStars;
