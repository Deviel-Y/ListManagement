import { create } from "zustand";

export type ListType = { createdAt: string; title: string; subtitle: string };

interface ListStoreType {
  lists: ListType[];
  addToList: (list: ListType) => void;
  deleteList: (title: string) => void;
  editList: (currentList: ListType) => void;
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

  editList: (currentList) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.createdAt === currentList.createdAt
          ? {
              ...list,
              title: currentList.title,
              subtitle: currentList.subtitle,
            }
          : list
      ),
    })),
}));

export default useListStore;
