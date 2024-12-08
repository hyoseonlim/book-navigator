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
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - env(safe-area-inset-bottom)); /* 실제 높이를 계산 */
  text-align: center;
  background-color: #dbe0da;
  overflow: hidden; /* 오버플로우 방지 */
`;

// 메인 콘텐츠 영역 스타일
const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  overflow: hidden; /* 오버플로우 방지 */
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
