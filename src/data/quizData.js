// ============================================================
// QUIZ KONFIGURATION — hier anpassen
// ============================================================
export const quizConfig = {
    title: 'KI-Mythen Quiz',
    subtitle: 'Mythos oder Fakt? Teste dein KI-Wissen!',
    description:
        'Künstliche Intelligenz ist von Hype und Missverständnissen umgeben. ' +
        'Kannst du Fakt von Fiktion trennen?',
    /** Fragen bei jedem Durchlauf zufällig sortieren */
    shuffleQuestions: true,
    /** Kategorie-Badge auf jeder Karte anzeigen */
    showCategory: true,
    /** Schwierigkeits-Badge auf jeder Karte anzeigen */
    showDifficulty: true,
};

// ============================================================
// QUIZ-FRAGEN
//
// Jeder Eintrag unterstützt:
//   id          — eindeutige Nummer (erforderlich)
//   statement   — die zu bewertende Aussage (erforderlich)
//   isMyth      — true = Mythos/Irrtum, false = tatsächliche Tatsache (erforderlich)
//   explanation — wird nach der Antwort angezeigt (erforderlich)
//   category    — Themengruppe als Badge
//   difficulty  — "easy" | "medium" | "hard"
//   emoji       — dekoratives Symbol auf der Karte
// ============================================================
export const questions = [
    {
        id: 1,
        statement: 'KI versteht Sprache genauso wie Menschen.',
        isMyth: true,
        explanation:
            'KI „versteht" nicht im menschlichen Sinne – sie trifft Vorhersagen mit Wahrscheinlichkeiten. Anhand des vorherigen Texts (Kontext) macht sie eine fundierte Schätzung, was als Nächstes kommt. Gute Vorhersagen können Verständnis simulieren, aber im Kern steckt alles voller Wahrscheinlichkeiten.',
        category: 'Verständnis',
        difficulty: 'easy',
        emoji: '🧠',
    },
    {
        id: 2,
        statement:
            'Maschinelles Lernen mit „neuronalen Netzen" bedeutet, dass Computer so lernen wie Menschen.',
        isMyth: true,
        explanation:
            'Neuronale Netze sind leistungsstark, aber weit davon entfernt, die Komplexität des menschlichen Gehirns zu erreichen oder menschliche Fähigkeiten nachzuahmen. Der Begriff „neuronal" ist eine biologische Analogie, keine wörtliche Beschreibung.',
        category: 'Lernen',
        difficulty: 'easy',
        emoji: '🕸️',
    },
    {
        id: 3,
        statement: 'KI kopiert einfach ihre Trainingsdaten.',
        isMyth: true,
        explanation:
            'KI speichert keine Trainingsbeispiele wie eine Zwischenablage. Sie speichert Muster als Gewichte (numerische Regler), die beim Training angepasst werden. Auf Anfragen hin erstellt das Modell neue Sequenzen, anstatt zu kopieren. Dennoch bleibt Datenschutz ein Thema – private Trainingsdaten können indirekt auftauchen.',
        category: 'Daten & Datenschutz',
        difficulty: 'medium',
        emoji: '📋',
    },
    {
        id: 4,
        statement: 'KI gibt auf dieselbe Frage immer dieselbe Antwort.',
        isMyth: true,
        explanation:
            'Generative KI basiert auf Wahrscheinlichkeiten, nicht auf vorprogrammierten Skripten. Dieselbe Frage kann unterschiedliche Antworten liefern – je nach Zufälligkeit, Temperatureinstellungen oder kleinen Unterschieden im Prompt. Das ist großartig für Brainstorming – und frustrierend für Konsistenz.',
        category: 'Verhalten',
        difficulty: 'easy',
        emoji: '🎲',
    },
    {
        id: 5,
        statement: 'Größere KI-Modelle sind immer besser.',
        isMyth: true,
        explanation:
            'Größe ist nicht immer besser. Ein riesiges Modell wie GPT-4 mag breit glänzen, aber ein kleineres, spezialisiertes Modell kann es bei einer bestimmten Aufgabe übertreffen – oft zu einem Bruchteil der Kosten und des Energieverbrauchs.',
        category: 'Modelle',
        difficulty: 'medium',
        emoji: '📏',
    },
    {
        id: 6,
        statement: 'KI ist eine neue Technologie.',
        isMyth: true,
        explanation:
            'Obwohl KI heute eine rasante Entwicklung erlebt, existieren ihre grundlegenden Konzepte und Anwendungen seit Jahrzehnten. Das Perzeptron wurde 1958 erfunden, und das Feld hat seitdem mehrere „KI-Winter" und „KI-Frühling" durchlebt.',
        category: 'Geschichte',
        difficulty: 'easy',
        emoji: '📅',
    },
    {
        id: 7,
        statement: 'KI kann kausale Zusammenhänge in Daten identifizieren und beweisen.',
        isMyth: true,
        explanation:
            'KI ist hervorragend darin, Korrelationen zu finden, aber Korrelation ist keine Kausalität. Mustererkennung ist nicht dasselbe wie das Beweisen von Ursache und Wirkung – dafür braucht es sorgfältiges Experimentaldesign und menschliches Urteilsvermögen.',
        category: 'Fähigkeiten',
        difficulty: 'hard',
        emoji: '🔗',
    },
    {
        id: 8,
        statement: 'Moderne KI ist „superintelligent".',
        isMyth: true,
        explanation:
            'Spitzenmodelle übertreffen Menschen in spezifischen Aufgaben, besitzen aber noch nicht das einheitliche, allgemeine Denkvermögen des Menschen. Wir befinden uns noch im Zeitalter der schwachen KI – beeindruckend im eigenen Bereich, unzuverlässig außerhalb davon.',
        category: 'Intelligenz',
        difficulty: 'easy',
        emoji: '🤖',
    },
    {
        id: 9,
        statement: 'KI ist von Natur aus vorurteilsfrei, weil Computer nicht voreingenommen sind.',
        isMyth: true,
        explanation:
            'KI kann menschliche Vorurteile aus Trainingsdaten, algorithmischen Annahmen und Feedback-Schleifen übernehmen und verstärken. Verzerrte Daten rein → verzerrte Ergebnisse raus. Sorgfältige Datensatz-Kuration und kontinuierliche Prüfung sind unerlässlich.',
        category: 'Vorurteile & Fairness',
        difficulty: 'medium',
        emoji: '⚖️',
    },
    {
        id: 10,
        statement: 'KI wird Menschen verdrängen und Callcenter-Jobs definitiv überflüssig machen.',
        isMyth: true,
        explanation:
            'Der Einfluss von KI auf Arbeitsplätze – einschließlich Callcentern – entfaltet sich noch. KI wird viele Rollen verändern, aber das Ausmaß, in dem sie menschliche Arbeit ersetzt oder ergänzt, hängt von Adoptionsraten, Regulierung und gesellschaftlichen Entscheidungen ab. Nur die Zeit wird es zeigen.',
        category: 'Zukunft der Arbeit',
        difficulty: 'medium',
        emoji: '📞',
    },
    {
        id: 11,
        statement: 'KI-Modelle können zu 100 % sicher gemacht werden und sind nicht manipulierbar.',
        isMyth: true,
        explanation:
            'KI-Systeme sind anfällig für Adversarial Attacks, Prompt Injection, Jailbreaks und Modellextraktion. Sicherheit in der KI ist ein aktives und weitgehend ungelöstes Forschungsgebiet – vollständig sichere KI-Systeme gibt es heute nicht.',
        category: 'Sicherheit',
        difficulty: 'hard',
        emoji: '🔐',
    },
    {
        id: 12,
        statement: 'KI-generierter Text ist immer leicht zu erkennen.',
        isMyth: true,
        explanation:
            'Obwohl Erkennungstools existieren, sind sie unzuverlässig und produzieren falsch-positive sowie falsch-negative Ergebnisse. Gut geschriebener KI-Text kann kaum von menschlichem Text unterschieden werden – weshalb KI-Kompetenz und kritisches Denken immer wichtiger werden.',
        category: 'Erkennung',
        difficulty: 'medium',
        emoji: '🔍',
    },
    {
        id: 13,
        statement: 'Aktuelle KI-Systeme sind bewusst oder haben echte Gefühle.',
        isMyth: true,
        explanation:
            'Es gibt keinen wissenschaftlichen Konsens darüber, dass aktuelle KI-Systeme Bewusstsein, subjektives Erleben oder echte Emotionen besitzen. Sie simulieren emotionale Sprache basierend auf Mustern in Trainingsdaten – das ist nicht dasselbe wie Fühlen.',
        category: 'Bewusstsein',
        difficulty: 'easy',
        emoji: '💭',
    },
    // ---- Tatsächliche Fakten (isMyth: false) ----
    {
        id: 14,
        statement: 'Das Training großer KI-Modelle hat einen erheblichen Umwelt-Fußabdruck.',
        isMyth: false,
        explanation:
            'Korrekt – das ist eine echte Tatsache! Das Training großer Sprachmodelle kann enorme Mengen an Energie und Wasser zur Kühlung verbrauchen. Forscher untersuchen zunehmend den CO₂-Fußabdruck von KI und arbeiten an effizienteren Trainingsmethoden.',
        category: 'Umwelt',
        difficulty: 'medium',
        emoji: '🌍',
    },
    {
        id: 15,
        statement: 'KI kann mit großer Selbstsicherheit vollständig falsche Informationen produzieren.',
        isMyth: false,
        explanation:
            'Stimmt! KI-Systeme – insbesondere große Sprachmodelle – können „halluzinieren": falsche Informationen mit großer Überzeugung präsentieren. Deshalb sollte man wichtige KI-Ausgaben stets mit verlässlichen Quellen überprüfen.',
        category: 'Verlässlichkeit',
        difficulty: 'easy',
        emoji: '⚠️',
    },
];
