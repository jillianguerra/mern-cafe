import { useState, useEffect, useRef } from 'react'
import * as pokemonAPI from '../../utilities/pokemon-api'
import * as ordersAPI from '../../utilities/orders-api'
import styles from './NewOrderPage.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import MenuList from '../../components/MenuList/MenuList'
import TypeList from '../../components/TypeList/TypeList'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import UserLogOut from '../../components/UserLogOut/UserLogOut'
import OnePokemon from '../../components/OnePokemon/OnePokemon'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import ReviewList from '../../components/ReviewList/ReviewList'

export default function NewOrderPage({ user, setUser }) {
  const [pokemons, setPokemons] = useState([]);
  const [activeType, setActiveType] = useState('');
  const [cart, setCart] = useState(null);
  const [activePoke, setActivePoke] = useState('')
  const [reviews, setReviews] = useState('')
  const typesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getTypes(){
      const types = await pokemonAPI.getAllTypes()
      typesRef.current = [...types]
      let name = typesRef.current[0].name
      setActiveType(name)
      getPokemons(name)
    }
    getTypes()
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
      
    }
    getCart();
  }, []);


  async function getPokemons(type){
    const data = await pokemonAPI.getByType(type)
    setPokemons(data)
  }
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

  async function handleSelectPokemon(id){
    const pokeData = await pokemonAPI.getById(id)
    const reviewData = await pokemonAPI.getReviews(id)
    setActivePoke(pokeData)
    setReviews(reviewData)
  }
  async function addReview(id, content){
    const data = await pokemonAPI.findReview(id)
    data ? 
    await pokemonAPI.changeReview(id, content) : 
    await pokemonAPI.addReview(id, content)
    const newData = await pokemonAPI.getReviews(id)
    setReviews(newData)
  }
  async function removeReview(id){
    await pokemonAPI.deleteReview(id)
    const data = await pokemonAPI.getReviews(id)
    setReviews(data)
  }
  const showOrder = () => (
    <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
  )
  const showPokemon = () => (
  <>
    <OnePokemon 
        pokemon={activePoke}
        handleAddToOrder={handleAddToOrder}
        setActivePoke={setActivePoke}/>
    <ReviewForm 
      pokemonId={activePoke._id}
      addReview={addReview}/>
    <ReviewList 
      reviews={reviews}
      removeReview={removeReview}/>
    </>
  )

  return (
    <main className={styles.NewOrderPage}>
      <aside>
        <Logo />
        <TypeList
          types={typesRef.current}
          cart={setCart}
          getPokemons={getPokemons}
          activeType={activeType}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <MenuList
        pokemons={pokemons}
        handleAddToOrder={handleAddToOrder}
        handleSelectPokemon={handleSelectPokemon}
      />
      {activePoke ? showPokemon() : showOrder()}
    </main>
  )
}