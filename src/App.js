import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    "돈까스 맛집 추천",
    "족발 맛집 추천",
    "초밥 맛집 추천",
    "스페인 여행지 추천",
  ]);
  let deploy = "2월 4일 발행";
  let [따봉, 따봉변경] = useState([0,0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  const [입력값, 입력값변경] = useState('');





  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button>
        <span
          onClick={() => {
            let copy = [...글제목];
            copy[0] = "간장게장 맛집 추천";
            글제목변경(copy);
          }}
        >
          이거누르면 글자바뀜
        </span>
      </button>
      <button
        onClick={() => {
          let ganada = [...글제목];
          ganada.sort();
          글제목변경(ganada);
        }}
      >
        이거 누르면 ㄱㄴㄷ 정렬됨
      </button>
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i)
              }}
            >{글제목[i]}
            {/* <span onClick={()=>{
              따봉변경(따봉 + 1);
            }}> ❤ </span> {따봉} 
            */}
            <span onClick={()=>{
              let copy = [...따봉];
              copy[i] = copy[i] + 1;
              따봉변경(copy)
            }}>
            ❤ {따봉[i]}
            </span>
            </h4>
            <p>{deploy}</p>
            <button onClick={()=>{
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy);
            }}>삭제</button>
            {/* 삭제버튼 */}
          </div>
        );
      })}

      {/* <input onChange={(e)=> {console.log(e.target.value);}}></input>
      input태그에 입력한 값 출력됨 */}
      <input type="text" placeholder="아무거나 입력해보세요" onChange={(e)=> {
      입력값변경(e.target.value);
      }}/>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      }}
      >글발행</button>
      {/* 입력한 값으로 글 추가 */}

      {
      modal == true ? <Modal 글제목 = {글제목} 글제목변경={글제목변경} title = {title} /> : null
      }
    </div>
  );

  function Modal(props) {
    return (
        <div className="modal" style={{background : 'skyblue'}}>
          <h4>{ props.글제목[props.title]}</h4>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
    );
  }
}

export default App;
