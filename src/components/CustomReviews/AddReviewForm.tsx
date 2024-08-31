import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

type FormData = {
  email: string;
  review: string;
  data: any;
  newRating: number;
  star: number;
  rating: number;
};
// type FormData = {
//     firstName: string;
//     lastName: string;
//   };
function AddReviewForm() {
  const [showState, setShowState] = useState(true);
  const [rating, setRating] = useState(0);
  console.log(rating);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const showStateFunction = () => {
    setShowState(!showState);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  return (
    <div>
      <div data-v-ba6de38c="" className="mb-2 mt-10 text-xl text-gray-900">
        Share your thoughts
      </div>
      <div data-v-ba6de38c="" className="mb-4 text-sm">
        If you have used this product, we would love to hear about your
        experience.
      </div>
      <div
      // onClick={showStateFunction}
      //   className={`${!showState?"hidden":" border rounded-lg text-center w-full p-2"}`}
      >
        {showState ? (
          <>
            <button
              onClick={showStateFunction}
              className="w-full rounded-lg border p-2 text-center"
            >
              Write a Review
            </button>
            <form
              onSubmit={onSubmit}
              className="menu dropdown-content writeReview duration-[2000ms] transform transition-all ease-in-out"
            >
              <div className=" w-full text-gray-500">
                <div className="mt-3 grid gap-2 rounded-lg border p-5">
                  <div className="mb-1.5 block text-center">
                    <label
                      htmlFor="checkbox-2"
                      className="relative m-auto block text-center text-sm"
                    >
                      How would you rate your experience with this product? We
                      strive for a 5 star experience{' '}
                      <span className="text-red-500">*</span>
                    </label>

                    {/* test */}

                    <div className="relative mt-2 flex justify-center gap-1 ">
                      <Controller
                        
                        control={control}
                        name="rating"
                        rules={{ required: 'Rating is required' }}
                        render={({ field }) => (
                          <div
                            className="flex gap-1"

                            // style={{ display: 'flex' }}
                          >
                            {[1, 2, 3, 4, 5].map((value) => (
                              <StarFilledIcon
                                key={value}
                                // size={24}
                                color={
                                  value <= field.value ? '#ffc107' : '#e4e5e9'
                                }
                                onClick={() => field.onChange(value)}
                                style={{ cursor: 'pointer' }}
                                className={`${field.value >= value ? 'flex h-6 w-6 border-separate rounded border border-[#f9bf3b] bg-[#fffbeb] fill-current   p-1 text-[#ffd700]  hover:text-[#ffd700] focus:outline-none' : 'flex h-6 w-6 border-separate rounded border fill-current p-1    text-[#ffd700]'} `}
                              />
                            ))}
                          </div>
                        )}
                      />
                      {errors.rating && <p>{errors.rating.message}</p>}
                    </div>
                    {/* test */}
                  </div>
                  <div className="col-span-full w-full">
                    <label htmlFor="rating" className="mb-0.5 text-sm">
                      How was your experience?{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register('review')}
                      className="w-full rounded-lg border p-4"
                      id="content"
                      placeholder="Great Quality"
                      // defaultValue=""
                    />
                  </div>
                  <div className="col-span-full w-full">
                    {/* <label
                      htmlFor="author"
                      id="checkbox-2"
                      className="checkbox__label mb-0.5 text-sm"
                    >
                      Your email <span className="text-red-500">*</span>
                    </label> */}
                    <label htmlFor="rating" className="mb-0.5 text-sm">
                    Your email{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register('email')}
                      className="w-full rounded-lg border p-2"
                      id="author"
                      placeholder="example@example.com"
                      type="email"
                    />
                  </div>

                  <div className="col-span-full mt-3 w-full text-center">
                    <button
                      className="flex w-full items-center justify-center gap-4 rounded-md bg-amber-300 p-2 font-semibold text-amber-900 transition hover:bg-amber-400"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </>
        ) : (
          <button
            onClick={showStateFunction}
            className="w-full rounded-lg border p-2 text-center"
          >
            close
          </button>
        )}
      </div>
    </div>
  );
}

export default AddReviewForm;
