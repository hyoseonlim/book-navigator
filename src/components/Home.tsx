import { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { books } from "../fetcher";
import {
  CardContainer,
  CardStyled,
  CarouselWrapper,
  NavigationButton,
} from "./CarouselStyle";
import Img from "./Img";
import { Dropdown, DropdownItem, SearchContainer } from "./SearchStyle";
import Title from "./Title";

function Home() {
  const [active, setActive] = useState(0);
  const [count, setCount] = useState<number>(books.length);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // 필터링된 책 데이터
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectBook = (index: number) => {
    setActive(index); // 선택한 책으로 캐러셀 이동
    setSearchTerm(books[index].title); // 검색창에 선택한 책 제목 표시
    setShowDropdown(false); // 드롭다운 닫기
  };

  return (
    <>
      <Title>책 검색</Title>
      <SearchContainer>
        <input
          type="text"
          placeholder="책 제목 검색"
          value={searchTerm}
          onClick={() => setShowDropdown(true)} // 클릭 시 드롭다운 표시
          onChange={(e) => setSearchTerm(e.target.value)} // 검색어 업데이트
        />
        {showDropdown && (
          <Dropdown>
            {filteredBooks.map((book, index) => (
              <DropdownItem
                key={book.id}
                onClick={() => handleSelectBook(index)} // 책 선택 처리
              >
                {book.title}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </SearchContainer>

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
                <Img
                  width={"80%"}
                  src={require(`../images/${book.image}.jpg`)}
                  alt={book.title}
                />
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
