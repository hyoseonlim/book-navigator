import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import BookDetail from "./components/BookDetail";
import Home from "./components/Home";
import Search from "./components/Search";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
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
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/book/:id" component={BookDetail} />
        </Switch>
      </Container>
    </>
  );
}

export default Router;
