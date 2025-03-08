import { useState } from 'react'
import './App.css'

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cards] = useState([
    {
      id: 1,
      question: "What does CPU stand for?",
      answer: "Central Processing Unit",
      difficulty: "easy",
      
    },
    {
      id: 2,
      question: "Who is considered the father of modern computer science?",
      answer: "Alan Turing",
      difficulty: "medium",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/330px-Alan_Turing_Aged_16.jpg"
    },
    {
      id: 3,
      question: "What is the name of the first electronic general-purpose computer?",
      answer: "ENIAC",
      difficulty: "hard",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/ENIAC_Penn1.jpg/330px-ENIAC_Penn1.jpg"
    },
    {
      id: 4,
      question: "What does RAM stand for?",
      answer: "Random Access Memory",
      difficulty: "easy",
      
    },
    {
      id: 5,
      question: "What does HTTP stand for?",
      answer: "Hypertext Transfer Protocol",
      difficulty: "medium",
      image: "https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_1280.jpg"
    },
    {
      id: 6,
      question: "Who developed the Linux kernel?",
      answer: "Linus Torvalds",
      difficulty: "medium",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/330px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg"
    },
    {
      id: 7,
      question: "What year was the World Wide Web invented, and by whom?",
      answer: "1989 by Tim Berners-Lee",
      difficulty: "hard",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg/330px-Sir_Tim_Berners-Lee_%28cropped%29.jpg"
    },
    {
      id: 8,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      difficulty: "easy",
      
    },
    {
      id: 9,
      question: "Who cofounded Microsoft alongside Bill Gates?",
      answer: "Paul Allen",
      difficulty: "medium",
      
    },    
    {
      id: 10,
      question: "What is the smallest unit of measurement in a computer?",
      answer: "Bit",
      difficulty: "easy",
      
    }
  ]);
  
  

  const handlePrevCard = () => {
    // Get previous card or wrap around to the end if at the beginning
    const newIndex = currentCardIndex === 0 
      ? cards.length - 1 
      : currentCardIndex - 1;
    
    setCurrentCardIndex(newIndex);
    setIsFlipped(false);
  };
  
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    // Get a random card index different from the current one
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cards.length);
    } while (newIndex === currentCardIndex && cards.length > 1);
    
    setCurrentCardIndex(newIndex);
    setIsFlipped(false);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Computer Science Trivia</h1>
        <p>Test your knowledge of computer science with these trivia questions!</p>
        <p className="card-count">Number of cards: {cards.length}</p>
      </div>
      

      <div className="card-container">
  <div 
    className={`card ${isFlipped ? 'flipped' : ''} difficulty-${cards[currentCardIndex].difficulty}`} 
    onClick={handleCardClick}
  >
    <div className="difficulty-badge">{cards[currentCardIndex].difficulty}</div>
    <div className="card-content question-side">
      {cards[currentCardIndex].image && (
        <div className="card-image">
          <img src={cards[currentCardIndex].image} alt="Question visual" />
        </div>
      )}
      <p className="question">{cards[currentCardIndex].question}</p>
    </div>


    <div className="card-content answer-side">
      {cards[currentCardIndex].image && (
        <div className="card-image">
          <img src={cards[currentCardIndex].image} alt="Question visual" />
        </div>
      )}
      <p className="answer">{cards[currentCardIndex].answer}</p>
    </div>
  </div>
</div>


      <div className="buttons">
      <button className="prev-btn" onClick={handlePrevCard}>←</button>
        <button className="next-btn" onClick={handleNextCard}>→</button>
      </div>
    </div>
  );
}

export default App;
