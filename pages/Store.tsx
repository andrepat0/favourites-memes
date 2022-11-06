import React from 'react';
import { useQuery } from 'react-query';

import { useItemSelected } from '../context/ItemSelectedContext';

import getProducts from './api/data.service';
import Item from './item/Item';

type ApiResult = {
  memes: any;
  success: boolean;
  data: { memes: MemeType[] };
};

type MemeType = {
  id: string;
  name: string;
  url: string;
};

export default function Store() {
  const { data, status } = useQuery<ApiResult>('products', getProducts);

  const { items, setFavourites, showFavourites, resetFavourites } =
    useItemSelected();

  if (status == 'loading') {
    return <div>loading...</div>;
  }

  return (
    <div className='mx-10 my-10'>
      <div className='mb-5 ml-5'>
        <h1>Popular Memes</h1>
        <div className='flex  w-full items-center '>
          <h3 className='mt-5 flex-grow font-normal'>
            Save your favourites memes
          </h3>
          <button
            className='rounded-full bg-cyan-600 p-2 text-white drop-shadow-md'
            onClick={() => setFavourites()}
          >
            {showFavourites ? 'Show All' : 'Show Favourites'}
          </button>
          <button
            onClick={() => resetFavourites()}
            className='ml-2 rounded-full bg-red-700 p-2 text-white drop-shadow-md'
          >
            Reset Selection
          </button>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {showFavourites
          ? items.map((el) => (
              <div className='flex h-full w-full' key={el.id}>
                <Item {...el} />
              </div>
            ))
          : data?.data?.memes.map((el) => (
              <div className='flex h-full w-full' key={el.id}>
                <Item {...el} />
              </div>
            ))}
      </div>
    </div>
  );
}
