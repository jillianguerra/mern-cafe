import styles from './Review.module.scss';

export default function Reviews({ review, handleRemoveReview }) {

  return (
    <div className={styles.Reviews}>
      <span className={styles.name}>{review.user.name}: </span>
      <span className={styles.rating}>{review.rating}</span>
      <div className={styles.body}>{review.body}</div>
      {req.user._id === review.user._id ? 
      (<button value="Delete Review" 
      onClick={() => handleRemoveReview(review.pokemon)}/>) :
      ''}
    </div>
  );
}