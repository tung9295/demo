const quizData = [
    {
        question: 'How old is Tung?',
        a: '22',
        b: '23',
        c: '24',
        d: '25',
        correct: 'd'
    }, {
        question: 'Where is Tungs hometown?',
        a: 'Da nang',
        b: 'Ha noi',
        c: 'Ho chi minh',
        d: 'Can tho',
        correct: 'a'
    }, {
        question: '2 + 1 = ?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'c'
    }
]
const questionTextEl = document.getElementById('questionText');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submitBtn')

let currentQuestionNum = 0;
var answer = undefined;
main();
function main() {
    const currentData = quizData[currentQuestionNum];
    var { question, a, b, c, d, correct } = currentData;
    questionTextEl.innerText = question;
    a_text.innerText = a;
    b_text.innerText = b;
    c_text.innerText = c;
    d_text.innerText = d;
}

function getSelected() {
    console.log(111)
    const answerEls = document.querySelectorAll('.answer');
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
            console.log(222)
        } else {
            console.log(333)
        }
    })
}

submit.addEventListener('click', () => {
    
        
        if (currentQuestionNum == quizData.length - 1 ) {
            currentQuestionNum = 0;
        } else {
            currentQuestionNum++;
            getSelected()
        }
        main();
})
















