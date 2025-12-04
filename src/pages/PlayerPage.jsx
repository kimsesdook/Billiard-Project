import React from "react";
import usePlayerStore from "../store/usePlayerStore";
import { PageWrapper, Container, Title, PlayerList, PlayerCard, Stats } from "./PlayerPage.styled";

const PlayerPage = () => {
  const players = usePlayerStore((state) => state.players); // ✅ 상태 구독

  return (
    <PageWrapper>
      <Container>
        <Title>선수 목록 🎱</Title>
        <PlayerList>
          {players.map((p) => (
            <PlayerCard key={p.name}>
              {p.name}
              <Stats>
                경기 {p.totalMatches}회 / 승 {p.wins} / 패 {p.losses}
              </Stats>
            </PlayerCard>
          ))}
        </PlayerList>
      </Container>
    </PageWrapper>
  );
};

export default PlayerPage;
