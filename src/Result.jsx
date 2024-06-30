import { useLocation } from 'react-router-dom';

const Result=()=>{
    const location = useLocation();
    const { mbtiType } = location.state || {};
    return(
        <div className="result">
            <h2>Your MBTI Type is: {mbtiType}</h2>

        </div>
    );
}
export default Result