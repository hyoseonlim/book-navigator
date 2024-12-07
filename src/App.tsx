import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Router from "./Router";
import Footer from "./components/Footer";
import Header from "./components/Header";

// 컨테이너 스타일
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 가로 가운데 정렬 */
  justify-content: center; /* 세로 가운데 정렬 */
  width: 100vw; /* 화면 너비 전체 */
  height: 100vh; /* 화면 높이 전체 */
  text-align: center;
  background-color: #dbe0da;
`;

// 메인 콘텐츠 영역 스타일
const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Content>
          <Router />
        </Content>
      </BrowserRouter>
      <Footer />
    </AppContainer>
  );
}

export default App;
