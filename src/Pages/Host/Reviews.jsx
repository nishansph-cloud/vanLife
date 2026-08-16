const reviewsData = [
  { id: 1, name: "Sarah M.", rating: 5, comment: "Amazing experience! The van had everything we needed for our trip." },
  { id: 2, name: "James T.", rating: 4, comment: "Great van, very clean. Pickup process was smooth." },
  { id: 3, name: "Priya K.", rating: 5, comment: "Loved the Beach Bum van — perfect for our coastal road trip!" },
  { id: 4, name: "Daniel R.", rating: 3, comment: "Good overall, but the AC was a bit weak on hot days." },
]

function Reviews() {
  return (
    <section className="reviews-section">
      <h1>Customer Reviews</h1>

      <div className="reviews-list">
        {reviewsData.map(review => (
          <div className="review-card" key={review.id}>
            <div className="review-card__top">
              <h3>{review.name}</h3>
              <span className="review-card__stars">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </span>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews