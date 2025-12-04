import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useMatchStore from "../store/useMatchStore";
import { PageWrapper, MatchCard, Title, InfoText, ButtonGroup, ActionButton, DeleteButton } from "./MatchDetailPage.styled";

const MatchDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { matches, deleteMatch } = useMatchStore();

  const match = matches.find((m) => m.id === Number(id));

  if (!match) return <PageWrapper><MatchCard>경기를 찾을 수 없습니다.</MatchCard></PageWrapper>;

  const handleDelete = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      deleteMatch(match.id);
      navigate("/matches");
    }
  };

  return (
    <PageWrapper>
      <MatchCard>
        <Title>🎱 경기 상세</Title>
        <InfoText><strong>{match.player1}</strong> vs <strong>{match.player2}</strong></InfoText>
        <InfoText>점수: {match.score1} : {match.score2}</InfoText>
        <InfoText>날짜: {match.date}</InfoText>
        <InfoText>작성자: {match.author}</InfoText>

        <ButtonGroup>
          <ActionButton onClick={() => navigate(`/matches/${match.id}/edit`)}>수정</ActionButton>
          <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
        </ButtonGroup>
      </MatchCard>
    </PageWrapper>
  );
};

export default MatchDetailPage;
