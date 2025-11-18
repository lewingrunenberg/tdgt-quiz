
const STARTING_TIME = 60;

const questions = [
    {
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
    }
];

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

let timeValue = STARTING_TIME;
let questionIndex = 0;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

start_btn.onclick = () => {
  info_box.classList.add("activeInfo");
};

exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
};

continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  questionIndex = 0;
  userScore = 0;
  showQuestion(questionIndex);
  clearInterval(counter);
  clearInterval(counterLine);
  timeText.textContent = "Zeit";
  startTimer(STARTING_TIME);
  startTimerLine(0);
  queCounter(questionIndex + 1);
};

next_btn.onclick = () => {
  if (questionIndex < questions.length - 1) {
    questionIndex++;
    showQuestion(questionIndex);
    queCounter(questionIndex + 1);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(STARTING_TIME);
    startTimerLine(0);
    timeText.textContent = "Zeit";
    next_btn.classList.remove("show");
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    showResult();
  }
};

// Umgesetzt in Klasse Question
function showQuestion(index) {
  const que_text = document.querySelector(".que_text");
  const question = questions[index];
  que_text.innerHTML = `<span>${question.question}</span>`;
  option_list.innerHTML = question.options
    .map(option => `<div class="option"><span>${option}</span></div>`)
    .join("");

  const option = option_list.querySelectorAll(".option");
  option.forEach(opt => opt.setAttribute("onclick", "optionSelected(this)"));
}

const tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
const crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  const userAns = answer.textContent.trim();
  const correctAns = questions[questionIndex].answer;
  const allOptions = option_list.children.length;

  if (userAns === correctAns) {
    userScore += 1;
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", tickIconTag);
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", crossIconTag);
    for (let i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent.trim() === correctAns) {
        option_list.children[i].classList.add("correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
      }
    }
  }

  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
  }
  next_btn.classList.add("show");
}

function showResult() {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box.classList.add("activeResult");
  const scoreText = result_box.querySelector(".score_text");

  if (userScore >= 8) {
    scoreText.innerHTML = `<span>Glückwunsch! 🎉 Du hast <p>${userScore}</p> von <p>${questions.length}</p> Punkten erreicht.</span>`;
  } else if (userScore >= 5) {
    scoreText.innerHTML = `<span>Gute Leistung! <p>${userScore}</p> von <p>${questions.length}</p> Punkten.</span>`;
  } else {
    scoreText.innerHTML = `<span>Schade 😐, nur <p>${userScore}</p> von <p>${questions.length}</p> Punkten.</span>`;
  }
}

function startTimer(time) {
  clearInterval(counter);
  timeValue = time;
  timeCount.textContent = timeValue;
  timeText.textContent = "Zeit";
  counter = setInterval(() => {
    timeValue--;
    timeCount.textContent = timeValue < 10 ? `0${timeValue}` : timeValue;

    if (timeValue < 0) {
      clearInterval(counter);
      timeCount.textContent = "00";
      timeText.textContent = "Zeit um";
      const correctAns = questions[questionIndex].answer;
      const allOptions = option_list.children.length;
      for (let i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent.trim() === correctAns) {
          option_list.children[i].classList.add("correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
        }
        option_list.children[i].classList.add("disabled");
      }
      next_btn.classList.add("show");
    }
  }, 1000);
}

function startTimerLine(time) {
  clearInterval(counterLine);
  widthValue = time;
  time_line.style.width = `${widthValue}px`;
  counterLine = setInterval(() => {
    widthValue += 1;
    time_line.style.width = `${widthValue}px`;
    if (widthValue > 549) {
      clearInterval(counterLine);
    }
  }, 58);
}

function queCounter(index) {
  bottom_ques_counter.innerHTML = `<span><p>${index}</p> von <p>${questions.length}</p></span>`;
}

// Restart handling
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = () => {
  result_box.classList.remove("activeResult");
  quiz_box.classList.add("activeQuiz");
  questionIndex = 0;
  userScore = 0;
  clearInterval(counter);
  clearInterval(counterLine);
  startTimer(STARTING_TIME);
  startTimerLine(0);
  showQuestion(questionIndex);
  queCounter(questionIndex + 1);
  timeText.textContent = "Zeit";
  next_btn.classList.remove("show");
};

quit_quiz.onclick = () => {
  window.location.reload();
};


class Handler{
    constructor() {

    }


}

class Game{
    constructor() {

    }
}

class Question{

    constructor(options, handler) {
        this.handler = handler;

        this.number = options.numb;
        this.correct = options.correct;
        this.question = options.question;
        this.answer = options.answer;
        this.options = options.options;

        this.questionElement = document.querySelector(".que_text");
        this.optionList = document.querySelector(".option_list");

    };

    optionSelected(option){
        for (let i = 0; i < this.number; i++) {
            this.optionList.children[i].classList.add("disabled");
        }

        if (option.textContent.trim() === this.answer) {
            option.classList.add("correct");
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

    show() {
        this.questionElement.innerHTML = `<span>${this.question}</span>`;
        this.optionList.innerHTML = this.options
            .map(option => `<div class="option"><span>${option}</span></div>`)
            .join("");

        const option = option_list.querySelectorAll(".option");
        option.forEach(opt => {
            opt.addEventListener("onclick", (e) => {
                this.optionSelected(e.target)
            })

        });
    };

}
