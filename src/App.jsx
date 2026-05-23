import { useState, useCallback } from 'react'
import Quiz from './components/Quiz'
import WelcomeScreen from './components/WelcomeScreen'
import ResultScreen from './components/ResultScreen'
import { questions as allQuestions, quizConfig } from './data/quizData'

function shuffle(arr) {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
}

export default function App() {
    const [phase, setPhase] = useState('welcome') // 'welcome' | 'quiz' | 'result'
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])

    const startQuiz = useCallback(() => {
        const qs = quizConfig.shuffleQuestions ? shuffle(allQuestions) : allQuestions
        setQuestions(qs)
        setAnswers([])
        setPhase('quiz')
    }, [])

    const handleAnswer = useCallback((questionId, answeredIsMyth) => {
        setAnswers((prev) => [...prev, { questionId, answeredIsMyth }])
    }, [])

    const handleFinish = useCallback(() => {
        setPhase('result')
    }, [])

    const handleRestart = useCallback(() => {
        setPhase('welcome')
    }, [])

    return (
        <div className="app">
            {phase === 'welcome' && (
                <WelcomeScreen
                    config={quizConfig}
                    questionCount={allQuestions.length}
                    onStart={startQuiz}
                />
            )}
            {phase === 'quiz' && (
                <Quiz
                    questions={questions}
                    onAnswer={handleAnswer}
                    onFinish={handleFinish}
                    config={quizConfig}
                />
            )}
            {phase === 'result' && (
                <ResultScreen
                    questions={questions}
                    answers={answers}
                    config={quizConfig}
                    onRestart={handleRestart}
                />
            )}
        </div>
    )
}
