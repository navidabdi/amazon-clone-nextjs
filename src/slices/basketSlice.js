import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  countProduct: {},
  cartItems: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // Actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];

      const counts = {};

      state.items.forEach(function (x) {
        // console.log(x);
        counts[x.id] = (counts[x.id] || 0) + 1;
      });
      state.countProduct = counts;
      // console.log(state.countProduct);
      // console.log(counts);
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        // So item exists in the basket then remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in the basket`
        );
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);
export const selectCountProduct = (state) => state.basket.countProduct;
export const selectcartItems = (state) => state.basket.cartItems;

export default basketSlice.reducer;
