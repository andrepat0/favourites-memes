import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ItemsSelectedProvider } from '../context/ItemSelectedContext';

import Store from '../components/Store';

export default function HomePage() {
  const queryClient = new QueryClient();
  return (
    <ItemsSelectedProvider>
      <QueryClientProvider client={queryClient}>
        <div className='container mx-auto'>
          <Store />
        </div>
      </QueryClientProvider>
    </ItemsSelectedProvider>
  );
}
