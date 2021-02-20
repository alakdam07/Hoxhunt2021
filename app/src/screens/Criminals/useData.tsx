// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect } from "react";
import { IRootState } from "../../store/combineReducer";
import { fetchCriminal } from "../../store/reducer/criminals";
import { useSelector, useDispatch } from "react-redux";

export default function useData() {
  const dispatch = useDispatch();
  const { datas, meta } = useSelector(
    (state: IRootState) => state.criminals
  );

  const { data } = datas;
  const { loading } = meta;

  useEffect(() => {
    dispatch(fetchCriminal());
  }, [dispatch]);

  return {
    data,
    loading
  }
};
