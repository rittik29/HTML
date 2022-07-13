const quizDB = [
{
    question:"Which of the following is the most active chemically?",
    a:"Flourine",
    b:"Chlorine",
    c:"Lithium",
    d:"Iodine",
    ans:"ans1"
},
{
    question:"Which among the following is popularly called Hypo?",
    a:"Silver bromide",
    b:"Silver nitrate",
    c:"Sodium thiosulphate",
    d:"Sodium phosphate",
    ans:"ans3"
},
{
    question:"Which among the following is the right location of foramen magnum ?",
    a:"In the Pectoral girdle",
    b:"Interior region of skull",
    c:"Posterior region of skull",
    d:"None of the above",
    ans:"ans3"
},
{
    question:"Which of the following is true of the third law of motion?",
    a:"Action-Reaction pair always acts on the same body",
    b:"They act on different bodies in opposite directions",
    c:"Action-Reaction pairs have the same magnitudes and directions",
    d:"Act on either body at normal to each othe",
    ans:"ans1"
},
{
    question:"Which of the following is true about force?",
    a:"Force is invisible",
    b:"Force can move a body",
    c:"It can deform a body",
    d:"All of the above",
    ans:"ans4"
},
{
    question:"The sum of kinetic energy and potential energy is",
    a:"Mechanical energy",
    b:"Thermal energy",
    c:"Potential energy",
    d:"Kinetic Energy",
    ans:"ans1"
},
{
    question:"What are the various factors affecting kinetic energy?",
    a:"mass",
    b:"velocity",
    c:"momentum",
    d:"all the above",
    ans:"ans4"
},
{
    question:"Objects in motion possess energy and can do work; this energy is called",
    a:"Solar energy",
    b:"Thermal energy",
    c:"Potential energy",
    d:"Kinetic Energy",
    ans:"ans4"
},
{
    question:"The number of compressions or rarefactions per unit time gives",
    a:"Frequency",
    b:"Time period",
    c:"Amplitude",
    d:"Pitch",
    ans:"ans4"
},
{
    question:"Sound waves in air is an example of",
    a:"Longitudinal wave",
    b:"Electromagnetic wave",
    c:"Transverse wave",
    d:"None of the options",
    ans:"ans1"
}
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore =document.querySelector('#showScore');
 
let questionCount =0;
let score=0;
const loadQuestion=() => {
    const questionList =quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText =questionList.a;
    option2.innerText =questionList.b;
    option3.innerText =questionList.c;
    option4.innerText =questionList.d;
};
loadQuestion();

const getCheckAnswer=() => {
    let answer;
    answers.forEach((currAnsElem) => {
     if(currAnsElem.checked){
        answer = currAnsElem.id;
     }
    
    });
    return answer;
};
submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    if(questionCount < quizDB.length)
    {
     loadQuestion();
    }
    else
    {
      
    showScore.innerHTML=`
    <h3> you scored ${score}/${quizDB.length} 👏👏</h3>
    <button class ="btn" onClick="location.reload()">play again /-\</button>
    `;
    showScore.classList.remove('showScore');
    }
});