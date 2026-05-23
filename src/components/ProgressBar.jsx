export default function ProgressBar({ current, total }) {
    const pct = Math.round((current / total) * 100)

    return (
        <div className="progress-bar-wrap">
            <div className="progress-bar-header">
                <span>
                    Frage <strong>{current}</strong> von {total}
                </span>
                <span>{pct}%</span>
            </div>
            <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
            </div>
        </div>
    )
}
