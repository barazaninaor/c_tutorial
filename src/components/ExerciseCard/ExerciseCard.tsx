import { useState } from "react";
import "./ExerciseCard.css";

interface ExerciseCardProps {
  question: string;
  answer: string;
}

export default function ExerciseCard({ question, answer }: ExerciseCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="exercise-card">
      <div className="exercise-question">
        <h3>{question}</h3>
      </div>

      <button className="toggle-btn" onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>

      {showAnswer && (
        <div className="exercise-answer">
          <pre>
            <code>{answer}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
