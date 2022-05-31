/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let post ='강남 우동 맛집';
  //자료를 잠깐 저장할 때, 변수 문법, 변수를 넣을 땐 중괄호
  //state를 사용해도 자료를 저장할 수 있다.
  let [ 글제목,글제목변경] =useState(['남자 코트 추천','파이썬 독학','자바 독학']);

  let [따봉, 따봉변경] = useState(0);
  let [modal,setmodal] = useState(false);

  //이 형식에 맞추어 state를 사용 가능하다.
  //state는 자동으로 재렌더링이 된다.
  //자주 변경될것같은 html부분은 state로 만들기!!

  let [a,c] = [1,2];
  //a에 1을 넣고, c에 2를 넣는다. 

  //함수를 만들어 보자
  function 함수(){
    console.log(1);
  }
  //state를 변경하려면 등호로 변경하지 말자. 
  //state만들때 뒤에 작명으로 함수를 만들어 사용

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={()=>{
        let copy = [...글제목];
        //array/object이기 때문에 그냥 글제목으로 쓰면 작동하지 않는다. 
        //...이 문법이 새로 바꿔주세요 라는 뜻이다. 
        //shallow copy본이다. 
      
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
        }}>  💁🏻‍♀️ </button>

<button onClick={()=>{
        let ganada = [...글제목];
      
        ganada = ganada.sort();
        글제목변경(ganada);
        }}>  가나다 정렬 </button>

      <div className="list">
      <h4> { 글제목[0] } <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>





    </div>
    
  );
}

//Modal창의 기능 부여 제목을 누르면 modal이 보이기!!

function Modal(){
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
      </div>
  )
}
//컴포넌트 만드는 법
//1. function만들기 2. return()안에 html 담기 3. <함수명></함수명>쓰기
//JSX문법에선 className이라고 써야함

//어떤것을 컴포넌트로 만들면 좋을 까>>
//1. 반복적인 html 축약할 때 2.큰 페이지들 3. 자주 변경되는 것들
//하지만 다른 함수의 state를 가져다 쓸 때 문제가 생긴다!!! ㅜ

export default App;
