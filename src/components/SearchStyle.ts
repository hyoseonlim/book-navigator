import styled from "styled-components";

// 검색창 컨테이너
export const SearchContainer = styled.div`
  width: 80%;
  margin: 0px 10px 20px 10px;
  position: relative;

  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    width: 90%; /* 작은 화면에서 더 넓게 */
    margin: 0 5px 20px 5px;

    input {
      font-size: 14px; /* 글자 크기 축소 */
      padding: 8px; /* 패딩 축소 */
    }
  }

  @media (max-width: 480px) {
    width: 95%;
    input {
      font-size: 12px; /* 글자 크기 더 축소 */
      padding: 6px; /* 패딩 더 축소 */
    }
  }
`;

// 드롭다운 메뉴
export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 150px;
  overflow-y: auto;
  z-index: 10;

  @media (max-width: 768px) {
    max-height: 120px; /* 드롭다운 높이 축소 */
  }

  @media (max-width: 480px) {
    max-height: 100px; /* 드롭다운 높이 더 축소 */
  }
`;

// 드롭다운 항목
export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    padding: 8px; /* 작은 화면에서 항목 간격 축소 */
    font-size: 14px; /* 글자 크기 축소 */
  }

  @media (max-width: 480px) {
    padding: 6px; /* 더 작은 화면에서 간격 축소 */
    font-size: 12px; /* 글자 크기 더 축소 */
  }
`;
