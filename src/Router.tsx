import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 60%;
  padding: 15px 10px 25px 10px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 1024px) {
    padding: 0 80px;
  }
`;

function Router() {
  return (
    <>
      <Container>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default Router;
