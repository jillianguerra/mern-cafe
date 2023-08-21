import styles from './Review.module.scss';
import StarsStatic from '../StarsStatic/StarsStatic'

export default function Reviews({ review, handleRemoveReview, user}) {
  return (
    <div className={styles.Review}>
      <span className={styles.name}>{review.user.name}: </span>
      <StarsStatic rating={review.rating} />
      <div className={styles.body}>{review.body}</div>
      {user._id === review.user._id ? 
      <button onClick={() => handleRemoveReview(review.pokemon)}>Delete Review</button> :
      ''}
    </div>
  );
}