import { useState } from "react";
import useUserStore from "../../store/useUserStore";
import usePlayerStore from "../../store/usePlayerStore";
import useMatchStore from "../../store/useMatchStore";

const MatchForm = () => {
  const { currentUser } = useUserStore();
  const players = usePlayerStore((state) => state.players); // ✅ 상태 구독
  const { addMatch } = useMatchStore();

  const [player2, setPlayer2] = useState("");
  const [score1, setScore1] = useState("");
  const [score2, setScore2] = useState("");
  const [date, setDate] = useState("");

  const myName = currentUser.username;
  const otherPlayers = players.filter((p) => p.name !== myName);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!player2) return alert("상대 선수를 선택해주세요.");

    addMatch({
      player1: myName,
      player2,
      score1: Number(score1),
      score2: Number(score2),
      date,
      author: myName,
    });

    alert("경기 등록 완료!");
    setPlayer2("");
    setScore1("");
    setScore2("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>새 경기 등록</h3>
      <p>선수 1: {myName}</p>

      <select value={player2} onChange={(e) => setPlayer2(e.target.value)}>
        <option value="">상대 선수 선택</option>
        {otherPlayers.map((p) => (
          <option key={p.name} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        value={score1}
        placeholder="내 점수"
        onChange={(e) => setScore1(e.target.value)}
      />
      <input
        type="number"
        value={score2}
        placeholder="상대 점수"
        onChange={(e) => setScore2(e.target.value)}
      />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <button>등록</button>
    </form>
  );
};

export default MatchForm;
