import { FC } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core';

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  typography: {
    h1: {
      fontSize: 40,
      marginBottom: 30,
      marginTop: 20,
      textAlign: 'center',
    },
  },
});

const AppTheme: FC = (props: any) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default AppTheme;
