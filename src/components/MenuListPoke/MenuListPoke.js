import styles from './MenuListPoke.module.scss';

export default function MenuListPoke({ pokemon, handleAddToOrder, handleSelectPokemon }) {
  return (
    <div className={styles.MenuListPoke}>
      <img src={pokemon.img} 
        className={styles.img + ' ' + 'flex-ctr-ctr'} 
        onClick={() => handleSelectPokemon(pokemon._id)}
      />
      <div className={styles.name}
        onClick={() => handleSelectPokemon(pokemon._id)}>
        {pokemon.name}
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