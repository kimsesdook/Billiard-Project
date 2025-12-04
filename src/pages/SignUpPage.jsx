import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/useUserStore";
import { PageWrapper, Container, Title, Input, Button, ErrorText } from "./SignUpPage.styled";

const SignUpPage = () => {
  const { signUp, error, clearError } = useUserStore();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    clearError();
    const success = signUp({ username, password });
    if (success) {
      alert("회원가입 완료!");
      navigate("/login");
    }
  };

  return (
    <PageWrapper>
      <Container>
        <Title>회원가입 🎱</Title>
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
        <Button onClick={handleSignUp}>가입하기</Button>
      </Container>
    </PageWrapper>
  );
};

export default SignUpPage;
