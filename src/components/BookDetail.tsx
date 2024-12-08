import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { Book, books } from "../fetcher";
import Button from "./Button";
import Img from "./Img";
import Title from "./Title";
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; /* 각 항목 간 간격 */
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

const Label = styled.div`
  font-weight: bold;
  color: #333;
  width: 100px; /* 고정된 라벨 영역 크기 */
  text-align: left;
`;

const Value = styled.div`
  flex: 1;
  text-align: left;
  color: #555;
`;
function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const bookId = parseInt(id, 10);
  const book: Book | undefined = books.find((b) => b.id === bookId);
  const history = useHistory();

  return (
    <div
      style={{
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title>도서 상세정보</Title>

      <InfoContainer>
        <InfoRow>
          <Label>제목</Label>
          <Value>{book?.title || "정보 없음"}</Value>
        </InfoRow>
        <InfoRow>
          <Label>지은이</Label>
          <Value>{book?.author || "정보 없음"}</Value>
        </InfoRow>
        {book?.translator && (
          <InfoRow>
            <Label>옮긴이</Label>
            <Value>{book?.translator || "정보 없음"}</Value>
          </InfoRow>
        )}
        <InfoRow>
          <Label>위치</Label>
          <Value>{book?.location || "정보 없음"}</Value>
        </InfoRow>
        <InfoRow>
          <Label>등록번호</Label>
          <Value>{book?.registrationNumber || "정보 없음"}</Value>
        </InfoRow>
      </InfoContainer>
      <br />
      <Img
        width={"50%"}
        src={require(`../images/${book?.image}.jpg`)}
        alt={book?.title}
      />
      <br />
      <br />
      <Button category="gray" onClick={() => history.push("/search")}>
        다시 검색하기
      </Button>
      <Button category="beige">AR로 길찾기</Button>
    </div>
  );
}

export default BookDetail;
