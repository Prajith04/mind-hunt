import React,{useState} from 'react';
import QuestionBox from './QuestionBox.jsx';

const questions = [
  // Extraversion (E) vs. Introversion (I)
  { question: '1. I feel energized when I spend time with a large group of people.' },
  { question: '2. I prefer to work on projects alone rather than with others.' },
  { question: '3. I enjoy being the center of attention.' },
  { question: '4. I often need time to recharge after social interactions.' },
  { question: '5. I prefer to express my thoughts and ideas out loud rather than keeping them to myself.' },
  { question: '6. I find large social gatherings to be stimulating and fun.' },
  { question: '7. I often seek out new experiences and adventures with others.' },
  { question: '8. I enjoy spending my free time in the company of others rather than alone.' },
  { question: '9. I am comfortable initiating conversations with strangers.' },
  { question: '10. I feel drained after prolonged periods of solitude.' },

  // Sensing (S) vs. Intuition (N)
  { question: '11. I focus on the details rather than the big picture.' },
  { question: '12. I trust facts and evidence more than theories and concepts.' },
  { question: '13. I enjoy imagining different possibilities for the future.' },
  { question: '14. I prefer to rely on my experiences rather than my instincts.' },
  { question: '15. I pay close attention to the details of my surroundings.' },
  { question: '16. I trust my direct experience over abstract theories or ideas.' },
  { question: '17. I prefer practical and hands-on activities over theoretical discussions.' },
  { question: '18. I focus on the present moment rather than thinking about the future.' },
  { question: '19. I value accuracy and precision in my work.' },
  { question: '20. I am more interested in concrete facts than in imaginative possibilities.' },

  // Thinking (T) vs. Feeling (F)
  { question: '21. I make decisions based on logical analysis rather than personal values.' },
  { question: '22. I prioritize harmony and cooperation over being objective and fair.' },
  { question: '23. I find it more important to be truthful than to be tactful.' },
  { question: '24. I often consider how my decisions will affect others’ feelings.' },
  { question: '25. I make decisions based on logical reasoning rather than emotions.' },
  { question: '26. I value honesty and straightforwardness over tact and diplomacy.' },
  { question: '27. I prioritize objective criteria over personal relationships in decision-making.' },
  { question: "28. I am more interested in finding solutions than in understanding people's feelings." },
  { question: '29. I prefer to critique and analyze rather than to offer support and encouragement.' },
  { question: '30. I believe that being fair and impartial is more important than being compassionate.' },

  // Judging (J) vs. Perceiving (P)
  { question: '31. I prefer to have a clear plan and follow it rather than being spontaneous.' },
  { question: '32. I feel more comfortable when my life is organized and structured.' },
  { question: '33. I like to make decisions quickly and stick to them.' },
  { question: '34. I find it satisfying to complete tasks and check them off my list.' },
  { question: '35. I am more productive when I have a schedule to follow.' },
  { question: '36. I prefer to know what to expect rather than dealing with surprises.' },
  { question: '37. I value punctuality and deadlines.' },
  { question: '38. I like to plan my activities well in advance.' },
  { question: '39. I find it difficult to relax when there are tasks left unfinished.' },
  { question: '40. I prefer a controlled and predictable environment over an open and flexible one.' },
];

const Question = () => {
  const [answers, setAnswers] = useState({});

  const handleRadioChange = (questionIndex, emojiIndex) => {
    setAnswers((prevAnswers) => ({...prevAnswers, [questionIndex]: emojiIndex }));
  };

  return (
    <div>
      {questions.map((question, index) => (
        <QuestionBox
          key={index}
          question={question.question}
          onChange={handleRadioChange}
          selectedEmoji={answers[index]}
          questionIndex={index}
        />
      ))}
    </div>
  );
};

export default Question;