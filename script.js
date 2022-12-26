let title = document.getElementById("title")
let okButton = document.getElementById("okButton")
let buttons = document.getElementsByClassName("buttons")[0]

let question = document.getElementById("question")
title.style.transform = "translateY(-" + (title.getBoundingClientRect().top + title.offsetHeight) + "px)"
title.style.opacity = 0;
let counter = 0;
let questions = [
    {
        text: "What is the most endangered big cat with estimated numbers of between 2,154 and 3,900 individuals?",
        answers: ["Tiger", "Lion", "Leopard", "Cheetah"],
    },
    {
        text: "How do the snow leopard can use their tails? Like a…",
        answers: ["Scarf", "Fishing rod", "Fifth leg", "Weapon"],
    }
]

function begin() {
    title.style.transform = "rotate(-5deg)";
    okButton.style.opacity = 1;
    title.style.opacity = 1;
}

setTimeout(() => {
    begin()

}, 2000);

function getQuestion() {
    let answers = questions[counter].answers
    for(let a = 3; a >= 0; a--) {
        let randomNumber = Math.floor(Math.random()*(a + 1))
        let slot = answers[a]
        answers[a] = answers[randomNumber]
        answers[randomNumber] = slot
    }
    // console.log(answers);
    for (let b = 0; b < 4; b++) {
        // console.log(b);
        buttons.children[b].innerHTML = answers[b]
    }
    buttons.style.opacity = 0;
    question.innerHTML = questions[counter].text
    counter++
    question.style.opacity = 0;
    setTimeout(() => {
        buttons.style.opacity = 1;
        question.style.opacity = 1;
    }, 300)
}

okButton.onclick = () => {
    title.style.transform = "translateY(-" + (title.getBoundingClientRect().top + title.offsetHeight) + "px)"
    title.style.opacity = 0;
    okButton.style.opacity = 0;
    setTimeout(() => {
        title.style.display = "none";
        okButton.style.display = "none";
        getQuestion()
    }, 300)
}

console.log(title.getBoundingClientRect().top);