import styles from './Review.module.scss';

export default function Reviews({ review, handleRemoveReview, user}) {

  return (
    <div className={styles.Reviews}>
      <span className={styles.name}>{review.user.name}: </span>
      <span className={styles.rating}>{review.rating}</span>
      <div className={styles.body}>{review.body}</div>
      {user._id === review.user._id ? 
      <button onClick={() => handleRemoveReview(review.pokemon)}>Delete Review</button> :
      ''}
    </div>
  );
}