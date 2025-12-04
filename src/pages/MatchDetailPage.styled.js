import styled, { keyframes } from "styled-components";

// 배경 애니메이션: 당구장 조명 느낌
const lightAnim = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #0b3d0b, #196619, #0b3d0b, #196619);
  background-size: 400% 400%;
  animation: ${lightAnim} 20s ease infinite;
  font-family: 'Poppins', sans-serif;
`;

export const MatchCard = styled.div`
  background: #1b4d1b;
  padding: 50px 40px;
  border-radius: 20px;
  text-align: center;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  border: 2px solid #4caf50;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 25px;
  color: #fff;
  text-shadow: 2px 2px #000;
`;

export const InfoText = styled.p`
  font-size: 1.1rem;
  color: #f0f0f0;
  margin: 10px 0;
  & strong {
    color: #ffd700;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 25px;
`;

export const ActionButton = styled.button`
  padding: 12px 25px;
  background: radial-gradient(circle at 50% 50%, #fff 20%, #4caf50 80%);
  color: #0b3d0b;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.6);
  }

  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
  }
`;

export const DeleteButton = styled(ActionButton)`
  background: radial-gradient(circle at 50% 50%, #fff 20%, #ff5252 80%);
  color: #650000;
`;
