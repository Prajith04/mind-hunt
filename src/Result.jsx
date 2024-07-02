import { useLocation } from 'react-router-dom';
import './Result.css'
import esfp from './assets/esfp.jpeg'
import esfj from './assets/esfj.jpeg'
import entp from './assets/entp.jpeg'
import entj from './assets/entj.jpeg'
import infp from './assets/infp.jpeg'
import infj from './assets/infj.jpeg'
import intp from './assets/intp.jpeg'
import intj from './assets/intj.jpeg'
import istp from './assets/istp.jpeg'
import isfp from './assets/isfp.jpeg'
import istj from './assets/istj.jpeg'
import isfj from './assets/isfj.jpeg'
import estp from './assets/estp.jpeg'
import enfp from './assets/enfp.jpeg'
import estj from './assets/estj.jpeg'
import enfj from './assets/enfj.jpeg'
const images={
    esfp:esfp,
    istj:istj,
    infj:infj,
    intj:intj,
    istp:istp,
    isfp:isfp,
    infp:infp,
    intp:intp,
    estp:estp,
    enfp:enfp,
    entp:entp,
    estj:estj,
    enfj:enfj,
    esfj:esfj,
    entj:entj,
    isfj:isfj,
}
const Result=()=>{
    const location = useLocation();
    const { mbtiType } = location.state || {};
    const imageSrc=images[mbtiType.toLowerCase()];
    return(
        <div className="result">
            <div className='imgcon'>
                <img src={imageSrc} alt="prince naveen" />
            </div>
            <h2 className='type'>MBTI TYPE:{mbtiType}</h2>
        </div>
    );
}
export default Result