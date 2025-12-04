import { Nav, NavLinks, NavLink, Logo, HeaderContainer } from "./Layout.styled";
import { Link } from "react-router-dom";
import useUserStore from "../../store/useUserStore";

const Header = () => {
  const { currentUser, logout } = useUserStore();

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">🎱 당구기록</Logo>

        <NavLinks>
          <NavLink to="/matches">경기</NavLink>
          <NavLink to="/players">선수</NavLink>

          {currentUser ? (
            <>
              <NavLink to="/mypage">{currentUser.username}</NavLink>
              <button onClick={logout}>로그아웃</button>
            </>
          ) : (
            <>
              <NavLink to="/login">로그인</NavLink>
              <NavLink to="/signup">회원가입</NavLink>
            </>
          )}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
