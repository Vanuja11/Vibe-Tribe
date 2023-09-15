const quizData = [
    {
        question: "Who is the most streamed artist of 2022?",
        a: "Bad Bunny",
        b: "Taylor Swift",
        c: "Drake",
        d: "The Weeknd",
        correct: "a",
    },
    {
        question: "What is the most streamed Album Globally 2022?",
        a: "Plant Her by Doja Cat",
        b: "SOUR by Olivia Rodrigo",
        c: "Harry's House by Harry Styles",
        d: "Un Verano Sin Ti by Bad Bunny",
        correct: "d",
    },
    {
        question: "What singer has had a Billboard No.1 in last 4 decades?",
        a: "Drake",
        b: "Eminem",
        c: "Mariah Carey",
        d: "Dr.Dre",
        correct: "c",
    },
    {
        question: "Who won most Grammys?",
        a: "Kendrik Lamar",
        b: "Beyonce",
        c: "The Weeknd",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Where is the group 5 Seconds of Summer from??",
        a: "Australia",
        b: "USA",
        c: "UK",
        d: "GERMANY",
        correct: "a",
    },
    {
        question: "What city is the Rock and Roll Hall of Fame located in??",
        a: "Cleaveland",
        b: "New York",
        c: "Las Vegas",
        d: "Texas",
        correct: "a",
    },
    {
        question: "Mick Jagger is the lead singer of what popular rock band??",
        a: "Slip Knot",
        b: "Linkin Park",
        c: "The rolling stones",
        d: "Beatles",
        correct: "c",
    },
    {
        question: "What female pop singer went on to become a billionaire with her cosmetics brand, Fenty Beauty??",
        a: "Lady Gaga",
        b: "Rihanna",
        c: "Beyonce",
        d: "Taylor Swift",
        correct: "b",
    },
    {
        question: "What popular singer joined Anderson .Paak to form the musical super duo, Silk Sonic??",
        a: "Adam Levine",
        b: "Taylor Swift",
        c: "Drake",
        d: "Bruno Mars",
        correct: "d",
    },
    {
        question: "What band had the first music video on MTV??",
        a: "The Buggles",
        b: "Linkin Park",
        c: "XO",
        d: "Queen",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const timerEl = document.getElementById('timer')

let currentQuiz = 0
let score = 0
let questionTimer = 15 // timer in seconds for each question
let countdown

loadQuiz()

function loadQuiz() {

    resetTimer()
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    startTimer()
}

function resetTimer() {
    questionTimer = 15
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function startTimer() {
    timerEl.innerText = questionTimer
    countdown = setInterval(() => {
        if (questionTimer > 0) {
            questionTimer--
            timerEl.innerText = questionTimer
        } else {
            clearInterval(countdown)
            currentQuiz++

            if(currentQuiz < quizData.length) {
                loadQuiz()
            } else {
                quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
                `
            }
        }
    }, 1000)
}

submitBtn.addEventListener('click', () => {
    clearInterval(countdown)

    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
