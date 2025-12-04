import styled, { keyframes } from "styled-components";

// 배경 애니메이션
const lightAnim = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(120deg, #0b3d0b, #196619, #0b3d0b, #196619);
  background-size: 400% 400%;
  animation: ${lightAnim} 20s ease infinite;
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  font-family: 'Poppins', sans-serif;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: rgba(0,0,0,0.5);
  padding: 30px 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.7);
  text-align: center;
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px #000;
`;

export const WarningText = styled.p`
  color: #ff4d4d;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 20px;
`;

export const LoginPrompt = styled.p`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px #000;
`;
