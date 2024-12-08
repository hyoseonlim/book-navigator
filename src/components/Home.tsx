import {
  MdAccessTime,
  MdBook,
  MdChair,
  MdComputer,
  MdEditNote,
  MdEventSeat,
  MdHelpOutline,
  MdLibraryBooks,
  MdMenuBook,
  MdNightsStay,
  MdPhoneAndroid,
  MdQuestionAnswer,
  MdSearch,
} from "react-icons/md";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Description from "./Description";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 20px;
`;

const IconButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f0f0f0;
  }
  font-family: Jua;
`;

const Icon = styled.div`
  font-size: 30px;
  margin-bottom: 5px;
`;

const Label = styled.div`
  font-size: 14px;
  text-align: center;
`;

const items = [
  { label: "이용시간", icon: <MdAccessTime />, onClick: () => {} },
  { label: "자료검색", icon: <MdSearch />, onClick: "/search" },
  { label: "My Library", icon: <MdLibraryBooks />, onClick: () => {} },
  { label: "도서구입신청", icon: <MdEditNote />, onClick: () => {} },
  { label: "모바일 대출", icon: <MdPhoneAndroid />, onClick: () => {} },
  { label: "야간·휴관일 대출신청", icon: <MdNightsStay />, onClick: () => {} },
  { label: "맞춤형 추천", icon: <MdBook />, onClick: () => {} }, // 대체 아이콘
  { label: "전자책(소장)", icon: <MdComputer />, onClick: () => {} },
  { label: "교보문고 구독", icon: <MdMenuBook />, onClick: () => {} },
  { label: "모바일열람증", icon: <MdPhoneAndroid />, onClick: () => {} },
  { label: "좌석배정", icon: <MdEventSeat />, onClick: () => {} },
  { label: "시설예약", icon: <MdChair />, onClick: () => {} },
  { label: "독서포털", icon: <MdLibraryBooks />, onClick: () => {} },
  { label: "QnA", icon: <MdQuestionAnswer />, onClick: () => {} },
  { label: "FAQ", icon: <MdHelpOutline />, onClick: () => {} },
];

const Home = () => {
  const history = useHistory();

  const handleClick = (onClick: string | (() => void)) => {
    if (typeof onClick === "string") {
      history.push("/search");
    } else {
      onClick();
    }
  };

  return (
    <>
      <Description>
        "자료검색"을 클릭하여 <br />
        원하는 도서를 찾아보세요!
      </Description>
      <Container>
        {items.map((item, index) => (
          <IconButton key={index} onClick={() => handleClick(item.onClick)}>
            <Icon>{item.icon}</Icon>
            <Label>{item.label}</Label>
          </IconButton>
        ))}
      </Container>
    </>
  );
};

export default Home;
