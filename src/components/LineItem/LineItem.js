import styles from './LineItem.module.scss';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
return (
  <div className={styles.LineItem}>
    <img className="flex-ctr-ctr" src={lineItem.pokemon.img}/>
    <div className="flex-ctr-ctr flex-col">
      <div className="align-ctr">{lineItem.pokemon.name}</div>
      <div>{lineItem.pokemon.price.toFixed(2)}</div>
    </div>
    <div className={styles.qty} style={{ justifyContent: isPaid && 'center' }}>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineItem.pokemon._id, lineItem.qty - 1)}
        >−</button>
      }
      <span>{lineItem.qty}</span>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineItem.pokemon._id, lineItem.qty + 1)}
        >+</button>
      }
    </div>
    <div className={styles.extPrice}>${lineItem.extPrice.toFixed(2)}</div>
  </div>
);
}