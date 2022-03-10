import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  CountProductInBasket: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // Actions
    addToBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      if (index >= 0) {
        let id = action.payload.id;
        // So item exists in the basket then remove it...

        state.CountProductInBasket = [
          ...state.CountProductInBasket,
          action.payload.id,
        ];
      } else {
        state.items = [...state.items, action.payload];
      }
      console.log(state.CountProductInBasket);
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
export const selectTheNumOfProductInBasket = (state) =>
  state.basket.CountProductInBasket;

export default basketSlice.reducer;
