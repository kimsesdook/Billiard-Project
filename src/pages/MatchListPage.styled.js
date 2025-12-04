import styled, { keyframes } from "styled-components";

// 배경 조명 애니메이션
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

export const ListContainer = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 25px;
  text-shadow: 2px 2px #000;
`;

export const NewMatchLink = styled.a`
  display: inline-block;
  margin-bottom: 25px;
  padding: 10px 20px;
  background: radial-gradient(circle at 50% 50%, #fff 20%, #4caf50 80%);
  color: #0b3d0b;
  font-weight: 700;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MatchList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MatchItem = styled.li`
  background: radial-gradient(circle at 50% 50%, #d6f7d6 20%, #1b4d1b 80%);
  margin: 12px 0;
  padding: 15px 20px;
  border-radius: 50px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.5);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0,0,0,0.6);
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
    display: block;
  }
`;

export const NoMatch = styled.p`
  color: #fff;
  font-size: 1.2rem;
  margin-top: 20px;
`;
