// ============================================================
// CLIPPY — the paperclip guide
// ============================================================

// Mood configs: eyebrow path + mouth path (coords relative to new 80×122 viewBox)
const MOODS = {
    neutral: { brow: 'M43 67 Q54 63 65 67', mouth: 'M47 101 Q54 105 61 101' },
    happy: { brow: 'M43 65 Q54 60 65 65', mouth: 'M46 99 Q54 107 62 99' },
    sad: { brow: 'M43 65 Q54 70 65 66', mouth: 'M46 105 Q54 99 62 105' },
    excited: { brow: 'M43 62 Q54 57 65 62', mouth: 'M45 98 Q54 107 63 98' },
    thinking: { brow: 'M43 66 Q54 63 65 66', mouth: 'M49 102 L59 102' },
}

// ── Message banks ────────────────────────────────────────────

export const CORRECT_MESSAGES = [
    { text: 'Richtig! Du kennst dich wirklich aus! 🎉', mood: 'excited' },
    { text: 'Korrekt! Ich wusste, dass du das schaffst!', mood: 'happy' },
    { text: 'Ausgezeichnet! Voll im Bilde! ⭐', mood: 'excited' },
    { text: 'Genau! Das hast du dir gut gemerkt. 👏', mood: 'happy' },
]

export const INCORRECT_MESSAGES = [
    { text: 'Ups! Das ist ein häufiges Missverständnis. Aber jetzt weißt du Bescheid! 📚', mood: 'thinking' },
    { text: 'Knapp daneben! Lies die Erklärung – sie hilft wirklich.', mood: 'sad' },
    { text: 'Fast! Selbst KI-Experten werden manchmal überrascht.', mood: 'neutral' },
    { text: 'Kein Problem! Daraus lernt man am meisten. 📎', mood: 'sad' },
]

export const WELCOME_MESSAGE = {
    text: 'Hallo! Es sieht aus, als würdest du etwas über KI-Mythen lernen wollen. Soll ich dich begleiten? 📎',
    mood: 'excited',
}

export function getResultClippyMessage(pct) {
    if (pct === 100) return { text: '100 %! Wow – du brauchst mich gar nicht mehr. 🏆', mood: 'excited' }
    if (pct >= 80) return { text: 'Super! Du kennst die Welt der KI wirklich gut!', mood: 'happy' }
    if (pct >= 60) return { text: 'Gut gemacht! Mit ein bisschen Übung wirst du bald Expertin. 📎', mood: 'neutral' }
    if (pct >= 40) return { text: 'Nicht schlecht! Die Erklärungen haben geholfen, oder?', mood: 'thinking' }
    return { text: 'KI ist komplex! Aber jetzt weißt du definitiv mehr als vorher. 📎', mood: 'sad' }
}

// ── SVG character ─────────────────────────────────────────────

function ClippySVG({ mood = 'neutral' }) {
    const { brow, mouth } = MOODS[mood] || MOODS.neutral

    return (
        <svg
            viewBox="0 0 80 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="clippy__svg"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="clippy-metal" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8fa0b0" />
                    <stop offset="38%" stopColor="#dae4ec" />
                    <stop offset="65%" stopColor="#b8c8d5" />
                    <stop offset="100%" stopColor="#7a8f9e" />
                </linearGradient>
            </defs>

            {/* ── Body: outer large loop with subtle fill so eyes sit on a solid surface ── */}
            <rect x="8" y="5" width="64" height="112" rx="32"
                fill="#172030"
                stroke="url(#clippy-metal)" strokeWidth="6" />

            {/* ── Inner smaller loop — ONLY in the top section, clear of the face ── */}
            <rect x="16" y="13" width="48" height="32" rx="16"
                fill="none"
                stroke="url(#clippy-metal)" strokeWidth="5.5" />

            {/* ── Subtle body shine ── */}
            <path d="M22 45 Q19 75 22 105"
                stroke="rgba(255,255,255,0.07)" strokeWidth="4" strokeLinecap="round" />

            {/* ── Small upper-left eye (well below the inner loop) ── */}
            <ellipse cx="26" cy="60" rx="8" ry="9.5"
                fill="white" stroke="#5a6e80" strokeWidth="1.5" />
            <ellipse cx="27" cy="61.5" rx="4.5" ry="5.5"
                fill="#1a2030" className="clippy__pupil-sm" />
            <circle cx="24" cy="57.5" r="2" fill="white" />

            {/* ── Big lower-right eye ── */}
            <ellipse cx="54" cy="84" rx="13" ry="15"
                fill="white" stroke="#5a6e80" strokeWidth="1.5" />
            <ellipse cx="55.5" cy="86" rx="7.5" ry="9"
                fill="#1a2030" className="clippy__pupil-lg" />
            <circle cx="50" cy="79" r="2.8" fill="white" />

            {/* ── Eyebrow (above big eye, right side) ── */}
            <path d={brow} stroke="#3a4d60" strokeWidth="2.8" strokeLinecap="round" />

            {/* ── Mouth ── */}
            <path d={mouth} stroke="#3a4d60" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
    )
}

// ── Public component ──────────────────────────────────────────

export default function Clippy({ message, mood = 'neutral' }) {
    return (
        <div className="clippy" role="note" aria-label={message}>
            <div className="clippy__figure">
                <ClippySVG mood={mood} />
            </div>
            {message && (
                <div className="clippy__bubble">{message}</div>
            )}
        </div>
    )
}
