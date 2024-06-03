const quiz = [
    {
        question: " Q-1 What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]
const que=document.querySelector('.que');
console.log(que);
console.log(que.textContent);
const op1=document.getElementById('lop1');
const op2=document.querySelector('#lop2');
const op3=document.querySelector('#lop3');
const op4=document.querySelector('#lop4');

const btn=document.querySelector('.btn');

let curque=0;
let score=0;


que.textContent=quiz[curque].question;
op1.textContent=quiz[curque].ans1text;
op2.textContent=quiz[curque].ans2text;
op3.textContent=quiz[curque].ans3text;
op4.textContent=quiz[curque].ans4text;

btn.addEventListener('click',()=>{
    const anschk=document.querySelector('input[type="radio"]:checked');
    console.log(anschk);
  
    if(anschk===null)
        {
            alert("please enter an answer");
        }
      else
      {
        if(anschk.nextElementSibling.textContent===quiz[curque].answer)
            {
                score++;
            }

            anschk.checked=false;
            curque++;
      if(curque<quiz.length)
        {
            que.textContent=quiz[curque].question;
op1.textContent=quiz[curque].ans1text;
op2.textContent=quiz[curque].ans2text;
op3.textContent=quiz[curque].ans3text;
op4.textContent=quiz[curque].ans4text;
anschk.checked=false;


        }
        else
        {
            alert("Your Score is "+ score + " out of "+quiz.length);
            // location.reload();

        }
        }
      

})