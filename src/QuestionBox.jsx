import React, { useState } from 'react';
import './QuestionBox.css';

const emojis = ['😍', '😀', '😑', '😦', '😠'];

const QuestionBox = ({ question,onChange, selectedEmoji, questionIndex,onClick }) => {
  const [emojiIndex, setEmojiIndex] = useState(selectedEmoji || 0);
  const [animate, setAnimate] = useState(false);

  const handleRadioChange = (event) => {
    const inputValue = event.target.value;
    setEmojiIndex(Number(inputValue));
    onChange(questionIndex, inputValue);
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  };
  const handleClick=()=>{
    setTimeout(()=>{
      onClick();
    },700);
   
  }

  return (
    <div className="question">
      <h2>{question}</h2>
      <div id="emoji" style={{ animation: animate ? 'bounce 0.5s ease-in-out' : 'none' }}>
        {emojis[emojiIndex]}
      </div>
      <div className="radios">
        {emojis.map((emoji, index) => (
          <label key={index}>
            <input
              type="radio"
              name={`emoji-${questionIndex}`}
              value={index}
              checked={emojiIndex === index}
              onChange={handleRadioChange}
              onClick={handleClick}
              className="radio"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionBox;
