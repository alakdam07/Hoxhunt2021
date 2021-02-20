import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Meta {
  loading?: boolean;
  error?: boolean;
  message?: string;
}

interface ICrimialsProps {
  email?: string[];
  firstname?: string[];
  lastname?: string[];
}

interface ICrimials {
  data?: ICrimialsProps[];
  length?: number;
}

export interface IData {
  meta: Meta;
  datas: ICrimials;
}

export const fetchCriminal = createAsyncThunk(
  `fetchCriminal`,
  async () => {
    const url = `/api`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

const initialState: IData = {
  "meta": {
    "loading": false,
    "error": false,
    "message": ``
  },
  "datas": []
};

export const fetchSuccessful = fetchCriminal.fulfilled;
export const fetchPending = fetchCriminal.pending;
export const fetchFailed = fetchCriminal.rejected;

const Criminal = createSlice({
  "name": `Criminals`,
  initialState,
  "reducers": {},
  "extraReducers": (builder) => {
    builder.addCase(fetchSuccessful, (state, { payload }: PayloadAction<ICrimials[]>) => ({
      ...state,
      "meta": {
        ...state.meta,
        "loading": false,
        "error": false,
        "message": ``
      },
      "datas": payload
    }));
    builder.addCase(fetchPending, (state) => ({
      ...state,
      "meta": {
        ...state.meta,
        "loading": true
      }
    }));
    builder.addCase(fetchFailed, (state, { error }) => ({
      ...state,
      "meta": {
        ...state.meta,
        "loading": false,
        "error": true,
        "message": error.message ? error.message
          : `Failed to load data`
      }
    }));
  }
});

export default Criminal.reducer;
