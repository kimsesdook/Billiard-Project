import { create } from "zustand";
import useMatchStore from "./useMatchStore";

const usePlayerStore = create((set, get) => ({
  players: [], // { name, totalMatches, wins, losses }

  addPlayer: (username) =>
    set({
      players: [
        ...get().players,
        { name: username, totalMatches: 0, wins: 0, losses: 0 },
      ],
    }),

  renamePlayer: (oldName, newName) =>
    set({
      players: get().players.map((p) =>
        p.name === oldName ? { ...p, name: newName } : p
      ),
    }),

  deletePlayerByName: (username) =>
    set({
      players: get().players.filter((p) => p.name !== username),
    }),

  recalcStats: () => {
    const matches = useMatchStore.getState().matches;
    const stats = {};

    matches.forEach((m) => {
      if (!stats[m.player1])
        stats[m.player1] = { wins: 0, losses: 0, totalMatches: 0 };
      if (!stats[m.player2])
        stats[m.player2] = { wins: 0, losses: 0, totalMatches: 0 };

      stats[m.player1].totalMatches++;
      stats[m.player2].totalMatches++;

      if (m.score1 > m.score2) {
        stats[m.player1].wins++;
        stats[m.player2].losses++;
      } else if (m.score1 < m.score2) {
        stats[m.player2].wins++;
        stats[m.player1].losses++;
      }
      // 동률이면 승/패 기록 안 함, 단 총경기수는 올림
    });

    const updatedPlayers = get().players.map((p) => ({
      name: p.name,
      wins: stats[p.name]?.wins || 0,
      losses: stats[p.name]?.losses || 0,
      totalMatches: stats[p.name]?.totalMatches || 0,
    }));

    set({ players: updatedPlayers });
  },
}));

export default usePlayerStore;
