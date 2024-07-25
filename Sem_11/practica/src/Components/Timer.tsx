import React, { useEffect, useState } from "react";

interface TimerProps {
  duration: number;
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [startTime] = useState(new Date());
  const endTime = new Date(startTime.getTime() + duration * 1000);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onTimeUp]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const formatDateTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="timer-container">
      <p>Hora de inicio: {formatDateTime(startTime)}</p>
      <p>Hora de finalización: {formatDateTime(endTime)}</p>
      <p>Tiempo restante: {formatTime(timeLeft)}</p>
    </div>
  );
};

export default Timer;
