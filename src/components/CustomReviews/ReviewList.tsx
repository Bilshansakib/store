function ReviewList() {
  const reviews = [
    {
      id: 1,
      photo: 'https://example.com/photos/user1.jpg',
      name: 'John Doe',
      date: '2024-08-12',
      rating: 5,
      details:
        'Amazing product! Exceeded my expectations. The quality is top-notch and the customer service was excellent. Highly recommend!',
    },
    {
      id: 2,
      photo: 'https://example.com/photos/user2.jpg',
      name: 'Jane Smith',
      date: '2024-08-11',
      rating: 4,
      details:
        "The product is very good, but the delivery was a bit late. Overall, I'm satisfied with my purchase.",
    },
    {
      id: 3,
      photo: 'https://example.com/photos/user3.jpg',
      name: 'Emily Johnson',
      date: '2024-08-10',
      rating: 3,
      details:
        "The product is okay, but it didn't match the description exactly. It works, but not as well as I expected.",
    },
    {
      id: 4,
      photo: 'https://example.com/photos/user4.jpg',
      name: 'Michael Brown',
      date: '2024-08-09',
      rating: 2,
      details:
        'Not very satisfied with this purchase. The quality was lower than expected, and there were some defects in the product.',
    },
    {
      id: 5,
      photo: 'https://example.com/photos/user5.jpg',
      name: 'Sarah Wilson',
      date: '2024-08-08',
      rating: 1,
      details:
        'Very disappointed. The product arrived damaged and customer service was unhelpful. I would not buy from this seller again.',
    },
  ];

  return (
    <div className="divide-y ">
      {reviews.map((review, index) => (
        <div key={review.id} className="my-2 py-8">
          <div className="flex items-center gap-4">
            <img src={review.photo} alt="" className="h-12 w-12 rounded-full " />
            <div className="grid gap-1">
              <div className="text-sm">
                <span className="font-semibold">{review.name}</span>
                <span className="italic text-gray-400">
                  {' '}
                  {review.date}
                </span>
              </div>
              <div>
                <span className="star flex" data-value="1">
                  {/* &#9733; */}
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
                index + 1 <= review?.rating
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
                </span>
              </div>
            </div>
          </div>
          <div className="prose-sm mt-4 italic text-gray-700">
            <p>
              {review.details}
            </p>
            <p>Rhoncus 👍🏻</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
