import { create } from "zustand";

export type ListType = { createdAt: string; title: string; subtitle: string };

interface ListStoreType {
  lists: ListType[];
  addToList: (list: ListType) => void;
  deleteList: (title: string) => void;
}

const useListStore = create<ListStoreType>((set) => ({
  lists: [],

  addToList: (newList) =>
    set((state) => ({
      lists: [...state.lists, newList],
    })),

  deleteList: (title) =>
    set((state) => ({
      lists: state.lists.filter((list) => list.title !== title),
    })),
}));

export default useListStore;
