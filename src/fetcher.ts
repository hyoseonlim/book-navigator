export const books: Book[] = [
  {
    id: 1,
    title: "아랍인의 역사",
    location: "918ㅎ831o",
    registrationNumber: "EM400369",
    author: "앨버트 후라니",
    translator: "김정명",
    image: "book1",
  },
  {
    id: 2,
    title: "빙벽",
    location: "833.6o691ㅂ",
    registrationNumber: "EM359925",
    author: "이노우에 야스시",
    translator: "김석희",
    image: "book2",
  },
  {
    id: 3,
    title: "스타벅스 웨이",
    location: "325.571ㅁ934ㅅc.2",
    registrationNumber: "EM57710",
    author: "조셉 미첼리",
    translator: "강유리",
    image: "book3",
  },
  {
    id: 4,
    title: "의약품합성학",
    location: "518.44o652o2",
    registrationNumber: "EM496228",
    author: "의약품합성학 편집위원회",
    image: "book4",
  },
];

export interface Book {
  id: number; // PK
  title: string; // 제목
  location: string; // 위치
  registrationNumber: string; // 등록번호
  author: string; // 작가
  translator?: string; // 번역가
  image: string; // 표지 이미지
}
