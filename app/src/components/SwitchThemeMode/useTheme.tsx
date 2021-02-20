// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { setThemeMode } from "../../store/reducer/appSettings/Ui";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from '../../store/combineReducer';

export default function UseTheme() {
  const { theme } = useSelector((state: IRootState) => state?.ui || {});
  const dispatch = useDispatch();
  return {
    theme,
    dispatch,
    setThemeMode
  }
}
