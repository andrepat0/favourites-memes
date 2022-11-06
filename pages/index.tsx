import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ItemsSelectedProvider } from '../context/ItemSelectedContext';

import Store from './Store';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const queryClient = new QueryClient();
  return (
    <ItemsSelectedProvider>
      <QueryClientProvider client={queryClient}>
        {/* <Navbar /> */}
        <div className='container mx-auto'>
          <Store />
        </div>
      </QueryClientProvider>
    </ItemsSelectedProvider>
  );
}
