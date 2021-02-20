import create from "zustand";
import { BasketItem } from "../types";

export type BasketState = {
  items: BasketItem[];
  add: (item: BasketItem) => void;
  remove: (id: number) => void;
};

export const useBasket = create<BasketState>((set) => {
  return {
    items: [],
    add(item: BasketItem) {
      set(({ items }) => {
        return { items: [...items, item] };
      });
    },
    remove(id: number) {
      set(({ items }) => {
        return { items: items.filter((item) => item.id !== id) };
      });
    },
  };
});
