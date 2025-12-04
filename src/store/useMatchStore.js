import { create } from "zustand";
import usePlayerStore from "./usePlayerStore";

const useMatchStore = create((set, get) => ({
  matches: [], // { id, player1, player2, score1, score2, date, author }

  addMatch: (match) => {
    const newMatch = { id: Date.now(), ...match };
    set({ matches: [...get().matches, newMatch] });

    usePlayerStore.getState().recalcStats();
  },

  deleteMatch: (id) => {
    set({ matches: get().matches.filter((m) => m.id !== id) });
    usePlayerStore.getState().recalcStats();
  },

  updateMatch: (id, updated) => {
    set({
      matches: get().matches.map((m) => (m.id === id ? updated : m)),
    });
    usePlayerStore.getState().recalcStats();
  },

  renameUserInMatches: (oldName, newName) => {
    set({
      matches: get().matches.map((m) => ({
        ...m,
        player1: m.player1 === oldName ? newName : m.player1,
        player2: m.player2 === oldName ? newName : m.player2,
        author: m.author === oldName ? newName : m.author,
      })),
    });

    usePlayerStore.getState().recalcStats();
  },

  deleteUserMatches: (username) => {
    set({
      matches: get().matches.filter(
        (m) => m.player1 !== username && m.player2 !== username
      ),
    });

    usePlayerStore.getState().recalcStats();
  },
}));

export default useMatchStore;
