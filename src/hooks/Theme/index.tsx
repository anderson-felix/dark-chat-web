import { createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../../styles/themes';

const ThemeContext = createContext(themes.light);

export const useTheme = () => useContext(ThemeContext);

export const Theme: React.FC = ({ children }) => (
  <ThemeContext.Provider value={themes.light}>
    <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
  </ThemeContext.Provider>
);
