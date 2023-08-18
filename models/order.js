const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pokemonSchema = require('./pokemonSchema');

const lineItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  pokemon: pokemonSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineItemSchema.virtual('extPrice').get(function() {
  // 'this' is bound to the lineItem subdoc
  return this.qty * this.pokemon.price;
});

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  lineItems: [lineItemSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function() {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  // 'this' is the Order model
  return this.findOneAndUpdate(
    // query
    { user: userId, isPaid: false },
    // update
    { user: userId },
    // upsert option will create the doc if
    // it doesn't exist
    { upsert: true, new: true }
  );
};

orderSchema.methods.addPokemonToCart = async function(pokemonId) {
  const cart = this;
  // Check if item already in cart
  const lineItem = cart.lineItems.find(lineItem => lineItem.pokemon._id.equals(pokemonId));
  if (lineItem) {
    lineItem.qty += 1;
  } else {
    const pokemon = await mongoose.model('Pokemon').findById(pokemonId);
    cart.lineItems.push({ pokemon });
  }
  return cart.save();
};

// Instance method to set an item's qty in the cart (will add item if does not exist)
orderSchema.methods.setItemQty = function(pokemonId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line item in the cart for the menu item
  const lineItem = cart.lineItems.find(lineItem => lineItem.pokemon._id.equals(pokemonId));
  if (lineItem && newQty <= 0) {
    // Calling remove, removes itself from the cart.lineItems array
    lineItem.deleteOne();
  } else if (lineItem) {
    // Set the new qty - positive value is assured thanks to prev if
    lineItem.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);