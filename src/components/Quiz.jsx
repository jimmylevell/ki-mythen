import { useState, useCallback } from 'react'
import ProgressBar from './ProgressBar'
import QuestionCard from './QuestionCard'
import Clippy, { CORRECT_MESSAGES, INCORRECT_MESSAGES } from './Clippy'

export default function Quiz({ questions, onAnswer, onFinish, config }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnswered, setIsAnswered] = useState(false)
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(null)

  const currentQuestion = questions[currentIndex]
  const isLast = currentIndex === questions.length - 1

  const handleAnswer = useCallback(
    (questionId, answeredIsMyth) => {
      const correct = answeredIsMyth === currentQuestion.isMyth
      setLastAnswerCorrect(correct)
      onAnswer(questionId, answeredIsMyth)
      setIsAnswered(true)
    },
    [onAnswer, currentQuestion],
  )

  const handleNext = useCallback(() => {
    if (isLast) {
      onFinish()
    } else {
      setCurrentIndex((i) => i + 1)
      setIsAnswered(false)
      setLastAnswerCorrect(null)
    }
  }, [isLast, onFinish])

  const clippyMsg = isAnswered && lastAnswerCorrect !== null
    ? (lastAnswerCorrect ? CORRECT_MESSAGES : INCORRECT_MESSAGES)[
        currentQuestion.id % (lastAnswerCorrect ? CORRECT_MESSAGES : INCORRECT_MESSAGES).length
      ]
    : null

  return (
    <div className="quiz-container">
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <QuestionCard
        key={currentQuestion.id}
        question={currentQuestion}
        showCategory={config.showCategory}
        showDifficulty={config.showDifficulty}
        onAnswer={handleAnswer}
      />

      {clippyMsg && (
        <Clippy message={clippyMsg.text} mood={clippyMsg.mood} />
      )}

      {isAnswered && (
        <button className="btn-next" onClick={handleNext}>
          {isLast ? '🏁 Ergebnisse ansehen' : 'Nächste Frage →'}
        </button>
      )}
    </div>
  )
}
