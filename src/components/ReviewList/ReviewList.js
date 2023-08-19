import Review from '../Review/Review'
import styles from './ReviewList.module.scss';

export default function ReviewList({ reviewData, removeReview }) {
    const showReviews = () => (
        <main className={styles.ReviewList}>
            <h3>Average Rating: {reviewData.mean}</h3>
            <>{reviewData.reviews.map(review =>
            <Review
                key={review._id}
                handleRemoveReview={removeReview}
                review={review}
            />)}</>
        </main>
    )
    const noReviews = () => (
        <main className={styles.ReviewList}>
            <h3>No reviews yet!</h3>
        </main>
    )
    return reviewData && reviewData.reviews.length ? showReviews() : noReviews()
}