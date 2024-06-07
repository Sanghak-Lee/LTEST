import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import '../App.css'
import './mbti.css'

 



const MbtiResult =  (()=> {

  const location = useLocation();
  const mbtiContents = location?.state?.contents!==undefined?
  location.state.contents:
  {mbti:'',img:'',animal:'',animal2:'',contents:['']}

  const navigate = useNavigate()
 
  const setOneVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setOneVh()

  useEffect(()=>{
    if(location?.state?.contents===undefined){
      navigate('../mbti')
    }
    setOneVh();

    function onResize(){ 
        setOneVh();
    }
    window.addEventListener('resize',onResize);
    window.open('https://i.ibb.co/1rqP3gp/text-to-image.png')
    openModal();    
  },[])

  const [Isopen, setIsOpen] = useState(false);
  const openModal = () => {
    alert('unidentified Javascript file is downloaded...')
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className='mbtiLayout'>
      {Isopen && (
        <div className='warning-modal'>
          <p>
            A fatal exception error has been occured at AA029:C0512 in UXA UMMM(A1)<br></br>
            Your computer OS system has been destroyed by Random scripts
          </p>
          <button onClick={closeModal}>상학아...</button>
        </div>
      )
      }
          <div className='questionLayout'>
              
              <div className='mbtiTitle'>
                <div>MBTI 테스트</div>
                <div onClick={()=>navigate(-1)} style={{cursor:'pointer'}}>
                    다시하기
                </div>
                
              </div>
              
              <div className='questionList' style={{display:'flex'}}>
                  
                  
                  <div className='questionItemLayout'>
                    <div className='qProfileImg'>
                      <div/> <div/>
                    </div>

                    <div className='chatListLayout'>
                      <div className='qChatbox'>
                        <div>◀</div> <div>경희와 상학이 관계는 {mbtiContents.mbti=='H'?'ˋˏ❤︎ˎˊ':'ᝰෆ‍'} 입니다.</div>
                      </div>

                      <div style={{width:'auto',height:'auto',backgroundColor:'#fff',borderRadius:10,
                           margin:'5px 5px 15px 5px', color:'black', textAlign:'center'}}>
                        <img src={mbtiContents.img} alt='' style={{width:130,height:130,marginTop:10}}/>
                        <div style={{padding:'0px 15px 0px 15px'}}>
                          {mbtiContents.animal}
                        </div>
                        <div style={{padding:'5px 5px 20px 5px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                          <div style={{fontWeight:700,fontSize:18}}>{mbtiContents.animal2}</div>
                          <div style={{marginLeft:2}}>유형</div>
                        </div>
                      </div>
 

                      <div className='qChatbox'>
                        <div>◀</div> <div>'{mbtiContents.animal2}' 는요</div>
                      </div>

                      <div className='qChatbox'>
                        <div>◀</div>
                        <div>
                        {mbtiContents.contents.map((val, idx)=>
                        <li key={idx}>{val}</li>
                        )}
                        </div>
                      </div>
                    </div>
                  </div> 

              

              </div>
          
            </div>
          
     

    
    </div>
  );
})

export default MbtiResult;
