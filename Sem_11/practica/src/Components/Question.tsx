import React from "react";

interface QuestionProps {
  question: string;
  options: string[];
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedAnswer: string;
  onAnswer: (answer: string) => void;
  onSkip: () => void;
  onPrev: () => void;
  onSubmit: () => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  options,
  currentQuestionIndex,
  totalQuestions,
  selectedAnswer,
  onAnswer,
}) => {
  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onAnswer(event.target.value);
  };

  return (
    <div className="question-container">
      <h2 className="question-title">
        Pregunta {currentQuestionIndex + 1} de {totalQuestions}
      </h2>
      <div className="question-content">
        <p>{question}</p>
        {options.map((option, index) => (
          <div key={index} className="option">
            <input
              type="radio"
              id={`option-${index}`}
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={handleAnswerChange}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
