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
  max-width: 500px;
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

export const InfoText = styled.p`
  margin-bottom: 15px;
  font-weight: bold;
`;

export const ErrorText = styled.p`
  color: #ff4d4d;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 70%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  background: ${props => props.danger ? '#ff4d4d' : '#f5f5f5'};
  color: ${props => props.danger ? '#fff' : '#333'};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }
`;

export const Divider = styled.hr`
  margin: 20px 0;
  border: 0.5px solid #fff;
  opacity: 0.3;
`;
