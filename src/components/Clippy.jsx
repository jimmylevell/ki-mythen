// ============================================================
// CLIPPY — the paperclip guide
// ============================================================

// Mood-responsive feature paths (viewBox 0 0 100 135)
// Big left eye centre (28, 36) — brow floats above at y≈12–17
// Mouth sits below big eye (bottom y=53), centred at x=28
const MOODS = {
    neutral: { brow: 'M14 16 Q28 12 42 16', mouth: 'M17 61 Q28 67 39 61' },
    happy: { brow: 'M14 14 Q28 10 42 14', mouth: 'M16 59 Q28 68 40 59' },
    sad: { brow: 'M14 12 Q28 17 42 14', mouth: 'M17 66 Q28 60 39 66' },
    excited: { brow: 'M14 12 Q28 8  42 12', mouth: 'M15 58 Q28 69 41 58' },
    thinking: { brow: 'M14 15 Q28 13 42 19', mouth: 'M21 62 L35 62' },
}

// ── Message banks ────────────────────────────────────────────

export const CORRECT_MESSAGES = [
    { text: 'Richtig! Du kennst dich wirklich aus! 🎉', mood: 'excited' },
    { text: 'Korrekt! Ich wusste, dass du das schaffst!', mood: 'happy' },
    { text: 'Ausgezeichnet! Voll im Bilde! ⭐', mood: 'excited' },
    { text: 'Genau! Das hast du dir gut gemerkt. 👏', mood: 'happy' },
]

export const INCORRECT_MESSAGES = [
    { text: 'Ups! Das ist ein häufiges Missverständnis. Aber jetzt weisst du Bescheid! 📚', mood: 'thinking' },
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
    if (pct >= 60) return { text: 'Gut gemacht! Mit ein bisschen Übung wirst du bald Expert*in. 📎', mood: 'neutral' }
    if (pct >= 40) return { text: 'Nicht schlecht! Die Erklärungen haben geholfen, oder?', mood: 'thinking' }
    return { text: 'KI ist komplex! Aber jetzt weisst du definitiv mehr als vorher. 📎', mood: 'sad' }
}

// ── SVG character ─────────────────────────────────────────────
//
//  Shape: classic two-loop paperclip viewed straight-on.
//  • Outer loop  – tall rounded-rect, no fill, steel-blue wire stroke
//  • Inner loop  – pill shape nested in the upper ~45 %, no fill
//  • Big  eye    – left side, centre (28, 36), mounted on outer-arc wire
//  • Small eye   – right side, centre (70, 29), on inner-arc wire
//  Wire colour: periwinkle/steel-blue gradient matching original Clippy

function ClippySVG({ mood = 'neutral' }) {
    const { brow, mouth } = MOODS[mood] || MOODS.neutral

    return (
        <svg
            viewBox="0 0 100 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="clippy__svg"
            aria-hidden="true"
        >
            <defs>
                {/* Periwinkle-steel gradient — matches real Clippy colour */}
                <linearGradient id="clip-wire" x1="0" y1="0" x2="0.6" y2="1">
                    <stop offset="0%" stopColor="#d4d8f8" />
                    <stop offset="25%" stopColor="#a8b4e0" />
                    <stop offset="65%" stopColor="#7e90c8" />
                    <stop offset="100%" stopColor="#5060a0" />
                </linearGradient>
                {/* Radial for 3-D eye-socket feel */}
                <radialGradient id="clip-eye" cx="38%" cy="32%" r="60%">
                    <stop offset="0%" stopColor="#f8f8ff" />
                    <stop offset="70%" stopColor="#e8eaf8" />
                    <stop offset="100%" stopColor="#c8ccf0" />
                </radialGradient>
            </defs>

            {/* ══ OUTER WIRE LOOP ══════════════════════════════════════
                Tall pill — no fill — top arch passes through each eye so
                the eyes look mounted on / growing out of the wire.         */}
            <rect
                x="12" y="12" width="76" height="112" rx="38"
                fill="none"
                stroke="url(#clip-wire)" strokeWidth="10"
            />

            {/* ══ INNER WIRE LOOP ══════════════════════════════════════
                Narrower pill in the upper ~45 % — classic double-loop look */}
            <rect
                x="26" y="20" width="48" height="50" rx="24"
                fill="none"
                stroke="url(#clip-wire)" strokeWidth="9"
            />

            {/* ── BIG LEFT EYE  (cx=28, cy=36)
                Outer-wire arch at x=28 is at y≈19 (stroke y 14–24).
                Eye spans y 19–53, wire disappears behind the eye top.      */}
            <ellipse cx="28" cy="36" rx="15" ry="17"
                fill="url(#clip-eye)" stroke="#5060a0" strokeWidth="2" />
            <ellipse cx="29.5" cy="38" rx="9" ry="10.5"
                fill="#18182e" className="clippy__pupil-lg" />
            <circle cx="23.5" cy="30" r="3.8" fill="white" opacity="0.9" />

            {/* ── SMALL RIGHT EYE  (cx=70, cy=29)
                Outer-arc at x=70 is y≈18; inner-arc at x=70 is y≈27.
                Eye spans y 16–42, riding the two overlapping arc wires.    */}
            <ellipse cx="70" cy="29" rx="11" ry="13"
                fill="url(#clip-eye)" stroke="#5060a0" strokeWidth="1.8" />
            <ellipse cx="71" cy="30.5" rx="6.5" ry="8"
                fill="#18182e" className="clippy__pupil-sm" />
            <circle cx="65.5" cy="23" r="2.8" fill="white" opacity="0.9" />

            {/* ── Static brow above small right eye */}
            <path d="M62 16 Q70 11 79 17"
                stroke="#1e1c38" strokeWidth="3.2" strokeLinecap="round" fill="none" />

            {/* ── Mood brow above big left eye */}
            <path d={brow}
                stroke="#1e1c38" strokeWidth="3.8" strokeLinecap="round" fill="none" />

            {/* ── Mouth below big eye */}
            <path d={mouth}
                stroke="#1e1c38" strokeWidth="3" strokeLinecap="round" fill="none" />
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
