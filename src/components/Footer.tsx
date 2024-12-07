import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;
  font-family: Nanum Pen Script;
  color: black;
  text-align: center;
  background-color: #e0d6c6;

  @media (min-width: 768px) {
    font-size: 17px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      서울과학기술대학교 산업정보시스템전공 HCI 강의의
      <br />팀 프로젝트 진행을 위한 테스트용 서비스입니다.
      <br />
      <br /> lovellehyo@gmail.com
    </FooterContainer>
  );
}

export default Footer;
