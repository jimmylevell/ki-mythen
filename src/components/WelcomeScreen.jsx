import Clippy, { WELCOME_MESSAGE } from './Clippy'

export default function WelcomeScreen({ config, questionCount, onStart }) {
    return (
        <div className="welcome">
            <span className="welcome__icon">🤖</span>
            <h1 className="welcome__title">{config.title}</h1>
            <p className="welcome__subtitle">{config.subtitle}</p>

            <div className="welcome__card">
                <p className="welcome__description">{config.description}</p>
                <div className="welcome__stats">
                    <div className="welcome__stat">
                        <span>📝</span>
                        <span>
                            <strong>{questionCount}</strong> Fragen
                        </span>
                    </div>
                    <div className="welcome__stat">
                        <span>🚫</span>
                        <span>Mythos oder <strong>✅ Fakt?</strong></span>
                    </div>
                    <div className="welcome__stat">
                        <span>⚡</span>
                        <span>Kein Backend — <strong>läuft offline</strong></span>
                    </div>
                </div>
            </div>

            <Clippy message={WELCOME_MESSAGE.text} mood={WELCOME_MESSAGE.mood} />

            <button className="btn-start" onClick={onStart}>
                Quiz starten →
            </button>
        </div>
    )
}
