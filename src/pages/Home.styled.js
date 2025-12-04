import styled, { keyframes } from "styled-components";

// 공 튀는 애니메이션
const bounceAndCollide = keyframes`
  0%   { transform: translate(0, 0) rotate(0deg); }
  20%  { transform: translate(60px, -10px) rotate(90deg); }
  40%  { transform: translate(120px, 10px) rotate(180deg); }
  60%  { transform: translate(180px, -10px) rotate(270deg); }
  80%  { transform: translate(240px, 10px) rotate(360deg); }
  100% { transform: translate(0, 0) rotate(450deg); }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background: #1b5e20;
  padding: 40px 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 16px;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.5);
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: #e0f7fa;
  margin-bottom: 32px;
`;

export const ActionButton = styled.button`
  padding: 12px 28px;
  font-size: 1.2rem;
  background-color: #ffca28;
  color: #1b5e20;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 2px 4px 8px rgba(0,0,0,0.4);

  &:hover {
    background-color: #ffc107;
    transform: translateY(-3px);
    box-shadow: 3px 6px 12px rgba(0,0,0,0.5);
  }
`;

export const PoolBall = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 0 6px;
  border-radius: 50%;
  background-color: ${(props) => props.color || "#fff"};
  border: 2px solid #333;
  box-shadow: 1px 2px 4px rgba(0,0,0,0.5);

  animation: ${bounceAndCollide} ${(props) => props.speed || "3s"} infinite ease-in-out;
`;
