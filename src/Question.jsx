import React, { useState } from 'react';
import QuestionBox from './QuestionBox.jsx';
import './Question.css';
import { useNavigate } from 'react-router-dom';

const questions = [
  { question: '1. Do you feel energized after spending time alone?' },
  { question: '2. Do you often find yourself thinking about future possibilities and potential outcomes?' },
  { question: '3. Do you prefer to make decisions based on logic and objective analysis?' },
  { question: '4. Do you prefer to have a clear plan and stick to it rather than be spontaneous?' },
  { question: '5. Do you prefer deep, one-on-one conversations over group discussions?' },
  { question: '6. Do you enjoy brainstorming and coming up with new ideas?' },
  { question: '7. Do you value fairness and consistency when resolving conflicts?' },
  { question: '8. Do you feel more comfortable when decisions are made and things are settled?' },
  { question: '9. Do you often find social events overwhelming or draining?' },
  { question: '10. Do you rely on your gut feelings or instincts when making decisions?' },
  { question: '11. Do you often find yourself prioritizing tasks and goals over personal relationships?' },
  { question: '12. Do you enjoy setting goals and working systematically towards achieving them?' },
  { question: '13. Do you prefer to observe a situation before participating?' },
  { question: '14. Do you prefer to focus on the big picture rather than the details?' },
  { question: '15. Do you feel comfortable critiquing and giving constructive feedback?' },
  { question: '16. Do you prefer to complete tasks well in advance of deadlines?' },
  { question: '17. Do you enjoy solitary activities like reading, writing, or crafting?' },
  { question: '18. Do you enjoy abstract concepts and theoretical discussions?' },
  { question: '19. Do you strive to remain detached and impartial when evaluating a situation?' },
  { question: '20. Do you find satisfaction in organizing and structuring your environment?' },
  { question: '21. Do you feel energized by spending time with others?' },
  { question: '22. Do you prefer to deal with facts and concrete details rather than ideas and theories?' },
  { question: '23. Do you make decisions based on personal values and how they will affect others?' },
  { question: '24. Do you prefer to keep your options open and be flexible rather than follow a fixed plan?' },
  { question: '25. Do you find it easy to start conversations with strangers?' },
  { question: '26. Do you find comfort in routine and familiar experiences?' },
  { question: '27. Do you prioritize maintaining harmony and positive relationships?' },
  { question: '28. Do you feel comfortable adapting to new situations and changing plans on the fly?' },
  { question: '29. Do you enjoy being the center of attention?' },
  { question: '30. Do you trust information that comes from your direct experience and senses?' },
  { question: "31. Do you find it important to empathize with and understand others' emotions?" },
  { question: '32. Do you enjoy exploring new ideas and opportunities as they arise?' },
  { question: '33. Do you thrive in busy, fast-paced environments?' },
  { question: '34. Do you focus more on the present moment and immediate reality?' },
  { question: "35. Do you often consider the impact of your actions on others' feelings?" },
  { question: '36. Do you often find yourself procrastinating and working best under pressure?' },
  { question: '37. Do you enjoy participating in team activities and group projects?' },
  { question: '38. Do you enjoy practical, hands-on activities and tasks?' },
  { question: '39. Do you seek to create an inclusive and supportive environment for everyone?' },
  { question: '40. Do you thrive in environments that are spontaneous and allow for improvisation?' },
];


const initializeAnswers = () => {
  const answers = {};
  for (let i = 0; i < questions.length; i++) {
    answers[i] = 0;
  }
  return answers;
};

const Question = () => {
  const [answers, setAnswers] = useState(initializeAnswers());
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate=useNavigate();
  const handleSubmit = () => {
   console.log(answers)
   fetch('http://localhost:3000/submit-answers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(answers),
  })
    .then(response => response.json())
    .then(data => {
      const { mbtiType } = data; // Extract only mbtiType from the response data
      console.log('MBTI Type:', mbtiType);
      navigate('/result', { state: { mbtiType } });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
  };

  const handlePrev = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleChange = (questionIndex, emojiIndex) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: Number(emojiIndex),
    }));
  };

  return (
    <div>
      <QuestionBox
        key={currentQuestionIndex}
        question={questions[currentQuestionIndex].question}
        selectedEmoji={answers[currentQuestionIndex]}
        questionIndex={currentQuestionIndex}
        onChange={handleChange}
      />
      
      <button id='prev'onClick={handlePrev} disabled={currentQuestionIndex === 0}>{'<'}</button>
      <button id='next'onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>{'>'}</button>
      <button  onClick={handleSubmit}className="pushable" style={{display:currentQuestionIndex===39?'block':'none'}} >
  <span className="front">
   Submit
  </span>
</button>

    </div>
  );
};

export default Question;
