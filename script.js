
const questions = [
    {
        "image": false,
        "numb": 4,
        "correct": 0,
        "question": "Was versteht man unter Künstlicher Intelligenz (KI) im einfachsten Sinne?",
        "answer": "Software, die menschliche Denkprozesse wie Lernen und Problemlösung nachahmt.",
        "options": [
            "Software, die menschliche Denkprozesse wie Lernen und Problemlösung nachahmt.",
            "Jede Software, die Daten verarbeitet.",
            "Ein neuer Name für moderne Roboter.",
            "Eine besonders schnelle Form des Internets."
        ]
    },
    {
        "image": false,
        "numb": 4,
        "correct": 0,
        "question": "In welchem Bereich begegnet uns Künstlicher Intelligenz (KI) im Alltag am häufigsten?",
        "answer": "Bei Empfehlungen für Produkte, Musik oder Filme auf Online-Plattformen.",
        "options": [
            "Bei Empfehlungen für Produkte, Musik oder Filme auf Online-Plattformen.",
            "Bei der automatischen Steuerung von Verkehrsampeln in Großstädten.",
            "In allen Taschenrechnern, die wir verwenden.",
            "Als automatisches Kassensystem in jedem Supermarkt."
        ]
    },
    {
        "image": false,
        "numb": 4,
        "correct": 1,
        "question": "Was ist das Hauptziel der Europäischen KI-Verordnung?",
        "answer": "Ein hohes Maß an Sicherheit und die Einhaltung der Grundrechte beim Einsatz von KI zu gewährleisten.",
        "options": [
            "Eine spezielle Steuer auf alle KI-basierten Produkte zu erheben.",
            "Ein hohes Maß an Sicherheit und die Einhaltung der Grundrechte beim Einsatz von KI zu gewährleisten.",
            "Eine einheitliche Programmiersprache für alle zukünftigen KI-Entwicklungen in Europa festzulegen.",
            "Sicherzustellen, dass alle KI-Systeme in der EU Open-Source und kostenlos für jedermann zugänglich sind."
        ]
    },
    {
        "image": false,
        "numb": 4,
        "correct": 3,
        "question": "Die KI-Verordnung teilt KI-Systeme in verschiedene Risikokategorien ein. Welche Kategorie ist am strengsten reguliert?",
        "answer": "Hochrisiko-KI (High-Risk AI)",
        "options": [
            "Minimales Risiko",
            "Geringes Risiko",
            "KI-Systeme ohne Risiko",
            "Hochrisiko-KI (High-Risk AI)"
        ]
    },
    {
        "image": false,
        "numb": 4,
        "correct": 3,
        "question": "Welche Art von KI-Systemen ist im Rahmen der KI-Verordnung verboten, da sie ein inakzeptables Risiko darstellt?",
        "answer": "KI-Systeme zum 'Social Scoring' durch staatliche Stellen (Bewertung der Vertrauenswürdigkeit von Bürgern).",
        "options": [
            "Jede Künstlicher Intelligenz, die Bilder oder Texte generieren kann.",
            "Sämtliche KI-Chatbots, die mit Menschen interagieren.",
            "Künstlicher Intelligenz, die zur Verbesserung von Produktionsprozessen in Fabriken eingesetzt wird.",
            "KI-Systeme zum 'Social Scoring' durch staatliche Stellen (Bewertung der Vertrauenswürdigkeit von Bürgern)."
        ]
    },
    {
        "image": false,
        "numb": 4,
        "correct": 2,
        "question": "Für wen gilt die Europäische KI-Verordnung in erster Linie?",
        "answer": "Anbieter und Nutzer von KI-Systemen, deren Produkte oder Dienste auf dem EU-Markt verwendet werden, auch wenn sie außerhalb der EU sitzen.",
        "options": [
            "Nur für kleine und mittlere Unternehmen (KMU) in der EU.",
            "Nur für staatliche Behörden in den EU-Mitgliedstaaten.",
            "Anbieter und Nutzer von KI-Systemen, deren Produkte oder Dienste auf dem EU-Markt verwendet werden, auch wenn sie außerhalb der EU sitzen.",
            "Alle KI-Entwickler weltweit, unabhängig davon, wo ihre Produkte verwendet werden."
        ]
    },
    {
        "image": false,
        "numb": 4,
        "correct": 1,
        "question": "Welches der folgenden KI-Anwendungsbeispiele wird von der KI-Verordnung typischerweise als 'Hochrisiko-KI' eingestuft?",
        "answer": "Ein KI-System, das über die Kreditwürdigkeit oder den Zugang zu öffentlichen Leistungen von Personen entscheidet.",
        "options": [
            "Ein KI-Tool zur Korrektur von Grammatikfehlern in Texten.",
            "Ein KI-System, das über die Kreditwürdigkeit oder den Zugang zu öffentlichen Leistungen von Personen entscheidet.",
            "Ein KI-gestütztes Videospiel, das die Schwierigkeit dynamisch anpasst.",
            "Ein Spam-Filter im E-Mail-Postfach."
        ]
    },
    {
        "image": false,
        "numb": 4,
        "correct": 2,
        "question": "Was ändert die KI-Verordnung für den Endverbraucher in seinem Alltag?",
        "answer": "KI-Produkte, die ich kaufe (z. B. in Autos oder medizinischen Geräten), müssen sicherer und transparenter sein.",
        "options": [
            "Alle KI-Systeme müssen in der EU entwickelt werden.",
            "Meine Steuererklärung wird ab sofort automatisch von der KI gemacht.",
            "KI-Produkte, die ich kaufe (z. B. in Autos oder medizinischen Geräten), müssen sicherer und transparenter sein.",
            "Ich muss jedes Mal um Erlaubnis fragen, wenn ich ein KI-Tool nutze."
        ]
    },
    {
        "image": false,
        "numb": 4,
        "correct": 0,
        "question": "Welches der folgenden KI-Systeme hat wahrscheinlich ein minimales Risiko und ist daher kaum reguliert?",
        "answer": "Ein Filter, der die Helligkeit und Farbe in Handyfotos automatisch verbessert.",
        "options": [
            "Ein Filter, der die Helligkeit und Farbe in Handyfotos automatisch verbessert.",
            "Ein medizinisches Gerät, das Krankheiten diagnostiziert.",
            "Ein KI-System, das über die Freilassung von Häftlingen entscheidet.",
            "Eine Künstlicher Intelligenz zur Auswahl von Jobkandidaten."
        ]
    },
    {
        "image": false,
        "numb": 4,
        "correct": 1,
        "question": "Was bedeutet die Einstufung 'Verbotene Praktiken' der KI-Verordnung für diese Anwendungen?",
        "answer": "Diese Anwendungen sind in der EU verboten, da sie die Grundwerte der EU untergraben.",
        "options": [
            "Sie müssen speziell gekennzeichnet sein.",
            "Diese Anwendungen sind in der EU verboten, da sie die Grundwerte der EU untergraben.",
            "Sie dürfen nur in Notfällen verwendet werden.",
            "Sie müssen von einem EU-Unternehmen entwickelt werden."
        ]
    },
    {

        "image": true,
        "numb": 2,
        "correct": 1,
        "question": "Welches dieser Bilder ist KI generiert?",
        "options": ["quizImages/quest1-real.png", "quizImages/quest1-fake.png"]

    },
    {

        "image": true,
        "numb": 2,
        "correct": 0,
        "question": "Welches dieser Bilder ist KI generiert?",
        "options": ["quizImages/quest2-fake.png", "quizImages/quest2-real.jpg"]

    },
    {

        "image": true,
        "numb": 2,
        "correct": 1,
        "question": "Welches dieser Bilder ist KI generiert?",
        "options": ["quizImages/quest3-real.jpg", "quizImages/quest3-fake.jpg"]

    }
];

const tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
const crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

/**
 * Handler der alles initialisiert und verwaltet
 */
class Handler{

    constructor() {
        this.questions = this.generateQuestions();
        this.game = null;
        this.questPerGame = 5;

        this.infoBox = document.querySelector(".info_box");
        this.startBtn = this.infoBox.querySelector(".buttons .restart");
        this.exitBtn = this.infoBox.querySelector(".buttons .quit");
        this.quizBox = document.querySelector(".quiz_box");

        this.resultBox = document.querySelector(".result_box");
        this.restartBtn = this.resultBox.querySelector(".buttons .restart");
        this.quitBtn = this.resultBox.querySelector(".buttons .quit");

        this.exitBtn.onclick = () => this.infoBox.classList.remove("activeInfo");
        this.setEvents();
    };

    /**
     * Zufalls Generator für die Fragen
     * @param {number}number Anzahl der Fragen im Spiel
     * @returns {*[]}
     */
    generateSelection(number) {
        let selection = [];
        let max = this.questions.length;
        let output = [];

        for (let i = 0; i < number; i++) {
            // Generiere zufällige Zahl im Bereich 0, Max; Math.random() gibt zahl zwischen 0 und 1 aus
            let n = Math.floor(Math.random() * max);

            if (!selection.includes(n)) {
                selection.push(n);
            } else {
                i--;
            }
        }

        selection.forEach(index => {
            output.push(this.questions[index]);
        });

        return output;
    };

    /**
     * Erstellt Game Instanz und ruft game.start() auf
     */
    startGame() {
        let gameQuestions = this.generateSelection(this.questPerGame);
        let infoBox = document.querySelector(".info_box");

        infoBox.classList.remove("activeInfo")
        this.quizBox.classList.add("activeQuiz");
        this.game = new Game(this, gameQuestions);
        this.game.start();
    };

    /**
     * Mediator Funktion zum Weiterleiten zu Game Instanz
     * @param {boolean}correctly
     */
    questionAnswered(correctly) {
            this.game.handleQuestion(correctly);
    };

    /**
     * Quizbox schließen
     *
     * ruft showResult auf
     */
    finishGame() {
        let score = this.game.getCorrectAnswers();

        this.quizBox.classList.remove("activeQuiz");
        this.showResult(score);
    };

    /**
     * Close quiz and reload window
     */
    finishQuiz() {
        this.game = null;
        window.location.reload();
    };

    /**
     * Funktion zum anzeigen des Result Screens
     * @param {number} score
     */
    showResult(score) {
        //TODO: Score überarbeiten. Ursprüngliches mit 10 Punkten ist vlt nicht so gut

        this.resultBox.classList.add("activeResult");
        const scoreText = this.resultBox.querySelector(".score_text");

        if (score >= 4) {
            scoreText.innerHTML = `<span>Glückwunsch! 🎉 Du hast <p>${score}</p> von <p>${this.questPerGame}</p> Punkten erreicht.</span>`;
        } else if (score >= 3) {
            scoreText.innerHTML = `<span>Gute Leistung! <p>${score}</p> von <p>${this.questPerGame}</p> Punkten.</span>`;
        } else {
            scoreText.innerHTML = `<span>Schade 😐, nur <p>${score}</p> von <p>${this.questPerGame}</p> Punkten.</span>`;
        }
    };

    /**
     * onclick Funktion zum anzeigen der Informationen
     */
    showInfo() {
        this.infoBox.classList.add("activeInfo");
    };

    /**
     * onclick Funktion um das Quiz neu zu starten
     */
    resetQuiz() {
        this.resultBox.classList.remove("activeResult");

        // Setze den nextBtn zurück
        let nxtBtn = this.game.getNextBtn();
        nxtBtn.textContent = "Nächste Frage";
        this.startGame();
    };

    /**
     * Erstellt die Fragen objekte
     * @returns {*[]}
     */
    generateQuestions() {
        let output = [];

        //gehe Questions Json durch und erstelle für jeden Eintrag ein Question Objekt
        for (let i = 0; i < questions.length; i++) {
            let questOptions = questions[i];
            if (questOptions.image) {
                let quest = new ImageQuestion(questOptions, this);
                output.push(quest);
            } else {
                let quest = new Question(questOptions, this);
                output.push(quest);
            }

        }
        console.log(output)
        return output;
    };

    /**
     * Helper Funktion zum verteilen der onclick Funktionen
     */
    setEvents() {
        this.startBtn.onclick = () => this.startGame();
        this.quitBtn.onclick = () => this.finishQuiz();
        this.restartBtn.onclick = () => this.resetQuiz();
    };
}


/**
 * Quiz Instanz
 *
 * Kümmert sich um die Funktionen während ein Quiz läuft
 */
class Game{
    counter;
    counterLine;
    constructor(handler, questions) {
        this.handler = handler;
        this.questions = questions;
        this.nextBtn = document.querySelector("footer .next_btn");
        this.correctlyAnswered = 0;
        this.totalQuestions = this.questions.length;
        this.currQuestion = 0;

        this.nextBtn.onclick = () => this.nextQuestion();
    };

    /**
     * Mediator Funktion
     *
     * Wird aufgerufen, wenn eine Frage beantwortet wird
     *
     * Zählt correctlyAnswered hoch und blendet nextBtn ein
     * @param {boolean} correctly True falls Frage korrekt beantwortet
     */
    handleQuestion(correctly) {

        clearInterval(this.counter);
        clearInterval(this.counterLine);

        // Falls Frage korrekt, zähle this.correctlyAnswered hoch
        if (correctly) {
            this.correctlyAnswered++;
        }

        // Falls letzte Frage: ändere Text zu "Fertig" um
        if (this.currQuestion >= this.totalQuestions - 1) {
            this.nextBtn.textContent = "Fertig";
        }

        this.nextBtn.classList.add("show");

    };

    /**
     * Startet und aktualisiert den Timer in der oberen rechten Ecke
     * @param {number} time Zeit zum beantworten der Fragen
     */
    startTimer(time) {

        let timeText = document.querySelector(".timer .time_left_txt");
        let timeCount = document.querySelector(".timer .timer_sec");
        let timer = time;
        let current = this.questions[this.currQuestion];
        let optionField = current.getOptionList();

        timeCount.textContent = String(timer);
        timeText.textContent = "Zeit";

        // Aktualisiere den Timer
        this.counter = setInterval(() => {
            timer--;
            timeCount.textContent = timer < 10 ? `0${timer}` : timer;

            // wenn Timer abgelaufen ist
            if (timer < 0) {
                let correct = optionField.children[current.getCorrect()];

                // stoppe Timer
                clearInterval(this.counter);
                timeCount.textContent = "00";
                timeText.textContent = "Zeit um";

                // setze Elemente auf disabled
                for (let i = 0; i < current.getNumber(); i++) {
                    optionField.children[i].classList.add("disabled");
                }

                //richtiges Ergebnis einblenden
                correct.classList.add("correct");
                if (!correct.classList.contains("imageOption")) {
                    correct.insertAdjacentHTML("beforeend", tickIconTag);
                }

                this.nextBtn.classList.add("show");
            }
        }, 1000);
    };

    /**
     * Startet die Timer Linie unter dem Titel
     */
    startTimerLine() {
        //TODO: Linie gleich mit Zeit laufen lassen: Linie hört nach 28/29 Sekunden auf

        // Momentane Breite der Anzeige Linie
        let width = 0;
        let timeLine = document.querySelector("header .time_line");

        timeLine.style.width = "0px";

        // Aktualisieren der Linie
        this.counterLine = setInterval(() => {
            width += 1;
            timeLine.style.width = `${width}px`;

            if (width > 549) {
                clearInterval(this.counterLine);
            }
        }, 58);
    };

    /**
     * Funktion um den Rundenstand unten Links zu aktualisieren
     */
    updateCounter() {
        let questionCounter =  document.querySelector("footer .total_que");
        questionCounter.innerHTML = `<span><p>${this.currQuestion + 1}</p> von <p>${this.questions.length}</p></span>`;
    };

    /**
     * Funktion zum anzeigen der nächsten Fragen
     *
     * ruft handler.finishGame auf wenn letzte Frage beantwortet wurde
     */
    nextQuestion() {

        // "Nächste Frage" Knopf ausblenden
        this.nextBtn.classList.remove("show");

        // Checke ob Frage letzte Frage ist
        if (this.currQuestion < this.totalQuestions - 1) {

            this.currQuestion++;

            this.updateCounter();
            this.questions[this.currQuestion].show();

            this.startTimer(60);
            this.startTimerLine();

        } else {

            // Beende Quiz
            this.handler.finishGame();
        }
    };

    /**
     *Funktion zum anzeigen der ersten Frage
     *
     * Syntax ähnlich wie bei nextQuestion
     */
    start() {
        this.updateCounter();
        this.questions[this.currQuestion].show();
        this.nextBtn.classList.remove("show");

        this.startTimer(60);
        this.startTimerLine();
    }

    /**getter Funktion für this.correctlyAnswered*/
    getCorrectAnswers() {
        return this.correctlyAnswered;
    };

    /**getter Funktion für this.nextBtn*/
    getNextBtn() {
        return this.nextBtn;
    };
}


/**
 * Fragen Klasse
 *
 * Enthält Funktionalität zum anzeigen von Fragen sowie für das Auswählen dieser
 *
 * Fragen werden vom Handler erstellt
 * */
class Question{

    constructor(options, handler) {
        this.handler = handler;

        // options ist die Json mit den Fragen
        this.number = options.numb | null;
        this.correct = options.correct;
        this.question = options.question;
        this.answer = options.answer;
        this.options = options.options;

        this.questionElement = document.querySelector(".que_text");
        this.optionList = document.querySelector(".option_list");
    };

    /**
     *onclick Funktion der Auswahloptionen
     *
     * setzt die Elemente von optionList auf disabled und gibt der Richtigen antwort und ggf. der falschen
     * die dazugehörigen Klassen
     *
     * ruft die Mediator-Funktion handler.questionAnswered auf
     */
    optionSelected(option){

        // fängt Problem von this.show() ab
        if (option.nodeName === "SPAN") {
            option = option.parentElement;
        }

        // Setze Elemente auf disabled
        for (let i = 0; i < this.number; i++) {
            this.optionList.children[i].classList.add("disabled");
        }

        // kontrolliere Antwort und vergebe Klassen
        if (option.textContent.trim() === this.answer) {
            this.optionList.children[this.correct].classList.add("correct");
            option.insertAdjacentHTML("beforeend", tickIconTag);
            this.handler.questionAnswered(true);

        } else {
            option.classList.add("incorrect");
            option.insertAdjacentHTML("beforeend", crossIconTag);
            this.optionList.children[this.correct].classList.add("correct");
            this.optionList.children[this.correct].insertAdjacentHTML("beforeend", tickIconTag);
            this.handler.questionAnswered(false);
        }
    };

    /**
    * Funktion zum anzeigen der Frage Optionen
     *
    * setzt ebenfalls die onClick Eventfunktion
     *
    * WICHTIG!!!: das onclick hier kann aus irgendwelchen gründen das Child element zurück geben, kp wieso
    * */
    show() {
        this.questionElement.innerHTML = `<span>${this.question}</span>`;
        this.optionList.innerHTML = this.options
            .map(option => `<div class="option"><span>${option}</span></div>`)
            .join("");

        const option = this.optionList.querySelectorAll(".option");
        option.forEach(opt => {
            opt.onclick = (e) => this.optionSelected(e.target);
            });
    };

    /**getter Funktion für this.optionList*/
    getOptionList() {
        return this.optionList;
    };

    /**getter Funktion für this.number*/
    getNumber() {
        return this.number;
    };

    /**getter Funktion für this.correct*/
    getCorrect() {
        return this.correct;
    };
}


class ImageQuestion extends Question {

    constructor(options, handler) {
        super(options, handler);
    };

    show() {

        //TODO: correctly size image; add red/green border for false/correct answer
        this.questionElement.innerHTML = `<span>${this.question}</span>`;
        this.optionList.innerHTML = this.options
            .map(option => `<div class="imageOption"><img src=${option} alt="fehler"></div>`)
            .join("");

        const option = this.optionList.querySelectorAll(".imageOption");
        option.forEach(opt => {
            opt.onclick = (e) => this.optionSelected(e.target);
        });
    }

    optionSelected(option) {

        if (option.nodeName === "IMG") {
            option = option.parentElement;
        }

        let correct = this.optionList.children[this.correct];

        // Setze Elemente auf disabled
        for (let i = 0; i < this.number; i++) {
            this.optionList.children[i].classList.add("disabled");
        }

        if (option.isEqualNode(correct)) {
            option.classList.add("correct");
            this.handler.questionAnswered(true);
        } else {
            option.classList.add("imageFalse");
            correct.classList.add("correct");
            this.handler.questionAnswered(false);
        }

    }
}


let handler = new Handler();

let initButton = document.querySelector(".start_btn button");
initButton.onclick = () => handler.showInfo();
