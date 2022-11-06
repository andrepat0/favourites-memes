import { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

type ItemsSelectedProviderProps = {
  children: ReactNode;
};

type MemeItem = {
  id: string;
  name: string;
  url: string;
};

type ItemsSelectedContext = {
  setMemeSelected: (id: string, name: string, url: string) => void;
  findMemeSelected: (id: string) => boolean;
  items: MemeItem[];
  showFavourites: boolean;
  setFavourites: () => void;
  resetFavourites: () => void;
};

const ItemSelectedContext = createContext({} as ItemsSelectedContext);

export function useItemSelected() {
  return useContext(ItemSelectedContext);
}

export function ItemsSelectedProvider({
  children,
}: ItemsSelectedProviderProps) {
  const [items, setItems] = useState<MemeItem[]>([]);
  const [showFavourites, setShowFavourites] = useState(false);

  function setMemeSelected(id: string, name: string, url: string) {
    /* Setter dello stato può essere usato come ciclo ? */
    setItems((item: any) => {
      if (item.find((currItem: any) => currItem['id'] == id)) {
        return item.filter((item: any) => item['id'] !== id);
      } else {
        return [...item, { id, name, url }];
      }
    });
  }

  function findMemeSelected(id: string) {
    return items.find((currItem: MemeItem) => currItem['id'] === id)
      ? true
      : false;
  }

  function setFavourites() {
    setShowFavourites((prevValue) => {
      return !prevValue;
    });
  }

  function resetFavourites() {
    setItems([]);
  }

  return (
    <ItemSelectedContext.Provider
      value={{
        setMemeSelected,
        findMemeSelected,
        items,
        showFavourites,
        setFavourites,
        resetFavourites,
      }}
    >
      {children}
    </ItemSelectedContext.Provider>
  );
}
