import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { books } from "../fetcher";
import Button from "./Button";
import Img from "./Img";
import { Dropdown, DropdownItem, SearchContainer } from "./SearchStyle";
import Title from "./Title";

const ImageRow = styled.div`
  display: flex;
  justify-content: space-between; /* 이미지 간 간격 */
  align-items: center; /* 이미지 수직 정렬 */
  flex-wrap: nowrap; /* 행 내에 모든 이미지 유지 */
  gap: 10px; /* 이미지 간 간격 */
  padding: 10px;
`;

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  // 필터링된 책 데이터
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const history = useHistory();

  const handleSelectBook = (bookId: number) => {
    history.push(`/book/${bookId}`); // /book/{id} 경로로 이동
  };

  return (
    <>
      <Title>
        도서 검색&nbsp;
        <MdSearch />
      </Title>
      <div>
        원하는 책의 제목을 검색하거나
        <br /> 표지를 클릭하세요!
      </div>
      <br />
      <SearchContainer>
        <input
          type="text"
          placeholder="책 제목 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 검색어 업데이트
        />
        <Dropdown>
          {filteredBooks.map((book, index) => (
            <DropdownItem
              key={book.id}
              onClick={() => handleSelectBook(book.id)} // 책 선택 처리
            >
              {book.title}
            </DropdownItem>
          ))}
        </Dropdown>
      </SearchContainer>
      <br />
      <br />
      <br />

      <br />
      <br />
      <ImageRow>
        <Img
          width={"22%"}
          src={require("../images/book1.jpg")}
          onClick={() => handleSelectBook(1)}
        />
        <Img
          width={"22%"}
          src={require("../images/book2.jpg")}
          onClick={() => handleSelectBook(2)}
        />
        <Img
          width={"22%"}
          src={require("../images/book3.jpg")}
          onClick={() => handleSelectBook(3)}
        />
        <Img
          width={"22%"}
          src={require("../images/book4.jpg")}
          onClick={() => handleSelectBook(4)}
        />
      </ImageRow>
      <br />

      <br />
      <br />
      <Button category="gray" onClick={() => history.push("/")}>
        홈으로
      </Button>
    </>
  );
}

export default Search;
