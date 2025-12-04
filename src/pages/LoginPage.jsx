import React, { useState } from "react";
import { LoginWrapper, LoginCard, Title, Input, Button, ErrorText } from "./LoginPage.styled";
import useUserStore from "../store/useUserStore";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login, error, clearError } = useUserStore();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    clearError();
    const success = login({ username, password });
    if (success) navigate("/");
  };

  return (
    <LoginWrapper>
      <LoginCard>
        <Title>🎱 당구장 로그인</Title>
        {error && <ErrorText>{error}</ErrorText>}

        <Input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleLogin}>로그인</Button>
      </LoginCard>
    </LoginWrapper>
  );
};

export default LoginPage;
