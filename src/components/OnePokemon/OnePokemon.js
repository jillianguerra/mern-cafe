import styles from './OnePokemon.module.scss';

export default async function OnePokemon({ pokemon, handleAddToOrder, setActivePoke }) {
    return (
    <div className={styles.OnePokemon}>
        <button onClick={() => setActivePoke('')}>← BACK</button>
      <img src={pokemon.img} className={styles.img + ' ' + 'flex-ctr-ctr'} />
        <div className={styles.name}>{pokemon.name}</div>
      <div>
        <div className={styles.type}>{pokemon.type2 ?
            (`Types: ${pokemon.type.name} ${pokemon.type2.name}`) :
            (`Type: ${pokemon.type.name}`)}</div>
        <div className={styles.dex}>{pokemon.dex}</div>
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