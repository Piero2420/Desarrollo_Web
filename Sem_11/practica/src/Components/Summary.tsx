import React from "react";

interface SummaryProps {
  correctAnswers: number;
  totalQuestions: number;
}

const Summary: React.FC<SummaryProps> = ({ correctAnswers, totalQuestions }) => {
  const percentage = (correctAnswers / totalQuestions) * 100;

  return (
    <div className="summary-container">
      <h2 className="summary-title">Resumen del Examen</h2>
      <p>Preguntas correctas: {correctAnswers}</p>
      <p>Preguntas erradas: {totalQuestions - correctAnswers}</p>
      <p>Nota: {percentage.toFixed(2)}%</p>
    </div>
  );
};

export default Summary;
