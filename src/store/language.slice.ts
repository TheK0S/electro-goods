import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { Languages } from '../components/LanguagePanel/LanguagePanel';

export interface languageState {
     languageValue: string;
   }
   
const initialState:languageState = {
     languageValue: 'УКР'
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
export const {
     languageChange,
} = actions;
