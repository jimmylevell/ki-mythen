import Clippy, { getResultClippyMessage } from './Clippy'

function getScoreMessage(pct) {
  if (pct === 100) return { emoji: '🏆', text: 'Perfektes Ergebnis! Echte KI-Expertin!' }
  if (pct >= 80)  return { emoji: '🎉', text: 'Hervorragend! Du kennst dich wirklich aus.' }
  if (pct >= 60)  return { emoji: '👏', text: 'Gut gemacht! Bleib am Ball.' }
  if (pct >= 40)  return { emoji: '📚', text: 'Nicht schlecht! Da ist noch Luft nach oben.' }
  return              { emoji: '🌱', text: 'KI hat noch viel zu lehren. Versuch es nochmal!' }
}

export default function ResultScreen({ questions, answers, config, onRestart }) {
  // Build a map of questionId → answer
  const answerMap = Object.fromEntries(
    answers.map((a) => [a.questionId, a.answeredIsMyth]),
  )

  const correctCount = questions.filter((q) => answerMap[q.id] === q.isMyth).length
  const incorrectCount = questions.length - correctCount
  const total = questions.length
  const pct = Math.round((correctCount / total) * 100)
  const { emoji, text } = getScoreMessage(pct)

  return (
    <div className="result">
      {/* Score hero */}
      <div className="result__hero">
        <div className="result__score-ring">
          <div className="result__score-text">
            {correctCount}
            <span className="result__score-denom"> / {total}</span>
          </div>
        </div>
        <p className="result__message">
          {emoji} {text}
        </p>
        <p className="result__tagline">
          Du hast {pct} % der Fragen richtig beantwortet.
        </p>
        <div className="result__stats">
          <div className="result__stat result__stat--correct">
            <span className="result__stat-icon">✓</span>
            <span><strong>{correctCount}</strong> richtig</span>
          </div>
          <div className="result__stat result__stat--incorrect">
            <span className="result__stat-icon">✗</span>
            <span><strong>{incorrectCount}</strong> falsch</span>
          </div>
        </div>      </div>

      <Clippy
        message={getResultClippyMessage(pct).text}
        mood={getResultClippyMessage(pct).mood}
      />

      {/* Per-question breakdown */}
      <p className="result__breakdown-title">Fragenübersicht</p>
      <div className="result__breakdown">
        {questions.map((q) => {
          const answeredIsMyth = answerMap[q.id]
          const correct = answeredIsMyth === q.isMyth

          return (
            <div
              key={q.id}
              className={`breakdown-item ${
                correct ? 'breakdown-item--correct' : 'breakdown-item--incorrect'
              }`}
            >
              <span className="breakdown-item__icon">
                {correct ? '✓' : '✗'}
              </span>
              <div className="breakdown-item__body">
                <p className="breakdown-item__statement">{q.statement}</p>
                <div className="breakdown-item__meta">
                  <span
                    className={`breakdown-item__label ${
                      q.isMyth
                        ? 'breakdown-item__label--myth'
                        : 'breakdown-item__label--fact'
                    }`}
                  >
                    {q.isMyth ? '🚫 Mythos' : '✅ Fakt'}
                  </span>
                  {!correct && (
                    <span className="breakdown-item__answer breakdown-item__answer--wrong">
                      Deine Antwort: {answeredIsMyth ? 'Mythos' : 'Fakt'} · Richtig: {q.isMyth ? 'Mythos' : 'Fakt'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Ethical conclusion ── */}
      <div className="conclusion">
        <div className="conclusion__header">
          <span className="conclusion__icon">🧭</span>
          <h2 className="conclusion__title">
            Warum kritisches Denken in der KI-Ära entscheidend ist
          </h2>
        </div>

        <p className="conclusion__intro">
          Dieses Quiz hat gezeigt: Rund um künstliche Intelligenz kursieren zahlreiche Mythen und
          Missverständnisse. Das ist kein Zufall. KI-Systeme sind komplex, ihre Funktionsweise für
          Außenstehende oft undurchsichtig – und die öffentliche Debatte schwankt zwischen blinder
          Euphorie und apokalyptischer Hysterie. Beides macht uns zu schlechten Urteilerinnen und
          Urteilern über eine Technologie, die unsere Gesellschaft grundlegend verändert.
        </p>

        <p className="conclusion__sub">
          Als Nutzerinnen und Nutzer – ob beruflich oder privat – sind wir gefordert, KI weder
          unkritisch zu glorifizieren noch reflexartig abzulehnen. Ein informierter, nüchterner
          Blick ist heute wichtiger denn je:
        </p>

        <ul className="conclusion__list">
          <li>
            <strong>Frage die Quelle.</strong> Wer hat dieses KI-System entwickelt, mit welchen
            Daten wurde es trainiert, und welche wirtschaftlichen oder politischen Interessen stehen
            dahinter? Transparenz ist keine Selbstverständlichkeit – sie ist Grundvoraussetzung für
            begründetes Vertrauen.
          </li>
          <li>
            <strong>Verifiziere Ausgaben.</strong> KI-Systeme halluzinieren – sie erfinden Fakten
            mit scheinbar großer Sicherheit. Wichtige Informationen sollten immer mit unabhängigen
            Quellen abgeglichen werden. Selbstsicherheit im Ton ist kein Beweis für Richtigkeit.
          </li>
          <li>
            <strong>Erkenne Verzerrungen.</strong> KI spiegelt die Vorurteile ihrer Trainingsdaten
            wider. Was ein Modell für „normal“, „richtig“ oder „schön“ hält, ist oft das Abbild
            gesellschaftlicher Ungleichgewichte – und kann diese weiter verfändigen, wenn wir es
            unreflektiert übernehmen.
          </li>
          <li>
            <strong>Hinterfrage den Hype.</strong> Schlagwörter wie „Superintelligenz“, „AGI“
            oder „KI revolutioniert alles“ dienen häufig Marketingzwecken oder politischen Agenden.
            Die technologische Realität ist stets differenzierter und nuancierter als die Schlagzeile.
          </li>
          <li>
            <strong>Denk an die Konsequenzen.</strong> Technologie ist nie neutral. Jede
            KI-Anwendung hat gesellschaftliche, ökologische und ethische Folgen – von der
            Energiebilanz des Trainings bis hin zu Auswirkungen auf Arbeitsmärkte und
            Machtverhältnisse. Diese Folgen müssen mitgedacht werden.
          </li>
          <li>
            <strong>Bleib Mensch.</strong> Empathie, ethisches Urteilen, kreatives Querdenken und
            Verantwortungsgefühl sind Fähigkeiten, die KI bisher nicht replizieren kann. Sie sind
            gerade deshalb in einer zunehmend automatisierten Welt unverzichtbar.
          </li>
        </ul>

        <p className="conclusion__closing">
          KI ist ein Werkzeug – ein außerordentlich leistungsstarkes, das gesellschaftliche
          Prozesse beschleunigt und verändert. Aber Werkzeuge sind nur so gut wie die Menschen,
          die sie einsetzen, gestalten und regulieren. Eine informierte Gesellschaft, die KI
          hinterfragt und einordnet, ist die beste Garantie dafür, dass diese Technologie zum
          Wohl aller genutzt wird – und nicht nur zum Vorteil weniger.
        </p>

        <div className="conclusion__callout">
          Das wichtigste Upgrade in der KI-Ära ist kein Sprachmodell.
          <br />
          Es ist dein kritischer Verstand.
        </div>
      </div>

      <button className="btn-restart" onClick={onRestart}>
        🔄 Nochmal spielen
      </button>
    </div>
  )
}
