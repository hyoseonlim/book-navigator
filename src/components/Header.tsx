import { useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png";

const HeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  background-color: #e0d6c6;
  box-sizing: border-box;
`;

const LogoImg = styled.img`
  width: 90vw;
  border: 1px solid black;
`;

const Header = () => {
  const nav = useHistory();

  return (
    <>
      <HeaderContainer>
        <LogoImg src={logo} alt="Logo" />
      </HeaderContainer>
    </>
  );
};

export default Header;
