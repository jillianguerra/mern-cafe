import {useEffect} from 'react'
import Review from '../Review/Review'
import styles from './ReviewList.module.scss';

export default function ReviewList({ reviewData, removeReview, user }) {
    console.log(reviewData)
    const showReviews = () => (
        <main className={styles.ReviewList}>
            <h3>{reviewData.count} reviews!</h3>
            <h3>Average: {reviewData.mean}</h3>
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