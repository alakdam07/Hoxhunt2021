import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISettings {
  theme: "dark" | "light",
};

const uiSlice = createSlice({
  name: 'ui',
  "initialState": {
    "theme": `light`
  } as ISettings,
  reducers: {
    setThemeMode: (state, { payload }: PayloadAction<ISettings["theme"]>) => {
      try {
        return {
          ...state,
          "theme": payload
        };
      } catch (error) {
        console.log(`error`, error);
        return state;
      }
    }
  },

});


export const { setThemeMode } = uiSlice.actions;

export default uiSlice.reducer;
