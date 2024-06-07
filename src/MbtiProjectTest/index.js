import { useEffect, useState } from 'react';
import './mbti.css'
const Mbti =  (()=> {
  
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh',`${vh}px`);
  }

  setVh()

  useEffect(()=>{
    setVh()

    function onResize(){
      setVh()
    }
    window.addEventListener('resize',onResize);

  },[])

  const [page,setPage] = useState(0)

  const questionList = [
    {q:['갑자기 일이 생겨서','오늘 못 만날 것 같아ㅠㅠ'],
     a:[{type:'I',text:'어쩔 수 없지 뭐ㅠㅠ (오예!!!)'},
        {type:'E',text:'어쩔 수 없지 뭐ㅠㅠ (다른사람 누구 만나지?'}]},
    
    {q:['너 이번주에 엄청 바빴다며','주말엔 뭐해?'],
     a:[{type:'I',text:'너무 힘들었어ㅠㅠ 집에서 쉬어야지'},
        {type:'E',text:'바빠서 못놀았어ㅠㅠ 나가 놀아야지!'}]},

    {q:['(자주 가는 카페 사장님이 아는척을 했다)'],
     a:[{type:'I',text:'(이제 그만 와야지)'},
        {type:'E',text:'(더 자주 와야지)'}]},


    {q:['넌 노래 들을때 뭘 중요하게 생각해?'],
     a:[{type:'S',text:'멜로디'},
        {type:'N',text:'가사'}]},

    {q:['사과하면 뭐가 떠올라?'],
     a:[{type:'S',text:'빨갛다.맛있다.동그랗다.과일?'},
        {type:'N',text:'아이폰 로고ㅋㅋ 백설공주도 생각난다.'}]},

    {q:['오늘 점심 뭐 먹을래?'],
     a:[{type:'S',text:'음. 파스타 먹을까?'},
        {type:'N',text:'파스타 먹을까? 아! 파스타 먹으면 느끼하니까 저녁엔 김치찌개를 먹어야겠다!'},]},



    {q:['나 요즘 너무 우울해서','여행 가려고'],
     a:[{type:'F',text:'무슨 일 있어?'},
        {type:'T',text:'어디로 여행가게?'}]},

    {q:['슬픔을 나누면 어떻게 될까?'],
     a:[{type:'F',text:'슬픔이 반이 되지'},
        {type:'T',text:'슬픈 사람이 둘이 되겠지'}]},

    {q:['나 시험에서 떨어졌어...ㅠㅠ'],
     a:[{type:'F',text:'많이 속상하겠다ㅠㅠ'},
        {type:'T',text:'무슨 시험 봤는데? 몇점 받았는데?'}]},


    {q:['안읽은메시지 갯수 몇개야?'],
     a:[{type:'P',text:'10개 이상'},
        {type:'J',text:'0개 ~ 한자리수'}]},
    
    {q:['여행 일정 짰어?'],
     a:[{type:'P',text:'ㅇㅇ 국밥먹고 바다가서 놀다가 카페가자'},
        {type:'J',text:'7시30분 만남, 8시 할매국밥, 9시 유리박물관, 11시 유리해수욕장, 12시 유리카페...'}]},
           
    {q:['2주 뒤에 시험이다.'],
     a:[{type:'P',text:'시험이 2주나 남았네!'},
       {type:'J',text:'시험이 2주밖에 안남았네.'}]},


    {q:['테스트가 모두 끝났어. 결과 보러 갈래?'],
    a:[{type:'',text:'결과 보러 가기'}]}
  ]

  const [mbtiList,setMbtiList] = useState([
    {name:'I',count:0},{name:'E',count:0},{name:'S',count:0},{name:'N',count:0},
    {name:'F',count:0},{name:'T',count:0},{name:'P',count:0},{name:'J',count:0},
  ])

  const handleCkAnswer = (type,idx) => {

    let ls = mbtiList

    for(let i = 0 ; i < ls.length; i++){
      if(ls[i].name === type){
        ls[i].count = ls[i].count + 1
      }
    }

    setMbtiList(ls)
    setPage(page+1)

    if(idx+1 === questionList.length){
      setMbti()
    }

  }

  const [mbtiContents,setMbtiContents] = useState([])

  function setMbti(){
    let ls = mbtiList
    let mc = [
      {mbti:'ENTP',contents:['말을 잘해요','이상한 말을 자주 해요','혼자서도 잘 해요']},
      {mbti:'INTP',contents:['팩폭을 잘해요','감수성이 풍부해요','주관이 뚜렷해요']},
      {mbti:'ESFJ',contents:['남을 잘 챙겨요','눈치가 빨라요','새로운 사람과의 술자리를 좋아해요']},
      {mbti:'ESTP',contents:['손재주가 좋아요','리더십이 있어요','표현을 아끼지 않아요']},
      {mbti:'ISFJ',contents:['남 챙기는 거 좋아해요','공감 잘 해요','내가 싫은 건 남한테도 안 해요']},
      {mbti:'ISTP',contents:['효율적인 거 좋아해요','관찰력이 뛰어나요','기계조작 잘 하고 좋아해요']},
      {mbti:'ENFJ',contents:['분위기 메이커예요','리액션을 잘 해요','남에게 싫은 소리를 잘 못해요']},
      {mbti:'INFJ',contents:['집돌이/집순이 성향이 강해요','사람을 보는 통찰력이 있어요','자신만의 철학이 있어요']},
      {mbti:'ENTJ',contents:['직감이 좋은 편이에요','주변 사람을 잘 챙겨요','열등감이 없어요']},
      {mbti:'INTJ',contents:['혼자있는거 좋아해요','돈관리 잘해요','공상 많이해요']},
      {mbti:'ENFP',contents:['소통과 공감을 잘 해요','은근 독립적인 성격이에요','생각을 많이 해요']},
      {mbti:'INFP',contents:['MBTI 정말 좋아해요','미룰 수 있는 건 끝까지 미뤄요','호불호가 명확해요']},
      {mbti:'ESFP',contents:['사교성이 좋아요','자존감이 높아요','상처 잘 받는데 또 잘 풀려요']},
      {mbti:'ISFP',contents:['노는 거 은근 좋아해요','근데 집에 있는 것도 좋아요','마이웨이 성향이 강해요']},
      {mbti:'ESTJ',contents:['호불호가 명확하고 단호해요','기억력이 좋아요','완벽주의자 기질이 있어요']},
      {mbti:'ISTJ',contents:['원리원칙적이에요','즉흥적인 거 싫어해요','철벽을 잘 쳐요']},
    ]

    let IorE = 
        ls.find(function(data){return data.name === 'I'}).count > 
        ls.find(function(data){return data.name === 'E'}).count ? 'I':'E'
    let SorN =
        ls.find(function(data){return data.name === 'S'}).count > 
        ls.find(function(data){return data.name === 'N'}).count ? 'S':'N'
    let ForT =
        ls.find(function(data){return data.name === 'F'}).count > 
        ls.find(function(data){return data.name === 'T'}).count ? 'F':'T'
    let PorJ =
        ls.find(function(data){return data.name === 'P'}).count > 
        ls.find(function(data){return data.name === 'J'}).count ? 'P':'J'

    let mbti = IorE+SorN+ForT+PorJ

    setMbtiContents(mc.filter(val=>val.mbti === mbti)[0])

  }

  return (<div className='mbtiLayout'>
      
      {page===0?
        <div className='startPageLayout'>
          <div className='startLogo'>
            <div>MBTI</div>
            <div>▼</div>
          </div>
          <div className='startButton' onClick={()=>setPage(1)}>
            테스트 시작하기
          </div>
        </div>
        :page <= questionList.length?
          <div className='questionLayout'>
            <div className='mbtiTitle'>
              <div>MBTI 테스트</div>
              <div>{`${page} / ${questionList.length}`}</div>
            </div>

            {questionList.map((val,idx)=>
              <div key={idx} className='questionList' style={{display:page===idx+1?'flex':'none'}}>
                <div className='questionItemLayout'>
                  <div className='profileImg'>
                    <div/> <div/>
                  </div>

                  <div className='chatListLayout'>
                    {val.q.map((qval,qidx)=>
                      <div key={qidx} className='chatBox'>
                        <div>◀</div> <div>{qval}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className='answerItem'>
                  <div className='aChatBox'>
                    <div>+</div> <div>#</div>
                  </div>

                  {val.a.map((aval,aidx)=>
                    <div key={aidx} className='answerBox' onClick={()=>handleCkAnswer(aval.type,idx)}>
                      {aval.text}
                    </div>
                  )}

                </div>
              </div>
            )}
          </div>
          :
          <div className='questionLayout'>
            <div className='mbtiTitle'>
              <div>MBTI 테스트</div>
              <div onClick={()=>window.location.reload()}>다시하기</div>
            </div>

           
              <div className='questionList' style={{display:'flex'}}>
                <div className='questionItemLayout'>
                  <div className='profileImg'>
                    <div/> <div/>
                  </div>

                  <div className='chatListLayout'>

                    <div className='chatBox'>
                      <div>◀</div> <div>당신의 Mbti는 '{mbtiContents.mbti}'입니다.</div>
                    </div>

                    <div className='chatBox'>
                      <div>◀</div> <div>{mbtiContents.mbti}는요</div>
                    </div>

                    {mbtiContents.contents.map((val,idx)=>
                      <div key={idx} className='chatBox'>
                        <div>◀</div> <div>{val}</div>
                      </div>
                    )}
                  </div>
                </div>
                
              </div>

          </div>
      }
    </div>);
})

export default Mbti;