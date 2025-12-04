import React, { useState } from "react";
import useUserStore from "../store/useUserStore";
import { PageWrapper, Container, Title, InfoText, ErrorText, Input, Button, Divider } from "./MyPage.styled";

const MyPage = () => {
  const { currentUser, updateUserName, deleteUser, error } = useUserStore();
  const [newName, setNewName] = useState("");

  if (!currentUser) return (
    <PageWrapper>
      <Container>
        <Title>로그인이 필요합니다 🎱</Title>
      </Container>
    </PageWrapper>
  );

  const handleUpdate = () => {
    if (!newName.trim()) return alert("새 닉네임을 입력해주세요.");

    const success = updateUserName(newName);
    if (success) {
      alert("닉네임 변경 완료!");
      setNewName("");
    }
  };

  return (
    <PageWrapper>
      <Container>
        <Title>마이페이지</Title>
        <InfoText>현재 닉네임: {currentUser.username}</InfoText>

        {error && <ErrorText>{error}</ErrorText>}

        <Input
          type="text"
          placeholder="새 닉네임"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Button onClick={handleUpdate}>닉네임 변경</Button>

        <Divider />

        <Button danger onClick={deleteUser}>회원 탈퇴</Button>
      </Container>
    </PageWrapper>
  );
};

export default MyPage;
