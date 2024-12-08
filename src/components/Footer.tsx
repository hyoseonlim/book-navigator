import styled from "styled-components";
import reference from "../images/reference.jpg";
import Img from "./Img";

const FooterContainer = styled.footer`
  width: 100vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.6rem;
  color: #1d2f38;
  text-align: center;
  background-color: #e0d6c6;
  border-top: 4px solid #1d2f38;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 17px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

function Footer() {
  const handleClick = () => {
    window.open("https://library.seoultech.ac.kr/#/", "_blank");
  };
  return (
    <FooterContainer>
      팀 프로젝트 진행을 위한 테스트용 서비스로,
      <br />
      서울과학기술대학교 도서관 서비스의 디자인을 참고했습니다.
      <br />
      <br />
      <Img
        width={"40%"}
        src={reference}
        onClick={handleClick}
        style={{ opacity: "0.9" }}
      />
    </FooterContainer>
  );
}

export default Footer;
