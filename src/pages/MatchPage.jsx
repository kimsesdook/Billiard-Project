import React from "react";
import useUserStore from "../store/useUserStore";
import usePlayerStore from "../store/usePlayerStore";
import MatchForm from "../components/MatchForm/MatchForm";
import { PageWrapper, Container, Title, WarningText, LoginPrompt } from "./MatchPage.styled";

const MatchPage = () => {
  const { currentUser } = useUserStore();
  const { players } = usePlayerStore();

  if (!currentUser)
    return (
      <PageWrapper>
        <Container>
          <LoginPrompt>로그인 후 이용해주세요 🎱</LoginPrompt>
        </Container>
      </PageWrapper>
    );

  const otherPlayers = players.filter((p) => p.name !== currentUser.username);

  return (
    <PageWrapper>
      <Container>
        <Title>{currentUser.username}님의 경기 추가</Title>

        {otherPlayers.length === 0 ? (
          <WarningText>다른 선수가 없습니다. 먼저 선수 추가하세요!</WarningText>
        ) : (
          <MatchForm />
        )}
      </Container>
    </PageWrapper>
  );
};

export default MatchPage;
