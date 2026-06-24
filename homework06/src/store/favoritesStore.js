import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favoriteIds: [],

      addFavorite: (id) =>
        set((state) =>
          state.favoriteIds.includes(id)
            ? state
            : { favoriteIds: [...state.favoriteIds, id] }
        ),

      removeFavorite: (id) =>
        set((state) => ({
          favoriteIds: state.favoriteIds.filter((favId) => favId !== id),
        })),

      toggleFavorite: (id) => {
        const { favoriteIds, addFavorite, removeFavorite } = get();
        if (favoriteIds.includes(id)) {
          removeFavorite(id);
        } else {
          addFavorite(id);
        }
      },
    }),
    {
      name: "favorites-storage",
    }
  )
);
