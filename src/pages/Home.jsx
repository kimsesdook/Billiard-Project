import React from "react";
import { HomeContainer, Title, Description, ActionButton, PoolBall } from "./Home.styled";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Title>🎱 당구 경기 기록 시스템</Title>
      <Description>선수를 등록하고 경기를 기록해보세요!</Description>

      <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center', overflow: 'hidden', width: '260px', height: '60px', position: 'relative' }}>
        <PoolBall color="#ff0000" speed="3s" />
        <PoolBall color="#0000ff" speed="3.3s" />
        <PoolBall color="#ffff00" speed="3.6s" />
        <PoolBall color="#00ff00" speed="3.9s" />
      </div>

      <ActionButton onClick={() => navigate("/players")}>
        선수 목록 보기
      </ActionButton>
    </HomeContainer>
  );
};

export default Home;
