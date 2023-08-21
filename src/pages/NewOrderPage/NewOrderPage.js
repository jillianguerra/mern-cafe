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
  const [pokemons, setPokemons] = useState([])
  const [activeType, setActiveType] = useState('');
  const [cart, setCart] = useState(null)
  const [activePoke, setActivePoke] = useState({})
  const [reviews, setReviews] = useState({})
  const typesRef = useRef([])
  const navigate = useNavigate()

  useEffect(function () {
    async function getTypes() {
      const types = await pokemonAPI.getAllTypes()
      typesRef.current = [...types]
      let name = typesRef.current[0].name
      setActiveType(name)
      getPokemons(name)
    }
    getTypes()
    async function getCart() {
      const cart = await ordersAPI.getCart()
      console.log(cart)
      setCart(cart)
    }
    getCart()
  }, []);
  // useEffect(function () {
  //   async function getCart() {
  //     const cart = await ordersAPI.getCart()
  //     setCart(cart)
  //   }
  //   getCart()
  // }, [activePoke])

  async function getPokemons(type) {
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

  async function handleSelectPokemon(pokemon) {
    setActivePoke(pokemon)
    getReviews(pokemon._id)
  }
  async function getReviews(id) {
    const data = await pokemonAPI.getReviews(id)
    setReviews(data)
  }
  async function addReview(id, content) {
    await pokemonAPI.addReview(id, content)
    getReviews(id)
  }
  async function removeReview(id) {
    await pokemonAPI.deleteReview(id)
    getReviews(id)
  }
  const showPokemon = () => (
    <>
      <OnePokemon
        pokemon={activePoke}
        handleAddToOrder={handleAddToOrder}
        setActivePoke={setActivePoke} />
      <ReviewForm
        pokemonId={activePoke._id}
        addReview={addReview}
        user={user} />
      <ReviewList
        reviewData={reviews}
        removeReview={removeReview}
        user={user} />
    </>
  )

  return (
    <main className={styles.NewOrderPage}>
      <nav>
        <Logo />
        <TypeList
          types={typesRef.current}
          getPokemons={getPokemons}
          activeType={activeType}
        />
        <div>
          <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
          <UserLogOut user={user} setUser={setUser} />
        </div>
      </nav>
      <main>
        <MenuList
          pokemons={pokemons}
          handleAddToOrder={handleAddToOrder}
          handleSelectPokemon={handleSelectPokemon}
        />
      </main>
      <aside>
      {Object.keys(activePoke).length ? showPokemon() : ''}
        <OrderDetail
          order={cart}
          handleChangeQty={handleChangeQty}
          handleCheckout={handleCheckout}
        />
      </aside>
    </main>
  )
}