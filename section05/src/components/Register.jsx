import { useState, useRef } from "react";

let count = 0; // Register 컴포넌트 밖에 선언된 변수

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  //   let count = 0; // 순수 자바스크립트 변수

  const onChange = (e) => {
    // countRef.current++;
    // console.log("수정 횟수:", countRef.current);

    count++;
    console.log("count:", count);

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소에 포커스 설정 -> 포커스: 사용자가 입력할 수 있도록 해당 요소가 선택되어 깜빡이는 커서가 나타나는 상태
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;

// State로 사용자 입력 관리하기 1

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

// import { useState } from "react";

// // 간단한 회원가입 폼
// // 1. 이름
// // 2. 생년월일
// // 3. 국적
// // 4. 자기소개

// const Register = () => {
//   const [name, setName] = useState("이름");
//   const [birth, setBirth] = useState("");
//   const [country, setCountry] = useState("");
//   const [bio, setBio] = useState("");

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeBirth = (e) => {
//     setBirth(e.target.value);
//   };

//   const onChangeCountry = (e) => {
//     setCountry(e.target.value);
//   };

//   const onChangeBio = (e) => {
//     setBio(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName} placeholder={"이름"} />
//         {name}
//       </div>

//       <div>
//         <input value={birth} onChange={onChangeBirth} type="date" />
//         {birth}
//       </div>

//       <div>
//         <select value={country} onChange={onChangeCountry}>
//           <option></option>
//           <option value="kr">한국</option>
//           <option value="us">미국</option>
//           <option value="uk">영국</option>
//         </select>
//         {country}
//       </div>
//       <div>
//         <textarea value={bio} onChange={onChangeBio} />
//         {bio}
//       </div>
//     </div>
//   );
// };

// 1차 리팩토링 -> 상태 값들을 객체로 관리

// import { useState } from "react";

// // 상태를 객체로 관리
// const Register = () => {
//   const [input, setInput] = useState({
//     name: "",
//     birth: "",
//     country: "",
//     bio: "",
//   });

//   console.log(input);

//   const onChangeName = (e) => {
//     setInput({
//       ...input, // 스프레드 연산자를 이용하여 관련 없는 값들은 그대로 유지되도록 설정
//       name: e.target.value, // 변경하고자 하는 프로퍼티의 값만 변경
//     });
//   };

//   const onChangeBirth = (e) => {
//     setInput({
//       ...input,
//       birth: e.target.value,
//     });
//   };

//   const onChangeCountry = (e) => {
//     setInput({
//       ...input,
//       country: e.target.value,
//     });
//   };

//   const onChangeBio = (e) => {
//     setInput({
//       ...input,
//       bio: e.target.value,
//     });
//   };

//   return (
//     <div>
//       <div>
//         <input
//           value={input.name}
//           onChange={onChangeName}
//           placeholder={"이름"}
//         />
//         {input.name}
//       </div>

//       <div>
//         <input value={input.birth} onChange={onChangeBirth} type="date" />
//         {input.birth}
//       </div>

//       <div>
//         <select value={input.country} onChange={onChangeCountry}>
//           <option></option>
//           <option value="kr">한국</option>
//           <option value="us">미국</option>
//           <option value="uk">영국</option>
//         </select>
//         {input.country}
//       </div>
//       <div>
//         <textarea value={input.bio} onChange={onChangeBio} />
//         {input.bio}
//       </div>
//     </div>
//   );
// };

// State로 사용자 입력 관리하기 2

// // 상태를 객체로 관리
// const Register = () => {
//   const [input, setInput] = useState({
//     name: "",
//     birth: "",
//     country: "",
//     bio: "",
//   });

//   console.log(input);

//   // 통합 이벤트 핸들러
//   const onChange = (e) => {
//     setInput({
//       ...input, // 스프레드 연산자를 이용하여 관련 없는 값들은 그대로 유지되도록 설정
//       [e.target.name]: e.target.value, // 변경하고자 하는 프로퍼티의 값만 변경
//     });
//   };

//   return (
//     <div>
//       <div>
//         <input
//           name="name"
//           value={input.name}
//           onChange={onChange}
//           placeholder={"이름"}
//         />
//       </div>

//       <div>
//         <input
//           name="birth"
//           value={input.birth}
//           onChange={onChange}
//           type="date"
//         />
//       </div>

//       <div>
//         <select name="country" value={input.country} onChange={onChange}>
//           <option></option>
//           <option value="kr">한국</option>
//           <option value="us">미국</option>
//           <option value="uk">영국</option>
//         </select>
//       </div>
//       <div>
//         <textarea name="bio" value={input.bio} onChange={onChange} />
//       </div>
//     </div>
//   );
// };

// useRef

// let count = 0; // Register 컴포넌트 밖에 선언된 변수

// const Register = () => {
//   const [input, setInput] = useState({
//     name: "",
//     birth: "",
//     country: "",
//     bio: "",
//   });

//   const countRef = useRef(0);
//   const inputRef = useRef();

//   //   let count = 0; // 순수 자바스크립트 변수

//   const onChange = (e) => {
//     // countRef.current++;
//     // console.log("수정 횟수:", countRef.current);

//     count++;
//     console.log("count:", count);

//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const onSubmit = () => {
//     if (input.name === "") {
//       // 이름을 입력하는 DOM 요소에 포커스 설정 -> 포커스: 사용자가 입력할 수 있도록 해당 요소가 선택되어 깜빡이는 커서가 나타나는 상태
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input
//           ref={inputRef}
//           name="name"
//           value={input.name}
//           onChange={onChange}
//           placeholder={"이름"}
//         />
//       </div>

//       <div>
//         <input
//           name="birth"
//           value={input.birth}
//           onChange={onChange}
//           type="date"
//         />
//       </div>

//       <div>
//         <select name="country" value={input.country} onChange={onChange}>
//           <option></option>
//           <option value="kr">한국</option>
//           <option value="us">미국</option>
//           <option value="uk">영국</option>
//         </select>
//       </div>
//       <div>
//         <textarea name="bio" value={input.bio} onChange={onChange} />
//       </div>

//       <button onClick={onSubmit}>제출</button>
//     </div>
//   );
// };
