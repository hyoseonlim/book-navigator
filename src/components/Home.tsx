import { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { books } from "../fetcher";
import {
  CardContainer,
  CardStyled,
  CarouselWrapper,
  NavigationButton,
} from "./CarouselStyle";
import Title from "./Title";

function Home() {
  const [active, setActive] = useState(0);
  const [count, setCount] = useState<number>(4);
  return (
    <>
      <Title>책 찾기</Title>

      <CarouselWrapper>
        {active > 0 && (
          <NavigationButton
            direction="left"
            onClick={() => setActive((i) => i - 1)}
          >
            <TiChevronLeftOutline />
          </NavigationButton>
        )}
        {books?.map((book, i) => (
          <CardContainer
            key={book.id}
            offset={(active - i) / 3}
            absOffset={Math.abs(active - i) / 3}
            direction={Math.sign(active - i)}
            active={i === active}
          >
            <CardStyled absOffset={Math.abs(active - i) / 3}>
              <div
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "12rem",
                    height: "12rem",
                    backgroundImage: `url(${book?.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex", // Flexbox 적용
                    alignItems: "center", // 수직 가운데 정렬
                    justifyContent: "center", // 수평 가운데 정렬
                    textAlign: "center",
                    color: "black",
                  }}
                ></div>
              </div>
            </CardStyled>
          </CardContainer>
        ))}
        {active < count - 1 && (
          <NavigationButton
            direction="right"
            onClick={() => setActive((i) => i + 1)}
          >
            <TiChevronRightOutline />
          </NavigationButton>
        )}
      </CarouselWrapper>
    </>
  );
}

export default Home;
