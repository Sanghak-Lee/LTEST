
import React, {Component, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';  
import './main.css'
import mainImg from './resource/mainimg.webp'
import icInsta from './resource/instar_ffffff.svg'
import icYoutube from './resource/youtube_ffffff.svg'
import icTstory from './resource/tstory_ffffff.svg'
import imgProfile from './resource/sanghak.svg'
import imgLogo from './resource/logo.svg'
import imgLogoGray from './resource/logo_gray.svg'
import imgMouse from './resource/mouse_ffffff.svg'
import imgWork1 from './resource/work1.webp'
import imgWork2 from './resource/work2.webp'
import imgWork3 from './resource/work3.webp'
import imgWork4 from './resource/work4.webp'
import imgWork5 from './resource/work5.webp'
import imgWork6 from './resource/work6.webp'
import imgWork7 from './resource/work7.webp'
import imgSite from './resource/site.svg'
import imgCodepen from './resource/codepen.svg'
import imgCareful from './resource/careful.svg'

const Main =  (()=> {
  const navigate = useNavigate();
  const setOneVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setOneVh()

  const [ctgr,setCtgr] = useState(0)

  useEffect(()=>{
    setOneVh();
    window.scrollTo(0,0)
    function onResize(){ 
        setOneVh();
    }
    window.addEventListener('resize',onResize);
  },[])

  // ctgrIdx 1=Web Page 2=CSS Drawing 3=CSS Basic 4=Etc.
  const workList = [
    {ct:[1],name:'CSS로 피카츄 그리기',img:imgWork7,link1:'https://phr0929.github.io/drawing/#/pikachu',link2:'',link3:'https://codepen.io/njurvxuu-the-reactor/pen/vYQZOWa'},
    {ct:[1,2],name:'CSS로 짱구 그리기 / 옷입히기 만들기',img:imgWork6,link1:'https://phr0929.github.io/drawing/#/zzanggu',link2:'https://youtube.com/shorts/i_QjijQDFco?feature=share',link3:'https://codepen.io/njurvxuu-the-reactor/pen/zYMNydB'},
    {ct:[1],name:'카카오톡 스타일 MBTI 테스트',img:imgWork1,link1:'https://phr0929.github.io/mbti',link2:'https://youtu.be/zO7xOq8wzrM',link3:''},
    {ct:[1],name:'To Do List',img:imgWork2,link1:'https://phr0929.github.io/todolist',link2:'https://youtu.be/PQIXOLt2TrM',link3:'https://codepen.io/njurvxuu-the-reactor/pen/QWJpqzd'},
    {ct:[2],name:'CSS로 강아지 그리기',img:imgWork3,link1:'https://phr0929.github.io/drawing/#/pomeranian',link2:'https://youtube.com/shorts/lk4FGmQevAE?feature=share',link3:'https://codepen.io/njurvxuu-the-reactor/embed/yLQONpW?default-tab=html%2Cresult'},
    {ct:[2],name:'CSS로 햄버거 그리기',img:imgWork4,link1:'https://phr0929.github.io/drawing/#/hamburger',link2:'https://youtube.com/shorts/TYM40Vo58EE?feature=share',link3:'https://codepen.io/njurvxuu-the-reactor/pen/wvQGPEv'},
    {ct:[2],name:'CSS로 컵케이크 그리기',img:imgWork5,link1:'https://phr0929.github.io/drawing/#/cupcake',link2:'https://youtube.com/shorts/rMdvvniu7Xc?feature=share',link3:'https://codepen.io/njurvxuu-the-reactor/pen/mdQEjyp'},
  ]
 
 
  const handleGoLink = (link) => {
    window.open(link)
  }
 

  const handleSetCtgr = (idx) => {
    setCtgr(idx) 
  }

  function ctgrLenght(){
    
    let count = 0

    for(let i = 0; 5 > i; i++){
      if(workList[i].ct.filter((val)=>val === ctgr).length>0){
        count = count + 1
      }
    }

    return ctgr!==0 && count === 0?'ㅇㅇ':'ㄴㄴ'
  }

  return (
    <div className='homeLayout'>
      

      <div className='homeLayoutMain'>

          <div className='homeLayoutMainContents'> 
             
              <nav className='navLayout'>
                <div className='navLogo'>
                  <img src={imgLogo} alt=''></img>
                  <div className='cursor'></div>
                </div>
                <img src={icYoutube} className='navIcon' alt='' onClick={()=>handleGoLink('https://www.youtube.com/shorts/pAzVuEmitig')}></img>
                <img src={icInsta} className='navIcon' alt='' onClick={()=>handleGoLink('https://www.youtube.com/shorts/pAzVuEmitig')}></img>
                <img src={icTstory} className='navIcon' alt='' onClick={()=>handleGoLink('https://velog.io/@eaa0305/posts')}></img>
              </nav>
              
              <section>
                 <img src={imgProfile} className='profileImg' alt='' onClick={()=>{navigate('/Love');}} /> 
                <article className='mainTitle1'>
                  상학's
                </article>
                <article className='mainTitle2'>
                  workspace
                </article>
                <article className='mainTitle3'>
                  Dram controller F/W developer
                </article> 
              </section> 

              <footer>
                <div className='wheel'></div>
                <img src={imgMouse} alt='' className='mouseImg'></img>
              </footer>
              
          </div>
          
          <img src={mainImg} className='homeLayoutMainImg' alt=''/>
         
      </div>


      {/* <div className='homeLayoutContents'>
        <ul className='workCtgr'>
          <li className={ctgr===0?'workCtgrOn':'workCtgrOff'} onClick={()=>handleSetCtgr(0)}>
            {ctgr===0?<div className='workCtgrArrow'>＞</div>:<div className='workCtgrArrow'></div>}
            <div className='workCtgrName'>All</div> 
          </li>
          <li className={ctgr===1?'workCtgrOn':'workCtgrOff'} onClick={()=>handleSetCtgr(1)}>
            {ctgr===1?<div className='workCtgrArrow'>＞</div>:<div className='workCtgrArrow'></div>}
            <div className='workCtgrName'>Web Page</div>
          </li>
          <li className={ctgr===2?'workCtgrOn':'workCtgrOff'} onClick={()=>handleSetCtgr(2)}>
            {ctgr===2?<div className='workCtgrArrow'>＞</div>:<div className='workCtgrArrow'></div>}
            <div className='workCtgrName'>CSS Drawing</div>
          </li>
          <li className={ctgr===3?'workCtgrOn':'workCtgrOff'} onClick={()=>handleSetCtgr(3)}>
            {ctgr===3?<div className='workCtgrArrow'>＞</div>:<div className='workCtgrArrow'></div>}
            <div className='workCtgrName'>CSS Basic</div>
          </li>
          <li className={ctgr===4?'workCtgrOn':'workCtgrOff'} onClick={()=>handleSetCtgr(4)}>
            {ctgr===4?<div className='workCtgrArrow'>＞</div>:<div className='workCtgrArrow'></div>}
            <div className='workCtgrName'>Etc.</div>
          </li>
          <li className='workTrans'></li>
        </ul>
        <ul className='workListLayout'>
          {workList.map((val,idx)=>
            ctgr===0?
              <li key={idx} className='workBtnLayout'>
                <div className='workBtn' onClick={()=>handleGoLink(val.link1)}>
                  <div className='workBtnBorder1'></div>
                  <div className='workBtnBorder2'></div>
                  <div className='workBtnBorder3'></div>
                  <div className='workBtnBorder4'></div>

                  <img src={val.img} className='workImg' alt=''></img>
                </div>

                <div className='workTitle'>
                  {val.name}
                </div>
                <div className='workGoLinkBar'>
                  {val.link1===''?<></>:
                  <div className='workGoLink' onClick={()=>handleGoLink(val.link1)}>
                    <img src={imgSite} alt=''/> Go site
                  </div>}
                  {val.link2===''?<></>:
                  <div className='workGoLink' onClick={()=>handleGoLink(val.link2)}>
                    <img src={icYoutube} alt=''/> Youtube
                  </div>}
                  {val.link3===''?<></>:
                  <div className='workGoLink' onClick={()=>handleGoLink(val.link3)}>
                    <img src={imgCodepen} alt=''/> Codepen
                  </div>}
                </div>
              </li>
            :
            val.ct.filter((fval)=>fval===ctgr).map((vval,vvidx)=>
              <li key={idx} className='workBtnLayout'>
                <div className='workBtn' onClick={()=>handleGoLink(val.link1)}>
                  <div className='workBtnBorder1'></div>
                  <div className='workBtnBorder2'></div>
                  <div className='workBtnBorder3'></div>
                  <div className='workBtnBorder4'></div>

                  <img src={val.img} className='workImg' alt=''></img>
                </div>

                <div className='workTitle'>
                  {val.name}
                </div>
                <div className='workGoLinkBar'>
                  {val.link1===''?<></>:
                  <div className='workGoLink' onClick={()=>handleGoLink(val.link1)}>
                    <img src={imgSite} alt=''/> Go site
                  </div>}
                  {val.link2===''?<></>:
                  <div className='workGoLink' onClick={()=>handleGoLink(val.link2)}>
                    <img src={icYoutube} alt=''/> Youtube
                  </div>}
                  {val.link3===''?<></>:
                  <div className='workGoLink' onClick={()=>handleGoLink(val.link3)}>
                    <img src={imgCodepen} alt=''/> Codepen
                  </div>}
                </div>
              </li>
            )
          )}
        </ul>

         
        
        
        {ctgrLenght() === 'ㅇㅇ'?
          <section className='worklistNull'>
            <div className='worklistNullTitle'>
              {`if(작업리스트.length === 0){`}<br/>
              {`　alert('준비된 작업파일이 없습니다.')`}<br/>
              {`}`}
            </div>
            <div className='workNullBox'>

              <div className='workNullTaskbar'>
                <div className='workNullTaskbarTitle'>웹 페이지 메시지</div>
                <div className='workNullTaskbarXbox'>×</div>
              </div>
              <div className='workNullContents'>
                <div>
                  <img src={imgCareful} alt=''/>
                  <div>준비된 작업파일이 없습니다.</div>
                </div>
                <div>
                  <div>
                    확인
                  </div>
                </div>
              </div>
            </div>
          </section>
        :<></>}
        
      
      

        <footer className='homeLayoutFooter'>
          <div className='footerBtn'>
            <img src={icYoutube} alt='' onClick={()=>handleGoLink('https://youtube.com/@seosan1234')}></img>
            <img src={icInsta} alt='' onClick={()=>handleGoLink('https://www.instagram.com/seosan1234/')}></img>
            <img src={icTstory} alt='' onClick={()=>handleGoLink('https://aamm3929.tistory.com/')}></img>
          </div>
          <article>
            Copyright 2023. 서산개백수. All rights reserved.
          </article>
        </footer>
      </div> */}

      
    </div>
  );
})

export default Main;
