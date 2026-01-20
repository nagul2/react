const Button = ({ children, text, color = "black" }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

// 기본값 설정
// 리액트 19 이전
// Button.defualtProps = {
//   color: "black",
// };

// 리액트 19 이후에는 defualtProps 문법이 사라져 구조분해 할당을 이용해야함

export default Button;

//   return (
//     <button style={{ color: props.color }}>
//       {props.text} - {props.red}
//     </button>
//   );

// const Button = (props) => {
//   console.log(props);
//   return (
//     <button style={{ color: props.color }}>
//       {props.text} - {props.color.toUpperCase()}
//     </button>
//   );
// };
