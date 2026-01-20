import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// // 화살표 함수로 만든 컴포넌트
// const Header = () => {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// };

// // 함수 표현식으로 만든 컴포넌트
// function Header2() {
//   return (
//     <header>
//       <h1>header2</h1>
//     </header>
//   );
// }

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
