import { useNavigate } from 'react-router-dom';
import '../App.css'
import './animation.css'


const Animation =  (()=> {
  const navigate = useNavigate();
  return (
    <div className="bgGradient">
        <h1 className='textStyle'>양갱,<br />나는 너가</h1>
        <div className='textAniBox'>
            <h1 className='textStyle textAni4' onClick={()=>{navigate('/Mbti');}}>좋아</h1>
        </div>

    </div>
  );
})

export default Animation;
