import './App.css';

import { FC } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Container, Typography } from '@material-ui/core';

import { GameBaseQuery } from './Components/Container/GameBaseQuery';
import AppTheme from './Components/Container/AppTheme';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <AppTheme>
      <Container maxWidth='md'>
        <Typography variant='h1'>Jaimy en Steve's Gamebase</Typography>
        <QueryClientProvider client={queryClient}>
          <GameBaseQuery />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Container>
    </AppTheme>
  );
};

export default App;
