import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface languageState {
     languageValue: string;
   }
   
const initialState:languageState = {
     languageValue: 'uk'
}

export const languageSlice = createSlice({
     name: 'language',
     initialState,
     reducers:{
          languageChange: (state, action: PayloadAction<string>) => {
              if(state.languageValue !== action.payload) {
               state.languageValue = action.payload
              } else return
          },
     }
})

const {actions, reducer} = languageSlice;

export default reducer;
export {actions};
export const {
     languageChange,
} = actions;
