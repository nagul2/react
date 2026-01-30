import "./Editor.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EmotionItem from "./EmotionItem.jsx";
import Button from "./Button.jsx";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

// 날짜 -> YYYY-MM-DD
const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  // 01 ~ 09 표현
  if (month < 10) {
    month = `0${month}`;
  }

  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

const Editor = ({ onSubmit }) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  // e.target.value는 문자열로 들어옴 -> 날짜인 경우 Date로 변환해야함
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  // 작성 완료 버튼을 동적으로 동작하게 하기 위한 함수
  // 생성 페이지 -> 새 일기 생성, 수정 페이지 -> 일기 수정
  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() => {
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                });
              }}
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onClickSubmitButton}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;

// 하나하나 하드코딩으로 렌더링 -> 좋지 않음, 수정이나 추가 사항이 발생하면 고칠게 많아 유지보수에 최악
// <div>
//   <EmotionItem emotionId={1} emotionName={"완전 좋음"} />
//   <EmotionItem emotionId={2} emotionName={"좋음"}/>
//   <EmotionItem emotionId={3} emotionName={"그럭저럭"}/>
//   <EmotionItem emotionId={4} emotionName={"나쁨"}/>
//   <EmotionItem emotionId={5} emotionName={"끔찍함"}/>
// </div>
