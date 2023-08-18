import { useState, useEffect, useRef } from 'react';
import * as pokemonAPI from '../../utilities/pokemon-api';
import * as ordersAPI from '../../utilities/orders-api';
import styles from './NewOrderPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import TypeList from '../../components/TypeList/TypeList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [pokemons, setPokemons] = useState([]);
  const [activeType, setActiveType] = useState('');
  const [cart, setCart] = useState(null);
  const typesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getTypes(){
      console.log(1)
      const types = await pokemonAPI.getAllTypes()
      typesRef.current = [...types]
      let name = typesRef.current[0].name
      setActiveType(name)
      getPokemons(name)
    }
    getTypes()
    async function getCart() {
      console.log(3)
      const cart = await ordersAPI.getCart();
      setCart(cart);
      
    }
    getCart();
  }, []);

  /*-- Event Handlers --*/
  async function handleAddToOrder(pokemonId) {
    console.log(pokemonId)
    const updatedCart = await ordersAPI.addPokemonToCart(pokemonId);
    setCart(updatedCart);
  }

  async function handleChangeQty(pokemonId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(pokemonId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }
  async function getPokemons(type){
    const data = await pokemonAPI.getByType(type)
    setPokemons(data)
  }

  return (
    <main className={styles.NewOrderPage}>
      <aside>
        <Logo />
        <TypeList
          types={typesRef.current}
          cart={setCart}
          getPokemons={getPokemons}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <MenuList
        pokemons={pokemons}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}