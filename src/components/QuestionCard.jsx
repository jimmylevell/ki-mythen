import { useState } from 'react'

const DIFFICULTY_LABEL = { easy: 'leicht', medium: 'mittel', hard: 'schwer' }

export default function QuestionCard({ question, showCategory, showDifficulty, onAnswer }) {
  const [selected, setSelected] = useState(null) // null | 'myth' | 'fact'

  const isAnswered = selected !== null
  const userSaidMyth = selected === 'myth'
  const isCorrect = isAnswered && userSaidMyth === question.isMyth

  function handleSelect(choice) {
    if (isAnswered) return
    setSelected(choice)
    onAnswer(question.id, choice === 'myth')
  }

  return (
    <div
      className={[
        'question-card',
        isAnswered ? (isCorrect ? 'question-card--correct' : 'question-card--incorrect') : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Meta badges */}
      {(showCategory || showDifficulty) && (
        <div className="question-card__meta">
          {showCategory && (
            <span className="badge badge--category">
              {question.emoji} {question.category}
            </span>
          )}
          {showDifficulty && (
            <span className={`badge badge--${question.difficulty}`}>
              {DIFFICULTY_LABEL[question.difficulty]}
            </span>
          )}
        </div>
      )}

      {/* Statement */}
      <p className="question-card__statement">{question.statement}</p>

      {/* Answer buttons or reveal */}
      {!isAnswered ? (
        <div className="answer-buttons">
          <button className="btn-myth" onClick={() => handleSelect('myth')}>
            🚫 Mythos
          </button>
          <button className="btn-fact" onClick={() => handleSelect('fact')}>
            ✅ Fakt
          </button>
        </div>
      ) : (
        <div
          className={`answer-reveal ${
            isCorrect ? 'answer-reveal--correct' : 'answer-reveal--incorrect'
          }`}
        >
          <div className="answer-reveal__header">
            <span className="answer-reveal__verdict">
              {isCorrect ? '✓ Richtig!' : '✗ Leider falsch!'}
            </span>
            <span
              className={`answer-reveal__truth-label ${
                question.isMyth
                  ? 'answer-reveal__truth-label--myth'
                  : 'answer-reveal__truth-label--fact'
              }`}
            >
              {question.isMyth ? '🚫 Mythos' : '✅ Fakt'}
            </span>
          </div>
          <p className="answer-reveal__explanation">{question.explanation}</p>
        </div>
      )}
    </div>
  )
}
