import React from "react";
import { Provider, useSelector } from 'react-redux';
import store from "../store";
import { IRootState } from '../store/combineReducer'
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme, TThemes } from '../globalThemes';

const GlobalStyle = createGlobalStyle<{ theme: TThemes }>`
body {
  background-color: ${props => props.theme.backgroundColor};
  transition: background 300ms linear, color 300ms linear;
}`;

const ThemeController = ({ children }: any) => {
  const { theme } = useSelector((state: IRootState) => state?.ui || {});

  return (
    <ThemeProvider theme={theme === `light` ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

interface IProps {
  children: JSX.Element[] | JSX.Element;
}
export default function Root({ children }: IProps) {
  return (
    <Provider store={store}>
      <ThemeController>
        {children}
      </ThemeController>
    </Provider>
  );
};
