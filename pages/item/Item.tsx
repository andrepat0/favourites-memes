import React from 'react';

import { useItemSelected } from '../../context/ItemSelectedContext';

type MemeType = {
  id: string;
  name: string;
  url: string;
};
export default function Item({ id, name, url }: MemeType) {
  const { setMemeSelected, findMemeSelected, items } = useItemSelected();
  return (
    <div className='m-3 flex w-80 flex-col justify-start'>
      <div className='rounded-lg bg-gray-200 align-middle '>
        <img
          src={url}
          alt='meme'
          className='h-80 w-full rounded-lg px-5 py-5'
        />
      </div>
      <div className='flex w-full items-center'>
        <p className='flex-1 p-3 text-center text-lg'> {name}</p>
        <div
          onClick={() => setMemeSelected(id, name, url)}
          className='cursor-pointer fill-red-600'
        >
          {findMemeSelected(id) ? (
            <svg
              x='0px'
              y='0px'
              viewBox='0 0 51.997 51.997'
              className='w-7'
              //className='enable-background:new 0 0 51.997 51.997;'
              //xml:space='preserve'
            >
              <g>
                <path
                  d='M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
	c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
	c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
	C52.216,18.553,51.97,16.611,51.911,16.242z'
                />
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          ) : (
            <svg
              x='0px'
              y='0px'
              viewBox='0 0 51.997 51.997'
              className='w-7'
              //className='enable-background:new 0 0 51.997 51.997;'
              //xml:space='preserve'
            >
              <g>
                <path
                  d='M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
		c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
		c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
		C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25
		c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826
		c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514
		c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z'
                />
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
