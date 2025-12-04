import styled, { keyframes } from "styled-components";

// 배경 애니메이션
const tableLight = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(120deg, #0b3d0b, #196619, #0b3d0b, #196619);
  background-size: 400% 400%;
  animation: ${tableLight} 25s ease infinite;
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  font-family: 'Poppins', sans-serif;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  background: rgba(0,0,0,0.6);
  padding: 30px 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.7);
  color: #fff;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-shadow: 3px 3px #000;
`;

export const PlayerList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PlayerCard = styled.li`
  background: rgba(255,255,255,0.1);
  padding: 15px 20px;
  margin-bottom: 12px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
  }
`;

export const Stats = styled.span`
  font-size: 0.95rem;
  color: #ffeb99;
`;
