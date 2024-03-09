import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface isCatalogOpenState {
  isCatalogOpen: boolean;
}

const initialState: isCatalogOpenState = {
  isCatalogOpen: false,
};

// export const catalogSlice = createSlice({
//   name: "language",
//   initialState,
//   reducers: {
//     catalogOpen: (state, action: PayloadAction<boolean>) => {
//       if (state.isCatalogOpen !== action.payload) {
//         state.isCatalogOpen = action.payload;
//       } else return;
//     },
//   },
// });

// const { actions, reducer } = catalogSlice;

// export default reducer;
// export { actions };
// export const { catalogOpen } = actions;
