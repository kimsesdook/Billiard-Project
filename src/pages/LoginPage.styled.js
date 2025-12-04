import styled, { keyframes } from "styled-components";

// 배경 애니메이션: 당구장 조명 느낌
const lightAnim = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #0b3d0b, #196619, #0b3d0b, #196619);
  background-size: 400% 400%;
  animation: ${lightAnim} 20s ease infinite;
  font-family: 'Poppins', sans-serif;
`;

export const LoginCard = styled.div`
  background: #1b4d1b;
  padding: 60px 50px;
  border-radius: 20px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  border: 2px solid #4caf50;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 2px 2px #000;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 20px;
  margin: 12px 0;
  border-radius: 12px;
  border: 2px solid #4caf50;
  font-size: 1rem;
  outline: none;
  background: #1b4d1b;
  color: #fff;
  transition: all 0.3s;

  &::placeholder {
    color: #cce6cc;
  }

  &:focus {
    border-color: #a5d6a7;
    box-shadow: 0 0 15px rgba(165, 214, 167, 0.6);
  }
`;

export const ErrorText = styled.p`
  color: #ff5252;
  margin-bottom: 12px;
  font-weight: bold;
  text-shadow: 1px 1px #000;
`;

export const Button = styled.button`
  width: 100%;
  padding: 16px 0;
  margin-top: 20px;
  background: radial-gradient(circle at 50% 50%, #fff 20%, #4caf50 80%);
  color: #0b3d0b;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 50px;
  border: none;
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
