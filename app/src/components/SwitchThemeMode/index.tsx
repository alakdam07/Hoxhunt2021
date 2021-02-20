import React from 'react';
import useTheme from './useTheme'
import Switch from '../ToogleButton';

export default function SwitchMood() {
  const { theme, setThemeMode, dispatch } = useTheme();

  return (
    <Switch
      onClick={() => dispatch(setThemeMode(theme === 'light' ? 'dark' : 'light'))}
      on={theme === 'light' ? false : true}
    />
  )
};
