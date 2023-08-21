import styles from './OnePokemon.module.scss';

export default function OnePokemon({ pokemon, handleAddToOrder, setActivePoke }) {
    return (
    <div className={styles.OnePokemon}>
        <button className="back-btn" onClick={() => setActivePoke({})}>← BACK</button>
      <img src={pokemon.img} className={styles.img + ' ' + 'flex-ctr-ctr'} />
      <aside>
      <div className={styles.name}>{pokemon.name}</div>
        <div className={styles.type}>{pokemon.type2 ?
            (`Types: ${pokemon.type.name} ${pokemon.type2.name}`) :
            (`Type: ${pokemon.type.name}`)}</div>
      </aside>
      <footer className={styles.dex}>{pokemon.dex}</footer>
      <div className={styles.buy}>
        <span>${pokemon.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(pokemon._id)}>
          ADOPT
        </button>
      </div>
    </div>
  );
}