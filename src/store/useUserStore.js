import { create } from "zustand";
import usePlayerStore from "./usePlayerStore";
import useMatchStore from "./useMatchStore";

const useUserStore = create((set, get) => ({
  users: [], // { username, password }
  currentUser: null,
  error: null,

  clearError: () => set({ error: null }),

  signUp: ({ username, password }) => {
    const { users } = get();
    if (users.some((u) => u.username === username)) {
      set({ error: "이미 존재하는 아이디입니다." });
      return false;
    }

    const newUser = { username, password };
    set({ users: [...users, newUser], error: null });

    usePlayerStore.getState().addPlayer(username);
    return true;
  },

  login: ({ username, password }) => {
    const { users } = get();
    const found = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!found) {
      set({ error: "아이디 또는 비밀번호가 틀렸습니다." });
      return false;
    }

    set({ currentUser: found, error: null });
    return true;
  },

  logout: () => set({ currentUser: null }),

  updateUserName: (newName) => {
    const { currentUser, users } = get();
    if (users.some((u) => u.username === newName)) {
      set({ error: "이미 존재하는 닉네임입니다." });
      return false;
    }

    const updatedUsers = users.map((u) =>
      u.username === currentUser.username ? { ...u, username: newName } : u
    );

    set({ users: updatedUsers, currentUser: { ...currentUser, username: newName } });

    usePlayerStore.getState().renamePlayer(currentUser.username, newName);
    useMatchStore.getState().renameUserInMatches(currentUser.username, newName);
    usePlayerStore.getState().recalcStats();

    return true;
  },

  deleteUser: () => {
    const { currentUser, users } = get();
    if (!currentUser) return;

    const username = currentUser.username;

    // 1️⃣ 유저 삭제
    set({
      users: users.filter((u) => u.username !== username),
      currentUser: null,
    });

    // 2️⃣ Player 삭제
    usePlayerStore.getState().deletePlayerByName(username);

    // 3️⃣ 해당 유저 경기 삭제
    useMatchStore.getState().deleteUserMatches(username);

    // 4️⃣ 선수 통계 재계산
    usePlayerStore.getState().recalcStats();
  },
}));

export default useUserStore;
