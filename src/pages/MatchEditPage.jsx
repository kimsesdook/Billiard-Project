import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useMatchStore from "../store/useMatchStore";
import { PageWrapper, EditCard, Title, InputField, Button } from "./MatchEditPage.styled";

const MatchEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { matches, updateMatch } = useMatchStore();

  const match = matches.find((m) => m.id === Number(id));
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [score1, setScore1] = useState("");
  const [score2, setScore2] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (match) {
      setPlayer1(match.player1);
      setPlayer2(match.player2);
      setScore1(match.score1);
      setScore2(match.score2);
      setDate(match.date);
    }
  }, [match]);

  if (!match) return <PageWrapper><EditCard>경기를 찾을 수 없습니다.</EditCard></PageWrapper>;

  const handleUpdate = () => {
    updateMatch(match.id, {
      ...match,
      player1,
      player2,
      score1: Number(score1),
      score2: Number(score2),
      date,
    });

    alert("수정 완료!");
    navigate(`/matches/${match.id}`);
  };

  return (
    <PageWrapper>
      <EditCard>
        <Title>🎱 경기 수정</Title>
        <InputField value={player1} onChange={(e) => setPlayer1(e.target.value)} placeholder="Player 1" />
        <InputField value={player2} onChange={(e) => setPlayer2(e.target.value)} placeholder="Player 2" />
        <InputField value={score1} onChange={(e) => setScore1(e.target.value)} type="number" placeholder="Score 1" />
        <InputField value={score2} onChange={(e) => setScore2(e.target.value)} type="number" placeholder="Score 2" />
        <InputField type="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <Button onClick={handleUpdate}>수정 완료</Button>
      </EditCard>
    </PageWrapper>
  );
};

export default MatchEditPage;
