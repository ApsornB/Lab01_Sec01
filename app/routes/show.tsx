import React, { useState } from "react";

const showBooks = [
  {
    "Code": "B001",
    "Title": "ใช้คลื่นพลังบวกดึงดูดพลังสุข",
    "Cover": "https://storage.naiin.com/system/application/bookstore/resource/product/202109/533411/1000243428_front_XXL.jpg?imgname=%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%84%E0%B8%A5%E0%B8%B7%E0%B9%88%E0%B8%99%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%9A%E0%B8%A7%E0%B8%81%E0%B8%94%E0%B8%B6%E0%B8%87%E0%B8%94%E0%B8%B9%E0%B8%94%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B8%E0%B8%82",
    "Description": "ใช้กฎแห่งแรงสั่นสะเทือนดึงดูดพลังงานบวกรอบตัว เพื่อบรรลุความสุขและเป้าหมายอันยิ่งใหญ่กว่าที่คุณคิดฝัน",
    "Category": 1,
    "Author": "Vex King",
    "Publishing": "อมรินทร์ How to",
    "Price": "245 บาท",
    "Bestsellers": true,
    "Suggestions": true,
    "Source": "https://www.naiin.com/product/detail/533411"
  },
  {
    "Code": "B002",
    "Title": "จิตวิทยาสายดาร์ก",
    "Cover": "https://storage.naiin.com/system/application/bookstore/resource/product/202304/577274/1000260516_front_XXXL.jpg?imgname=%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%94%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%81",
    "Description": "Dr. Hiro  เคยเป็นนักขายที่ล้มเหลว  ขายอะไรก็ไม่มีใครซื้อแต่แล้ววันหนึ่งขณะกำลังดูข่าว  เขาก็นึกขึ้นได้ว่า“ในโลกเรามีลัทธิที่ขายของไม่น่าเชื่อถือได้ในราคาแพงลิ่วแถมยังทำให้สาวกยอมทุ่มบริจาคทรัพย์สินจนหมดตัวแล้วทำไมผมถึงขายไม่ออกล่ะ?”เขาจึงเริ่มศึกษาเทคนิคเหล่านั้นอย่างจริงจังอ่านหนังสือทุกเล่มเกี่ยวกับการล้างสมองที่มีในท้องตลาดแล้วเอาไปปรับใช้จนกลายเป็นนักขายระดับท็อปของญี่ปุ่นนั่นคือที่มาของ  “จิตวิทยาสายดาร์ก”พบกับเทคนิคทางจิตวิทยาที่ช่วยให้คุณใช้คำพูดควบคุมจิตใจคนทำให้พวกเขาคล้อยตามและทำอย่างที่คุณต้องการโดยไม่รู้ตัว",
    "Category": 2,
    "Author": "Dr.Hiro",
    "Publishing": "วีเลิร์น (WeLearn)",
    "Price": "250 บาท",
    "Bestsellers": true,
    "Suggestions": true,
    "Source": "https://www.naiin.com/product/detail/577274"
  },
  {
    "Code": "B003",
    "Title": "แนวข้อสอบ A-LEVEL ภาษาอังกฤษ",
    "Cover": "https://storage.naiin.com/system/application/bookstore/resource/product/202306/582643/1000262063_front_XXXL.jpg?imgname=%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%AA%E0%B8%AD%E0%B8%9A-A-LEVEL-%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B8%AD%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%A4%E0%B8%A9",
    "Description": "วิเคราะห์ข้อสอบ A-LEVEL ภาษาอังกฤษและนำเสนอข้อสอบทั้ง 5 ชุดนี้ที่สร้างขึ้นตรงตามรูปแบบและเนื้อหาของข้อสอบจริงล่าสุด ซึ่งมีความท้าทายกว่าข้อสอบรูปแบบอื่นๆในระดับชั้นมัธยมศึกษาตอนปลาย เพื่อช่วยให้นักเรียนที่เตรียมตัวสอบได้ฝึกฝนและทดสอบตนเองด้วยข้อสอบที่มีประสิทธิภาพและทันสมัย",
    "Category": 3,
    "Author": "รศ.ดร.ศุภวัฒน์ พุกเจริญ",
    "Publishing": "ศุภวัฒน์ พุกเจริญ/Suphawat Pukcharoen",
    "Price": "265 บาท",
    "Bestsellers": true,
    "Suggestions": true,
    "Source": "https://www.naiin.com/product/detail/582643"
  },
  {
    "Code": "B004",
    "Title": "เลิกเป็นมนุษย์คิดเยอะ!",
    "Cover": "https://storage.naiin.com/system/application/bookstore/resource/product/202411/628565/1000277223_front_XXXL.jpg?imgname=%E0%B9%80%E0%B8%A5%E0%B8%B4%E0%B8%81%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%A2%E0%B8%AD%E0%B8%B0!",
    "Description": "แค่ปรับมุมคิด ชีวิตก็เบาสบายขึ้น  50 คำแนะนำดี ๆ ที่ช่วยปัดกวาดความคิดที่ยุ่งเหยิง แล้วคุณจะพบว่า ชีวิตมันไม่ต้องยากขนาดนั้น!",
    "Category": 2,
    "Author": "บาบะ เคสุเกะ",
    "Publishing": "วีเลิร์น (WeLearn)",
    "Price": "180 บาท",
    "Bestsellers": true,
    "Suggestions": true,
    "Source": "https://www.naiin.com/product/detail/628565"
  },
  {
    "Code": "B005",
    "Title": "อย่าเป็นคนเก่งที่คุยไม่เป็น",
    "Cover": "https://storage.naiin.com/system/application/bookstore/resource/product/202005/505330/1000232888_front_XXXL.jpg?imgname=%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%84%E0%B8%99%E0%B9%80%E0%B8%81%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%84%E0%B8%B8%E0%B8%A2%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99",
    "Description": "บางสิ่งที่สำคัญไม่แพ้ความสามารถ ...มาพบกับทักษะคุยเล่นของคนชั้นแนวหน้าในทุกวงการ ใน หนังสือพัฒนาตัวเอง how to อย่าเป็นคนเก่งที่คุยไม่เป็น",
    "Category": 2,
    "Author": "ยาซุดะ ทาดาชิ (Tadashi Yasuda)",
    "Publishing": "วีเลิร์น (WeLearn)",
    "Price": "220 บาท",
    "Bestsellers": true,
    "Suggestions": true,
    "Source": "https://www.naiin.com/product/detail/505330"
  }
];

const ShowBooks = () => {
  const [books, setBooks] = useState(showBooks);
  const [selectedBook, setSelectedBook] = useState<any>(null);

  const handleBookClick = (book: any) => {
        setSelectedBook(book);
  };

  return (
    <div className="card-container">
      {books.map((book) => (
        <div key={book.Code} className="card" onClick={() => handleBookClick(book)}>
          <img src={book.Cover} alt={book.Title} className="card-img" />
          <div className="card-title">{book.Title}</div>
          <div className="card-description">{book.Description}</div>
          <div className="card-price">{book.Price}</div>
          <div className="card-status">
            {book.Bestsellers ? "ขายดี" : "ไม่ได้ขายดี"} | {book.Suggestions ? "แนะนำ" : "ไม่แนะนำ"}
          </div>
          <a href={book.Source} target="_blank" rel="noopener noreferrer">ดูรายละเอียด</a>
        </div>
      ))}

      {selectedBook && (
        <div className="book-detail">
          <h3>รายละเอียดหนังสือ: {selectedBook.Title}</h3>
          <img src={selectedBook.Cover} alt={selectedBook.Title} className="card-img" />
          <p>{selectedBook.Description}</p>
          <p><strong>ราคา:</strong> {selectedBook.Price}</p>
          <p><strong>สำนักพิมพ์:</strong> {selectedBook.Publishing}</p>
          <a href={selectedBook.Source} target="_blank" rel="noopener noreferrer">ดูรายละเอียดเพิ่มเติม</a>
        </div>
      )}
    </div>
  );
};

export default ShowBooks;