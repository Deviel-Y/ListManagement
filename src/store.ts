import { create } from "zustand";

// Type definition for a single list item
export type ListType = {
 createdAt: string; // ISO date string when the list item was created
 title: string; // Title of the list item
 subtitle: string; // Optional subtitle or description
};

// Type definition for the Zustand store
interface ListStoreType {
 lists: ListType[]; // Array of all list items
 addToList: (list: ListType) => void; // Function to add a new list item
 deleteList: (title: string) => void; // Function to delete a list item by title
 editList: (currentList: ListType) => void; // Function to edit an existing list item
}

// Zustand store for managing list state
const useListStore = create<ListStoreType>((set) => ({
 lists: [], // Initial state: empty list array

 // Adds a new list item to the store
 addToList: (newList) =>
  set((state) => ({
   lists: [...state.lists, newList], // Append the new item to existing lists
  })),

 // Deletes a list item based on its title
 deleteList: (title) =>
  set((state) => ({
   lists: state.lists.filter((list) => list.title !== title), // Remove matching title
  })),

 // Edits an existing list item by matching its createdAt timestamp
 editList: (currentList) =>
  set((state) => ({
   lists: state.lists.map(
    (list) =>
     list.createdAt === currentList.createdAt
      ? {
         ...list,
         title: currentList.title, // Update title
         subtitle: currentList.subtitle, // Update subtitle
        }
      : list // Keep unchanged items
   ),
  })),
}));

export default useListStore;
