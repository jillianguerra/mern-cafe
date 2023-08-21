import Review from '../Review/Review'
import StarsStatic from '../StarsStatic/StarsStatic'
import styles from './ReviewList.module.scss'

export default function ReviewList({ reviewData, removeReview, user }) {
    const showReviews = () => (
        <main className={styles.ReviewList}>
            <div>{reviewData.count === 1 ? `1 review!` : `${reviewData.count} reviews!`}</div>
            <StarsStatic rating={reviewData.mean} /> 
            {reviewData.reviews.map(review =>
                <Review
                    key={review._id}
                    handleRemoveReview={removeReview}
                    review={review}
                    user={user}
                />)}
        </main>
    )
    const noReviews = () => (
        <main className={styles.ReviewList}>
            <h3>No reviews yet!</h3>
        </main>
    )
    return reviewData && reviewData.mean ? showReviews() : noReviews()
}