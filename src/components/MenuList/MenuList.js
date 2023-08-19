import styles from './MenuList.module.scss';
import MenuListPoke from '../MenuListPoke/MenuListPoke';

export default function MenuList({ pokemons, handleAddToOrder, handleSelectPokemon }) {
  const pokemonList = pokemons.map(poke =>
    <MenuListPoke
      key={poke._id}
      handleAddToOrder={handleAddToOrder}
      handleSelectPokemon={handleSelectPokemon}
      pokemon={poke}
    />
  );
  return (
    <main className={styles.MenuList}>
      {pokemonList}
    </main>
  );
}