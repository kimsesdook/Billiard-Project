import styled, { keyframes } from "styled-components";

// 배경 그라데이션 애니메이션
const tableLight = keyframes`
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
  animation: ${tableLight} 25s ease infinite;
  font-family: 'Poppins', sans-serif;
`;

export const Container = styled.div`
  background: rgba(0,0,0,0.7);
  padding: 40px 50px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.8);
  color: #fff;
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 25px;
  text-shadow: 2px 2px #000;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  outline: none;
  background: rgba(255,255,255,0.1);
  color: #fff;
  box-shadow: inset 0 2px 5px rgba(0,0,0,0.5);
  
  &::placeholder {
    color: #ddd;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px 0;
  border: none;
  border-radius: 12px;
  background: #ffb74d;
  color: #000;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background: #ffa000;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
  }
`;

export const ErrorText = styled.p`
  color: #ff6b6b;
  text-align: center;
  font-weight: bold;
  margin-bottom: 15px;
`;
