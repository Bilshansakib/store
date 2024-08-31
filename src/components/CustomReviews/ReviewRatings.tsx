import { Progress } from '@/components/ui/progress';
import { StarIcon, StarFilledIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

function ReviewRatings() {

  const [data, setData] = useState([]);
  const [rating, setRating] = useState(0);
  const handleRatingChange = (newRating) => {
    setRating(newRating);

  };
  console.log(rating);
  

  return (
    <div>
      <div className="my-2">
        <div className="mr-2 inline-flex items-center text-sm">
          <div className="flex items-center gap-1">
            {/* {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`text-[#ffd700] hover:text-[#ffd700] focus:outline-none  appearance-none  ${
                  star <= rating ? 'text-[#ffd700]' : ''
                }`}
                onClick={() => handleRatingChange(star)}
              >
                <StarFilledIcon className="w-[14px] h-[14px] fill-current" />
                
                
              </button>
            ))} */}
            {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={`${index + 1}`}
              data-v-4847b53f=""
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="14px"
              height="14px"
              viewBox="0 0 512 512"
              className={`icon ${
                index + 1 <= data?.avgRating
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              }`}
            >
              <path
                fill="currentColor"
                d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
              />
            </svg>
          ))}
          </div>
        </div>
        <span className="text-sm">Based on 4 Reviews</span>
      </div>
      <div className="bars my-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            5 <StarFilledIcon className="w-[14px] h-[14px] fill-current text-[#ffd700] " />
          </div>
          <div className="relative flex-1">
            <div className="h-2.5 w-full rounded-full  bg-gray-200  ">
              {' '}
              <Progress
                value={80}
                className="absolute left-0 top-0 h-2.5 rounded-full [&>*]:bg-yellow-400 "
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            4 <StarFilledIcon className="w-[14px] h-[14px] fill-current text-[#ffd700] " />
          </div>
          <div className="relative flex-1">
            {/* <div
             
              className="h-2.5 w-full rounded-full bg-gray-200"
            >*</div> */}
            <div className="h-2.5 w-full rounded-full  bg-gray-200  ">
              {' '}
              <Progress
                value={70}
                className="absolute left-0 top-0 h-2.5 rounded-full [&>*]:bg-yellow-400 "
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            3 <StarFilledIcon className="w-[14px] h-[14px] fill-current text-[#ffd700] " />
          </div>
          <div className="relative flex-1">
            <div className="h-2.5 w-full rounded-full  bg-gray-200  ">
              {' '}
              <Progress
                value={50}
                className="absolute left-0 top-0 h-2.5 rounded-full [&>*]:bg-yellow-400"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            2 <StarFilledIcon className="w-[14px] h-[14px] fill-current text-[#ffd700] " />
          </div>
          <div className="relative flex-1">
            <div className="h-2.5 w-full rounded-full  bg-gray-200  ">
              {' '}
              <Progress
                value={30}
                className="absolute left-0 top-0 h-2.5 rounded-full [&>*]:bg-yellow-400 "
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            1 <StarFilledIcon className="w-[14px] h-[14px] fill-current text-[#ffd700] " />
          </div>
          <div className="relative flex-1">
            <div className="h-2.5 w-full rounded-full  bg-gray-200  ">
              {' '}
              <Progress
                value={10}
                className="absolute left-0 top-0 h-2.5 rounded-full [&>*]:bg-yellow-400 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewRatings;
