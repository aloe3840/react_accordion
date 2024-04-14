// 스타일 시트, 자바스크립트 데이터 import
/*

./ : 지금 여기
../ : 한 번 나가서
/ : 프로젝트 경로
/src : src폴더로 들어가서

*/
import './style.css'
import data from './data'  //data파일을 data키워드로 가져오기
import { useState } from 'react'

export default function Accordion(){
  //선택된 타이틀의 번호를 저장할 state (ui와 연결된 변수)
  let [selected, setSelected] = useState(null) //지금은 null, 선택되면 selected 넣어줄거임
  let [enableMulti, setEnableMulti] = useState(false) //false면 단일선택, true면 다중선택
  let [selectedList, setSelectedList] = useState([])

  //다중선택일 때는 선택된 애들을 모두 보관 ==> 배열
  function clickTitle(id){
    selected === null? setSelected(id) : setSelected(null)
    console.log(selectedList.indexOf(selectedList)) 
  }

  function multiSelectTitle(id){
    //배열의 값을 갱신하기 위해서는 ...으로 분해했다가 다시 []로 감싼다.
    //객체의 값을 갱신하기 위해서는 ...으로 분해했다가 다시 {}로 감싼다.
    let copyList = [...multiSelectTitle]  
    let findIndexOfId = selectedList.indexOf(id)  //있는지 검사, 없으면 추가
    copyList.push(id)  //jsx아니니까 if문법 쓸 수 있음

    if(findIndexOfId === -1){
      copyList.push(id)
    } else{
      //있었으면 제거
      copyList.splice(findIndexOfId, 1)   //splice는 인덱스, 몇 개 없앨 건지를 받음
    
    }
    setSelectedList(copyList)
  }


  return(
    <div className='wrapper'>
      <button onClick={()=>{setEnableMulti(!enableMulti)}}>다중선택 ON / OFF</button>
      <div className='accordion'>
        {
          data.map((element, idx)=>{
            return(
              <div className='item' key={idx}>
                <div className="title" onClick={()=>{
                  enableMulti === true ? 
                  multiSelectTitle(element.id):
                  clickTitle(element.id)
                }}>
                  <h3>{element.title}</h3>
                  <span>▼</span>
                </div>
                {
                  enableMulti === true ?
                  selectedList.indexOf(element.id) !== -1 && <div className='content'>
                    {element.content}
                  </div> :
                  selectedList === element.id && <div className='content'>
                    {element.content}
                  </div>
                }

              {
                

              }

              </div>

              
            )
          })
        }


      </div>
    </div>
  )
}