"use client";

import React, { useState } from "react";
import Question from "@/Components/Question";
import Timer from "@/Components/Timer";
import Summary from "@/Components/Summary";

interface QuestionType {
  question: string;
  options: string[];
  correctAnswer: string;
}

const initialQuestions: QuestionType[] = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["Madrid", "París", "Londres", "Roma"],
    correctAnswer: "París",
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    options: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
    correctAnswer: "Amazonas",
  },
  {
    question: "¿En qué año llegó el hombre a la Luna?",
    options: ["1969", "1971", "1965", "1973"],
    correctAnswer: "1969",
  },
  {
    question: "¿Cuál es el océano más grande del mundo?",
    options: ["Atlántico", "Índico", "Pacífico", "Ártico"],
    correctAnswer: "Pacífico",
  },
  {
    question: "¿Cuál es el resultado de 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    question: "¿Quién escribió la obra 'Don Quijote de la Mancha'?",
    options: ["Miguel de Cervantes", "Gabriel García Márquez", "Federico García Lorca", "Jorge Luis Borges"],
    correctAnswer: "Miguel de Cervantes",
  },
  {
    question: "¿En qué país se encuentra la Gran Muralla China?",
    options: ["Japón", "China", "India", "Corea del Sur"],
    correctAnswer: "China",
  },
  {
    question: "¿Cuál es la montaña más alta del mundo?",
    options: ["Everest", "K2", "Aconcagua", "Mont Blanc"],
    correctAnswer: "Everest",
  },
  {
    question: "¿Quién pintó la obra 'La última cena'?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "¿Cuál es el metal más caro del mundo?",
    options: ["Platino", "Oro", "Rodio", "Paladio"],
    correctAnswer: "Rodio",
  },
  {
    question: "¿Quién fue el primer presidente de Estados Unidos?",
    options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
    correctAnswer: "George Washington",
  },
  {
    question: "¿En qué año comenzó la Segunda Guerra Mundial?",
    options: ["1939", "1941", "1945", "1935"],
    correctAnswer: "1939",
  },
  {
    question: "¿Cuál es el planeta más grande del Sistema Solar?",
    options: ["Júpiter", "Saturno", "Neptuno", "Urano"],
    correctAnswer: "Júpiter",
  },
  {
    question: "¿Quién escribió 'Romeo y Julieta'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "¿Cuál es el idioma más hablado en el mundo?",
    options: ["Español", "Inglés", "Mandarín", "Hindi"],
    correctAnswer: "Mandarín",
  },
  {
    question: "¿Quién fue el primer ser humano en el espacio?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
    correctAnswer: "Yuri Gagarin",
  },
  {
    question: "¿Cuál es la bebida más consumida en el mundo después del agua?",
    options: ["Café", "Té", "Refresco de cola", "Jugo de naranja"],
    correctAnswer: "Té",
  },
  {
    question: "¿En qué país se originó el sushi?",
    options: ["China", "Japón", "Corea", "Tailandia"],
    correctAnswer: "Japón",
  },
  {
    question: "¿Cuál es el animal más rápido del mundo?",
    options: ["Leopardo", "Guepardo", "Águila", "Tiburón"],
    correctAnswer: "Guepardo",
  },
  {
    question: "¿En qué continente se encuentra el río Amazonas?",
    options: ["África", "Asia", "América del Sur", "Europa"],
    correctAnswer: "América del Sur",
  },
];

const App: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionType[]>(initialQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(initialQuestions.length).fill(""));
  const [showSummary, setShowSummary] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
  };

  const handleSkip = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    if (answers.every(answer => answer !== "")) {
      setShowSummary(true);
    } else {
      alert("Por favor, responda todas las preguntas antes de enviar.");
    }
  };

  const handleTimeUp = () => {
    setShowSummary(true);
  };

  const correctAnswers = answers.reduce((count, answer, index) => {
    return answer === questions[index].correctAnswer ? count + 1 : count;
  }, 0);

  return (
    <div>
      {!showSummary ? (
        <>
          <Timer duration={1800} onTimeUp={handleTimeUp} />
          <Question
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            selectedAnswer={answers[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onSkip={handleSkip}
            onPrev={handlePrev}
            onSubmit={handleSubmit}
          />
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button onClick={handleSkip} disabled={currentQuestionIndex === questions.length - 1}>
              Siguiente
            </button>
            {currentQuestionIndex > 0 && (
              <button onClick={handlePrev} style={{ marginLeft: "10px" }}>
                Retroceder
              </button>
            )}
            <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
              Enviar
            </button>
          </div>
        </>
      ) : (
        <Summary correctAnswers={correctAnswers} totalQuestions={questions.length} />
      )}
    </div>
  );
};

export default App;
