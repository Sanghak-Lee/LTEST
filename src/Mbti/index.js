import { useEffect, useState } from 'react'
import './mbti.css'
import { useNavigate } from 'react-router-dom';
import ENTP from '../resource/entp.svg'
import INTP from '../resource/intp.svg'
import ESFJ from '../resource/esfj.svg'
import ESTP from '../resource/estp.svg'
import ISFJ from '../resource/isfj.svg'
import ISTP from '../resource/istp.svg'
import ENFJ from '../resource/enfj.svg'
import INFJ from '../resource/infj.svg'
import ENTJ from '../resource/entj.svg'
import INTJ from '../resource/intj.svg'
import ENFP from '../resource/enfp.svg'
import INFP from '../resource/infp.svg'
import ESFP from '../resource/esfp.svg'
import ISFP from '../resource/isfp.svg'
import ESTJ from '../resource/estj.svg'
import ISTJ from '../resource/istj.svg'
import H from '../resource/work3.webp'
import M from '../resource/work7.webp'
import L from '../resource/work4.webp'
import logo from '../resource/myLogo.png'
import icTwitter from '../resource/icTwitter.svg'
import icFacebook from '../resource/icFacebook.svg'
import icKakao from '../resource/icKakao.svg'
import icLink from '../resource/icLink.svg'

const Mbti =  (()=> {

  const setOneVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setOneVh()

  useEffect(()=>{
    setOneVh();

    function onResize(){ 
        setOneVh();
    }
    window.addEventListener('resize',onResize);
  },[])




  const navigate = useNavigate()
  const [page,setPage] = useState(0)
  const [mbtiContents,setMbtiContents] = useState([])
  const [mbtiList,setMbtiList] = useState([
    {name:'L',count:0},{name:'M',count:0},{name:'H',count:0}
  ])

  const handleEdd = () => {
    navigate('./Result',{state:{contents:mbtiContents}})
  }
  
  const questionList = [

    {q:['그 녀석(상학)한테 답답한점이 있어?'],
    a:[{type:'M',text:'가끔씩 답답해'},{type:'L',text:'뭐.. 별생각없어 죽지만마'}]},
   
    {q:['너(양갱)는 어떤 연애를 하고싶어?'],
    a:[{type:'M',text:'짜릿한 도파민 터지는 연애!'},{type:'M',text:'잔잔하고 평온한 연애 ㅎㅎ'}]},

   {q:['같이 요리해보기, 커플링 맞추기, 베이킹 클래스듣기, 카페에서 나는솔로보기.. 그 녀석이랑 하고싶어?'],
    a:[{type:'H',text:'그 녀석이랑 하고싶어'},{type:'L',text:'뭐 혼자해도 괜찮아.. 상황보고?'}]},
   
    {q:['그 녀석이랑 연애를 한다면?'],
    a:[{type:'H',text:'지금은 뭐 그냥그런데.. 재밌어지면 좋겠다'},{type:'M',text:'잘되면 좋고, 안되면 어쩔수없고'}]}, 
   
   
   {q:['그 녀석이랑 데이트한다면 뭐 하고싶어?'],
    a:[{type:'M',text:'카페에서 수다떨기'},{type:'H',text:'여행 다녀보기'},{type:'M',text:'드라이브 하면서 좋아하는 노래듣기'},{type:'L',text:'주먹싸움'}]},
    
   {q:['너는 어떤 사람을 좋아하는거 같아?'],
   a:[{type:'H',text:'못생겼는데 마음 따뜻하고 웃긴사람'},{type:'M',text:'가끔 생각나고 가끔 귀여운 사람'},{type:'L',text:'다 필요없고 내가 꽂히는 사람'}]},
  
   {q:['너는 어떤 스타일을 좋아해?'],
   a:[{type:'L',text:'이끌어주는 사람'},{type:'M',text:'옆에서 함께하는 사람'}, {type:'H',text:'포켓보이'}]},
   
   {q:['요새 결산으로 바쁜데... 고생많지'],
    a:[{type:'L',text:'ㄷㅊ 도와줄거아니면'},{type:'H',text:'응응... 주말에 데리고 힐링시켜줘'},]},
   
   {q:['그 녀석은 너를 어떻게 생각하는거 같아?'],
    a:[{type:'H',text:'좋아하는거같은디'},{type:'L',text:'몰라 별 생각없어보임'},{type:'M',text:'좋아하는거 같으면서도 안좋아하는거같기도..'}]},
   
   {q:['그 녀석이 내 일상을 더 행복하고 즐겁게 해주면 좋겠다'],
   a:[{type:'H',text:'그래주면 좋겠다'},{type:'L',text:'내가 알아서 할게'}]},
       
  ]


  const handleCkAnswer = (idx,vv) => { 

    for(let i = 0; i < mbtiList.length; i++) {
      if(mbtiList[i].name === vv){ 
        mbtiList[i].count = mbtiList[i].count + 1
      }
    }
 
    setMbtiList([...mbtiList])
    setPage(page+1)

    if(idx+1===questionList.length){
      setMbti()
    } 
  } 
 

  function setMbti() { 
    let mc = [
      {mbti:'H',img:H,animal:'가능성 있는',animal2:'신생커플',
        contents:['서로 좋아하긴 해요', '가끔식 애매할때가 있어요', '서로 소통하면서 맞춰가면 될거같아요', '포기하지 마요!']
      },
      
      {mbti:'M',img:M,animal:'애매한',animal2:'스쳐 지나갈 사람',
        contents:['가능성이 엿보여요', '헷갈릴때가 많아요', '힘들어보이는데?', '흠...']
      },

      {mbti:'L',img:L,animal:'어려워 보이는',animal2:'없어도 모를 사람',
        contents:['포기해라']
      } 
    ]
    let ls = [...mbtiList]

    // let IorE = mbtiList.find(function(data){return data.name === 'I'}).count > mbtiList.find(function(data){return data.name === 'E'}).count?'I':'E'
    // let SorN = mbtiList.find(function(data){return data.name === 'S'}).count > mbtiList.find(function(data){return data.name === 'N'}).count?'S':'N'
    // let ForT = mbtiList.find(function(data){return data.name === 'F'}).count > mbtiList.find(function(data){return data.name === 'T'}).count?'F':'T'
    // let PorJ = mbtiList.find(function(data){return data.name === 'P'}).count > mbtiList.find(function(data){return data.name === 'J'}).count?'P':'J'
    let score = 0
    ls.map((val)=>{
      if(val.name=='H')score+=1.5*val.count;
      if(val.name=='L')score-=val.count;
    })
    let mbti
    if(score>0){
      mbti='H'
    }else if(score<0){
      mbti='L'
    }else{
      mbti='M'
    }

    setMbtiContents(mc.filter((val)=>val.mbti==mbti)[0])
  }


  return (
    <div className='mbtiLayout'>
        {page===0?
          //시작화면
          <div className='startPageLayout'>
            <div style={{height:130,minHeight:130,maxHeight:130}}/>

            <div  className='startItem'>
              <div>
                경희 상학이
              </div>
              <div>
                ▼
              </div>
              <div onClick={()=>setPage(1)} className='startButton'>
                테스트 시작하기
              </div>



         
              
            </div>

          
            <div style={{height:50,minHeight:50,maxHeight:50,}}>
              양갱, 상학
            </div>
          </div>
          :
          //진행화면
          page<=questionList.length?
            <div className='questionLayout'>
              
              <div className='mbtiTitle'>
                <div>MBTI 테스트</div>
                <div>{`${page} / ${questionList.length}`}</div>
              </div>
            
              {questionList.map((val,idx)=>
                  <div key={idx} className='questionList' style={{display:page===idx+1?'flex':'none'}}>
                    {console.log(mbtiList)}
                    <div className='questionItemLayout'>
                      <div className='qProfileImg'>
                        <div/> <div/>
                      </div>

                      <div className='chatListLayout'>
                        {val.q.map((qval,qidx)=>
                        <div className='qChatbox' key={qidx}>
                          <div>◀</div> <div>{qval}</div>
                        </div>
                        )}
                      </div>

                    </div> 

                    <div className='answerItem'>
                      <div className='aChatbox'>
                        <div>+</div> <div>#</div>
                      </div>
                      {val.a.map((aval,aidx)=>
                        <div key={aidx} className='answerBox' onClick={()=>handleCkAnswer(idx,aval.type)}>
                          {aval.text}
                        </div>
                      )}
                    </div>
                  </div>
                )
              }
        
            </div>
            :
            //결과화면
            <div className='questionLayout'>
              
              <div className='mbtiTitle'>
                <div>MBTI 테스트</div>
              </div>
              
              <div className='questionList' style={{display:'flex'}}>
                  
       

                  <div className='questionItemLayout'>
                    <div className='qProfileImg'>
                      <div/> <div/>
                    </div>
                    <div className='chatListLayout'>
                      <div style={{width:220,height:66,position:'relative',overflow:'hidden',margin:'0px 5px 10px 5px'}}>                          
                          <img onClick={()=>handleEdd()} style={{position:'absolute',width:'224px',height:'70px',left:-2,top:-2,}}
                              src="https://media.istockphoto.com/id/636379014/ko/%EC%82%AC%EC%A7%84/%EC%86%90-%ED%98%95%EC%84%B1%ED%95%98%EB%8A%94-%ED%95%98%ED%8A%B8-%EB%AA%A8%EC%96%91-%EC%84%A0%EC%85%8B-%EC%8B%A4%EB%A3%A8%EC%97%A3.jpg?s=612x612&w=0&k=20&c=rzTelIxMlazDXZt_zNGUMJCXUcFHWIqT37jcQzsl_xw=" alt=""/>
                      </div>

                      <div className='qChatbox' onClick={()=>handleEdd()} >
                        <div>◀</div> <div>결과전송을 위해서 아래 버튼을 눌러주세요. </div>
                      </div>

                      <div className='qChatbox'>          
                        <div>◀</div> <div>* 나쁜 코드는 다운되지 않습니다. 그래도 각별히 주의해 주세요</div>
                      </div>

                      <div className='qChatbox'>          
                        <div>◀</div> <div>* 아무리 사랑하는 사람이 보낸 링크라도 함부로 누르지 마세요</div>
                      </div>

                      <div className='qChatbox'>          
                        <div>◀</div> <div>* 원치 않을 경우 뒤로가기를 눌러주세요.</div>
                      </div>
                      
                    </div>
                  </div> 

                  
                    
                  <div className='answerItem'>
                    <div className='aChatbox'>
                      <div>+</div> <div>#</div>
                    </div>
                    <div className='answerBox' onClick={()=>handleEdd()}>
                        결과 전송하기
                    </div>
                  </div>

              </div>
          
            </div>
          }
      </div>
  );
})

export default Mbti;