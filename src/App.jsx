import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 1,
    question: "Who is Harry Potter's best friend?",
    answer: "Ron Weasley",
  },
  {
    id: 2,
    question:
      "What is the name of the school attended by Harry Potter and his friends?",
    answer: "Hogwarts School of Witchcraft and Wizardry",
  },
  {
    id: 3,
    question:
      "Who is the headmaster of Hogwarts during Harry Potter's time at the school?",
    answer: "Albus Dumbledore",
  },
  {
    id: 4,
    question:
      "What is the name of the dark wizard who killed Harry Potter's parents?",
    answer: "Lord Voldemort",
  },
  {
    id: 5,
    question:
      "What is the name of the sport played on flying broomsticks in the Harry Potter series?",
    answer: "Quidditch",
  },
  {
    id: 6,
    question: "What is the name of Harry Potter's owl?",
    answer: "Hedwig",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
          onClick={() => handleClick(question.id)}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
