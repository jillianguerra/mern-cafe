import styles from './MenuListPoke.module.scss';

export default function MenuListPoke({ pokemon, handleAddToOrder }) {
  console.log(pokemon.type)
  return (
    <div className={styles.MenuListPoke}>
      <img src={pokemon.img} className={styles.img + ' ' + 'flex-ctr-ctr'} />
      <div>
        <div className={styles.name}>{pokemon.name}</div>
        <div className={styles.type}>{pokemon.type2 ? (`Types: ${pokemon.type.name} ${pokemon.type2.name}`) : (`Type: ${pokemon.type.name}`)}</div>
      </div>
      <div className={styles.buy}>
        <span>${pokemon.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(pokemon._id)}>
          ADOPT
        </button>
      </div>
    </div>
  );
}