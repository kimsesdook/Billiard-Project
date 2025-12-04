import React from "react";
import { Link } from "react-router-dom";
import useMatchStore from "../store/useMatchStore";
import { PageWrapper, ListContainer, Title, NewMatchLink, MatchList, MatchItem, NoMatch } from "./MatchListPage.styled";

const MatchListPage = () => {
  const matches = useMatchStore((state) => state.matches);

  return (
    <PageWrapper>
      <ListContainer>
        <Title>🎱 전체 경기 목록</Title>
        <NewMatchLink as={Link} to="/matches/new">새 경기 등록</NewMatchLink>

        {matches.length === 0 ? (
          <NoMatch>기록된 경기가 없습니다.</NoMatch>
        ) : (
          <MatchList>
            {matches.map((m) => (
              <MatchItem key={m.id}>
                <Link to={`/matches/${m.id}`}>
                  {m.player1} vs {m.player2} ({m.score1} : {m.score2})
                </Link>
              </MatchItem>
            ))}
          </MatchList>
        )}
      </ListContainer>
    </PageWrapper>
  );
};

export default MatchListPage;
